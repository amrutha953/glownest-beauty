import React from "react";
import "./Authenticity.css";

const Authenticity = () => {
  return (
    <div className="auth-page">

      {/* Hero */}
      <section className="auth-hero">
        <div className="auth-overlay">
          <h1>Authenticity Guarantee</h1>
          <p>100% Genuine. 100% Trusted. Every Product, Every Time.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="auth-container">

        <div className="auth-card">
          <h2>Our Promise</h2>

          <p>
            At GlowNest Beauty, authenticity is at the heart of everything we
            do. Every product available on our website is sourced directly from
            trusted brands or their authorized distributors.
          </p>

          <p>
            We never compromise on quality. Our customers deserve genuine,
            safe, and effective beauty products that meet the highest standards.
          </p>
        </div>

        <div className="auth-grid">

          <div className="auth-box">
            <h3>✅ 100% Genuine Products</h3>
            <p>
              Every item is carefully verified before reaching our customers.
            </p>
          </div>

          <div className="auth-box">
            <h3>🏆 Trusted Brand Partners</h3>
            <p>
              We collaborate only with authorized manufacturers and suppliers.
            </p>
          </div>

          <div className="auth-box">
            <h3>🔒 Safe Shopping</h3>
            <p>
              Secure payments and quality checks ensure a worry-free experience.
            </p>
          </div>

          <div className="auth-box">
            <h3>📦 Quality Inspection</h3>
            <p>
              Every order is inspected before shipping to maintain product
              quality and freshness.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Authenticity;