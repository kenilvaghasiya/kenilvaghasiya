import "../../Style/navbar.css";

const Navbar = (prop) => {

 
  return (
    <div className="NavBar">
      <div className="NavbarCard">
        <div className="NavbarItem" onClick={()=>prop.datapass("home")}>Home</div>
        <div className="NavbarItem" onClick={()=>prop.datapass("about")}>About</div> 
        <div className="NavbarItem">Portfolio</div>
        <div className="NavbarItem">Contact</div>
        <div className="topItem">
            <img src="images/Arrow.png" alt="arrow"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
