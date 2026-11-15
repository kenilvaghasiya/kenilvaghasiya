import "../../Style/about.css";
import { motion } from "framer-motion";
import Experience from "../Experience/Experience";
import LinkedInSlider from "../LinkedInSlider/LinkedInSlider";
import ContraButton from "../ContraButton/ContraButton";
import { CountUp, Magnetic, RevealText, chipGroup, chipItem } from "../../motion/Motion";

const About = (prop) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 }
  };

  const certifications = [
    {
      title: "Python for Data Science and AI",
      issuer: "Coursera",
      issued: "Issued Jul 2020",
      credentialId: "",
      logo: "C",
      logoClass: "coursera",
      url: "#"
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      issuer: "Udemy",
      issued: "Issued Jan 2021",
      credentialId: "UC-6ce88c28-718b-4d78-bbdd-879904fd2dfd",
      logo: "U",
      logoClass: "udemy",
      url: "#"
    },
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google",
      issued: "Issued Apr 2021",
      credentialId: "A2E4MR42UKGA",
      logo: "G",
      logoClass: "google",
      url: "#"
    },
    {
      title: "Python for Everybody",
      issuer: "University of Michigan",
      issued: "Issued Jul 2020",
      credentialId: "9KU45MTKRX3F",
      logo: "M",
      logoClass: "michigan",
      url: "#"
    },
    {
      title: "Python for Data Science and AI",
      issuer: "IBM",
      issued: "Issued Jul 2020",
      credentialId: "",
      logo: "IBM",
      logoClass: "ibm",
      url: "#"
    },
    {
      title: "Databases and SQL for Data Science",
      issuer: "IBM",
      issued: "Issued Jul 2020",
      credentialId: "",
      logo: "IBM",
      logoClass: "ibm",
      url: "#"
    }
  ];


  return (
    <>
      <section className="AboutPage" ref={prop.abouttitleRef}>
        <motion.div
          className="aboutVisual"
          initial={{ opacity: 0, scale: 0.85, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aboutVisualGlow" aria-hidden="true"></div>
          <motion.img
            src="/images/about.webp"
            alt=""
            width="862"
            height="635"
            loading="lazy"
            decoding="async"
            className="aboutVisualImage"
          />
          <motion.div
            className="aboutBadge aboutBadgeTop"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <strong><CountUp value="4+" /></strong> years building products
          </motion.div>
          <motion.div
            className="aboutBadge aboutBadgeBottom"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Full-Stack &amp; Framer
          </motion.div>
        </motion.div>

        <motion.div
          className="aboutContent"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="aboutgrd" variants={fadeUp} transition={{ duration: 0.5 }}>Nice to meet you</motion.div>
          <h2 className="aboutTitle"><RevealText text="About Me" /></h2>
          <motion.p className="abotText" variants={fadeUp} transition={{ duration: 0.5 }}>
            Software Engineer with 4+ years of experience building scalable, cloud-native web applications across frontend and
            backend systems. Strong expertise in React, TypeScript, ASP.NET Core, Node.js, and Azure, with proven impact in
            microservices, distributed systems, API design, and performance optimization.
          </motion.p>
          <motion.p className="abotText" variants={fadeUp} transition={{ duration: 0.5 }}>
            I also design and build websites in Framer: responsive, animated marketing sites and brand concepts, taken from
            Figma design through to a published Framer site.
          </motion.p>
          <motion.div className="aboutStats" variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="aboutStat">
              <strong><CountUp value="40%" /></strong>
              <span>performance improvement</span>
            </div>
            <div className="aboutStat">
              <strong><CountUp value="60%" /></strong>
              <span>API latency reduction</span>
            </div>
            <div className="aboutStat">
              <strong><CountUp value="90%+" /></strong>
              <span>test coverage</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Experience />

      <LinkedInSlider></LinkedInSlider>

      <motion.div
        className="skillsSection"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h2 className="skillsTitle"><RevealText text="Skills" /></h2>

        <div className="skillsGroup">
          <h3 className="skillsGroupTitle">Languages</h3>
          <motion.div className="skillsChips" variants={chipGroup} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>C#</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>JavaScript</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>TypeScript</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Java</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Python</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>SQL</motion.span>
          </motion.div>
        </div>

        <div className="skillsGroup">
          <h3 className="skillsGroupTitle">Frontend</h3>
          <motion.div className="skillsChips" variants={chipGroup} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>React.js</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Next.js</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Redux</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>HTML5</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>CSS3</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Responsive Design</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Framer</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Figma</motion.span>
          </motion.div>
        </div>

        <div className="skillsGroup">
          <h3 className="skillsGroupTitle">Backend</h3>
          <motion.div className="skillsChips" variants={chipGroup} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>ASP.NET Core</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>.NET</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Node.js</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>REST APIs</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>GraphQL</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Microservices</motion.span>
          </motion.div>
        </div>

        <div className="skillsGroup">
          <h3 className="skillsGroupTitle">Cloud</h3>
          <motion.div className="skillsChips" variants={chipGroup} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Microsoft Azure</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>AWS S3</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>AWS CloudFront</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>AWS Lambda</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Azure Service Bus</motion.span>
          </motion.div>
        </div>

        <div className="skillsGroup">
          <h3 className="skillsGroupTitle">Databases</h3>
          <motion.div className="skillsChips" variants={chipGroup} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>SQL Server</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>PostgreSQL</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Cosmos DB</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>MongoDB</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Redis</motion.span>
          </motion.div>
        </div>

        <div className="skillsGroup">
          <h3 className="skillsGroupTitle">DevOps</h3>
          <motion.div className="skillsChips" variants={chipGroup} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Docker</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Kubernetes</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>CI/CD</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Azure DevOps</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Git</motion.span>
          </motion.div>
        </div>

        <div className="skillsGroup">
          <h3 className="skillsGroupTitle">Architecture</h3>
          <motion.div className="skillsChips" variants={chipGroup} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Distributed Systems</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Event-Driven Architecture</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Caching</motion.span>
            <motion.span variants={chipItem} whileHover={{ y: -4, scale: 1.06 }}>Concurrency</motion.span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="impactSection"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="impactShowcase">
          <motion.div className="impactFeatureCard emerald" whileHover={{ y: -5 }}>
            <div className="impactTopLine">
              <div className="impactMainValue"><CountUp value="40%" /></div>
              <div className="impactMainIcon">⚡</div>
            </div>
            <div className="impactMainText">Performance improvement in production systems</div>
            <button className="impactArrowBtn" aria-label="Open performance impact">↗</button>
          </motion.div>

          <motion.div className="impactFeatureCard sand" whileHover={{ y: -5 }}>
            <div className="impactTopLine">
              <div className="impactMainValue dark"><CountUp value="90%+" /></div>
              <div className="impactMainIcon green">◎</div>
            </div>
            <div className="impactMainText dark">Reliable test coverage and release confidence</div>
            <button className="impactArrowBtn light" aria-label="Open testing impact">↗</button>
          </motion.div>

          <motion.div className="impactFeatureCard clean" whileHover={{ y: -5 }}>
            <div className="impactTopLine">
              <div className="impactMainValue dark"><CountUp value="300%" /></div>
              <div className="impactStars">★ ★ ★ ★ ☆</div>
            </div>
            <div className="impactMainText lightDark">Daily active user growth through performance and API optimization</div>
            <button className="impactArrowBtn darkBtn" aria-label="Open growth impact">↗</button>
          </motion.div>
        </div>
        <div className="impactMiniStats">
          <div><strong><CountUp value="30%" /></strong> defect reduction</div>
          <div><strong><CountUp value="60%" /></strong> API latency reduction</div>
          <div><strong><CountUp value="25%" /></strong> lower memory usage</div>
          <div><strong><CountUp value="90%+" /></strong> test coverage</div>
        </div>
      </motion.div>

      <motion.div
        className="certSection"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h2 className="certTitle"><RevealText text="Certifications & Achievements" /></h2>

      

        <div className="certMarquee">
        <div className="certTrendGrid">
          {[...certifications, ...certifications].map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
              className={`certTrendCard tone${(index % 6) + 1}`}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="certTrendTop">
                <div className={`certLogo ${cert.logoClass}`}>{cert.logo}</div>
                <div className="certTrendMeta">
                  <div className="certIssuer">{cert.issuer}</div>
                  <div className="certIssued">{cert.issued}</div>
                </div>
              </div>
              <div className="certTrendBody">
                <div className="certName">{cert.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.div>

 


      <motion.div
        className="recruiterCtaSection"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="recruiterCtaLeft">
          <h2 className="recruiterCtaTitle"><RevealText text="Let’s Build High-Impact Products" /></h2>
          <div className="recruiterCtaSub">
            Available for Software Engineer and Full-Stack roles, and Framer website projects, focused on scalable products, cloud systems, and AI-powered features.
          </div>
        </div>
        <div className="recruiterCtaRight">
          <Magnetic strength={0.3}><a href="mailto:kenilvaghasiya66@gmail.com" className="recruiterBtn recruiterBtnPrimary">Email Me</a></Magnetic>
          <Magnetic strength={0.3}><a href="https://www.linkedin.com/in/kenil704/" target="_blank" rel="noreferrer" className="recruiterBtn recruiterBtnGhost">LinkedIn</a></Magnetic>
          <div className="recruiterContra">
            <ContraButton theme="light" />
          </div>
        </div>
      </motion.div>

    </>
  );
};

export default About;
