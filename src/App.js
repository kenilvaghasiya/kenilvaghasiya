import React, { Suspense, useEffect } from 'react';
import "./Style/app.css";
import Navbar from "./component/navbar/Navbar";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
import { ScrollProgress } from "./motion/Motion";
import { preloadPages } from "./pages/routes";
import { usePageSeo } from "./pages/seo";

const EASE = [0.22, 1, 0.36, 1];

/*
 * Site shell: the navbar and scroll bar stay in place, and the current page
 * (Home, About, Portfolio or Contact) fades and slides in between them.
 */
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const outlet = useOutlet();

  usePageSeo(location.pathname);

  // Once the first page is up and the browser is idle, fetch the other pages so switching is instant.
  useEffect(() => {
    const run = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 1500));
    run(() => preloadPages());
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar pathname={location.pathname} onNavigate={(path) => navigate(path)} />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.main
          key={location.pathname}
          className="pageShell"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } }}
          exit={{ opacity: 0, y: -16, transition: { duration: 0.22, ease: "easeIn" } }}
        >
          <Suspense fallback={<div className="pageLoading" aria-hidden="true"></div>}>{outlet}</Suspense>
        </motion.main>
      </AnimatePresence>
    </MotionConfig>
  );
}

export default App;
