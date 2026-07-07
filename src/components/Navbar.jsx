import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";
import "./Navbar.css";

const shopData = {
  Skincare: {
    image: "/images/skincare.jpg",
    sub: [
      "Cleanser",
      "Moisturizer",
      "Face Wash",
      "Sunscreen",
      "Face Mask",
      "Toner",
    ],
  },

  Makeup: {
    image: "/images/makeup.jpg",
    sub: [
      "Foundation",
      "Lipstick",
      "Mascara",
      "Compact",
      "Concealer",
      "Blush",
    ],
  },

  Haircare: {
    image: "/images/haircare.jpg",
    sub: [
      "Shampoo",
      "Conditioner",
      "Hair Oil",
      "Hair Mask",
      "Serum",
      "Hair Spray",
    ],
  },

  Bodycare: {
    image: "/images/bodycare.jpg",
    sub: [
      "Body Wash",
      "Body Lotion",
      "Body Butter",
      "Scrub",
      "Hand Cream",
      "Soap",
    ],
  },

  Serum: {
    image: "/images/serum.jpg",
    sub: [
      "Vitamin C",
      "Niacinamide",
      "Retinol",
      "Hyaluronic Acid",
      "Brightening",
      "Anti Aging",
    ],
  },

  Perfume: {
    image: "/images/perfume.jpg",
    sub: [
      "Women",
      "Men",
      "Luxury",
      "Floral",
      "Woody",
      "Fresh",
    ],
  },
};

const Navbar = () => {
  const [shopOpen, setShopOpen] = useState(false);

  const [activeCategory, setActiveCategory] =
    useState("Skincare");

  return (
    <>
      {/* TOP BAR */}

      <div className="top-slider">
        <div className="slider-track">
          <span>🚚 Free Delivery Above ₹999</span>
          <span>🎉 FIRST10 - Get 10% OFF</span>
          <span>💖 100% Genuine Products</span>
          <span>✨ GlowNest Beauty</span>

          <span>🚚 Free Delivery Above ₹999</span>
          <span>🎉 FIRST10 - Get 10% OFF</span>
          <span>💖 100% Genuine Products</span>
          <span>✨ GlowNest Beauty</span>
        </div>
      </div>

      {/* NAVBAR */}

      <nav className="navbar">

        {/* LOGO */}

        <div className="nav-left">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="GlowNest"
              className="logo"
            />
          </Link>
        </div>

        {/* MENU */}

        <ul className="nav-menu">

          <li
            className="menu-item"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            Shop
                        {shopOpen && (
              <div
                className="mega-menu"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                {/* LEFT SIDE */}
                <div className="mega-left">
                  {Object.keys(shopData).map((category) => (
                    <div
                      key={category}
                      className={`mega-category ${
                        activeCategory === category ? "active" : ""
                      }`}
                      onMouseEnter={() => setActiveCategory(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>

                {/* RIGHT SIDE */}
                <div className="mega-right">

                  <div className="mega-image">
                    <img
                      src={shopData[activeCategory].image}
                      alt={activeCategory}
                    />
                  </div>

                  <div className="mega-content">

                    <h2>{activeCategory}</h2>

                    <div className="submenu-grid">
                      {shopData[activeCategory].sub.map((item) => (
                        <Link
                          key={item}
                          to={`/shop/${activeCategory.toLowerCase()}`}
                          className="submenu-link"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>

                    <Link
                      to={`/shop/${activeCategory.toLowerCase()}`}
                      className="shop-all-btn"
                    >
                      Shop All {activeCategory}
                    </Link>

                  </div>

                </div>
              </div>
            )}
          </li>

          <li className="menu-item">
            <Link to="/offers">Offers</Link>
          </li>

          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>

          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        {/* RIGHT ICONS */}

        <div className="nav-icons">

          <FiSearch className="icon" />

          <FiHeart className="icon" />

          <div className="cart-wrapper">
            <FiShoppingCart className="cart-icon" />
            <span className="cart-badge">2</span>
          </div>

        </div>

      </nav>
    </>
  );
};

export default Navbar;