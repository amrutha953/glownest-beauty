import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiPackage,
} from "react-icons/fi";
import "./Navbar.css";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

const shopData = {
  Skincare: {
    image: "/images/skincare.jpg",
    path: "/shop/skincare",
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
    path: "/shop/makeup",
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
    path: "/shop/haircare",
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
    path: "/shop/bodycare",
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
    path: "/serum",
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
    path: "/shop/perfume",
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

const offersMenu = [
  { name: "Today's Deals", path: "/offers" },
  { name: "Coupons", path: "/coupons" },
  { name: "Membership", path: "/membership" },
  { name: "Rewards", path: "/rewards" },
];

const aboutMenu = [
  { name: "Our Story", path: "/our-story" },
  { name: "Authenticity", path: "/authenticity" },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Careers", path: "/careers" },
  { name: "Press", path: "/press" },
];

const contactMenu = [
  { name: "Contact Us", path: "/contact" },
  { name: "Track Order", path: "/track-order" },
  { name: "FAQ", path: "/faq" },
  { name: "Shipping Policy", path: "/shipping-policy" },
  { name: "Return Policy", path: "/return-policy" },
  { name: "Privacy Policy", path: "/privacy" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  const isLoggedIn = !!localStorage.getItem("token");
  const [shopOpen, setShopOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState("Skincare");

  const [activeDropdown, setActiveDropdown] =
    useState(null);
  const [accountOpen, setAccountOpen] = useState(false);
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

      <nav className="navbar">

        {/* Logo */}
        <div className="nav-left">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="GlowNest Beauty"
              className="logo"
            />
          </Link>
        </div>

        {/* Menu */}
        <ul className="nav-menu">

          {/* SHOP */}
          <li
            className="menu-item"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <Link to="/">Shop</Link>

            {shopOpen && (
              <div className="mega-menu">

                <div className="mega-left">
                  {Object.keys(shopData).map((category) => (
                    <div
                      key={category}
                      className={`mega-category ${
                        activeCategory === category ? "active" : ""
                      }`}
                      onMouseEnter={() =>
                        setActiveCategory(category)
                      }
                    >
                      {category}
                    </div>
                  ))}
                </div>

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
                      {activeCategory === "Skincare" ? (
    <>
      <Link to="/shop/skincare/cleanser" className="submenu-link">
        Cleanser
      </Link>

      <Link to="/shop/skincare/moisturizer" className="submenu-link">
        Moisturizer
      </Link>

      <Link to="/shop/skincare/face-wash" className="submenu-link">
        Face Wash
      </Link>

      <Link to="/shop/skincare/sunscreen" className="submenu-link">
        Sunscreen
      </Link>

      <Link to="/shop/skincare/face-mask" className="submenu-link">
        Face Mask
      </Link>

      <Link to="/shop/skincare/toner" className="submenu-link">
        Toner
      </Link>
    </>
  ) : activeCategory === "Makeup" ? (
    <>
      <Link to="/shop/makeup/foundation" className="submenu-link">
        Foundation
      </Link>

      <Link to="/shop/makeup/lipstick" className="submenu-link">
        Lipstick
      </Link>

      <Link to="/shop/makeup/mascara" className="submenu-link">
        Mascara
      </Link>

      <Link to="/shop/makeup/compact" className="submenu-link">
        Compact
      </Link>

      <Link to="/shop/makeup/concealer" className="submenu-link">
        Concealer
      </Link>

      <Link to="/shop/makeup/blush" className="submenu-link">
        Blush
      </Link>
    </>
  ) : activeCategory === "Haircare" ? (
    <>
      <Link to="/shop/haircare/shampoo" className="submenu-link">
        Shampoo
      </Link>

      <Link to="/shop/haircare/conditioner" className="submenu-link">
        Conditioner
      </Link>

      <Link to="/shop/haircare/hair-oil" className="submenu-link">
        Hair Oil
      </Link>

      <Link to="/shop/haircare/hair-serum" className="submenu-link">
        Hair Serum
      </Link>

      <Link to="/shop/haircare/hair-mask" className="submenu-link">
        Hair Mask
      </Link>

      <Link to="/shop/haircare/hair-spray" className="submenu-link">
        Hair Spray
      </Link>
    </>
    ) : activeCategory === "Bodycare" ? (
  <>
    <Link to="/shop/bodycare/body-wash" className="submenu-link">
      Body Wash
    </Link>

    <Link to="/shop/bodycare/body-lotion" className="submenu-link">
      Body Lotion
    </Link>

    <Link to="/shop/bodycare/body-butter" className="submenu-link">
      Body Butter
    </Link>

    <Link to="/shop/bodycare/body-scrub" className="submenu-link">
      Body Scrub
    </Link>

    <Link to="/shop/bodycare/hand-cream" className="submenu-link">
      Hand Cream
    </Link>

    <Link to="/shop/bodycare/soap" className="submenu-link">
      Soap
    </Link>
  </>
  ) : activeCategory === "Bodycare" ? (
  <>
    ...
  </>
) : activeCategory === "Serum" ? (
  <>
    <Link to="/shop/serum/vitamin-c" className="submenu-link">
      Vitamin C
    </Link>

    <Link to="/shop/serum/niacinamide" className="submenu-link">
      Niacinamide
    </Link>

    <Link to="/shop/serum/retinol" className="submenu-link">
      Retinol
    </Link>

    <Link to="/shop/serum/hyaluronic-acid" className="submenu-link">
      Hyaluronic Acid
    </Link>

    <Link to="/shop/serum/brightening" className="submenu-link">
      Brightening
    </Link>

    <Link to="/shop/serum/anti-aging" className="submenu-link">
      Anti Aging
    </Link>
  </>
  ) : activeCategory === "Perfume" ? (
  <>
    <Link to="/shop/perfume/women" className="submenu-link">
      Women
    </Link>

    <Link to="/shop/perfume/men" className="submenu-link">
      Men
    </Link>

    <Link to="/shop/perfume/luxury" className="submenu-link">
      Luxury
    </Link>

    <Link to="/shop/perfume/floral" className="submenu-link">
      Floral
    </Link>

    <Link to="/shop/perfume/woody" className="submenu-link">
      Woody
    </Link>

    <Link to="/shop/perfume/fresh" className="submenu-link">
      Fresh
    </Link>
  </>
) : (
    shopData[activeCategory].sub.map((item) => (
      <Link
        key={item}
        to={shopData[activeCategory].path}
        className="submenu-link"
      >
        {item}
      </Link>
    ))
  )}

</div>

                    <Link
                      className="shop-all-btn"
                      to={shopData[activeCategory].path}
                    >
                      Shop All {activeCategory}
                    </Link>

                  </div>

                </div>

              </div>
            )}
          </li>

          {/* OFFERS */}
          <li
            className="menu-item"
            onMouseEnter={() => setActiveDropdown("offers")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/offers">Offers</Link>

            {activeDropdown === "offers" && (
              <div className="dropdown-menu">
                {offersMenu.map((item) => (
                  <Link key={item.name} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* ABOUT */}
          <li
            className="menu-item"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/about">About</Link>

            {activeDropdown === "about" && (
              <div className="dropdown-menu">
                {aboutMenu.map((item) => (
                  <Link key={item.name} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* CONTACT */}
          <li
            className="menu-item"
            onMouseEnter={() => setActiveDropdown("contact")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/contact">Contact</Link>

            {activeDropdown === "contact" && (
              <div className="dropdown-menu">
                {contactMenu.map((item) => (
                  <Link key={item.name} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

        </ul>

    
        {/* Icons */}
<div className="nav-icons">

  {/* Search */}
  <FiSearch
    className="icon"
    onClick={() => navigate("/search")}
    style={{ cursor: "pointer" }}
  />

  {/* Account */}
<div
  className="account-wrapper"
  onClick={() => setAccountOpen(!accountOpen)}
  style={{ cursor: "pointer", position: "relative" }}
>
  <FiUser className="icon" />

  {accountOpen && (
    <div className="account-dropdown">

      <Link
        to="/login"
        onClick={() => setAccountOpen(false)}
      >
        Login
      </Link>

      <Link
        to="/register"
        onClick={() => setAccountOpen(false)}
      >
        Create Account
      </Link>

      <Link
        to="/profile"
        onClick={() => setAccountOpen(false)}
      >
        My Profile
      </Link>

    </div>
  )}
</div>
  {/* My Orders */}
  <div
    className="orders-wrapper"
    onClick={() => navigate("/orders")}
    style={{ cursor: "pointer" }}
    title="My Orders"
  >
    <FiPackage className="icon" />
  </div>


  {/* Wishlist */}
  <div
    className="wishlist-wrapper"
    onClick={() => navigate("/wishlist")}
    style={{ cursor: "pointer" }}
  >
    <FiHeart className="icon" />

    <span className="wishlist-badge">
      {wishlistItems.length}
    </span>
  </div>

  {/* Cart */}
  <div
    className="cart-wrapper"
    onClick={() => navigate("/cart")}
    style={{ cursor: "pointer" }}
  >
    <FiShoppingCart className="cart-icon" />

    <span className="cart-badge">
      {cartItems.length}
    </span>
  </div>

</div>
    </nav>
   </> 
  );
}