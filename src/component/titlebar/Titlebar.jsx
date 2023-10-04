import { TypeAnimation } from "react-type-animation";
import "../../Style/Titlebar.css";
import { Link } from "react-router-dom";
const Titlebar = (prop) => {

    const downloadTxtFile = () => {
        fetch('images/Kenil_v_resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'KenilResume.pdf';
                alink.click();
            })
        })
    }


  return (
    <div className="homePage" id="HomePage" ref={prop.titleRef}>
    <div className="Titlebar">
        <div className="TitlebarItem">Kenil Vaghasiya</div>
        <div className="resumeBtn"  onClick={downloadTxtFile} >Resume</div> 
    </div>
    <div className="mainSection">
        <div className="Titilename">Kenil Vaghasiya</div>
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
        <div className="logosectionMain">
          <Link to="https://www.linkedin.com/in/kenil704/">  <img src="images/linkedin.png" alt="linkedin" className="iconLogo"/></Link>
          <Link to="https://github.com/kenilvaghasiya"><img src="images/code.png" alt="code" className="iconLogo"/></Link>
          <Link to="https://dribbble.com/kenil_vaghasiya"> <img src="images/dribbble.png" alt="dribbble"className="iconLogo" /></Link>


        </div>

    </div>
    <div className="bgDesign">
        <img src="images/es1.svg" alt="bgimage"></img>
        </div>
    </div>

    

  );
};

export default Titlebar