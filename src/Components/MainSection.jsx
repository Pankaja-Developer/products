import React, { useState } from "react";
import "../css/mainsection.css";
import Cloths from "./Cloths";

const MainSection = (props) => {
  let [count, setCount] = useState(false);
  let { addCart, setCart } = props;
  let addToCart = () => {
    setCart(addCart + 1);
    alert("Item added to cart");
  };

  return (
    <>
      <main>
        <button
          onClick={() => {
            setCount(!count);
          }}
        >
          View More
        </button>
      </main>
      <section>
        {count ? <Cloths addCart={addCart} setCart={setCart} /> : ""}
      </section>
    </>
  );
};

export default MainSection;
