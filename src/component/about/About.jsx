import "../../Style/aboutPage.css";
import { motion } from "framer-motion";
import Experience from "../Experience/Experience";
import LinkedInSlider from "../LinkedInSlider/LinkedInSlider";
import ContraButton from "../ContraButton/ContraButton";
import { CountUp, Magnetic, RevealText, chipGroup, chipItem } from "../../motion/Motion";

const EASE = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.2 } };

const facts = [
  { label: "Role", value: "Full-Stack & Framer Developer" },
  { label: "Experience", value: "4+ years" },
  { label: "Based in", value: "Surat, India · Remote" },
  { label: "Education", value: "M.S. Computer Science, CSULB" }
];

const results = [
  { value: "40%", label: "faster full-stack performance in production" },
  { value: "60%", label: "lower API latency under concurrent load" },
  { value: "300%", label: "growth in daily active users" },
  { value: "90%+", label: "automated test coverage" }
];

const skills = [
  { title: "Languages", items: ["C#", "JavaScript", "TypeScript", "Java", "Python", "SQL"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Responsive Design"] },
  { title: "Design & No-code", items: ["Framer", "Figma", "UI/UX Design", "Brand Design"] },
  { title: "Backend", items: ["ASP.NET Core", ".NET", "Node.js", "REST APIs", "GraphQL", "Microservices"] },
  { title: "Cloud", items: ["Microsoft Azure", "Azure Service Bus", "AWS S3", "AWS CloudFront", "AWS Lambda"] },
  { title: "Databases", items: ["SQL Server", "PostgreSQL", "Cosmos DB", "MongoDB", "Redis"] },
  { title: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "Azure DevOps", "Git"] },
  { title: "Architecture", items: ["Distributed Systems", "Event-Driven Architecture", "Caching", "Concurrency"] }
];

const education = [
  {
    degree: "Master of Science, Computer Science",
    school: "California State University, Long Beach",
    date: "2022 – 2024"
  },
  {
    degree: "Bachelor’s, Information Science",
    school: "Indus University",
    date: "2018 – 2022"
  }
];

const certifications = [
  { title: "React – The Complete Guide (Hooks, React Router, Redux)", issuer: "Udemy", issued: "Jan 2021", logo: "U", tone: "udemy" },
  { title: "Foundations of User Experience (UX) Design", issuer: "Google", issued: "Apr 2021", logo: "G", tone: "google" },
  { title: "Python for Everybody", issuer: "University of Michigan", issued: "Jul 2020", logo: "M", tone: "michigan" },
  { title: "Python for Data Science and AI", issuer: "IBM", issued: "Jul 2020", logo: "IBM", tone: "ibm" },
  { title: "Databases and SQL for Data Science", issuer: "IBM", issued: "Jul 2020", logo: "IBM", tone: "ibm" },
  { title: "Python for Data Science and AI", issuer: "Coursera", issued: "Jul 2020", logo: "C", tone: "coursera" }
];

const SectionHead = ({ eyebrow, title, sub }) => (
  <div className="abHead">
    <div className="abEyebrow">{eyebrow}</div>
    <h2 className="abTitle"><RevealText text={title} /></h2>
    {sub && <p className="abSub">{sub}</p>}
  </div>
);

const About = () => (
  <div className="ab">
    {/* ---------- Intro ---------- */}
    <section className="abIntro">
      <motion.div className="abIntroText" variants={stagger} initial="hidden" animate="show">
        <motion.div className="abEyebrow" variants={fadeUp}>About me</motion.div>
        <motion.h1 className="abHeadline" variants={fadeUp}>
          I build <mark>scalable products</mark>, and the websites that present them.
        </motion.h1>
        <motion.p className="abLead" variants={fadeUp}>
          Software Engineer with 4+ years of experience building scalable, cloud-native web applications across frontend and
          backend systems. Strong expertise in React, TypeScript, ASP.NET Core, Node.js, and Azure, with proven impact in
          microservices, distributed systems, API design, and performance optimization.
        </motion.p>
        <motion.p className="abLead" variants={fadeUp}>
          I also design and build websites in Framer: responsive, animated marketing sites and brand concepts, taken from
          Figma design through to a published Framer site.
        </motion.p>
        <motion.div className="abActions" variants={fadeUp}>
          <Magnetic strength={0.25}><a className="abBtn abBtnPrimary" href="mailto:kenilvaghasiya66@gmail.com">Email me</a></Magnetic>
          <Magnetic strength={0.25}><a className="abBtn abBtnGhost" href="https://www.linkedin.com/in/kenil704/" target="_blank" rel="noreferrer">LinkedIn</a></Magnetic>
          <Magnetic strength={0.25}><a className="abBtn abBtnGhost" href="https://github.com/kenilvaghasiya" target="_blank" rel="noreferrer">GitHub</a></Magnetic>
        </motion.div>
      </motion.div>

      <motion.aside
        className="abProfile"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
      >
        <div className="abPhoto">
          <img src="/images/kenilVaghasiya.webp" alt="Kenil Vaghasiya" width="1292" height="1340" decoding="async" />
          <div className="abAvailable"><span aria-hidden="true"></span>Available for work</div>
        </div>
        <dl className="abFacts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </motion.aside>
    </section>

    {/* ---------- Results ---------- */}
    <motion.section className="abResults" variants={stagger} {...inView} aria-label="Results">
      {results.map((result) => (
        <motion.div className="abResult" key={result.label} variants={fadeUp}>
          <strong><CountUp value={result.value} /></strong>
          <span>{result.label}</span>
        </motion.div>
      ))}
    </motion.section>

    <Experience />

    {/* ---------- Skills ---------- */}
    <section className="abSection">
      <SectionHead eyebrow="Toolkit" title="Skills" sub="The languages, frameworks and platforms I work with day to day." />
      <motion.div className="abSkills" variants={stagger} {...inView} viewport={{ once: true, amount: 0.1 }}>
        {skills.map((group) => (
          <motion.div className="abSkillCard" key={group.title} variants={fadeUp}>
            <h3>{group.title}</h3>
            <motion.div className="abChips" variants={chipGroup}>
              {group.items.map((skill) => (
                <motion.span key={skill} variants={chipItem}>{skill}</motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* ---------- Education & certifications ---------- */}
    <section className="abSection">
      <SectionHead eyebrow="Background" title="Education & Certifications" />
      <div className="abCredentials">
        <motion.div className="abEducation" variants={stagger} {...inView}>
          {education.map((item) => (
            <motion.div className="abEduCard" key={item.school} variants={fadeUp}>
              <div className="abEduDate">{item.date}</div>
              <h3>{item.degree}</h3>
              <div className="abEduSchool">{item.school}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.ul className="abCerts" variants={stagger} {...inView}>
          {certifications.map((cert) => (
            <motion.li key={`${cert.title}-${cert.issuer}`} variants={fadeUp}>
              <span className={`abCertLogo ${cert.tone}`} aria-hidden="true">{cert.logo}</span>
              <span className="abCertText">
                <span className="abCertName">{cert.title}</span>
                <span className="abCertMeta">{cert.issuer} · {cert.issued}</span>
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>

    <LinkedInSlider />

    {/* ---------- Call to action ---------- */}
    <motion.section className="abCta" variants={fadeUp} {...inView}>
      <div>
        <h2 className="abCtaTitle"><RevealText text="Let’s build something that lasts." /></h2>
        <p className="abCtaSub">
          Available for Software Engineer and Full-Stack roles, and Framer website projects, focused on scalable products,
          cloud systems, and AI-powered features.
        </p>
      </div>
      <div className="abCtaActions">
        <Magnetic strength={0.3}><a href="mailto:kenilvaghasiya66@gmail.com" className="abBtn abBtnAccent">Email me</a></Magnetic>
        <Magnetic strength={0.3}><a href="https://www.linkedin.com/in/kenil704/" target="_blank" rel="noreferrer" className="abBtn abBtnOnDark">LinkedIn</a></Magnetic>
        <div className="abCtaContra"><ContraButton theme="light" /></div>
      </div>
    </motion.section>
  </div>
);

export default About;
