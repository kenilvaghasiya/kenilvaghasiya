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
          As a Senior Software Developer with a Master's degree in Computer Science, I have consistently driven innovation and led technical initiatives, specializing in full-stack development and scalable cloud solutions. At UnivSoftware.com, I have been instrumental in enhancing our Auto Repair Manager software by integrating AWS cloud services and optimizing our SAAS application's performance. My expertise spans PHP, JavaScript, React JS, Node JS, and UI/UX design, with a strong foundation in HTML, CSS, and modern animation libraries. I have a proven track record of creating engaging user interfaces, such as my notable project at California State University, Long Beach, which significantly enhanced user experience. Additionally, I am skilled in leveraging AWS (EC2, S3, Lambda) for cloud infrastructure, implementing DevOps practices, and fostering collaboration and continuous improvement among teams. My passion lies in developing innovative software solutions that solve real-world problems, and I am eager to bring my technical expertise to a role focused on impactful projects and technological advancements.
          </p>
        </div>
      </div>
      <div className="roadmapSection">

        <div className="roadmapSectionLeft">
       
          <CardSection
            name="Senior Software Developer"
            margin={0}
            date="Jun 2024 - Present"
            company="UnivSoftware.com, Inc."
            text="Developed and implemented a Quick Check-In feature using QR codes, reducing check-in time by 60%.Strategized system and database architecture to enhance scalability, achieving a 40% increase in response speed and tripling user capacity.Enforced unit and integration testing, attaining 95% code coverage, ensuring software reliability and quality.Led a team of 4 engineers on PHP projects, optimizing solution delivery and project workflows using AWS and RDS.Improved UI design, resulting in a 40% increase in user task efficiency.Spearheaded the migration of legacy systems to a modern tech stack, leading to a 50% reduction in maintenance costs and improved system reliability.Implemented CI/CD pipelines using Jenkins and GitLab, reducing deployment time by 70% and increasing deployment frequency by 200%."
          />
         
       



<CardSection
            name="Full-stack Developer"
            margin={200}
            date="Jun 2021 - Jul 2022"
            company="Rejoicehub Solutions"
            text="jQuery expert, enhanced web interactivity through streamlined DOM manipulation, ensuring seamless user experiences. Spearheaded revolutionary Continuous Integration/Continuous Deployment pipelines for efficient feature delivery. Developed dynamic React JS and Next JS websites with strategic UI library integration. Utilized a versatile toolset for secure, scalable solutions. Improved productivity through clear communication, task delegation, and strategic bottleneck resolution, showcasing a commitment to high-performance web solutions."
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
            date="Sep 2023 - May 2024"
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



      </div>


    </>
  );
};

export default About;
