import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import "../../Style/Titlebar.css";
import { Link, NavLink } from "react-router-dom";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Magnetic, SplitText } from "../../motion/Motion";

const socials = [
  { to: "https://www.linkedin.com/in/kenil704/", src: "images/linkedin.png", alt: "linkedin" },
  { to: "https://github.com/kenilvaghasiya", src: "images/code.png", alt: "code" },
  { to: "https://dribbble.com/kenil_vaghasiya", src: "images/dribbble.png", alt: "dribbble" }
];

const Titlebar = (prop) => {
  const heroRef = useRef(null);

  // Scroll-linked parallax: the hero text lifts and fades, the colour ring grows.
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
    <motion.div
      className="Titlebar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
       <motion.div className="TitlebarItem" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
        <NavLink to="/" className="navlinknone">Kenil Vaghasiya </NavLink>
      </motion.div>
    </motion.div>
    <motion.div
      className="mainSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div className="heroContent" style={{ y: contentY, opacity: contentOpacity }}>
        <SplitText text="Kenil Vaghasiya" className="Titilename" delay={0.2} />
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Full Stack developer',
    1000,
    'React JS , Node JS , Next JS ',
    1000,
    'Full Stack Developer',
    1000,
    
  ]}
  speed={20}
  className="fieldname"
  repeat={2}
/>
        <motion.div
          className="logosectionMain"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.75 } } }}
        >
          {socials.map((item) => (
            <motion.div
              key={item.alt}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.6 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 18 } }
              }}
            >
              <Magnetic strength={0.45}>
                <Link to={item.to}><img src={item.src} alt={item.alt} className="iconLogo"/></Link>
              </Magnetic>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
    <motion.div className="bgDesign" style={{ scale: ringScale, y: ringY }}>
      <motion.div className="bgDesignInner" style={{ x: pointerX, y: pointerY }}>
        <img src="images/es1.svg" alt="bgimage"></img>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default Titlebar
