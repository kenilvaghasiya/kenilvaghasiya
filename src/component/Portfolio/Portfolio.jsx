import "../../Style/Portfolio.css";
import { motion } from "framer-motion";

const Portfolio = () => {
  const openLink=(data)=> {
    window.open(data, '_blank');
}

  const portfolioItems = [
    { image: "images/al6.svg ", link: "https://22westmedia.com/web-team", alt: "project 1" },
    { image: "images/al1.svg ", link: "https://k14-dev.netlify.app/", alt: "project 2" },
    { image: "images/al5.svg ", link: "https://github.com/kenilvaghasiya/SearchEngine", alt: "project 3" },
    { image: "images/al2.svg  ", link: "", alt: "project 4" },
    { image: "images/al3.svg  ", link: "https://scholarworld.netlify.app/", alt: "project 5" },
    { image: "images/al4.svg ", link: "https://dribbble.com/kenil_vaghasiya", alt: "project 6" }
  ];

  return (
    <>
      <div className="PortfolioSection">
        <div className="portfolioMain">
          <motion.div
            className="bigportfoliobar"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={`${item.alt}-${index}`}
                className="portfolioMainas1"
                onClick={() => item.link && openLink(item.link)}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <img src={item.image} alt={item.alt} className="imgAS1"></img>
              </motion.div>
            ))}
          </motion.div>
        </div>

     
      </div>
    </>
  );
};

export default Portfolio;
