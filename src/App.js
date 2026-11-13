import React, { useRef, useState } from 'react';
import "./Style/app.css";
import About from "./component/about/About";
import Navbar from "./component/navbar/Navbar";
import Titlebar from "./component/titlebar/Titlebar";
import Contact from "./component/Contact/Contact";
import Portfolio from "./component/Portfolio/Portfolio";
import ContraWork from "./component/ContraWork/ContraWork";
import { MotionConfig, useMotionValueEvent, useScroll } from "framer-motion";
import { RevealText, ScrollProgress } from "./motion/Motion";

function App() {
  const titleRef = useRef();
  const abouttitleRef = useRef();
  const Portfolioref = useRef();
  const ContactRef = useRef();
  const [active, setActive] = useState("home");

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

  // Track which section is on screen so the navbar pill can follow it.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", () => {
    const sections = [
      ["home", titleRef],
      ["about", abouttitleRef],
      ["Portfolio", Portfolioref],
      ["Contact", ContactRef]
    ];
    const line = window.innerHeight * 0.5;
    let next = "home";
    for (const [key, ref] of sections) {
      if (ref.current && ref.current.getBoundingClientRect().top <= line) next = key;
    }
    setActive((prev) => (prev === next ? prev : next));
  });

  return (
    <MotionConfig reducedMotion="user">
    <div>
      <ScrollProgress />
      <Navbar
        active={active}
        datapass={(data) => {
          handleClick(data);
        }}
      ></Navbar>
      <Titlebar titleRef={titleRef} onViewWork={() => handleClick("Portfolio")}></Titlebar>
      <About abouttitleRef={abouttitleRef}></About>
      {/* Work: latest Contra projects first, then the portfolio grid. The navbar's "Portfolio" scrolls here. */}
      <div ref={Portfolioref}>
        <ContraWork />

        <h2 className="Portfolioname">
          <RevealText text="Portfolio" />
        </h2>

        <Portfolio></Portfolio>
      </div>

      <Contact contactRef={ContactRef} onScroll=""></Contact>
    </div>
    </MotionConfig>
  );
}

export default App;
