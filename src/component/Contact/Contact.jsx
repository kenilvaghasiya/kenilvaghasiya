import "../../Style/contact.css"
import { motion } from "framer-motion";

const Contact =(props)=>{

    return(<>

    <div className="Contactus" ref={props.contactRef}>
    <motion.div
      className="Contactus_main"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >

        <motion.img
          src="/images/kenilVaghasiya.webp"
          loading="lazy"
          decoding="async"
          className="Contactus_mainimg"
          alt="Kenil Vaghasiya"
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

      <div className="Contactus_mainimg-left">
        <div className="Contactus_mainimgName">Kenil Vaghasiya</div>
        <div className="Contactus_mainimgpo">Full Stack Developer</div>
        <div className="Contactus_mainimgEmail">kenilvaghasiya66@gmail.com</div>

      </div>


    </motion.div>
    </div>



    </>)
}

export default Contact
