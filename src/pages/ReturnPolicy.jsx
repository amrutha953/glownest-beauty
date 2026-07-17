import React from "react";
import "./ReturnPolicy.css";

const ReturnPolicy = () => {
  return (
    <div className="return-page">

      {/* Hero */}
      <section className="return-hero">
        <div className="return-overlay">
          <h1>Return Policy</h1>
          <p>Easy Returns for a Hassle-Free Shopping Experience</p>
        </div>
      </section>

      {/* Content */}
      <section className="return-container">

        <div className="return-card">

          <h2>Our Return Policy</h2>

          <p>
            At <strong>GlowNest Beauty</strong>, customer satisfaction is our
            priority. If you receive a damaged, defective, or incorrect product,
            we're here to help.
          </p>

          <div className="policy-box">
            <h3>📅 Return Window</h3>
            <ul>
              <li>Return requests must be raised within 7 days of delivery.</li>
              <li>Products should be unused and in their original packaging.</li>
              <li>Invoice or proof of purchase is required.</li>
            </ul>
          </div>

          <div className="policy-box">
            <h3>❌ Non-Returnable Items</h3>
            <ul>
              <li>Opened skincare and cosmetic products.</li>
              <li>Gift cards.</li>
              <li>Products marked as Final Sale.</li>
            </ul>
          </div>

          <div className="policy-box">
            <h3>📦 Damaged or Incorrect Products</h3>
            <p>
              If you receive a damaged or incorrect item, contact us within
              48 hours with clear photos of the package and product.
            </p>
          </div>

          <div className="policy-box">
            <h3>💰 Refund Process</h3>
            <p>
              After the returned product passes quality inspection, refunds
              will be processed to the original payment method within
              5–7 business days.
            </p>
          </div>

          <div className="policy-box">
            <h3>📞 Need Assistance?</h3>
            <p>
              Our customer support team is always available to help you with
              returns and refunds.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default ReturnPolicy;