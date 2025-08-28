// replace src/Components/Home.jsx with this
import React, { useState } from "react";
import "../css/home.css";
import cart from "../assets/images/cart.jpg";
import { Link } from "react-router-dom";

const Home = ({ addCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-first-child">
        <Link to="/" onClick={() => setIsOpen(false)}>
          My Website
        </Link>
      </div>

      {/* hamburger button */}
      <button
        className="hamburger"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* nav links */}
      <div className={`nav-second-child ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>

        {/* cart link */}
        <Link to="/cart" className="cart-link" onClick={() => setIsOpen(false)}>
          <img src={cart} alt="Cart" className="cart-img" />
          {addCart > 0 && <span className="cart-badge">{addCart}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Home;
