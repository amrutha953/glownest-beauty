import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq-page">

      {/* Hero */}
      <section className="faq-hero">
        <div className="faq-overlay">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to the most common questions about GlowNest Beauty.</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-container">

        <h2>How can we help you?</h2>

        <div className="faq-card">
          <h3>📦 How can I track my order?</h3>
          <p>
            Go to the <strong>Track Order</strong> page and enter your Order ID
            along with your registered email address to check your order status.
          </p>
        </div>

        <div className="faq-card">
          <h3>🚚 How long does delivery take?</h3>
          <p>
            Orders are usually delivered within 2–7 business days depending on
            your location.
          </p>
        </div>

        <div className="faq-card">
          <h3>↩ Can I return my order?</h3>
          <p>
            Yes. Eligible products can be returned within 7 days of delivery if
            they meet our Return Policy.
          </p>
        </div>

        <div className="faq-card">
          <h3>❌ Can I cancel my order?</h3>
          <p>
            Yes, you can cancel your order before it is shipped. Once dispatched,
            cancellation is no longer possible.
          </p>
        </div>

        <div className="faq-card">
          <h3>💳 Which payment methods are accepted?</h3>
          <p>
            We accept UPI, Credit Cards, Debit Cards, Net Banking and Cash on
            Delivery (where available).
          </p>
        </div>

        <div className="faq-card">
          <h3>🎁 Do you offer free shipping?</h3>
          <p>
            Yes! Orders above ₹499 qualify for free standard shipping across India.
          </p>
        </div>

        <div className="faq-card">
          <h3>📞 How do I contact customer support?</h3>
          <p>
            Visit the Contact Us page or email our support team for assistance.
          </p>
        </div>

      </section>

    </div>
  );
};

export default FAQ;