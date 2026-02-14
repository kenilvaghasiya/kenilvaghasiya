import "../../Style/about.css";
import { motion } from "framer-motion";
import CardSection from "../cardSection/CardSection";
import LinkedInSlider from "../LinkedInSlider/LinkedInSlider";
import DashboardReplica from "../dashboardReplica/DashboardReplica";

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
         Software Engineer with over three years of experience developing scalable, cloud-native applications with React, TypeScript,
ASP.NET Core, and Microsoft Azure. Achieved a 40% increase in performance, reduced defects by 30%, and maintained over 90%
test coverage through effective architecture and CI/CD practices. Skilled in distributed systems, microservices, and AI-driven
solutions, including LLM integration and RAG pipelines. </p>
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
            date="Jun 2024 - Present"
            company="UnivSoftware.com, Inc."
            highlights={[
              "Built a QR-based Quick Check-In flow that reduced customer check-in time by 60%.",
              "Redesigned system and database architecture, improving response speed by 40% and supporting 3x user load.",
              "Implemented unit and integration testing with 95% code coverage to improve release confidence.",
              "Led 4 engineers on PHP and AWS/RDS delivery, improving execution quality and team velocity.",
              "Migrated legacy modules to a modern stack, cutting maintenance cost by 50% and improving reliability.",
              "Set up Jenkins and GitLab CI/CD pipelines, reducing deployment time by 70% and increasing release frequency by 200%."
            ]}
          />
         
       



<CardSection
            name="Full-stack Developer"
            margin={120}
            date="Jan 2020 - Jul 2022"
            company="Rejoicehub Solutions"
            highlights={[
              "Developed production-ready websites using React.js and Next.js with reusable UI components.",
              "Improved interactivity and front-end performance through efficient DOM and state management patterns.",
              "Implemented CI/CD workflows to accelerate release cycles and reduce deployment errors.",
              "Collaborated across design and engineering to unblock bottlenecks and improve sprint delivery."
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
            company="Associated Students, Inc. CSULB"
            highlights={[
              "Built and maintained interactive web experiences using React.js, Next.js, HTML, CSS, and JavaScript.",
              "Extended Joomla CMS using PHP and custom modules to support organization-specific workflows.",
              "Improved accessibility by implementing WCAG-aligned components and UI behavior.",
              "Delivered a live streaming platform using React.js and Node.js.",
              "Improved team collaboration and handoff quality using Git/GitHub and Figma-based workflows."
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
            <span>C++</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Java</span>
            <span>Python</span>
            <span>PHP</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Frameworks & APIs</div>
          <div className="skillsChips">
            <span>ASP.NET Core</span>
            <span>.NET</span>
            <span>WPF</span>
            <span>Node.js</span>
            <span>Entity Framework Core</span>
            <span>REST APIs</span>
            <span>GraphQL</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Frontend</div>
          <div className="skillsChips">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Redux</span>
            <span>Fluent UI</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>SCSS</span>
            <span>Bootstrap</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Cloud & Systems</div>
          <div className="skillsChips">
            <span>Microsoft Azure</span>
            <span>Azure App Service</span>
            <span>Azure Functions</span>
            <span>Service Bus</span>
            <span>Event Grid</span>
            <span>Azure Blob Storage</span>
            <span>Key Vault</span>
            <span>Azure AD</span>
            <span>Azure AI Studio</span>
            <span>Windows SDK</span>
            <span>PowerShell</span>
            <span>AWS EC2</span>
            <span>AWS S3</span>
            <span>AWS Lambda</span>
            <span>RDS</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">DevOps & Infrastructure</div>
          <div className="skillsChips">
            <span>Docker</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Azure DevOps</span>
            <span>GitLab</span>
            <span>Jenkins</span>
            <span>CI/CD Pipelines</span>
            <span>Terraform</span>
            <span>Bicep</span>
            <span>Azure Kubernetes Service (AKS)</span>
            <span>AWS</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Databases & Caching</div>
          <div className="skillsChips">
            <span>SQL Server</span>
            <span>PostgreSQL</span>
            <span>Cosmos DB</span>
            <span>Redis</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">AI & Personalization</div>
          <div className="skillsChips">
            <span>LLM Integration</span>
            <span>LangChain</span>
            <span>Semantic Kernel</span>
            <span>RAG</span>
            <span>Vector Databases</span>
            <span>AI Orchestration</span>
            <span>Recommendation Systems</span>
            <span>NLP</span>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsGroupTitle">Core Concepts</div>
          <div className="skillsChips">
            <span>Object-Oriented Design</span>
            <span>Software Architecture</span>
            <span>Distributed Systems</span>
            <span>Performance Optimization</span>
            <span>Experimentation Frameworks</span>
            <span>Jira</span>
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
              <div className="impactMainValue dark">4x</div>
              <div className="impactStars">★ ★ ★ ★ ☆</div>
            </div>
            <div className="impactMainText lightDark">Traffic and engagement growth from product launch work</div>
            <button className="impactArrowBtn darkBtn" aria-label="Open growth impact">↗</button>
          </motion.div>
        </div>
        <div className="impactMiniStats">
          <div><strong>30%</strong> defect reduction</div>
          <div><strong>70%</strong> faster deployments</div>
          <div><strong>200%</strong> release frequency gain</div>
          <div><strong>60%</strong> faster check-in flow</div>
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
        </div>
      </motion.div>

    </>
  );
};

export default About;
