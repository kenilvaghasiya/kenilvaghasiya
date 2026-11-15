import { useRef } from "react";
import "../../Style/Portfolio.css";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { TiltCard } from "../../motion/Motion";

const openLink = (url) => {
  window.open(url, "_blank");
};

/*
 * One portfolio card. Its entrance is tied to the scroll position: as the card
 * rises from the bottom of the screen it slides in from its own side, turns
 * upright, grows to full size and fades in. Scrolling back up plays it in
 * reverse. Left-column cards come from the left, right-column from the right.
 */
const PortfolioCard = ({ item, index }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const side = index % 2 === 0 ? -1 : 1;

  // 0 when the card's top reaches the bottom of the screen, 1 when it is ~45% up.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 1", "start 0.55"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.6 });

  const x = useTransform(progress, [0, 1], [side * 110, 0]);
  const y = useTransform(progress, [0, 1], [90, 0]);
  const rotate = useTransform(progress, [0, 1], [side * 7, 0]);
  const scale = useTransform(progress, [0, 1], [0.82, 1]);
  const opacity = useTransform(progress, [0, 0.7], [0, 1]);
  // The picture itself settles a moment after its frame, for a little depth.
  const imageScale = useTransform(progress, [0, 1], [1.18, 1]);

  return (
    <motion.div
      ref={ref}
      className="portfolioMainas1"
      style={reduce ? undefined : { x, y, rotate, scale, opacity }}
    >
      <TiltCard className="portfolioTilt" onClick={() => item.link && openLink(item.link)}>
        <motion.img
          src={item.image}
          alt={item.alt}
          className="imgAS1"
          width="1004"
          height="567"
          loading="lazy"
          decoding="async"
          style={reduce ? undefined : { scale: imageScale }}
        />
      </TiltCard>
    </motion.div>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    { image: "/images/al6.webp", link: "https://22westmedia.com/web-team", alt: "22 West Media website, built by Kenil Vaghasiya" },
    { image: "/images/al1.webp", link: "https://k14-dev.netlify.app/", alt: "K14 Design website project" },
    { image: "/images/al5.webp", link: "https://github.com/kenilvaghasiya/SearchEngine", alt: "Python search engine project" },
    { image: "/images/al2.webp", link: "", alt: "Task management web app with responsive design" },
    { image: "/images/al3.webp", link: "https://scholarworld.netlify.app/", alt: "Scholar World website project" },
    { image: "/images/al4.webp", link: "https://dribbble.com/kenil_vaghasiya", alt: "UI design work by Kenil Vaghasiya on Dribbble" }
  ];

  return (
    <div className="PortfolioSection">
      <div className="portfolioMain">
        <div className="bigportfoliobar">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={`${item.alt}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
