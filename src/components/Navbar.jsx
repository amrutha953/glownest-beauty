import React, { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuData = {
    Shop: ["Skincare", "Makeup", "Haircare", "Fragrance"],
    Offers: ["New Deals", "Discounts", "Combo Packs"],
    About: ["Our Story", "Ingredients", "Sustainability"],
    Contact: ["Customer Care", "Support", "Store Locator"]
  };

  return (
    <>
      {/* 🔥 TOP ANIMATED BAR */}
      <div className="top-slider">
        <div className="slider-track">
          <span>🚚 Free Delivery above ₹999</span>
          <span>🎉 Use Coupon FIRST10</span>
          <span>💄 New Beauty Arrivals</span>
          <span>✨ GlowNest Beauty</span>

          <span>🚚 Free Delivery above ₹999</span>
          <span>🎉 Use Coupon FIRST10</span>
          <span>💄 New Beauty Arrivals</span>
          <span>✨ GlowNest Beauty</span>
        </div>
      </div>

      {/* 🔥 NAVBAR */}
      <nav className="navbar">

        {/* LOGO */}
        <div className="nav-left">
          <img src="/images/logo.png" alt="logo" className="logo" />
        </div>

        {/* MENU */}
        <ul className="nav-menu">
          {Object.keys(menuData).map((item) => (
            <li
              key={item}
              className="menu-item"
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item}

              {activeMenu === item && (
                <div className="dropdown-card">
                  {menuData[item].map((sub, i) => (
                    <p key={i}>{sub}</p>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ICONS */}
        <div className="nav-icons">
          <FiSearch />
          <FiHeart />
          <FiShoppingCart />
        </div>

      </nav>
    </>
  );
};

export default Navbar;