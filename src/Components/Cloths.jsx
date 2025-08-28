import React from "react";
import cloth1 from "../assets/images/cloth1.webp";
import cloth2 from "../assets/images/cloth2.webp";
import cloth3 from "../assets/images/cloth3.webp";
import "../css/productsection.css";

const Cloths = () => {
  return (
    <>
      <section>
        <h1>All Product</h1>
        <section>
          <div className="card-container">
            <div className="card-box">
              <img src={cloth1} alt="" />
              <button>Add to Cart</button>
            </div>
            <div className="card-box">
              <img src={cloth2} alt="" />
              <button>Add to Cart</button>
            </div>
            <div className="card-box">
              <img src={cloth3} alt="" />
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Cloths;
