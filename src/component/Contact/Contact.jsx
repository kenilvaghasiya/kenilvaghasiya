import "../../Style/contact.css"
import { motion } from "framer-motion";
import ParticlePortrait from "../../motion/ParticlePortrait";

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

        <ParticlePortrait
          src="/images/kenilVaghasiya.webp"
          className="Contactus_mainimg"
          alt="Kenil Vaghasiya, full stack developer and Framer developer"
        />

      <div className="Contactus_mainimg-left">
        <div className="Contactus_mainimgName">Kenil Vaghasiya</div>
        <div className="Contactus_mainimgpo">Full Stack &amp; Framer Developer</div>
        <div className="Contactus_mainimgEmail">kenilvaghasiya66@gmail.com</div>

      </div>


    </motion.div>
    </div>



    </>)
}

export default Contact
