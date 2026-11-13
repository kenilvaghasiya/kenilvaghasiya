import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import "./motion.css";

/*
 * Photo built from thousands of square particles.
 * At rest the particles form a slowly turning globe. Hovering (or tapping on
 * a touch screen) springs them into the photo; moving away returns the globe.
 *
 * One Motion spring value ("progress", 0 = globe, 1 = photo) drives a WebGL
 * shader uniform, so the whole morph runs on the GPU with no extra library.
 */

const VERTEX = `
attribute vec2 aGrid;    // particle position inside the photo (clip space)
attribute vec3 aGlobe;   // particle position on the globe (unit sphere)
attribute vec3 aColor;
attribute vec2 aSeed;    // per-particle random values
uniform float uProgress;
uniform float uTime;
uniform float uYaw;
uniform vec2 uGlobeScale; // keeps the globe round on any aspect ratio
uniform float uPointSize;
varying vec3 vColor;
varying float vShade;

void main() {
  // Each particle leaves/arrives at a slightly different moment.
  float local = clamp(uProgress * 1.35 - aSeed.x * 0.35, 0.0, 1.0);
  local = local * local * (3.0 - 2.0 * local);
  float globeAmount = 1.0 - local;

  // Globe: spin around the vertical axis and add a little turbulence.
  float angle = uYaw + uTime * 0.28;
  float c = cos(angle);
  float s = sin(angle);
  vec3 g = vec3(aGlobe.x * c + aGlobe.z * s, aGlobe.y, -aGlobe.x * s + aGlobe.z * c);
  float wobble = sin(uTime * (0.8 + aSeed.y * 1.6) + aSeed.x * 6.2831) * 0.035;
  g *= 1.0 + wobble;

  float perspective = 1.0 / (1.0 - g.z * 0.32);
  vec2 globePos = g.xy * perspective * uGlobeScale;

  vec2 pos = mix(globePos, aGrid, local);
  gl_Position = vec4(pos, -g.z * 0.5 * globeAmount, 1.0);
  gl_PointSize = uPointSize * mix(0.62 * perspective, 1.0, local);

  vColor = aColor;
  vShade = mix(0.55 + 0.45 * smoothstep(-1.0, 1.0, g.z), 1.0, local);
}
`;

const FRAGMENT = `
precision mediump float;
varying vec3 vColor;
varying float vShade;
void main() {
  gl_FragColor = vec4(vColor * vShade, 1.0);
}
`;

const compile = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(info);
  }
  return shader;
};

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });

// Sample the photo at cols x rows using the same crop as CSS object-fit: cover.
const sampleCover = (image, cols, rows) => {
  const canvas = document.createElement("canvas");
  canvas.width = cols;
  canvas.height = rows;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const scale = Math.max(cols / image.naturalWidth, rows / image.naturalHeight);
  const w = image.naturalWidth * scale;
  const h = image.naturalHeight * scale;
  ctx.drawImage(image, (cols - w) / 2, (rows - h) / 2, w, h);
  return ctx.getImageData(0, 0, cols, rows).data;
};

const ParticlePortrait = ({ src, alt, className }) => {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();
  const nearView = useInView(wrapRef, { once: true, margin: "400px 0px" });
  const [ready, setReady] = useState(false);

  const target = useMotionValue(0);
  const progress = useSpring(target, { stiffness: 70, damping: 16, mass: 1 });
  const photoOpacity = useTransform(progress, [0.86, 1], [0, 1], { clamp: true });
  const canvasOpacity = useTransform(progress, [0.93, 1], [1, 0], { clamp: true });
  const hintOpacity = useTransform(progress, [0, 0.2], [1, 0], { clamp: true });

  useEffect(() => {
    if (reduce || !nearView) return undefined;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return undefined;

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false });
    if (!gl) return undefined;

    let disposed = false;
    let frameId = 0;
    let count = 0;
    let image = null;
    let buffers = [];
    let resizeObserver;
    const yaw = Math.random() * Math.PI * 2;
    const start = performance.now();

    let program;
    try {
      program = gl.createProgram();
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
    } catch (error) {
      return undefined; // keep the plain photo
    }
    gl.useProgram(program);
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0, 0, 0, 0);

    const uniforms = {
      progress: gl.getUniformLocation(program, "uProgress"),
      time: gl.getUniformLocation(program, "uTime"),
      yaw: gl.getUniformLocation(program, "uYaw"),
      globeScale: gl.getUniformLocation(program, "uGlobeScale"),
      pointSize: gl.getUniformLocation(program, "uPointSize")
    };

    const setAttribute = (name, data, size) => {
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const location = gl.getAttribLocation(program, name);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
      buffers.push(buffer);
    };

    const build = () => {
      const width = wrap.clientWidth;
      const height = wrap.clientHeight;
      if (!width || !height || !image) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);

      const cols = width < 500 ? 96 : 150;
      const rows = Math.max(1, Math.round((cols * height) / width));
      count = cols * rows;
      const pixels = sampleCover(image, cols, rows);

      const grid = new Float32Array(count * 2);
      const globe = new Float32Array(count * 3);
      const color = new Float32Array(count * 3);
      const seed = new Float32Array(count * 2);
      const golden = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < count; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        grid[i * 2] = ((col + 0.5) / cols) * 2 - 1;
        grid[i * 2 + 1] = 1 - ((row + 0.5) / rows) * 2;

        // Fibonacci sphere: evenly spread points on a globe.
        const y = 1 - (i / (count - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = golden * i;
        globe[i * 3] = Math.cos(theta) * radius;
        globe[i * 3 + 1] = y;
        globe[i * 3 + 2] = Math.sin(theta) * radius;

        color[i * 3] = pixels[i * 4] / 255;
        color[i * 3 + 1] = pixels[i * 4 + 1] / 255;
        color[i * 3 + 2] = pixels[i * 4 + 2] / 255;

        seed[i * 2] = Math.random();
        seed[i * 2 + 1] = Math.random();
      }

      buffers.forEach((buffer) => gl.deleteBuffer(buffer));
      buffers = [];
      setAttribute("aGrid", grid, 2);
      setAttribute("aGlobe", globe, 3);
      setAttribute("aColor", color, 3);
      setAttribute("aSeed", seed, 2);

      const globeSize = 0.74 * Math.min(width, height);
      gl.uniform2f(uniforms.globeScale, globeSize / width, globeSize / height);
      gl.uniform1f(uniforms.pointSize, Math.ceil((canvas.width / cols) * 1.02));
      gl.uniform1f(uniforms.yaw, yaw);
    };

    const render = () => {
      frameId = 0;
      if (disposed) return;
      const value = Math.min(1, Math.max(0, progress.get()));
      // Once the photo has fully formed the canvas is invisible: stop drawing.
      const settled = value > 0.999 && Math.abs(progress.getVelocity()) < 0.001;
      if (count && !settled) {
        gl.uniform1f(uniforms.progress, value);
        gl.uniform1f(uniforms.time, (performance.now() - start) / 1000);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0, count);
      }
      if (visible && !settled) frameId = requestAnimationFrame(render);
    };

    let visible = false;
    const wake = () => {
      if (!frameId && visible && !disposed) frameId = requestAnimationFrame(render);
    };
    const stopProgress = progress.on("change", wake);
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      wake();
    });
    visibility.observe(wrap);

    loadImage(src)
      .then((loaded) => {
        if (disposed) return;
        image = loaded;
        build();
        resizeObserver = new ResizeObserver(() => {
          build();
          wake();
        });
        resizeObserver.observe(wrap);
        setReady(true);
        wake();
      })
      .catch(() => {});

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      stopProgress();
      visibility.disconnect();
      if (resizeObserver) resizeObserver.disconnect();
      buffers.forEach((buffer) => gl.deleteBuffer(buffer));
      gl.deleteProgram(program);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, reduce, nearView]);

  const interactive = ready && !reduce;

  // Mouse: photo while hovered. Touch: tap to switch between globe and photo.
  const onEnter = (event) => {
    if (interactive && event.pointerType !== "touch") target.set(1);
  };
  const onLeave = (event) => {
    if (event.pointerType !== "touch") target.set(0);
  };
  const onTap = (event) => {
    if (interactive && event.pointerType === "touch") target.set(target.get() > 0.5 ? 0 : 1);
  };

  return (
    <div
      ref={wrapRef}
      className={`particlePortrait ${className || ""}`}
      role="img"
      aria-label={alt}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onPointerUp={onTap}
    >
      <motion.img
        src={src}
        alt=""
        className="particlePhoto"
        loading="lazy"
        decoding="async"
        draggable="false"
        style={{ opacity: interactive ? photoOpacity : 1 }}
      />
      {!reduce && <motion.canvas ref={canvasRef} className="particleCanvas" style={{ opacity: ready ? canvasOpacity : 0 }} />}
      {interactive && (
        <motion.div className="particleHint" style={{ opacity: hintOpacity }} aria-hidden="true">
          <span className="hintHover">Hover me</span>
          <span className="hintTap">Tap me</span>
        </motion.div>
      )}
    </div>
  );
};

export default ParticlePortrait;
