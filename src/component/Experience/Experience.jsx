import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import "../../Style/experience.css";
import { RevealText } from "../../motion/Motion";

// Newest first.
const jobs = [
  {
    title: "Software Engineer",
    company: "Clerxi",
    location: "United States",
    date: "Present",
    current: true,
    highlights: []
  },
  {
    title: "Software Developer",
    company: "UnivSoftware.com, Inc.",
    location: "Las Vegas, NV",
    date: "Jun 2024 – Dec 2025",
    highlights: [
      "Designed and implemented RESTful APIs using ASP.NET Core supporting high-traffic SaaS workloads.",
      "Built scalable React.js + TypeScript frontend architecture with reusable components and strict typing, reducing post-release defects by 30%.",
      "Improved full-stack performance by 40% using SSR, Redis caching, AWS CloudFront CDN, and asset optimization.",
      "Architected microservices deployed via Azure App Services and Docker containers.",
      "Built event-driven workflows using Azure Service Bus for asynchronous processing.",
      "Optimized SQL queries and indexing strategies in PostgreSQL and SQL Server, improving throughput under concurrent load.",
      "Integrated LLM-powered AI features for intelligent invoice summaries and automated customer communication workflows.",
      "Developed end-to-end tests using Jest, Cypress, and React Testing Library with 90%+ coverage.",
      "Collaborated in Agile/Scrum teams on architecture decisions and CI/CD deployments."
    ]
  },
  {
    title: "Full-stack Developer",
    company: "Associated Students, Inc.",
    location: "Long Beach, CA",
    date: "Sep 2023 – May 2024",
    highlights: [
      "Developed full-stack applications using React.js, Node.js, and REST APIs serving 10,000+ student users.",
      "Designed real-time streaming features and dynamic UI rendering pipelines.",
      "Built backend services for authentication, event tracking, and analytics dashboards.",
      "Increased daily active users by 300% through optimized frontend performance and API enhancements.",
      "Implemented secure authentication flows (JWT, OAuth) and improved API response times."
    ]
  },
  {
    title: "Full-stack Developer",
    company: "Rejoice Hub Solutions",
    location: "Surat, India",
    date: "Jan 2020 – Jul 2022",
    highlights: [
      "Developed enterprise billing and CRM systems using TypeScript and RESTful backend APIs.",
      "Improved API response times from 450ms to 180ms under 5,000+ concurrent users using async processing and caching.",
      "Built AI-driven automation modules using Python and Azure ML APIs.",
      "Reduced memory consumption by 25% through performance profiling and optimized object lifecycle management.",
      "Developed automated test suites improving system reliability and Core Web Vitals by 35%."
    ]
  }
];

const VISIBLE = 3;
const EASE = [0.22, 1, 0.36, 1];

const JobCard = ({ job, index }) => {
  const [open, setOpen] = useState(false);
  const side = index % 2 === 0 ? "left" : "right";
  const extra = job.highlights.slice(VISIBLE);

  return (
    <li className={`expItem ${side}`}>
      <motion.span
        className={`expDot ${job.current ? "isCurrent" : ""}`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 18 }}
        aria-hidden="true"
      />
      <motion.article
        className="expCard"
        initial={{ opacity: 0, x: side === "left" ? -50 : 50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: EASE }}
        whileHover={{ y: -4 }}
      >
        <div className="expMeta">
          <span className={`expDate ${job.current ? "isCurrent" : ""}`}>
            {job.current && <span className="expLive" aria-hidden="true"></span>}
            {job.date}
          </span>
          <span className="expLocation">{job.location}</span>
        </div>
        <h3 className="expRole">{job.title}</h3>
        <div className="expCompany">{job.company}</div>

        {job.highlights.length > 0 && (
          <ul className="expList">
            {job.highlights.slice(0, VISIBLE).map((line) => (
              <li key={line}>{line}</li>
            ))}
            <AnimatePresence initial={false}>
              {open &&
                extra.map((line, i) => (
                  <motion.li
                    key={line}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto", transition: { duration: 0.3, delay: i * 0.03 } }}
                    exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                  >
                    {line}
                  </motion.li>
                ))}
            </AnimatePresence>
          </ul>
        )}

        {extra.length > 0 && (
          <button type="button" className="expToggle" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
            {open ? "Show less" : `Show ${extra.length} more`}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} aria-hidden="true">↓</motion.span>
          </button>
        )}
      </motion.article>
    </li>
  );
};

/* Work history as a timeline: the centre line fills in as you scroll through it. */
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  return (
    <section className="expSection">
      <div className="expEyebrow">Career</div>
      <h2 className="expTitle"><RevealText text="Experience" /></h2>
      <p className="expSub">Where I have worked, most recent first.</p>

      <ol className="expTimeline" ref={ref}>
        <span className="expLine" aria-hidden="true">
          <motion.span className="expLineFill" style={{ scaleY: fill }} />
        </span>
        {jobs.map((job, index) => (
          <JobCard key={`${job.company}-${job.date}`} job={job} index={index} />
        ))}
      </ol>
    </section>
  );
};

export default Experience;
