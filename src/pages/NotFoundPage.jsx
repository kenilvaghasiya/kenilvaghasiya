import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Shown for any address that is not a page on this site.
const NotFoundPage = () => (
  <div className="page pageNotFound">
    <motion.div
      className="nfCode"
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      aria-hidden="true"
    >
      404
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}>
      <h1 className="nfTitle">This page does not exist.</h1>
      <p className="nfText">The link may be old or mistyped. Here is where you can go instead.</p>
      <div className="nfActions">
        <Link className="nfBtn nfBtnPrimary" to="/">Back to home</Link>
        <Link className="nfBtn" to="/portfolio">View my work</Link>
        <a className="nfBtn" href="/work/">Read the blog</a>
        <Link className="nfBtn" to="/contact">Contact</Link>
      </div>
    </motion.div>
  </div>
);

export default NotFoundPage;
