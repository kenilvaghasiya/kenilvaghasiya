import React, { useState, useEffect, useRef } from 'react';
import "./Style/app.css";
import About from "./component/about/About";
import Navbar from "./component/navbar/Navbar";
import Titlebar from "./component/titlebar/Titlebar";
import CardPor from "./component/CardPor/CardPor";
import { Fade ,Zoom,Bounce} from "react-awesome-reveal";
import Contact from "./component/Contact/Contact";
import Portfolio from "./component/Portfolio/Portfolio";
function App() {
  const titleRef = useRef();
  const abouttitleRef = useRef();
  const Portfolioref = useRef();
  const ContactRef = useRef();



  function handleClick(data) {
    if (data === "home") {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (data === "about") {
      abouttitleRef.current.scrollIntoView({ behavior: "smooth" });
    }
    else if (data === "Portfolio") {
      Portfolioref.current.scrollIntoView({ behavior: "smooth" });
    }
    else if (data === "Contact") {
      ContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }




  return (
    <div>
      <Navbar
        datapass={(data) => {
          handleClick(data);
        }}
      ></Navbar>
      <Titlebar titleRef={titleRef}></Titlebar>
      <About abouttitleRef={abouttitleRef}></About>
      <div className="Portfolioname" ref={Portfolioref}>Portfolio</div>
 
      <Portfolio></Portfolio>

      <Contact contactRef={ContactRef} onScroll=""></Contact>
    </div>
  );
}

export default App;
