import React from "react";
import "../css/home.css";
import cart from "../assets/images/cart.jpg";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-first-child">
          <a href="">My Website</a>
        </div>
        <div className="nav-second-child">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Contact</a>
          <a href="">
            <img src={cart} alt="" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Home;
