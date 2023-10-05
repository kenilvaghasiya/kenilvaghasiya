import { useRef } from "react";
import "./Style/app.css";
import About from "./component/about/About";
import Navbar from "./component/navbar/Navbar";
import Titlebar from "./component/titlebar/Titlebar";
import CardPor from "./component/CardPor/CardPor";
import { Fade ,Zoom,Bounce} from "react-awesome-reveal";
import Contact from "./component/Contact/Contact";
function App() {
  const titleRef = useRef();
  const abouttitleRef = useRef();
  const Portfolioref = useRef();


  function handleClick(data) {
    if (data === "home") {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (data === "about") {
      abouttitleRef.current.scrollIntoView({ behavior: "smooth" });
    }
    else if (data === "Portfolio") {
      Portfolioref.current.scrollIntoView({ behavior: "smooth" });
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
      <div className="WorkcardSection">
      <Fade>
        <CardPor
          image1="images/asd/card1.png"
          image2="images/asd/card11.png"
          image3="images/asd/card111.png"
          link="https://kenilvaghasiya.com/"
        />
        <CardPor
          image1="images/asd/card2.png"
          image2="images/asd/card22.png"
          image3="images/asd/card222.png"
          link="https://kenilvaghasiya.com/"
        />

        <CardPor
          image1="images/asd/card3.png"
          image2="images/asd/card33.png"
          image3="images/asd/card111.png"
          link="https://k14-dev.netlify.app/"
        />
        <CardPor
          image1="images/asd/card4.png"
          image2="images/asd/card44.png"
          image3="images/asd/card444.png"
          link="https://kenilvaghasiya.com/"
        />
        <CardPor
          image1="images/asd/card5.png"
          image2="images/asd/card55.png"
          image3="images/asd/card555.png"
          link="https://scholarworld.netlify.app/"
        />

        <CardPor
          image1="images/asd/card6.png"
          image2="images/asd/card66.png"
          image3="images/asd/card666.png"
          link="https://www.linkedin.com/feed/update/urn:li:activity:6716957315137904640/?originTrackingId=tzq4QJ6RRK%2BjhFZ%2FPOotkw%3D%3D"
        />
        </Fade>
      </div>

      <Contact></Contact>
    </div>
  );
}

export default App;
