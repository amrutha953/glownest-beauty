import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

const handleSubscribe = () => {
  if (email.trim() === "") {
    alert("Please enter your email address.");
    return;
  }

  alert("🎉 Thank you for subscribing to GlowNest Beauty!");
  setEmail("");
};
  return (
    <>
      {/* ==========================
          MAIN FOOTER
      ========================== */}

      <footer className="footer">

        {/* LEFT COLUMN */}

        <div className="footer-column footer-brand">

          <img
            src="/images/logo.png"
            alt="GlowNest Beauty"
            className="footer-logo"
          />

          <p>
            GlowNest Beauty is your one-stop destination
            for premium skincare, makeup, haircare,
            bodycare and fragrances.
          </p>

          <div className="social-icons">

  <a
    href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/icons/instagram.png"
      alt="Instagram"
      className="social-img"
    />
  </a>

  <a
    href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/icons/facebook.png"
      alt="Facebook"
      className="social-img"
    />
  </a>

  <a
    href="https://wa.me/9645264589"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/icons/whatsapp.png"
      alt="WhatsApp"
      className="social-img"
    />
  </a>

</div>

        </div>

        {/* ABOUT */}

        <div className="footer-column">

          <h3>About GlowNest</h3>

          <Link to="/our-story">Our Story</Link>

          <Link to="/careers">Careers</Link>

          <Link to="/store-locator">Store Locator</Link>

          <Link to="/authenticity">Authenticity</Link>

          <Link to="/sustainability">Sustainability</Link>

          <Link to="/press">Press</Link>

        </div>

        {/* HELP */}

        <div className="footer-column">

          <h3>Help</h3>

          <Link to="/contact">Contact Us</Link>

          <Link to="/track-order">Track Order</Link>

          <Link to="/shipping-policy">Shipping Policy</Link>

          <Link to="/return-policy">Return Policy</Link>

          <Link to="/cancellation">Cancellation Policy</Link>

          <Link to="/faq">FAQ</Link>

        </div>

        {/* SHOP */}

        <div className="footer-column">

          <h3>Top Categories</h3>

          
          <Link to="/shop/skincare">Skincare</Link>
          <Link to="/shop/makeup">Makeup</Link>

          <Link to="/shop/haircare">Haircare</Link>

          <Link to="/shop/bodycare">Bodycare</Link>

          <Link to="/serum">Serum</Link>

          <Link to="/shop/perfume">Perfume</Link>

        </div>

        {/* CUSTOMER */}

        <div className="footer-column">

          <h3>Customer Care</h3>

          <Link to="/support">Support</Link>

          <Link to="/gift-cards">Gift Cards</Link>

          <Link to="/coupons">Coupons</Link>

          <Link to="/beauty-tips">Beauty Tips</Link>

          <Link to="/membership">Membership</Link>

          <Link to="/rewards">Rewards</Link>

        </div>

        {/* DOWNLOAD APP */}

<div className="footer-column download-app">

  <h3>Download App</h3>

  <p className="app-text">
    Get the GlowNest Beauty app for a better shopping experience.
  </p>


  <div className="app-icons">

    <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/icons/google-play.png"
        alt="Google Play"
        className="app-icon"
      />
    </a>


    <a
      href="https://apps.apple.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/icons/app-store.png"
        alt="App Store"
        className="app-icon"
      />
    </a>

  </div>


  <p className="payment-title">
    Secure Payments
  </p>


  <div className="payment-icons">

  <a
    href="https://www.visa.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/icons/visa.png"
      alt="Visa"
      className="payment-logo"
    />
  </a>


  <a
    href="https://www.mastercard.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/icons/mastercard.png"
      alt="Mastercard"
      className="payment-logo"
    />
  </a>

</div>

</div>

      </footer>
            {/* ==========================
    FEATURES SECTION
========================== */}

<section className="footer-features">

  <div className="feature-card">
    <h4>FREE SHIPPING</h4>
    <p>On all orders above ₹999</p>
  </div>

  <div className="feature-card">
    <h4>EASY RETURNS</h4>
    <p>15-Day Return Policy</p>
  </div>

  <div className="feature-card">
    <h4>AUTHENTIC PRODUCTS</h4>
    <p>100% Genuine Beauty Products</p>
  </div>

  <div className="feature-card">
    <h4>SECURE PAYMENT</h4>
    <p>Safe & Secure Checkout</p>
  </div>

</section>

      {/* ==========================
          NEWSLETTER
      ========================== */}

      <section className="newsletter">

        <h2>Subscribe to GlowNest</h2>

        <p>
          Be the first to know about exclusive offers,
          new arrivals and beauty tips.
        </p>

        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSubscribe}>
            Subscribe
          </button>

        </div>

      </section>

      {/* ==========================
          COPYRIGHT
      ========================== */}

      <div className="footer-bottom">

        <div className="footer-links">

          <Link to="/terms">Terms & Conditions</Link>

          <Link to="/privacy">Privacy Policy</Link>

          <a href="#">Shipping Policy</a>

          <a href="#">Return Policy</a>

          <a href="#">Contact Us</a>

        </div>

        <p>
          © 2026 GlowNest Beauty. All Rights Reserved.
        </p>

      </div>

    </>
  );
};

export default Footer;