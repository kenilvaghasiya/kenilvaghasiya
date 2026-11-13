import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../../Style/linkedinSlider.css";
import { RevealText } from "../../motion/Motion";

const posts = [
  {
    id: "7419504563327787009",
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7419504563327787009?collapsed=1"
  },
  {
    id: "7422071008909668353",
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7422071008909668353?collapsed=1"
  },
  {
    id: "7409361835960918017",
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7409361835960918017?collapsed=1"
  },
  {
    id: "7401761705695088641",
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7401761705695088641?collapsed=1"
  },
  {
    id: "7269883340772511744",
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7269883340772511744?collapsed=1"
  },
  {
    id: "7235005853148307456",
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7235005853148307456?collapsed=1"
  },
  {
    id: "7232181214839721986",
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7232181214839721986?collapsed=1"
  }
];

const CARD_WIDTH = 504;
const CARD_HEIGHT = 670;
const SPRING = { type: "spring", stiffness: 210, damping: 28, mass: 0.9 };

/*
 * Coverflow gallery: the active post faces forward in the centre, the others
 * fan out to each side, turned in 3D. Click a side post, use the arrows / dots,
 * swipe, or press the left / right keys to move through them.
 */
const LinkedInSlider = () => {
  const stageRef = useRef(null);
  const wheelLock = useRef(0);
  const dragged = useRef(false);
  // Start on the middle post so there are posts fanned out on both sides.
  const [active, setActive] = useState(Math.floor(posts.length / 2));
  const [stageWidth, setStageWidth] = useState(1200);
  // LinkedIn embeds are heavy: only create the iframes once the section is close to the viewport.
  const nearViewport = useInView(stageRef, { once: true, margin: "600px 0px" });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    const measure = () => setStageWidth(stage.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  const last = posts.length - 1;
  const go = (index) => setActive(Math.max(0, Math.min(last, index)));

  // Scale the whole coverflow down on small screens so a full post still fits.
  const scale = Math.min(1, (stageWidth * 0.84) / CARD_WIDTH);
  const compact = stageWidth < 700;
  const firstGap = CARD_WIDTH * (compact ? 0.5 : 0.6);
  const stackGap = compact ? 40 : 70;

  const cardStyle = (offset) => {
    if (offset === 0) return { x: 0, rotateY: 0, scale: 1, opacity: 1 };
    const side = Math.sign(offset);
    const distance = Math.abs(offset);
    return {
      x: side * (firstGap + (distance - 1) * stackGap),
      rotateY: -side * 58,
      scale: 0.86,
      opacity: distance > 4 ? 0 : 1
    };
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") go(active + 1);
    if (event.key === "ArrowLeft") go(active - 1);
  };

  // Horizontal trackpad / shift-wheel scrolling moves one post at a time.
  const handleWheel = (event) => {
    if (Math.abs(event.deltaX) < 24 || Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
    const now = Date.now();
    if (now - wheelLock.current < 420) return;
    wheelLock.current = now;
    go(active + (event.deltaX > 0 ? 1 : -1));
  };

  return (
    <motion.section
      className="linkedinSection"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="linkedinHeading"><RevealText text="LinkedIn Highlights" /></div>

      <div
        className="coverflowStage"
        ref={stageRef}
        style={{ height: CARD_HEIGHT * scale + 30 }}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="LinkedIn posts"
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
      >
        <motion.div
          className="coverflowTrack"
          style={{ scale }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragStart={() => {
            dragged.current = true;
          }}
          onDragEnd={(event, info) => {
            // Longer / faster swipes move more than one post.
            const steps = Math.max(1, Math.round(Math.abs(info.offset.x) / 220));
            if (info.offset.x < -40 || info.velocity.x < -400) go(active + steps);
            else if (info.offset.x > 40 || info.velocity.x > 400) go(active - steps);
            // The click that ends a drag must not also select / open a post.
            window.setTimeout(() => {
              dragged.current = false;
            }, 0);
          }}
        >
          {posts.map((post, index) => {
            const offset = index - active;
            const isActive = offset === 0;
            return (
              <motion.div
                className={`coverflowCard ${isActive ? "isActive" : ""}`}
                key={post.id}
                initial={false}
                animate={cardStyle(offset)}
                transition={SPRING}
                style={{ zIndex: 100 - Math.abs(offset), width: CARD_WIDTH, height: CARD_HEIGHT }}
                aria-hidden={!isActive}
              >
                {nearViewport ? (
                  <iframe
                    src={post.src}
                    height={CARD_HEIGHT}
                    width={CARD_WIDTH}
                    frameBorder="0"
                    allowFullScreen
                    title={`LinkedIn post ${index + 1}`}
                    loading="lazy"
                    tabIndex={isActive ? 0 : -1}
                  ></iframe>
                ) : (
                  <div className="linkedinFramePlaceholder" aria-hidden="true"></div>
                )}
                {/*
                  A transparent layer sits over every post so the mouse or a finger can
                  drag the gallery (an iframe would swallow the drag). Clicking a side
                  post selects it; clicking the centre post opens it on LinkedIn.
                */}
                <button
                  type="button"
                  className={`coverflowCover ${isActive ? "isActiveCover" : ""}`}
                  aria-label={isActive ? `Open LinkedIn post ${index + 1} on LinkedIn` : `Show LinkedIn post ${index + 1}`}
                  onClick={() => {
                    if (dragged.current) return;
                    if (isActive) window.open(`https://www.linkedin.com/feed/update/urn:li:share:${post.id}`, "_blank", "noopener,noreferrer");
                    else go(index);
                  }}
                ></button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="coverflowHint">Drag or swipe to browse · click a post to open it on LinkedIn</div>

      <div className="coverflowControls">
        <motion.button
          type="button"
          className="coverflowArrow"
          onClick={() => go(active - 1)}
          disabled={active === 0}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous post"
        >
          ←
        </motion.button>
        <div className="coverflowDots">
          {posts.map((post, index) => (
            <button
              type="button"
              key={post.id}
              className={`coverflowDot ${index === active ? "isActive" : ""}`}
              onClick={() => go(index)}
              aria-label={`Go to post ${index + 1}`}
            >
              {index === active && <motion.span layoutId="coverflowDot" className="coverflowDotFill" transition={SPRING} />}
            </button>
          ))}
        </div>
        <motion.button
          type="button"
          className="coverflowArrow"
          onClick={() => go(active + 1)}
          disabled={active === last}
          whileTap={{ scale: 0.9 }}
          aria-label="Next post"
        >
          →
        </motion.button>
      </div>
    </motion.section>
  );
};

export default LinkedInSlider;
