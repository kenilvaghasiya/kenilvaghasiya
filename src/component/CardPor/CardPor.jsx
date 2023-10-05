import { Link } from "react-router-dom";
import "../../Style/CardPor.css";

const CardPor = (props) => {
  return (
    <>
    <Link to={props.link}>
      <div className="card">
        <div className="wrapper">
          <img src={props.image1} className="cover-image" alt="img" />
        </div>
        <img
          src={props.image3}
          className="title"
          alt="img"
        />
        <img src={props.image2} className="character" alt="img" />
      </div>
      </Link>
    </>
  );
};

export default CardPor;
