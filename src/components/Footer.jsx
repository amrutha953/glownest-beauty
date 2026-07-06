import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">
        <h3>GlowNest Beauty</h3>
        <p>Glow naturally with our premium skincare products.</p>
      </div>

      <div className="footer-center">
        <h4>Quick Links</h4>
        <p>Shop</p>
        <p>Offers</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <div className="footer-right">
        <h4>Follow Us</h4>

        <div className="social-icons">

          {/* WhatsApp */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="icon whatsapp" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon instagram" />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="icon facebook" />
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Footer;