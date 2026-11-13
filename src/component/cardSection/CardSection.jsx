import "../../Style/card.css"
import { motion } from "framer-motion";

const CardSection =(prop)=>{
    const highlights = Array.isArray(prop.highlights)
      ? prop.highlights
      : [];

    return(<>
         <motion.div
          className="cardSection"
          style={{ marginTop:prop.margin }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
         >
         <div className="titleBar">
            <h3 className="titlename">{prop.name}</h3>
            <div className="dateSection">{prop.date}</div>
         </div>
         <div className="companyName">
         {prop.company}
         </div>

         <div className="textSection">
            {highlights.length > 0 ? (
              <ul className="highlightsList">
                {highlights.map((item, index) => (
                  <li key={`${prop.name}-${index}`}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{prop.text}</p>
            )}
         </div>
        </motion.div>
    </>)
}

export default CardSection
