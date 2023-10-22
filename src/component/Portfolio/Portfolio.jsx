import { useState } from "react";
import "../../Style/Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeClass, setactiveClass] = useState(1);
  const [activeClassMG, setactiveClassMG] = useState("0%");

  return (
    <>
      <div className="PortfolioSection">
        <div className="portfolioMain">
          <div className="bigportfoliobar" style={{marginLeft:activeClassMG}}>
          <Link to="https://k14-dev.netlify.app/">  <div className="portfolioMainas1">
             <img src="images/al1.png" alt="as1" className="imgAS1"></img>
            </div></Link>

            <div className="portfolioMainas1">
              <img src="images/al2.png" alt="as1" className="imgAS1"></img>
            </div>

            <Link to="https://scholarworld.netlify.app/">   <div className="portfolioMainas1">
            <img src="images/al3.png" alt="as1" className="imgAS1"></img>
            </div></Link>

            <Link to={"https://dribbble.com/kenil_vaghasiya"}>   <div className="portfolioMainas1">
             <img src="images/al4.png" alt="as1" className="imgAS1"></img>
            </div>
            </Link>
          </div>
        </div>

        <div className="selectPortfolio">
          <div
            className={
              activeClass === 1
                ? "selectPortfoliobtn selectPortfoliobtn_act"
                : "selectPortfoliobtn"
            }
            onClick={() => {
              setactiveClassMG(0);
              setactiveClass(1)
            }}
          ></div>
          <div
            className={
              activeClass === 2
                ? "selectPortfoliobtn selectPortfoliobtn_act"
                : "selectPortfoliobtn"
            }
            onClick={() => {
              setactiveClassMG("-100%");
              setactiveClass(2)
            }}
          ></div>
          <div
            className={
              activeClass === 3
                ? "selectPortfoliobtn selectPortfoliobtn_act"
                : "selectPortfoliobtn"
            }
            onClick={() => {
              setactiveClassMG("-200%");
              setactiveClass(3)
            }}
          ></div>
          <div
            className={
              activeClass === 4
                ? "selectPortfoliobtn selectPortfoliobtn_act"
                : "selectPortfoliobtn"
            }
            onClick={() => {
              setactiveClassMG("-300%");
              setactiveClass(4)
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
