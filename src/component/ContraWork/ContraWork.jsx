import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "../../Style/contraWork.css";
import { RevealText, TiltCard } from "../../motion/Motion";

const PROFILE_URL = "https://contra.com/kenil_vaghasiya6108";

const projects = [
  {
    title: "Caldiors — A Little Care. A Beautiful Website.",
    text: "Website for Caldiors, a premium baby-care brand: clean design, thoughtful details and a premium browsing experience, built from design through to launch.",
    tags: ["Next.js", "React", "CSS3", "Brand Design"],
    image: "images/work/caldiors.webp",
    video: "videos/caldiors.mp4",
    width: 1280,
    height: 853,
    link: "https://contra.com/p/POlFEscZ-a-little-care-a-beautiful",
    label: "Featured · Live site · caldiors.com",
    ratio: "3 / 2",
    featured: true
  },
  {
    title: "ORVEN — Interior Design Website",
    text: "Framer website showcase for an interior design studio: warm visual identity, image-led layouts, responsive pages and animation direction.",
    tags: ["Framer", "Figma", "Web Design"],
    image: "images/work/orven-poster.webp",
    video: "videos/orven.mp4",
    width: 1120,
    height: 644,
    label: "Featured · Built in Framer",
    ratio: "1120 / 644",
    featured: true,
    reversed: true,
    link: "https://contra.com/p/vXQvqZle-orven-interior-design-website-built-in-framer"
  },
  {
    title: "AXIOM — Architecture Brand & Website Concept",
    text: "Brand and website concept for an architecture studio: geometric logo, editorial typography and desktop + mobile homepage designs.",
    tags: ["Next.js", "React", "Node.js"],
    image: "images/work/axiom.webp",
    link: "https://contra.com/p/cORkYE72-axiom-architecture-brand-and-website-design-concept"
  },
  {
    title: "From Zero to Hero — SaaS Brand & Product",
    text: "My 8-step process for turning a SaaS idea into a complete brand and digital product, from discovery and naming to MVP, launch and brand guidelines.",
    tags: ["Brand Design", "UI Design", "React"],
    image: "images/work/saasbrand.webp",
    link: "https://contra.com/p/QFUgeq77-from-zero-to-heroturning-a"
  },
  {
    title: "Building a New SaaS Product",
    text: "An Agile, MVP-first approach in six steps: discovery, planning, UI/UX design, development, testing, then launch and improvement.",
    tags: ["Next.js", ".NET", "Supabase"],
    image: "images/work/saasmvp.webp",
    link: "https://contra.com/p/RPWcRgov-building-a-new-saa-s-product"
  }
];

const services = [
  {
    title: "Backend API Development & Integrations",
    price: "$58/hr",
    image: "images/work/svc-api.webp",
    link: "https://contra.com/s/3NBqBQmq-backend-api-development-and-integrations"
  },
  {
    title: "AI Integrations & Workflow Automation",
    price: "$60/hr",
    image: "images/work/svc-ai.webp",
    link: "https://contra.com/s/6MNbYPQs-ai-integrations-and-workflow-automation"
  },
  {
    title: "Next.js Website Design & Development",
    price: "$55/hr",
    image: "images/work/svc-next.webp",
    link: "https://contra.com/s/7ZoZYPLB-nextjs-website-design-and-development"
  },
  {
    title: "SaaS & MVP Development",
    price: "Contact for pricing",
    image: "images/work/svc-saas.webp",
    link: "https://contra.com/s/essYOqOs-saa-s-and-mvp-development"
  }
];

const group = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

/*
 * Project video: shows the still image first, downloads the video only when
 * the card is on screen, plays while visible and pauses when scrolled away.
 */
const ProjectVideo = ({ src, poster, label, width, height }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video || reduce) return;
    if (inView) {
      const playing = video.play();
      if (playing && playing.catch) playing.catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, reduce]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      controls={reduce}
      aria-label={label}
    />
  );
};

const ContraWork = () => (
  <section className="contraWork">
    <h2 className="contraWorkTitle"><RevealText text="Latest Work" /></h2>
    <p className="contraWorkSub">
      Recent projects from my <a href={PROFILE_URL} target="_blank" rel="noreferrer">Contra profile</a>.
    </p>

    <motion.div
      className="contraWorkGrid"
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      {projects.map((project) => (
        <motion.a
          key={project.title}
          className={`contraWorkCard ${project.featured ? "isFeatured" : ""} ${project.reversed ? "isReversed" : ""}`}
          style={project.ratio ? { "--ratio": project.ratio } : undefined}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          variants={item}
        >
          <TiltCard className="contraWorkImageWrap" max={6}>
            {project.video ? (
              <ProjectVideo src={project.video} poster={project.image} label={project.title} width={project.width} height={project.height} />
            ) : (
              <img src={project.image} alt={project.title} width={project.width || 960} height={project.height || 720} loading="lazy" decoding="async" />
            )}
          </TiltCard>
          <div className="contraWorkBody">
            {project.label && <div className="contraWorkFeaturedLabel">{project.label}</div>}
            <h3 className="contraWorkCardTitle">{project.title}</h3>
            <div className="contraWorkText">{project.text}</div>
            <div className="contraWorkTags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>

    <h2 className="contraWorkTitle contraServicesTitle"><RevealText text="Services" /></h2>

    <motion.div
      className="contraServicesGrid"
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      {services.map((service) => (
        <motion.a
          key={service.title}
          className="contraServiceCard"
          href={service.link}
          target="_blank"
          rel="noreferrer"
          variants={item}
          whileHover={{ y: -8 }}
        >
          <img src={service.image} alt={service.title} width="640" height="480" loading="lazy" decoding="async" />
          <div className="contraServiceBody">
            <h3 className="contraServiceTitle">{service.title}</h3>
            <div className="contraServicePrice">{service.price}</div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  </section>
);

export default ContraWork;
