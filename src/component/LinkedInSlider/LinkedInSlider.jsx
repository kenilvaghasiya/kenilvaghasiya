import { useRef } from "react";
import { motion } from "framer-motion";
import "../../Style/linkedinSlider.css";

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

const LinkedInSlider = () => {
  const sliderRef = useRef(null);

  const handleWheel = (event) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += event.deltaY;
  };

  return (
    <motion.section
      className="linkedinSection"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="linkedinHeading">LinkedIn Highlights</div>

      <div className="linkedinSliderShell" ref={sliderRef} onWheel={handleWheel}>
        {posts.map((post, index) => (
          <motion.div
            className="linkedinFrameWrap"
            key={post.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
          >
            <iframe
              src={post.src}
              height="670"
              width="504"
              frameBorder="0"
              allowFullScreen
              title={`LinkedIn post ${index + 1}`}
              loading="lazy"
            ></iframe>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LinkedInSlider;
