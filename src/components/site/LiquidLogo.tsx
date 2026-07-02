import { useEffect, useRef, useState } from "react";

interface LiquidLogoProps {
  src: string;
  alt?: string;
  className?: string;
}

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

// Simplex noise (Ashima) + liquid distortion + subtle chromatic refraction.
const FRAG = `
precision highp float;
varying vec2 v_uv;
uniform sampler2D u_tex;
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_mouse;      // 0..1, -1 if none
uniform float u_mouseAmt;  // 0..1 eased
uniform float u_pxScale;   // pixels -> uv (1/height)
uniform float u_aspect;    // image aspect / canvas aspect fit

vec3 permute(vec3 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x * x0.x  + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = v_uv;
  // center-stable falloff (edges distort more)
  vec2 c = uv - 0.5;
  float r = length(c) * 1.4142;
  float edge = smoothstep(0.15, 0.9, r);

  float t = u_time * 0.18;
  // layered noise -> smooth flow field
  vec2 p = uv * 1.4;
  float n1 = snoise(p + vec2(t, -t*0.7));
  float n2 = snoise(p * 2.1 + vec2(-t*0.6, t*0.9) + 5.2);
  vec2 flow = vec2(n1, n2);

  // intensity in pixels -> uv (5..12 px)
  float px = mix(5.0, 12.0, 0.5 + 0.5 * sin(u_time * 0.3));
  vec2 disp = flow * px * u_pxScale * edge;

  // mouse ripple
  if (u_mouse.x >= 0.0) {
    vec2 m = u_mouse - uv;
    float d = length(m);
    float ring = exp(-d*d * 60.0) * u_mouseAmt;
    disp += normalize(m + 1e-5) * ring * 6.0 * u_pxScale;
  }

  // subtle chromatic refraction
  float ca = 0.35 * u_pxScale;
  vec2 dir = normalize(flow + 1e-5);
  vec4 cr = texture2D(u_tex, uv + disp + dir * ca);
  vec4 cg = texture2D(u_tex, uv + disp);
  vec4 cb = texture2D(u_tex, uv + disp - dir * ca);
  float a = max(cr.a, max(cg.a, cb.a));
  gl_FragColor = vec4(cr.r, cg.g, cb.b, a);
}`;

export function LiquidLogo({ src, alt = "", className }: LiquidLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const gl = canvas.getContext("webgl", { premultipliedAlpha: true, antialias: true, alpha: true });
    if (!gl) return;

    // compile
    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_res");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uMouseAmt = gl.getUniformLocation(prog, "u_mouseAmt");
    const uPxScale = gl.getUniformLocation(prog, "u_pxScale");
    const uAspect = gl.getUniformLocation(prog, "u_aspect");

    // texture
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0,0,0,0]));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      setReady(true);
    };
    img.src = src;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // mouse
    const mouse = { x: -1, y: -1, amt: 0, targetAmt: 0 };
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = 1 - (e.clientY - rect.top) / rect.height;
      mouse.targetAmt = 1;
    };
    const onLeave = () => { mouse.targetAmt = 0; };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    // visibility
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.01 });
    io.observe(wrap);

    let raf = 0;
    const start = performance.now();
    const tick = () => {
      if (!visible) { raf = requestAnimationFrame(tick); return; }
      const t = (performance.now() - start) / 1000;
      mouse.amt += (mouse.targetAmt - mouse.amt) * 0.06;
      mouse.targetAmt *= 0.985;

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uMouseAmt, mouse.amt);
      gl.uniform1f(uPxScale, 1 / canvas.height);
      gl.uniform1f(uAspect, canvas.width / canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [src, reduced]);

  return (
    <div ref={wrapRef} className={className} style={{ position: "relative" }}>
      {reduced ? (
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      ) : (
        <>
          <canvas
            ref={canvasRef}
            aria-label={alt}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
          {!ready && (
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 w-full h-full object-contain"
              aria-hidden
            />
          )}
        </>
      )}
    </div>
  );
}
