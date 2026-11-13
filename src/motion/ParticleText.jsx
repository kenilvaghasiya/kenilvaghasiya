import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import "./motion.css";

/*
 * Text drawn from thousands of particles (WebGL, no extra library).
 *
 *  - On load the particles float as a coloured cloud, then assemble into the text.
 *  - They move away from the pointer and swirl back.
 *  - A click / tap sends a shock wave through them.
 *  - `dissolve` (a Motion value, 0..1) scatters them again, e.g. while scrolling.
 *
 * `targetRef` points at the real (invisible) heading: it gives the particles
 * their position, font and size, and stays in the page for screen readers and
 * search engines. If WebGL is unavailable or the visitor prefers reduced
 * motion, `onFallback` is called so the caller can show that heading normally.
 */

const VERTEX = `
attribute vec2 aTarget;   // where the particle sits in the text (css px)
attribute vec4 aSeed;     // per-particle random values
uniform vec2 uRes;        // canvas size (css px)
uniform vec2 uMouse;      // pointer position (css px)
uniform float uMouseOn;
uniform float uProgress;  // 0 = cloud, 1 = text
uniform float uBurst;
uniform float uTime;
uniform float uSize;
varying vec3 vColor;
varying float vAlpha;

vec3 palette(float t) {
  if (t < 0.25) return vec3(0.039, 0.525, 0.976);
  if (t < 0.5) return vec3(0.071, 0.651, 0.059);
  if (t < 0.75) return vec3(0.996, 0.596, 0.0);
  return vec3(0.941, 0.416, 0.796);
}

void main() {
  float local = clamp(uProgress * 1.5 - aSeed.z * 0.5, 0.0, 1.0);
  local = local * local * (3.0 - 2.0 * local);

  // Cloud: spread over the whole hero, slowly drifting.
  vec2 start = aSeed.xy * uRes;
  start += vec2(cos(uTime * 0.3 + aSeed.w * 6.2831), sin(uTime * 0.25 + aSeed.z * 6.2831)) * 46.0;

  vec2 pos = mix(start, aTarget, local);
  // Tiny shimmer so the finished text still feels alive.
  pos += vec2(sin(uTime * 1.3 + aSeed.w * 6.2831), cos(uTime * 1.1 + aSeed.z * 6.2831)) * 0.3 * local;

  // Push away from the pointer, with a little swirl.
  vec2 away = pos - uMouse;
  float dist = length(away) + 0.001;
  vec2 dir = away / dist;
  float push = smoothstep(120.0, 0.0, dist) * uMouseOn;
  pos += dir * push * 46.0 + vec2(-dir.y, dir.x) * push * 22.0 * (aSeed.w - 0.5);

  // Shock wave from a click / tap.
  float wave = uBurst * smoothstep(560.0, 0.0, dist);
  pos += dir * wave * (110.0 + aSeed.z * 170.0);

  float moved = clamp(max(1.0 - local, max(push, wave)), 0.0, 1.0);
  vec2 clip = pos / uRes * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  gl_PointSize = uSize * (1.0 + moved * 0.5);

  vColor = mix(vec3(0.035, 0.11, 0.137), palette(aSeed.w), moved);
  vAlpha = mix(1.0, 0.72, moved);
}
`;

const FRAGMENT = `
precision mediump float;
varying vec3 vColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(vColor, vAlpha);
}
`;

const compile = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
  return shader;
};

// Position of `node` inside `ancestor`, ignoring CSS transforms.
const offsetWithin = (node, ancestor) => {
  let left = 0;
  let top = 0;
  let current = node;
  while (current && current !== ancestor) {
    left += current.offsetLeft;
    top += current.offsetTop;
    current = current.offsetParent;
  }
  return { left, top };
};

const ParticleText = ({ text, targetRef, dissolve, onFallback }) => {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (reduce || failed) onFallback?.(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, failed]);

  useEffect(() => {
    if (reduce) return undefined;
    const canvas = canvasRef.current;
    const target = targetRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !target || !host) return undefined;

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false });
    if (!gl) {
      setFailed(true);
      return undefined;
    }

    let program;
    try {
      program = gl.createProgram();
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
    } catch (error) {
      setFailed(true);
      return undefined;
    }
    gl.useProgram(program);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const uniform = (name) => gl.getUniformLocation(program, name);
    const uniforms = {
      res: uniform("uRes"),
      mouse: uniform("uMouse"),
      mouseOn: uniform("uMouseOn"),
      progress: uniform("uProgress"),
      burst: uniform("uBurst"),
      time: uniform("uTime"),
      size: uniform("uSize")
    };

    let disposed = false;
    let frameId = 0;
    let count = 0;
    let visible = true;
    let buffers = [];
    const startTime = performance.now();
    // Smoothed values, advanced every frame.
    const state = { intro: 0, mouseX: -9999, mouseY: -9999, targetX: -9999, targetY: -9999, mouseOn: 0, mouseOnTarget: 0, burst: 0 };

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
      const width = host.clientWidth;
      const height = host.clientHeight;
      const boxWidth = target.offsetWidth;
      const boxHeight = target.offsetHeight;
      if (!width || !height || !boxWidth || !boxHeight) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);

      // Draw the text off screen with the heading's own font, then read which pixels are inked.
      const style = getComputedStyle(target);
      const fontSize = parseFloat(style.fontSize);
      const pad = Math.ceil(fontSize * 0.3);
      const sample = document.createElement("canvas");
      sample.width = Math.ceil((boxWidth + pad * 2) * dpr);
      sample.height = Math.ceil((boxHeight + pad * 2) * dpr);
      const ctx = sample.getContext("2d", { willReadFrequently: true });
      ctx.scale(dpr, dpr);
      ctx.font = `${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";
      ctx.fillText(text, (boxWidth + pad * 2) / 2, (boxHeight + pad * 2) / 2);
      const pixels = ctx.getImageData(0, 0, sample.width, sample.height).data;

      const origin = offsetWithin(target, host);
      let step = Math.max(1, Math.round(dpr));
      let points = [];
      for (;;) {
        points = [];
        for (let y = 0; y < sample.height; y += step) {
          for (let x = 0; x < sample.width; x += step) {
            if (pixels[(y * sample.width + x) * 4 + 3] > 110) {
              points.push(origin.left - pad + x / dpr, origin.top - pad + y / dpr);
            }
          }
        }
        if (points.length / 2 <= 70000) break;
        step += 1;
      }

      count = points.length / 2;
      const seeds = new Float32Array(count * 4);
      for (let i = 0; i < seeds.length; i++) seeds[i] = Math.random();

      buffers.forEach((buffer) => gl.deleteBuffer(buffer));
      buffers = [];
      setAttribute("aTarget", new Float32Array(points), 2);
      setAttribute("aSeed", seeds, 4);
      gl.uniform2f(uniforms.res, width, height);
      // Slightly larger than the sampling step so neighbouring particles overlap into solid letters.
      gl.uniform1f(uniforms.size, step * 1.9);
    };

    const render = () => {
      frameId = 0;
      if (disposed || !visible) return;

      // Ease the smoothed values toward their targets.
      state.intro += (1 - state.intro) * 0.022;
      state.mouseX += (state.targetX - state.mouseX) * 0.16;
      state.mouseY += (state.targetY - state.mouseY) * 0.16;
      state.mouseOn += (state.mouseOnTarget - state.mouseOn) * 0.12;
      state.burst *= 0.93;

      const scatter = Math.min(1, Math.max(0, (dissolve ? dissolve.get() : 0) * 1.7));
      const progress = Math.min(1, state.intro * 1.04) * (1 - scatter);

      if (count) {
        gl.uniform1f(uniforms.progress, progress);
        gl.uniform1f(uniforms.time, (performance.now() - startTime) / 1000);
        gl.uniform2f(uniforms.mouse, state.mouseX, state.mouseY);
        gl.uniform1f(uniforms.mouseOn, state.mouseOn);
        gl.uniform1f(uniforms.burst, state.burst);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0, count);
      }
      frameId = requestAnimationFrame(render);
    };

    const wake = () => {
      if (!frameId && visible && !disposed) frameId = requestAnimationFrame(render);
    };

    const local = (event) => {
      const rect = canvas.getBoundingClientRect();
      return [event.clientX - rect.left, event.clientY - rect.top];
    };
    const onMove = (event) => {
      if (event.pointerType === "touch") return;
      [state.targetX, state.targetY] = local(event);
      if (state.mouseOnTarget === 0) {
        state.mouseX = state.targetX;
        state.mouseY = state.targetY;
      }
      state.mouseOnTarget = 1;
    };
    const onLeave = () => {
      state.mouseOnTarget = 0;
    };
    const onDown = (event) => {
      [state.targetX, state.targetY] = local(event);
      state.mouseX = state.targetX;
      state.mouseY = state.targetY;
      state.burst = 1;
    };
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    host.addEventListener("pointerdown", onDown);

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      wake();
    });
    visibility.observe(host);

    let resizeObserver;
    const fontSize = parseFloat(getComputedStyle(target).fontSize);
    const fontReady = document.fonts?.load ? document.fonts.load(`${fontSize}px ${getComputedStyle(target).fontFamily}`, text) : Promise.resolve();
    fontReady
      .catch(() => {})
      .then(() => {
        if (disposed) return;
        build();
        resizeObserver = new ResizeObserver(build);
        resizeObserver.observe(host);
        resizeObserver.observe(target);
        wake();
      });

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      visibility.disconnect();
      if (resizeObserver) resizeObserver.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("pointerdown", onDown);
      buffers.forEach((buffer) => gl.deleteBuffer(buffer));
      gl.deleteProgram(program);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, reduce]);

  if (reduce || failed) return null;
  return <canvas ref={canvasRef} className="particleTextCanvas" aria-hidden="true" />;
};

export default ParticleText;
