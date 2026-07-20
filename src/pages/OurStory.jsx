import React from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <div className="story-page">

      {/* Hero Section */}
      <section className="story-hero">
        <div className="story-overlay">
          <h1>Our Story</h1>
          <p>Empowering Beauty with Quality, Trust & Confidence.</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="story-container">

        <div className="story-card">

          <h2>Welcome to GlowNest Beauty</h2>

          <p>
            GlowNest Beauty was founded with a simple mission—to make premium
            beauty and skincare products accessible to everyone. We believe
            beauty is about confidence, self-care, and feeling your best every
            day.
          </p>

          <p>
            From skincare essentials to makeup, fragrances, haircare, and body
            care, every product is carefully selected to meet high standards of
            quality, safety, and effectiveness.
          </p>

        </div>

        <div className="story-grid">

          <div className="story-box">
            <h3>Our Mission</h3>
            <p>
              To inspire confidence by providing authentic beauty products,
              exceptional service, and an enjoyable shopping experience.
            </p>
          </div>

          <div className="story-box">
            <h3>Our Vision</h3>
            <p>
              To become one of India's most trusted online beauty destinations,
              known for innovation, quality, and customer satisfaction.
            </p>
          </div>

          <div className="story-box">
            <h3>Our Values</h3>
            <ul>
              <li>Customer First</li>
              <li>Authentic Products</li>
              <li>Quality Assurance</li>
              <li>Innovation</li>
              <li>Sustainability</li>
            </ul>
          </div>

          <div className="story-box">
            <h3>Why Choose GlowNest?</h3>
            <ul>
              <li>100% Genuine Products</li>
              <li>Secure Payments</li>
              <li>Fast Delivery</li>
              <li>Easy Returns</li>
              <li>Friendly Customer Support</li>
            </ul>
          </div>

        </div>

      </section>

    </div>
  );
};

export default OurStory;