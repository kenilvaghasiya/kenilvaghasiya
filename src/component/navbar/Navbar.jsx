import "../../Style/navbar.css";

const Navbar = () => {
  return (
    <div className="NavBar">
      <div className="NavbarCard">
        <div className="NavbarItem">Home</div>
        <div className="NavbarItem">About</div> 
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
