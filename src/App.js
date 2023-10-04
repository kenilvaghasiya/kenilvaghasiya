import { useRef } from "react";
import "./Style/app.css"
import About from "./component/about/About";
import Navbar from "./component/navbar/Navbar";
import Titlebar from "./component/titlebar/Titlebar";

function App() {
  const titleRef = useRef();
  const abouttitleRef = useRef();

  function handleClick(data) {
    if(data==="home"){
    titleRef.current.scrollIntoView({ behavior: "smooth" });}
    else if (data ==="about"){
      abouttitleRef.current.scrollIntoView({ behavior: "smooth" });}

    }
  


  return (

    
    <div >
      <Navbar datapass={(data)=>{handleClick(data)}}></Navbar>
      <Titlebar titleRef={titleRef}></Titlebar>
      <About abouttitleRef={abouttitleRef}></About>
      

  
    </div>
  );
}

export default App;
