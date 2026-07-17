import React from "react";
import "./ShippingPolicy.css";

const ShippingPolicy = () => {
  return (
    <div className="shipping-page">

      {/* Hero Section */}
      <section className="shipping-hero">
        <div className="shipping-overlay">
          <h1>Shipping Policy</h1>
          <p>Fast, Safe & Reliable Delivery Across India</p>
        </div>
      </section>

      {/* Content */}
      <section className="shipping-container">

        <div className="shipping-card">

          <h2>Shipping Information</h2>

          <p>
            At <strong>GlowNest Beauty</strong>, we are committed to delivering
            your favorite beauty products quickly and safely. Every order is
            carefully packed to ensure it reaches you in perfect condition.
          </p>

          <div className="policy-box">
            <h3>🚚 Delivery Time</h3>
            <ul>
              <li>Metro Cities: 2–4 Business Days</li>
              <li>Other Cities: 3–6 Business Days</li>
              <li>Remote Areas: 5–8 Business Days</li>
            </ul>
          </div>

          <div className="policy-box">
            <h3>📦 Order Processing</h3>
            <p>
              Orders are processed within 24 hours after payment confirmation.
              Orders placed on weekends or public holidays are processed on the
              next working day.
            </p>
          </div>

          <div className="policy-box">
            <h3>💳 Shipping Charges</h3>

            <table>
              <thead>
                <tr>
                  <th>Order Value</th>
                  <th>Shipping Fee</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Below ₹499</td>
                  <td>₹49</td>
                </tr>

                <tr>
                  <td>₹499 & Above</td>
                  <td>FREE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="policy-box">
            <h3>📍 Order Tracking</h3>

            <p>
              Once your order is shipped, you will receive an email and SMS
              containing your tracking ID. You can also track your order from
              the Track Order page.
            </p>
          </div>

          <div className="policy-box">
            <h3>⚠ Delivery Delays</h3>

            <p>
              Unexpected weather conditions, natural disasters or courier
              disruptions may occasionally delay deliveries. We appreciate your
              patience in such situations.
            </p>
          </div>

          <div className="policy-box">
            <h3>📞 Need Help?</h3>

            <p>
              For shipping-related assistance, please contact our customer
              support team through the Contact Us page.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default ShippingPolicy;