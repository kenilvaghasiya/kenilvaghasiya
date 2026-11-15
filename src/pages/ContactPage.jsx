import Contact from "../component/Contact/Contact";
import { RevealText } from "../motion/Motion";

const ContactPage = () => (
  <div className="page pageContact">
    <h1 className="pageTitle"><RevealText text="Let’s work together" /></h1>
    <p className="pageLead">
      Open to Software Engineer and Full-Stack roles, and Framer website projects.{" "}
      <a href="mailto:kenilvaghasiya66@gmail.com">kenilvaghasiya66@gmail.com</a>
    </p>
    <Contact />
  </div>
);

export default ContactPage;
