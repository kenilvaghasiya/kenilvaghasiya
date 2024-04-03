import "../../Style/about.css";
import { motion } from "framer-motion";
import CardSection from "../cardSection/CardSection";

const About = (prop) => {
  return (
    <>
      <div className="AboutPage" ref={prop.abouttitleRef}>
        <motion.div whileHover={{ scale: 1.2 }} className="aboutImage">
          <img src="images/about.png" alt="about"></img>
        </motion.div>
        <div className="aboutTitle">About Me</div>

        <div className="aboutgrd">Nice to meet you</div>
        <div className="abotText">
          <p>
            I'm a dynamic Full-stack Developer pursuing a Master's in Computer
            Science at California State University, Long Beach, after earning a
            Bachelor's in Information Technology from Indus University.
            Proficient in JavaScript, TypeScript, Python, C, C++, and Java. I
            lead in tech, using React, Next.js, and AWS for captivating web
            experiences with a focus on accessibility and WCAG compliance.
            Notable achievements include boosting productivity and security at
            Rejoice Hub Solutions and crafting innovative UI/UX designs at
            Cybervie-Ionots Technologies. I'm passionate about innovation,
            user-centric solutions, and collaboration. As a data-driven Full
            Stack Developer, I translate user needs into top-notch solutions.
          </p>
        </div>
      </div>
      <div className="roadmapSection">

        <div className="roadmapSectionLeft">
       
          <CardSection
            name="Full-stack Developer"
            margin={0}
            date="Sep 2023 - Present"
            company="Associated Students, Inc. CSULB"
            text="Innovative web developer with expertise in HTML, CSS, and JavaScript, integrating cutting-edge technologies like React and Next.js for dynamic, immersive platforms. Optimized Joomla CMS with PHP extensions, championed WCAG compliance, and orchestrated live streaming radio station using React.js and Node.js. Proficient in Git/GitHub for version control and streamlined design-to-development workflow with Figma, fostering collaborative and efficient processes."
          />
         
       

<CardSection
            name="UI UX Designer Intern"
            margin={200}
            date="Apr 2021 - Jun 2021"
            company="Cybervie-Ionots Technologies Pvt Ltd"
            text="UI/UX DESIGNER: Leveraged Figma, Illustrator, and Photoshop to create visually compelling flyers, books, and readingmaterials for cyber security education. Delivered innovation and user-friendly solutions to the forefront of cybersecuritylearning experiences. Conducted research and created user profiles, wireframes, and prototypes."
          />
       

        </div>
        <div className="roadmapSectionCenter">
          <div className="mappathDesign">
            <div className="mappathDesigncenter"></div>
          </div>
        </div>
        <div className="roadmapSectionright">
       

        <CardSection
            name="Full-stack Developer"
            margin={450}
            date="Jun 2021 - Jul 2022"
            company="Rejoicehub Solutions"
            text="jQuery expert, enhanced web interactivity through streamlined DOM manipulation, ensuring seamless user experiences. Spearheaded revolutionary Continuous Integration/Continuous Deployment pipelines for efficient feature delivery. Developed dynamic React JS and Next JS websites with strategic UI library integration. Utilized a versatile toolset for secure, scalable solutions. Improved productivity through clear communication, task delegation, and strategic bottleneck resolution, showcasing a commitment to high-performance web solutions."
          />
       

       

<CardSection
            name="Full-stack Developer"
            margin={200}
            date="Jun 2021 - Jul 2022"
            company="Rejoicehub Solutions"
            text="FULL-STACK DEVELOPER: Constructed dynamic and interactive websites utilizing React JS and Next JS. Deliveredexceptional user experiences through effective UI libraries usage. Leveraged S3, App Sync, Cognito, SES, Code Commit,Amplify, EC2, and Lambda to create secure and scalable solutions. Enables seamless code management and efficientcollaboration with development teams. Navigated full application development life cycle from requirements gatheringto modular structure wiring, workflow."
          />


        </div>



      </div>


    </>
  );
};

export default About;
