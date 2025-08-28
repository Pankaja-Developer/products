import React from "react";
import "../css/home.css";
import cart from "../assets/images/cart.jpg";
import { Link } from "react-router-dom";

const Home = ({ addCart }) => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-first-child">
          <Link to="/">My Website</Link>
        </div>
        <div className="nav-second-child">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className="cart-link">
            <img src={cart} alt="Cart" className="cart-img" />
            {addCart > 0 && <span className="cart-badge">{addCart}</span>}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Home;
