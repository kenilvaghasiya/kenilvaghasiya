import "../../Style/navbar.css";
import { motion } from "framer-motion";

const Navbar = (prop) => {

 
  return (
    <motion.div
      className="NavBar"
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <div className="NavbarCard">
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="NavbarItem" onClick={()=>prop.datapass("home")}>Home</motion.div>
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="NavbarItem" onClick={()=>prop.datapass("about")}>About</motion.div> 
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="NavbarItem" onClick={()=>prop.datapass("Portfolio")}>Portfolio</motion.div>
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="NavbarItem" onClick={()=>prop.datapass("Contact")}>Contact</motion.div>
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="topItem" onClick={()=>prop.datapass("home")}>
            <img src="images/Arrow.png" alt="arrow"></img>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
