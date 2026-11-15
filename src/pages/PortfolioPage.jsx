import ContraWork from "../component/ContraWork/ContraWork";
import Portfolio from "../component/Portfolio/Portfolio";

// Selected projects and services first, then earlier work.
const PortfolioPage = () => (
  <div className="page pagePortfolio">
    <ContraWork />

    <div className="wkEarlier">
      <div className="wkEyebrow">Archive</div>
      <h2 className="wkEarlierTitle">Earlier work</h2>
    </div>

    <Portfolio />
  </div>
);

export default PortfolioPage;
