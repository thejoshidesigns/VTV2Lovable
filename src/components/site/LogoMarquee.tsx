import { useEffect, useRef, useState } from "react";

export type MarqueeLogo = { name: string; logo: string };

type Props = {
  logos: MarqueeLogo[];
  speed?: number; // px per second
  hoverSpeed?: number; // px per second on hover
  logoHeight?: number;
  gap?: number;
  grayscale?: boolean;
  pauseOnClick?: boolean;
};

export function LogoMarquee({
  logos,
  speed = 60,
  hoverSpeed = 20,
  logoHeight = 48,
  gap = 48,
  grayscale = true,
  pauseOnClick = true,
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
      // ease current speed toward target
      currentSpeedRef.current += (target - currentSpeedRef.current) * Math.min(1, dt * 4);
      offsetRef.current += currentSpeedRef.current * dt;
      if (halfWidth > 0 && offsetRef.current >= halfWidth) {
        offsetRef.current -= halfWidth;
      }
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
  }, [hovered, paused, speed, hoverSpeed, halfWidth]);

  const onKey = (e: React.KeyboardEvent) => {
    if (!pauseOnClick) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      setPaused((p) => !p);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      role="region"
      aria-label="Client logos carousel"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => pauseOnClick && setPaused((p) => !p)}
      onKeyDown={onKey}
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
  );
}
