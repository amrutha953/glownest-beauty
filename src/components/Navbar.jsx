import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src="/images/your-logo-filename.png" alt="GlowNest Beauty" />
      </div>

      <ul className="menu">
        <li>Shop</li>
        <li>Offers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="icons">
        <span>🔍</span>
        <span>❤️</span>
        <span>🛒</span>
      </div>

    </nav>
  );
};

export default Navbar;