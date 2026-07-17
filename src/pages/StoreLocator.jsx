import React from "react";
import "./StoreLocator.css";

const stores = [
  {
    city: "Bengaluru",
    address: "MG Road, Bengaluru, Karnataka 560001",
    phone: "+91 98765 43210",
    hours: "10:00 AM - 9:00 PM",
  },
  {
    city: "Mumbai",
    address: "Linking Road, Bandra West, Mumbai 400050",
    phone: "+91 98765 12345",
    hours: "10:00 AM - 9:30 PM",
  },
  {
    city: "Delhi",
    address: "Connaught Place, New Delhi 110001",
    phone: "+91 98765 56789",
    hours: "10:00 AM - 9:00 PM",
  },
  {
    city: "Kochi",
    address: "MG Road, Kochi, Kerala 682035",
    phone: "+91 98765 88888",
    hours: "10:00 AM - 8:30 PM",
  },
];

const StoreLocator = () => {
  return (
    <div className="store-page">

      {/* Hero */}
      <section className="store-hero">
        <div className="store-overlay">
          <h1>Store Locator</h1>
          <p>Visit your nearest GlowNest Beauty Store.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="store-container">

        <div className="intro-card">
          <h2>Find a Store Near You</h2>
          <p>
            Experience GlowNest Beauty in person. Explore our premium beauty,
            skincare, haircare and fragrance collections at our retail stores.
          </p>
        </div>

        <div className="store-grid">
          {stores.map((store, index) => (
            <div className="store-card" key={index}>
              <h3>📍 {store.city}</h3>

              <p><strong>Address:</strong><br />{store.address}</p>

              <p><strong>Phone:</strong><br />{store.phone}</p>

              <p><strong>Store Hours:</strong><br />{store.hours}</p>

              <button>Get Directions</button>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default StoreLocator;