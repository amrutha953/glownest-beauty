import React from "react";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-text">
        <span>🚚 FREE DELIVERY ON ORDERS ABOVE ₹999</span>
        <span>✨ USE CODE <strong>GLOW10</strong> & GET 10% OFF</span>
        <span>💄 NEW ARRIVALS EVERY WEEK</span>
        <span>🌸 100% AUTHENTIC BEAUTY PRODUCTS</span>

        {/* Duplicate for smooth continuous scrolling */}
        <span>🚚 FREE DELIVERY ON ORDERS ABOVE ₹999</span>
        <span>✨ USE CODE <strong>GLOW10</strong> & GET 10% OFF</span>
        <span>💄 NEW ARRIVALS EVERY WEEK</span>
        <span>🌸 100% AUTHENTIC BEAUTY PRODUCTS</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;