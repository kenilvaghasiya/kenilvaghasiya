import { useNavigate } from "react-router-dom";
import Titlebar from "../component/titlebar/Titlebar";

const HomePage = () => {
  const navigate = useNavigate();
  return <Titlebar onViewWork={() => navigate("/portfolio")} />;
};

export default HomePage;
