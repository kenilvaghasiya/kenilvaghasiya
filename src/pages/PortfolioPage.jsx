import ContraWork from "../component/ContraWork/ContraWork";
import Portfolio from "../component/Portfolio/Portfolio";
import { RevealText } from "../motion/Motion";

// Latest Contra projects and services first, then the portfolio grid.
const PortfolioPage = () => (
  <div className="page pagePortfolio">
    <ContraWork />

    <h2 className="Portfolioname">
      <RevealText text="Portfolio" />
    </h2>

    <Portfolio />
  </div>
);

export default PortfolioPage;
