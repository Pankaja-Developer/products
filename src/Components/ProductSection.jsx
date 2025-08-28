import React from "react";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/imge4.jpg";
import img5 from "../assets/images/img5.jpg";
import img2 from "../assets/images/imge2.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import "../css/productsection.css";

const ProductSection = (props) => {
  let { addCart, setCart } = props;
  let addToCart = () => {
    setCart(addCart + 1);
    alert("Item added to cart");
  };
  return (
    <>
      <section>
        <div className="card-container">
          <div className="card-box">
            <img src={img3} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
          </div>
          <div className="card-box">
            <img src={img4} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
          </div>
          <div className="card-box">
            <img src={img5} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </section>

      <section>
        <div className="card-container">
          <div className="card-box">
            <img src={img2} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
          </div>
          <div className="card-box">
            <img src={img6} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
          </div>
          <div className="card-box">
            <img src={img7} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
