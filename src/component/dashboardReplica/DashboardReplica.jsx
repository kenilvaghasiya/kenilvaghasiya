import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import "../../Style/dashboardReplica.css";
import { RevealText } from "../../motion/Motion";

const properties = [
  {
    id: 1,
    type: "Apartment",
    transaction: "Buy",
    price: 3300000,
    beds: 3,
    baths: 4,
    area: 890,
    image: "linear-gradient(160deg, #1d3b53 0%, #3f7ea6 45%, #f2b880 100%)",
    title: "Full Burj view | Vacant",
    location: "Burj Vista 1, Burj Vista, Downtown Dubai, Dubai",
    featured: false
  },
  {
    id: 2,
    type: "Flat",
    transaction: "Buy",
    price: 4699000,
    beds: 3,
    baths: 4,
    area: 1572,
    image: "linear-gradient(160deg, #2b2440 0%, #6a4c93 50%, #f7a072 100%)",
    title: "Luxurious | Burj Khalifa View | High Floor",
    location: "Exquisite Living Residences, Downtown Dubai, Dubai",
    featured: true
  },
  {
    id: 3,
    type: "Townhouse",
    transaction: "Buy",
    price: 4699000,
    beds: 2,
    baths: 2,
    area: 1120,
    image: "linear-gradient(160deg, #0f3d3e 0%, #2a9d8f 55%, #e9c46a 100%)",
    title: "Contemporary interiors with skyline view",
    location: "Downtown Boulevard, Dubai",
    featured: false
  },
  {
    id: 4,
    type: "Gardenscae",
    transaction: "Rent",
    price: 270000,
    beds: 4,
    baths: 5,
    area: 2200,
    image: "linear-gradient(160deg, #3a2618 0%, #b5651d 50%, #ffd9a0 100%)",
    title: "Garden villa with private pool access",
    location: "Jumeirah Park, Dubai",
    featured: false
  }
];

const toCurrency = (value) => `AED ${value.toLocaleString()}`;

const TypeIcon = ({ type }) => {
  if (type === "Apartment") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="4" width="10" height="15" rx="1.5"></rect>
        <path d="M10 7h1M13 7h1M10 10h1M13 10h1M10 13h1M13 13h1"></path>
        <path d="M4 20h16"></path>
      </svg>
    );
  }
  if (type === "Townhouse") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10l9-7 9 7"></path>
        <path d="M5 10v10h14V10"></path>
        <path d="M10 20v-6h4v6"></path>
      </svg>
    );
  }
  if (type === "Gardenscae") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16"></path>
        <path d="M12 20V9"></path>
        <path d="M12 9c0-2 2-3 4-3 0 2-1 4-4 4z"></path>
        <path d="M12 11c0-2-2-3-4-3 0 2 1 4 4 4z"></path>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20h16"></path>
      <rect x="6" y="7" width="12" height="13" rx="1.5"></rect>
      <path d="M8 10h8M8 13h8M8 16h8"></path>
    </svg>
  );
};

const DashboardReplica = () => {
  const [typeFilter, setTypeFilter] = useState("Apartment");
  const [transaction, setTransaction] = useState("Buy");
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [beds, setBeds] = useState(1);
  const [baths, setBaths] = useState(1);
  const [zoom, setZoom] = useState(10);

  const filtered = useMemo(() => {
    const result = properties.filter((item) => {
      return (
        item.type === typeFilter &&
        item.transaction === transaction &&
        item.price <= maxPrice &&
        item.beds >= beds &&
        item.baths >= baths
      );
    });
    return result.length ? result : properties.slice(0, 2);
  }, [typeFilter, transaction, maxPrice, beds, baths]);

  const visible = useMemo(() => {
    const extra = properties.filter((p) => !filtered.some((f) => f.id === p.id));
    return [...filtered, ...extra].slice(0, 4);
  }, [filtered]);

  return (
    <motion.section
      className="dashboardReplicaSection"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="dashboardReplicaTitle"><RevealText text="Dashboard UI Demo" /></div>
      <div className="dashboardReplicaSub">Interactive real-estate UI replica with working filters and controls.</div>

      <div className="estateReplicaFrame">
        <div className="estateReplicaTop">
          <div><span className="estateReplicaDot"></span> Welcome Kenil,</div>
          <div>{filtered.length} properties found</div>
          <button className="estateReplicaTopButton">Show 50 properties ▾</button>
        </div>

        <div className="estateReplicaGrid">
          <div className="estateReplicaSidebar">
            <div className="estateReplicaHeading">Find your best home</div>
            <div className="estateReplicaSearch">
              <button>Downtown Dubai ✕</button>
              <button>{transaction} ▾</button>
            </div>

              <div className="estateReplicaLabel">Property Type</div>
              <div className="estateReplicaTypeGrid">
              {["Apartment", "Townhouse", "Gardenscae", "Flat"].map((type) => (
                <button
                  key={type}
                  className={typeFilter === type ? "active" : ""}
                  onClick={() => setTypeFilter(type)}
                >
                  <TypeIcon type={type} />
                  <span>{type}</span>
                </button>
              ))}
            </div>

            <div className="estateReplicaLabel">Transaction</div>
            <div className="estateReplicaToggle">
              <button className={transaction === "Buy" ? "active" : ""} onClick={() => setTransaction("Buy")}>Buy</button>
              <button className={transaction === "Rent" ? "active" : ""} onClick={() => setTransaction("Rent")}>Rent</button>
            </div>

            <div className="estateReplicaLabel">Price Range</div>
            <div className="estateReplicaRangeText">AED 50,000 - {toCurrency(maxPrice).replace("AED ", "")}</div>
            <input
              className="estateReplicaRange"
              type="range"
              min={100000}
              max={10000000}
              step={50000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />

            <div className="estateReplicaLabel">Property Rooms</div>
            <div className="estateReplicaRooms">
              <div>
                <button onClick={() => setBeds((v) => Math.max(1, v - 1))}>-</button>
                <span>{beds}</span>
                <button onClick={() => setBeds((v) => Math.min(6, v + 1))}>+</button>
                <small>Bedrooms</small>
              </div>
              <div>
                <button onClick={() => setBaths((v) => Math.max(1, v - 1))}>-</button>
                <span>{baths}</span>
                <button onClick={() => setBaths((v) => Math.min(6, v + 1))}>+</button>
                <small>Bathrooms</small>
              </div>
            </div>
          </div>

            <div className="estateReplicaCards">
              {visible.slice(0, 2).map((item, index) => (
                <motion.article
                  key={item.id}
                  className={`estateReplicaCard top ${index === 1 ? "featured" : ""}`}
                  whileHover={{ y: -4 }}
                >
                  <div className="estateReplicaImage" style={{ backgroundImage: item.image }}>
                    {index === 0 && <div className="estateReplicaBadge">Property of the week</div>}
                  </div>
                  <div className="estateReplicaPrice">{toCurrency(item.price)}</div>
                  <div className="estateReplicaMeta">{item.title}</div>
                  <div className="estateReplicaMeta">Area: {item.area.toLocaleString()} sqft</div>
                  <div className="estateReplicaSpecs">{item.beds} Beds • {item.baths} Baths</div>
                  {index === 1 && (
                    <div className="estateReplicaPills">
                      <span className="yellow">SIGNATURE</span>
                      <span>OFF-PLAN</span>
                    </div>
                  )}
                </motion.article>
              ))}
              {visible.slice(2, 4).map((item) => (
                <motion.article key={item.id} className="estateReplicaCard short" whileHover={{ y: -4 }}>
                  <div className="estateReplicaImage" style={{ backgroundImage: item.image }}></div>
                  <div className="estateReplicaPrice mini">{toCurrency(item.price)}</div>
                </motion.article>
              ))}
            </div>

            <div className="estateReplicaMap">
            <div className="estateReplicaMapTexture"></div>
            <span className="estateRoad r1"></span>
            <span className="estateRoad r2"></span>
            <span className="estateRoad r3"></span>
            <span className="estateRoad r4"></span>
            <span className="estateRoad r5"></span>
            <div className="estateReplicaPin p1"></div>
            <div className="estateReplicaPin p2"></div>
            <div className="estateReplicaPin p3"></div>
            <div className="estateReplicaPin p4"></div>
            <div className="estateReplicaTag t1">AED 7,270,000</div>
            <div className="estateReplicaTag t2">AED 1,270,000</div>
            <div className="estateReplicaTag t3">AED 3,270,000</div>
            <div className="estateReplicaTag t4">AED 8,888,000</div>
            <div className="estateReplicaTag t5">AED 10,270,000</div>
            <div className="estateReplicaFocus">{toCurrency(visible[1]?.price || 4699000)}<br/><small>{visible[1]?.title || "Luxurious | Burj Khalifa View..."}</small></div>
            <div className="estateReplicaZoom">
              <button onClick={() => setZoom((z) => Math.min(20, z + 1))}>+</button>
              <button onClick={() => setZoom((z) => Math.max(1, z - 1))}>-</button>
            </div>
            <div className="estateReplicaZoomLabel">Zoom {zoom}x</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DashboardReplica;
