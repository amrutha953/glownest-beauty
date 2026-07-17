import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaCcVisa,
  FaCcMastercard,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
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

            <a href="#">
              <FaInstagram className="social-icon" />
            </a>

            <a href="#">
              <FaFacebookF className="social-icon" />
            </a>

            <a href="#">
              <FaWhatsapp className="social-icon" />
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

        <div className="footer-column">

          <h3>Download App</h3>

          <button className="store-btn">
            <FaGooglePlay />
            <span>Google Play</span>
          </button>

          <button className="store-btn">
            <FaApple />
            <span>App Store</span>
          </button>

          <div className="payment-icons">

            <FaCcVisa />

            <FaCcMastercard />

          </div>

        </div>

      </footer>
            {/* ==========================
          FEATURES SECTION
      ========================== */}

      <section className="footer-features">

        <div className="feature-card">
          <div className="feature-icon">🚚</div>

          <div>
            <h4>FREE SHIPPING</h4>
            <p>On Orders Above ₹999</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">↩️</div>

          <div>
            <h4>EASY RETURNS</h4>
            <p>15 Day Return Policy</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">✔️</div>

          <div>
            <h4>100% GENUINE</h4>
            <p>Authentic Products</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💖</div>

          <div>
            <h4>PREMIUM BRANDS</h4>
            <p>Top Beauty Collections</p>
          </div>
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
          />

          <button>
            Subscribe
          </button>

        </div>

      </section>

      {/* ==========================
          COPYRIGHT
      ========================== */}

      <div className="footer-bottom">

        <div className="footer-links">

          <a href="#">Terms & Conditions</a>

          <a href="#">Privacy Policy</a>

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