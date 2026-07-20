import React from "react";
import "./Sustainability.css";

const Sustainability = () => {
  return (
    <div className="sustain-page">

      {/* Hero */}
      <section className="sustain-hero">
        <div className="sustain-overlay">
          <h1>Sustainability</h1>
          <p>Creating a greener future, one beauty product at a time.</p>
        </div>
      </section>

      {/* Content */}
      <section className="sustain-container">

        <div className="sustain-card">
          <h2>Our Commitment</h2>

          <p>
            GlowNest Beauty believes that beauty should never come at the
            expense of our planet. We are committed to reducing our
            environmental impact through responsible sourcing, sustainable
            packaging, and ethical business practices.
          </p>

          <p>
            Every step we take is focused on protecting nature while delivering
            high-quality beauty products to our customers.
          </p>
        </div>

        <div className="sustain-grid">

          <div className="sustain-box">
            <h3>Eco-Friendly Packaging</h3>
            <p>
              We encourage recyclable and reusable packaging materials whenever
              possible.
            </p>
          </div>

          <div className="sustain-box">
            <h3>Cruelty-Free Beauty</h3>
            <p>
              We support brands that avoid animal testing and follow ethical
              manufacturing practices.
            </p>
          </div>

          <div className="sustain-box">
            <h3>Responsible Sourcing</h3>
            <p>
              Products are sourced from trusted suppliers who value
              environmental responsibility.
            </p>
          </div>

          <div className="sustain-box">
            <h3>Reducing Carbon Footprint</h3>
            <p>
              We continuously improve logistics and operations to reduce
              emissions and waste.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Sustainability;