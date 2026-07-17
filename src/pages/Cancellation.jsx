import React from "react";
import "./Cancellation.css";

const Cancellation = () => {
  return (
    <div className="cancel-page">

      {/* Hero */}
      <section className="cancel-hero">
        <div className="cancel-overlay">
          <h1>Cancellation Policy</h1>
          <p>Flexible Order Cancellation Before Shipment</p>
        </div>
      </section>

      {/* Content */}
      <section className="cancel-container">

        <div className="cancel-card">

          <h2>Cancellation Policy</h2>

          <p>
            At <strong>GlowNest Beauty</strong>, we understand that plans may
            change. You can cancel your order before it is shipped for a full
            refund.
          </p>

          <div className="policy-box">
            <h3>🕒 When Can I Cancel?</h3>
            <ul>
              <li>Orders can be cancelled before dispatch.</li>
              <li>Once shipped, cancellation is no longer possible.</li>
              <li>You can request a return after delivery if eligible.</li>
            </ul>
          </div>

          <div className="policy-box">
            <h3>💳 Refund After Cancellation</h3>
            <p>
              If your cancellation is approved, the refund will be processed to
              your original payment method within 5–7 business days.
            </p>
          </div>

          <div className="policy-box">
            <h3>🚚 Already Shipped?</h3>
            <p>
              Orders that have already been shipped cannot be cancelled. Please
              refer to our Return Policy if your order qualifies.
            </p>
          </div>

          <div className="policy-box">
            <h3>📞 Need Help?</h3>
            <p>
              If you need assistance, contact our Customer Support team through
              the Contact Us page.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Cancellation;