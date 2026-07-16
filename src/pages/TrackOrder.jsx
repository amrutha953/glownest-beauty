import React, { useState } from "react";
import "./TrackOrder.css";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [tracked, setTracked] = useState(false);
  return (
    <div className="track-page">

      {/* Hero Banner */}
      <section className="track-hero">
        <div className="track-overlay">
          <h1>Track Your Order</h1>
          <p>
            Enter your Order ID and Email Address to check your order status.
          </p>
        </div>
      </section>

      {/* Track Order Form */}
      <section className="track-container">

        <h2>Track Your Order</h2>

        <div className="track-form">

          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={() => setTracked(true)}
          >
            Track Order
          </button>
        </div>

      </section>
      {/* Tracking Result */}

      {tracked && (
        <section className="tracking-result">

          <h2>Order Found 🎉</h2>

          <div className="result-card">

            <p>
              <strong>Order ID:</strong> {orderId || "GN123456"}
            </p>

            <p>
              <strong>Email:</strong> {email || "customer@example.com"}
            </p>

            <p>
              <strong>Status:</strong> Your order has been shipped 🚚
            </p>

            <p>
              <strong>Expected Delivery:</strong> 3-5 Business Days
            </p>

          </div>

        </section>
      )}

      {/* Order Timeline */}
      <section className="order-status">

        <h2>Order Status</h2>

        <div className="timeline">

          <div className="step active">
            <span>✔</span>
            <p>Order Placed</p>
          </div>

          <div className="step">
            <span>📦</span>
            <p>Packed</p>
          </div>

          <div className="step">
            <span>🚚</span>
            <p>Shipped</p>
          </div>

          <div className="step">
            <span>🚛</span>
            <p>Out for Delivery</p>
          </div>

          <div className="step">
            <span>🏠</span>
            <p>Delivered</p>
          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="track-faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-card">
          <h3>Where can I find my Order ID?</h3>
          <p>
            Your Order ID is available in your confirmation email and order
            history.
          </p>
        </div>

        <div className="faq-card">
          <h3>How long does shipping take?</h3>
          <p>
            Orders are usually delivered within 3–7 business days depending on
            your location.
          </p>
        </div>

        <div className="faq-card">
          <h3>Need more help?</h3>
          <p>
            Contact our customer support team for further assistance.
          </p>
        </div>

      </section>

    </div>
  );
};

export default TrackOrder;