import "../../Style/about.css";
import { motion } from "framer-motion";
import CardSection from "../cardSection/CardSection";
import LinkedInSlider from "../LinkedInSlider/LinkedInSlider";
import DashboardReplica from "../dashboardReplica/DashboardReplica";
import ContraButton from "../ContraButton/ContraButton";

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
      <motion.div
        className="AboutPage"
        ref={prop.abouttitleRef}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <motion.div whileHover={{ scale: 1.08 }} className="aboutImage">
          <img src="images/about.png" alt="about"></img>
        </motion.div>
        <motion.div className="aboutTitle" variants={fadeUp} transition={{ delay: 0.1, duration: 0.45 }}>About Me</motion.div>

        <motion.div className="aboutgrd" variants={fadeUp} transition={{ delay: 0.15, duration: 0.45 }}>Nice to meet you</motion.div>
        <motion.div className="abotText" variants={fadeUp} transition={{ delay: 0.2, duration: 0.45 }}>
          <p>
          Software Engineer with 4+ years of experience building scalable, cloud-native web applications across frontend and
backend systems. Strong expertise in React, TypeScript, ASP.NET Core, Node.js, and Azure, with proven impact in microservices,
distributed systems, API design, and performance optimization. Delivered measurable outcomes including 40% performance improvement,
60% API latency reduction, and 90%+ test coverage in production SaaS environments. </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="roadmapSection"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >

        <div className="roadmapSectionLeft">
       
          <CardSection
            name="Software Developer"
            margin={0}
            date="Jun 2024 - Dec 2025"
            company="UnivSoftware.com, Inc. — Las Vegas, NV"
            highlights={[
              "Designed and implemented RESTful APIs using ASP.NET Core supporting high-traffic SaaS workloads.",
              "Built scalable React.js + TypeScript frontend architecture with reusable components and strict typing, reducing post-release defects by 30%.",
              "Improved full-stack performance by 40% using SSR, Redis caching, AWS CloudFront CDN, and asset optimization.",
              "Architected microservices deployed via Azure App Services and Docker containers.",
              "Built event-driven workflows using Azure Service Bus for asynchronous processing.",
              "Optimized SQL queries and indexing strategies in PostgreSQL and SQL Server, improving throughput under concurrent load.",
              "Integrated LLM-powered AI features for intelligent invoice summaries and automated customer communication workflows.",
              "Developed end-to-end tests using Jest, Cypress, and React Testing Library with 90%+ coverage.",
              "Collaborated in Agile/Scrum teams on architecture decisions and CI/CD deployments."
            ]}
          />
         
       



<CardSection
            name="Full-stack Developer"
            margin={120}
            date="Jan 2020 - Jul 2022"
            company="Rejoice Hub Solutions — Surat, India"
            highlights={[
              "Developed enterprise billing and CRM systems using TypeScript and RESTful backend APIs.",
              "Improved API response times from 450ms to 180ms under 5,000+ concurrent users using async processing and caching.",
              "Built AI-driven automation modules using Python and Azure ML APIs.",
              "Reduced memory consumption by 25% through performance profiling and optimized object lifecycle management.",
              "Developed automated test suites improving system reliability and Core Web Vitals by 35%."
            ]}
          />
       

        </div>
        <div className="roadmapSectionCenter">
          <div className="mappathDesign">
            <motion.div
              className="mappathDesigncenter"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
            ></motion.div>
          </div>
        </div>
        <div className="roadmapSectionright">
       

        <CardSection
            name="Full-stack Developer"
            margin={70}
            date="Sep 2023 - May 2024"
            company="Associated Students, Inc. — Long Beach, CA"
            highlights={[
              "Developed full-stack applications using React.js, Node.js, and REST APIs serving 10,000+ student users.",
              "Designed real-time streaming features and dynamic UI rendering pipelines.",
              "Built backend services for authentication, event tracking, and analytics dashboards.",
              "Increased daily active users by 300% through optimized frontend performance and API enhancements.",
              "Implemented secure authentication flows (JWT, OAuth) and improved API response times."
            ]}
          />

       




        </div>



      </motion.div>

      <LinkedInSlider></LinkedInSlider>

      <motion.div
        className="skillsSection"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="skillsTitle">Skills</div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Languages</div>
          <div className="skillsChips">
            <span>C#</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Java</span>
            <span>Python</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Frontend</div>
          <div className="skillsChips">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Redux</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Responsive Design</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Backend</div>
          <div className="skillsChips">
            <span>ASP.NET Core</span>
            <span>.NET</span>
            <span>Node.js</span>
            <span>REST APIs</span>
            <span>GraphQL</span>
            <span>Microservices</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Cloud</div>
          <div className="skillsChips">
            <span>Microsoft Azure</span>
            <span>AWS S3</span>
            <span>AWS CloudFront</span>
            <span>AWS Lambda</span>
            <span>Azure Service Bus</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Databases</div>
          <div className="skillsChips">
            <span>SQL Server</span>
            <span>PostgreSQL</span>
            <span>Cosmos DB</span>
            <span>MongoDB</span>
            <span>Redis</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">DevOps</div>
          <div className="skillsChips">
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>CI/CD</span>
            <span>Azure DevOps</span>
            <span>Git</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Architecture</div>
          <div className="skillsChips">
            <span>Distributed Systems</span>
            <span>Event-Driven Architecture</span>
            <span>Caching</span>
            <span>Concurrency</span>
          </div>
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
              <div className="impactMainValue">40%</div>
              <div className="impactMainIcon">⚡</div>
            </div>
            <div className="impactMainText">Performance improvement in production systems</div>
            <button className="impactArrowBtn" aria-label="Open performance impact">↗</button>
          </motion.div>

          <motion.div className="impactFeatureCard sand" whileHover={{ y: -5 }}>
            <div className="impactTopLine">
              <div className="impactMainValue dark">90%+</div>
              <div className="impactMainIcon green">◎</div>
            </div>
            <div className="impactMainText dark">Reliable test coverage and release confidence</div>
            <button className="impactArrowBtn light" aria-label="Open testing impact">↗</button>
          </motion.div>

          <motion.div className="impactFeatureCard clean" whileHover={{ y: -5 }}>
            <div className="impactTopLine">
              <div className="impactMainValue dark">300%</div>
              <div className="impactStars">★ ★ ★ ★ ☆</div>
            </div>
            <div className="impactMainText lightDark">Daily active user growth through performance and API optimization</div>
            <button className="impactArrowBtn darkBtn" aria-label="Open growth impact">↗</button>
          </motion.div>
        </div>
        <div className="impactMiniStats">
          <div><strong>30%</strong> defect reduction</div>
          <div><strong>60%</strong> API latency reduction</div>
          <div><strong>25%</strong> lower memory usage</div>
          <div><strong>90%+</strong> test coverage</div>
        </div>
      </motion.div>

      <motion.div
        className="certSection"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="certTitle">Certifications & Achievements</div>

      

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

 

      <DashboardReplica />

      <motion.div
        className="recruiterCtaSection"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="recruiterCtaLeft">
          <div className="recruiterCtaTitle">Let’s Build High-Impact Products</div>
          <div className="recruiterCtaSub">
            Available for Software Engineer and Full-Stack roles focused on scalable products, cloud systems, and AI-powered features.
          </div>
        </div>
        <div className="recruiterCtaRight">
          <a href="mailto:kenilvaghasiya66@gmail.com" className="recruiterBtn recruiterBtnPrimary">Email Me</a>
          <a href="https://www.linkedin.com/in/kenil704/" target="_blank" rel="noreferrer" className="recruiterBtn recruiterBtnGhost">LinkedIn</a>
          <div className="recruiterContra">
            <ContraButton theme="light" />
          </div>
        </div>
      </motion.div>

    </>
  );
};

export default About;
