import { TypeAnimation } from "react-type-animation";
import "../../Style/Titlebar.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Titlebar = (prop) => {

    const downloadTxtFile = () => {
        fetch('/images/Kenil_P_vaghasiya24.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Kenil_P_vaghasiya24.pdf';
                alink.click();
            })
        })
    }


  return (
    <div className="homePage" id="HomePage" ref={prop.titleRef}>
    <motion.div
      className="Titlebar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
       <motion.div className="TitlebarItem" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
        <NavLink to="/" className="navlinknone">Kenil Vaghasiya </NavLink>
      </motion.div>
        <motion.div className="resumeBtn"  onClick={downloadTxtFile} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Resume</motion.div> 
    </motion.div>
    <motion.div
      className="mainSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
        <motion.div className="Titilename" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.55 }}>Kenil Vaghasiya</motion.div>
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Full Stack developer',
    1000,
    'React JS , Node JS , Next JS ',
    1000,
    'Full Stack Developer',
    1000,
    
  ]}
  speed={20}
  className="fieldname"
  repeat={2}
/>
        <motion.div
          className="logosectionMain"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <motion.div whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link to="https://www.linkedin.com/in/kenil704/">  <img src="images/linkedin.png" alt="linkedin" className="iconLogo"/></Link>
          </motion.div>
          <motion.div whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link to="https://github.com/kenilvaghasiya"><img src="images/code.png" alt="code" className="iconLogo"/></Link>
          </motion.div>
          <motion.div whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link to="https://dribbble.com/kenil_vaghasiya"> <img src="images/dribbble.png" alt="dribbble"className="iconLogo" /></Link>
          </motion.div>


        </motion.div>

    </motion.div>
    <div className="bgDesign">
        <img src="images/es1.svg" alt="bgimage"></img>
        </div>
    </div>

    

  );
};

export default Titlebar
