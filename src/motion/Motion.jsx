import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import "./motion.css";

const EASE_OUT = [0.22, 1, 0.36, 1];

/* Thin bar at the top of the page that fills as you scroll. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  return <motion.div className="scrollProgress" style={{ scaleX }} aria-hidden="true" />;
};

/* Element is pulled toward the pointer while hovered, then springs back. */
export const Magnetic = ({ children, strength = 0.35, className, ...rest }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 16, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 16, mass: 0.4 });

  const onMove = (event) => {
    if (reduce || event.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-flex" }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileTap={{ scale: 0.94 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

/* Card that tilts in 3D toward the pointer, with a moving light glare. */
export const TiltCard = ({ children, className, max = 9, ...rest }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 30 });
  const glare = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.38), rgba(255,255,255,0) 55%)`
  );

  const onMove = (event) => {
    if (reduce || event.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
    glareOpacity.set(1);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`tiltCard ${className || ""}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      {...rest}
    >
      {children}
      <motion.span className="tiltGlare" style={{ background: glare, opacity: glareOpacity }} aria-hidden="true" />
    </motion.div>
  );
};

/* Letters rise into place one after another (used for the hero name). */
export const SplitText = ({ text, className, delay = 0, stagger = 0.035 }) => {
  const words = text.split(" ");
  let index = 0;
  return (
    <motion.div
      className={className}
      aria-label={text}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((word, w) => (
        <span className="splitWord" key={`${word}-${w}`} aria-hidden="true">
          {word.split("").map((char) => (
            <motion.span
              className="splitChar"
              key={index++}
              variants={{
                hidden: { opacity: 0, y: "0.6em", rotateX: -70 },
                show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: EASE_OUT } }
              }}
            >
              {char}
            </motion.span>
          ))}
          {w < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.div>
  );
};

/* Words slide up from behind a mask when the heading scrolls into view. */
export const RevealText = ({ text, delay = 0 }) => (
  <motion.span
    className="revealText"
    aria-label={text}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.6 }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: delay } } }}
  >
    {text.split(" ").map((word, i, all) => (
      <span key={`${word}-${i}`} aria-hidden="true">
        <span className="revealMask">
          <motion.span
            className="revealWord"
            variants={{
              hidden: { y: "110%" },
              show: { y: 0, transition: { duration: 0.75, ease: EASE_OUT } }
            }}
          >
            {word}
          </motion.span>
        </span>
        {i < all.length - 1 ? " " : ""}
      </span>
    ))}
  </motion.span>
);

/* Number counts up from zero the first time it is seen, e.g. "300%" or "90%+". */
export const CountUp = ({ value, duration = 1.6 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    if (!match || !inView || reduce || !ref.current) return undefined;
    const node = ref.current;
    const controls = animate(0, parseFloat(match[2]), {
      duration,
      ease: EASE_OUT,
      onUpdate: (latest) => {
        node.textContent = `${match[1]}${Math.round(latest)}${match[3]}`;
      }
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref} className="countUp">
      {value}
    </span>
  );
};

/* Stagger helpers for groups of small items (skill chips). */
export const chipGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } }
};

export const chipItem = {
  hidden: { opacity: 0, y: 14, scale: 0.85 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 380, damping: 22 } }
};
