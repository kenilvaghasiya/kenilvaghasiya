import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import "../../Style/work.css";

const PROFILE_URL = "https://contra.com/kenil_vaghasiya6108";

// `page` is the project's case study on this site (built by scripts/build-work-pages.js);
// `link` is the same project on Contra, linked from that case study.
const projects = [
  {
    title: "Velor Coffee House — Brand Identity & Website",
    text: "Brand identity and Framer website for a neighbourhood coffee house: a retro wordmark with a coffee bean in the \"O\", a sage, terracotta and cream palette, packaging, signage and staff apparel.",
    tags: ["Framer", "Figma", "Brand Design", "Logo Design"],
    image: "/images/work/velor-poster.webp",
    video: "/videos/velor.mp4",
    width: 1120,
    height: 644,
    label: "New · Built in Framer",
    ratio: "1120 / 644",
    featured: true,
    gallery: [
      { src: "/images/work/velor-1.webp", alt: "Velor Coffee House storefront signage" },
      { src: "/images/work/velor-2.webp", alt: "Velor Coffee House barista T-shirt" },
      { src: "/images/work/velor-3.webp", alt: "Velor Coffee House cups and coffee packaging" }
    ],
    page: "/work/velor-coffee-house/",
    link: "https://contra.com/p/NNAOcUlk-velor-coffee-house-brand-identity-and-website"
  },
  {
    title: "MORIVA Matcha House — Brand Identity & Website",
    text: "Brand and website concept for a matcha house: a classic logo, serif typography, warm colours and smooth scroll animations in a responsive site.",
    tags: ["Next.js", "Figma", "Brand Design", "Web Design"],
    image: "/images/work/moriva-poster.webp",
    video: "/videos/moriva.mp4",
    width: 1120,
    height: 644,
    label: "New · Brand & website concept",
    ratio: "1120 / 644",
    featured: true,
    reversed: true,
    page: "/work/moriva-matcha-house/",
    link: "https://contra.com/p/MZgrcll7-moriva-matcha-house-or-brand-identity-and-website-design"
  },
  {
    title: "Caldiors — A Little Care. A Beautiful Website.",
    text: "Website for Caldiors, a premium baby-care brand: clean design, thoughtful details and a premium browsing experience, built from design through to launch.",
    tags: ["Next.js", "React", "CSS3", "Brand Design"],
    image: "/images/work/caldiors.webp",
    video: "/videos/caldiors.mp4",
    width: 1280,
    height: 853,
    page: "/work/caldiors/",
    link: "https://contra.com/p/POlFEscZ-a-little-care-a-beautiful",
    label: "Featured · Live site · caldiors.com",
    ratio: "3 / 2",
    featured: true
  },
  {
    title: "ORVEN — Interior Design Website",
    text: "Framer website showcase for an interior design studio: warm visual identity, image-led layouts, responsive pages and animation direction.",
    tags: ["Framer", "Figma", "Web Design"],
    image: "/images/work/orven-poster.webp",
    video: "/videos/orven.mp4",
    width: 1120,
    height: 644,
    label: "Featured · Built in Framer",
    ratio: "1120 / 644",
    featured: true,
    reversed: true,
    page: "/work/orven/",
    link: "https://contra.com/p/vXQvqZle-orven-interior-design-website-built-in-framer"
  },
  {
    title: "AXIOM — Architecture Brand & Website Concept",
    text: "Brand and website concept for an architecture studio: geometric logo, editorial typography and desktop + mobile homepage designs.",
    tags: ["Next.js", "React", "Node.js"],
    image: "/images/work/axiom.webp",
    page: "/work/axiom-architecture-website-concept/",
    link: "https://contra.com/p/cORkYE72-axiom-architecture-brand-and-website-design-concept"
  },
  {
    title: "From Zero to Hero — SaaS Brand & Product",
    text: "My 8-step process for turning a SaaS idea into a complete brand and digital product, from discovery and naming to MVP, launch and brand guidelines.",
    tags: ["Brand Design", "UI Design", "React"],
    image: "/images/work/saasbrand.webp",
    page: "/work/saas-idea-to-brand-and-product/",
    link: "https://contra.com/p/QFUgeq77-from-zero-to-heroturning-a"
  },
  {
    title: "Building a New SaaS Product",
    text: "An Agile, MVP-first approach in six steps: discovery, planning, UI/UX design, development, testing, then launch and improvement.",
    tags: ["Next.js", ".NET", "Supabase"],
    image: "/images/work/saasmvp.webp",
    page: "/work/saas-mvp-development-process/",
    link: "https://contra.com/p/RPWcRgov-building-a-new-saa-s-product"
  }
];

const services = [
  {
    title: "Backend API Development & Integrations",
    points: ["REST & GraphQL APIs", "Third-party integrations", "Auth, caching & performance"],
    price: "$58/hr",
    image: "/images/work/svc-api.webp",
    link: "https://contra.com/s/3NBqBQmq-backend-api-development-and-integrations"
  },
  {
    title: "AI Integrations & Workflow Automation",
    points: ["LLM features in your product", "Automated workflows", "RAG & internal tools"],
    price: "$60/hr",
    image: "/images/work/svc-ai.webp",
    link: "https://contra.com/s/6MNbYPQs-ai-integrations-and-workflow-automation"
  },
  {
    title: "Next.js Website Design & Development",
    points: ["Design to launch", "Fast, SEO-ready pages", "Responsive & animated"],
    price: "$55/hr",
    image: "/images/work/svc-next.webp",
    link: "https://contra.com/s/7ZoZYPLB-nextjs-website-design-and-development"
  },
  {
    title: "SaaS & MVP Development",
    points: ["Discovery & planning", "Full-stack build", "Launch & iteration"],
    price: "Contact for pricing",
    image: "/images/work/svc-saas.webp",
    link: "https://contra.com/s/essYOqOs-saa-s-and-mvp-development"
  }
];

const EASE = [0.22, 1, 0.36, 1];

// Filter groups, worked out from each project's tags.
const filters = [
  { key: "all", label: "All work", match: () => true },
  { key: "framer", label: "Framer", match: (project) => project.tags.includes("Framer") },
  { key: "brand", label: "Brand", match: (project) => project.tags.some((tag) => /Brand|Logo/.test(tag)) },
  { key: "web", label: "Web & SaaS", match: (project) => project.tags.some((tag) => /Next\.js|React|\.NET|Supabase/.test(tag)) }
];

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
      title={label}
    />
  );
};

const ProjectCard = ({ project, number, size }) => {
  // "Velor Coffee House — Brand Identity & Website" -> name + what it is
  const [name, ...rest] = project.title.split(" — ");
  const kind = rest.join(" — ");

  return (
    <motion.a
      layout
      className={`wkCard ${size}`}
      href={project.page}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div className="wkMedia" style={{ "--ratio": size === "wide" ? "16 / 8.2" : "16 / 10" }}>
        {project.video ? (
          <ProjectVideo src={project.video} poster={project.image} label={project.title} width={project.width} height={project.height} />
        ) : (
          <img src={project.image} alt={project.title} width={project.width || 960} height={project.height || 720} loading="lazy" decoding="async" />
        )}
        <span className="wkNumber">{String(number).padStart(2, "0")}</span>
        {project.label && <span className="wkBadge">{project.label.split(" · ")[0]}</span>}
        <span className="wkArrow" aria-hidden="true">↗</span>
      </div>

      <div className="wkInfo">
        <div className="wkInfoMain">
          <h3 className="wkName">{name}</h3>
          {kind && <div className="wkKind">{kind}</div>}
          <p className="wkText">{project.text}</p>
        </div>
        <div className="wkInfoSide">
          <div className="wkTags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {project.gallery && size === "wide" && (
            <div className="wkGallery">
              {project.gallery.map((shot) => (
                <img key={shot.src} src={shot.src} alt={shot.alt} width="720" height="480" loading="lazy" decoding="async" />
              ))}
            </div>
          )}
          <div className="wkMore">Read the case study <span aria-hidden="true">→</span></div>
        </div>
      </div>
    </motion.a>
  );
};

const ContraWork = () => {
  const [filter, setFilter] = useState("all");
  const active = filters.find((item) => item.key === filter);
  const shown = useMemo(() => projects.filter(active.match), [active]);

  // Layout: the first project is full width, the rest sit two per row;
  // if one is left over at the end it also takes the full width, so no row has a gap.
  const sizeOf = (index) => (index === 0 || (index === shown.length - 1 && shown.length % 2 === 0) ? "wide" : "half");

  return (
    <section className="wk">
      <header className="wkHead">
        <motion.div className="wkEyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
          Selected work · {projects.length} projects
        </motion.div>
        <motion.h1 className="wkTitle" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}>
          Websites, brands and products, <em>designed and built.</em>
        </motion.h1>
        <motion.p className="wkSub" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}>
          Recent website, brand and SaaS projects. Open any project to read its case study,
          or <a href="/work/">browse all case studies</a>. I am available for hire
          on <a href={PROFILE_URL} target="_blank" rel="noreferrer">Contra</a>.
        </motion.p>

        <div className="wkFilters" role="tablist" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={filter === item.key}
              className={`wkFilter ${filter === item.key ? "isActive" : ""}`}
              onClick={() => setFilter(item.key)}
            >
              {filter === item.key && <motion.span layoutId="wkFilterPill" className="wkFilterPill" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
              <span className="wkFilterLabel">{item.label}</span>
              <span className="wkFilterCount">{projects.filter(item.match).length}</span>
            </button>
          ))}
        </div>
      </header>

      <div className="wkGrid">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((project, index) => (
            <ProjectCard key={project.title} project={project} number={index + 1} size={sizeOf(index)} />
          ))}
        </AnimatePresence>
      </div>

      <div className="wkServices">
        <div className="wkServicesHead">
          <div>
            <div className="wkEyebrow">Services</div>
            <h2 className="wkServicesTitle">How I can help</h2>
          </div>
          <p className="wkServicesSub">
            Hire me for a single piece of work or the whole build. Each service is booked through Contra.
          </p>
        </div>

        <ul className="wkServiceGrid">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: EASE, delay: index * 0.07 }}
            >
              <a href={service.link} target="_blank" rel="noreferrer" className="wkService">
                <div className="wkServiceTop">
                  <span className="wkServiceNo">{String(index + 1).padStart(2, "0")}</span>
                  <span className="wkServiceArrow" aria-hidden="true">↗</span>
                </div>
                <h3 className="wkServiceName">{service.title}</h3>
                <ul className="wkServicePoints">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="wkServiceFoot">
                  <span className="wkServicePrice">{service.price}</span>
                  <span className="wkServiceHire">Hire on Contra</span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContraWork;
