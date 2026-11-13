import { useState } from "react";
import "../../Style/navbar.css";
import { motion } from "framer-motion";

const items = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "Portfolio", label: "Portfolio" },
  { key: "Contact", label: "Contact" }
];

const Navbar = (prop) => {
  const [hovered, setHovered] = useState(null);
  // The white pill sits on the hovered item, otherwise on the section in view.
  const current = hovered ?? prop.active ?? "home";

  return (
    <motion.div
      className="NavBar"
      layoutRoot
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <div className="NavbarCard" onMouseLeave={() => setHovered(null)}>
        {items.map((item) => (
          <motion.div
            key={item.key}
            whileTap={{ scale: 0.94 }}
            className={`NavbarItem ${current === item.key ? "isActive" : ""}`}
            onMouseEnter={() => setHovered(item.key)}
            onClick={() => prop.datapass(item.key)}
          >
            {current === item.key && (
              <motion.span
                layoutId="navPill"
                className="NavbarPill"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="NavbarLabel">{item.label}</span>
          </motion.div>
        ))}
        <motion.div whileHover={{ y: -3, rotate: -8 }} whileTap={{ scale: 0.9 }} className="topItem" onClick={()=>prop.datapass("home")}>
            <img src="images/Arrow.png" alt="arrow"></img>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
