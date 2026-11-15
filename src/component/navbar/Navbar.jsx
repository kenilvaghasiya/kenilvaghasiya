import { useState } from "react";
import "../../Style/navbar.css";
import { motion } from "framer-motion";

const items = [
  { key: "/", label: "Home" },
  { key: "/about", label: "About" },
  { key: "/portfolio", label: "Portfolio" },
  { key: "/contact", label: "Contact" }
];

const Navbar = (prop) => {
  const [hovered, setHovered] = useState(null);
  // The white pill sits on the hovered item, otherwise on the page you are on.
  const page = items.find((item) => item.key !== "/" && prop.pathname.startsWith(item.key))?.key ?? "/";
  const current = hovered ?? page;

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
          <motion.a
            key={item.key}
            href={item.key}
            whileTap={{ scale: 0.94 }}
            className={`NavbarItem ${current === item.key ? "isActive" : ""}`}
            aria-current={page === item.key ? "page" : undefined}
            onMouseEnter={() => setHovered(item.key)}
            onClick={(event) => {
              // Plain clicks switch page in place; ctrl/cmd-click still opens a new tab.
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
              event.preventDefault();
              setHovered(null);
              if (page === item.key) window.scrollTo({ top: 0, behavior: "smooth" });
              else prop.onNavigate(item.key);
            }}
          >
            {current === item.key && (
              <motion.span
                layoutId="navPill"
                className="NavbarPill"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="NavbarLabel">{item.label}</span>
          </motion.a>
        ))}
        <motion.div whileHover={{ y: -3, rotate: -8 }} whileTap={{ scale: 0.9 }} className="topItem" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src="/images/Arrow.png" alt="Back to top"></img>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
