import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type MarqueeLogo = { name: string; logo: string };

type Props = {
  logos: MarqueeLogo[];
  speed?: number; // px per second
  hoverSpeed?: number; // px per second on hover
  logoHeight?: number;
  gap?: number;
  grayscale?: boolean;
  pauseOnClick?: boolean;
  nudgeStep?: number; // px to move per arrow click
};

export function LogoMarquee({
  logos,
  speed = 60,
  hoverSpeed = 20,
  logoHeight = 48,
  gap = 48,
  grayscale = true,
  pauseOnClick = true,
  nudgeStep = 240,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);
  const currentSpeedRef = useRef(speed);
  const [hovered, setHovered] = useState(false);
  const [paused, setPaused] = useState(false);
  const [halfWidth, setHalfWidth] = useState(0);

  // Duplicate list for seamless loop
  const items = [...logos, ...logos];

  const normalize = useCallback(
    (v: number) => {
      if (halfWidth <= 0) return v;
      const m = ((v % halfWidth) + halfWidth) % halfWidth;
      return m;
    },
    [halfWidth],
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setHalfWidth(el.scrollWidth / 2);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [logos.length, logoHeight, gap]);

  useEffect(() => {
    let raf = 0;
    const target = paused ? 0 : hovered ? hoverSpeed : speed;
    const step = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      currentSpeedRef.current += (target - currentSpeedRef.current) * Math.min(1, dt * 4);
      offsetRef.current = normalize(offsetRef.current + currentSpeedRef.current * dt);
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      lastTsRef.current = null;
    };
  }, [hovered, paused, speed, hoverSpeed, normalize]);

  const nudge = (dir: -1 | 1) => {
    offsetRef.current = normalize(offsetRef.current + dir * nudgeStep);
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 350ms ease-out";
      trackRef.current.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      window.setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "";
      }, 360);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      nudge(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nudge(1);
    } else if (pauseOnClick && (e.key === " " || e.key === "Enter")) {
      e.preventDefault();
      setPaused((p) => !p);
    }
  };

  return (
    <div
      className="relative w-full"
      role="region"
      aria-label="Client logos carousel"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={onKey}
    >
      <div
        className="overflow-hidden"
        onClick={() => pauseOnClick && setPaused((p) => !p)}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{ gap: `${gap}px`, width: "max-content" }}
        >
          {items.map((l, i) => (
            <div
              key={`${l.name}-${i}`}
              className="flex items-center justify-center shrink-0"
              style={{ height: logoHeight }}
              aria-hidden={i >= logos.length ? true : undefined}
            >
              <img
                src={l.logo}
                alt={i < logos.length ? `${l.name} logo` : ""}
                className="max-h-full w-auto object-contain transition duration-300"
                style={{
                  height: logoHeight,
                  filter: grayscale ? "grayscale(100%)" : undefined,
                  opacity: grayscale ? 0.75 : 1,
                }}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll logos left"
        onClick={(e) => {
          e.stopPropagation();
          nudge(-1);
        }}
        className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/95 border border-border shadow-md flex items-center justify-center text-foreground hover:bg-white hover:shadow-lg transition"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Scroll logos right"
        onClick={(e) => {
          e.stopPropagation();
          nudge(1);
        }}
        className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/95 border border-border shadow-md flex items-center justify-center text-foreground hover:bg-white hover:shadow-lg transition"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
