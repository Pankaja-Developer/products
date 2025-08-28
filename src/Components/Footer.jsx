import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quaerat aperiam eligendi id impedit quo sunt, dolor officiis magni
            dolores.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: support@mywebsite.com</li>
            <li>Phone: +91 9861234567</li>
            <li>Address: Bangalore, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
