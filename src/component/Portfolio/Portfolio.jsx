import { useState } from "react";
import "../../Style/Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeClass, setactiveClass] = useState(1);
  const [activeClassMG, setactiveClassMG] = useState("0%");

  const openLink=(data)=> {
    window.open(data, '_blank');
}
  return (
    <>
      <div className="PortfolioSection">
        <div className="portfolioMain">
          <div className="bigportfoliobar" >
          <div className="portfolioMainas1" onClick={()=>openLink("https://22westmedia.com/web-team")}>
             <img src="images/al6.svg " alt="as1" className="imgAS1" value='Developed and maintained a live streaming radio website using React JS, Node JS, SCSS, CSS, Bootstrap, JavaScript, and modern animation libraries, enhancing user engagement and experience. Implemented GitHub and CI/CD pipelines, resulting in a 10% reduction in development time and improved code quality and deployment efficiency.'></img>
            </div>
         <div className="portfolioMainas1" onClick={()=>openLink("https://k14-dev.netlify.app/")} >
             <img src="images/al1.svg " alt="as1" className="imgAS1" ></img>
            </div>
            <div className="portfolioMainas1" onClick={()=>openLink("https://github.com/kenilvaghasiya/SearchEngine")}>
             <img src="images/al5.svg " alt="as1" className="imgAS1" value="Led the development of a sophisticated information retrieval system using Python, achieving rapid searching and best-in-class search functionality. Successfully processed and indexed over 30,000 diverse documents from the National Parks Service, including .txt and .json files. This streamlined document handling for the search engine, optimizing data retrieval."></img>
            </div>

            <div className="portfolioMainas1">
              <img src="images/al2.svg  " alt="as1" className="imgAS1"></img>
            </div>

               <div className="portfolioMainas1" onClick={()=>openLink("https://scholarworld.netlify.app/")}>
            <img src="images/al3.svg  " alt="as1" className="imgAS1"></img>
            </div>

            <div className="portfolioMainas1" onClick={()=>openLink("https://dribbble.com/kenil_vaghasiya")}>
             <img src="images/al4.svg " alt="as1" className="imgAS1"></img>
            </div>
  
       
          </div>
        </div>

     
      </div>
    </>
  );
};

export default Portfolio;
