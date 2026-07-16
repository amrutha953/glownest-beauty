import React from "react";
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

          <a href="#">Our Story</a>

          <a href="#">Careers</a>

          <a href="#">Store Locator</a>

          <a href="#">Authenticity</a>

          <a href="#">Sustainability</a>

          <a href="#">Press</a>

        </div>

        {/* HELP */}

        <div className="footer-column">

          <h3>Help</h3>

          <a href="#">Contact Us</a>

          <a href="#">Track Order</a>

          <a href="#">Shipping Policy</a>

          <a href="#">Return Policy</a>

          <a href="#">Cancellation</a>

          <a href="#">FAQ</a>

        </div>

        {/* SHOP */}

        <div className="footer-column">

          <h3>Top Categories</h3>

          <a href="#">Skincare</a>

          <a href="#">Makeup</a>

          <a href="#">Haircare</a>

          <a href="#">Bodycare</a>

          <a href="#">Serums</a>

          <a href="#">Perfumes</a>

        </div>

        {/* CUSTOMER */}

        <div className="footer-column">

          <h3>Customer Care</h3>

          <a href="#">Support</a>

          <a href="#">Gift Cards</a>

          <a href="#">Coupons</a>

          <a href="#">Beauty Tips</a>

          <a href="#">Membership</a>

          <a href="#">Rewards</a>

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