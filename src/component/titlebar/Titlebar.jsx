import { useEffect, useRef, useState } from "react";
import "../../Style/Titlebar.css";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Magnetic } from "../../motion/Motion";
import ParticleText from "../../motion/ParticleText";
import ContraButton from "../ContraButton/ContraButton";

const NAME = "Kenil Vaghasiya";

const socials = [
  { to: "https://www.linkedin.com/in/kenil704/", src: "images/linkedin.png", alt: "linkedin" },
  { to: "https://github.com/kenilvaghasiya", src: "images/code.png", alt: "code" },
  { to: "https://dribbble.com/kenil_vaghasiya", src: "images/dribbble.png", alt: "dribbble" }
];

const builds = ["I build SaaS products", "I build Framer websites", "I build AI-powered features", "I build fast web apps"];

const EASE = [0.22, 1, 0.36, 1];
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
};

const Titlebar = (prop) => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const [plainName, setPlainName] = useState(false);
  const [buildIndex, setBuildIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setBuildIndex((index) => (index + 1) % builds.length), 2400);
    return () => window.clearInterval(timer);
  }, []);

  // Scroll-linked: the text lifts and fades, the colour ring grows, the name dissolves into particles.
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const ringScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  // Pointer parallax: the colour ring drifts gently toward the cursor.
  const pointerX = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const pointerY = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;
    pointerX.set((event.clientX / window.innerWidth - 0.5) * 70);
    pointerY.set((event.clientY / window.innerHeight - 0.5) * 70);
  };

  const setRefs = (node) => {
    heroRef.current = node;
    if (prop.titleRef) prop.titleRef.current = node;
  };

  return (
    <div className="homePage" id="HomePage" ref={setRefs} onPointerMove={handlePointerMove}>
      <motion.div className="bgDesign" style={{ scale: ringScale, y: ringY }}>
        <motion.div className="bgDesignInner" style={{ x: pointerX, y: pointerY }}>
          <img src="images/es1.svg" alt=""></img>
        </motion.div>
      </motion.div>

      <div className="mainSection">
        <ParticleText text={NAME} targetRef={nameRef} dissolve={scrollYProgress} onFallback={setPlainName} />

        <motion.div
          className="heroTop"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <NavLink to="/" className="navlinknone heroLogo">Kenil Vaghasiya</NavLink>
          <div className="heroStatus">
            <span className="heroStatusDot" aria-hidden="true"></span>
            Available for work
          </div>
        </motion.div>

        <motion.div
          className="heroContent"
          style={{ y: contentY, opacity: contentOpacity }}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } } }}
        >
          <motion.div className="heroRole" variants={rise}>Full-Stack &amp; Framer Developer</motion.div>

          <h1 ref={nameRef} className={`Titilename ${plainName ? "isPlain" : ""}`}>{NAME}</h1>

          <motion.div className="heroBuild" variants={rise} aria-live="off">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={builds[buildIndex]}
                className="heroBuildLine"
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {builds[buildIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div className="heroActions" variants={rise}>
            <Magnetic strength={0.3}>
              <button type="button" className="heroPrimaryBtn" onClick={() => prop.onViewWork?.()}>
                View my work <span aria-hidden="true">↓</span>
              </button>
            </Magnetic>
            <div className="heroContra">
              <ContraButton theme="light" />
            </div>
          </motion.div>

          <motion.div className="logosectionMain" variants={rise}>
            {socials.map((item) => (
              <Magnetic strength={0.45} key={item.alt}>
                <Link to={item.to}><img src={item.src} alt={item.alt} className="iconLogo"/></Link>
              </Magnetic>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Titlebar
