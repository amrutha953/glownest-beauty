import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact GlowNest Beauty</h1>
          <p>
            We'd love to hear from you. Whether you have a question,
            feedback, or need help with an order, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-container">

        <div className="contact-card">
          <h2>📍 Visit Us</h2>
          <p>
            GlowNest Beauty Pvt. Ltd.<br />
            MG Road, Bengaluru<br />
            Karnataka - 560001
          </p>
        </div>

        <div className="contact-card">
          <h2>📞 Call Us</h2>
          <p>+91 98765 43210</p>
          <p>Mon - Sat : 9:00 AM - 7:00 PM</p>
        </div>

        <div className="contact-card">
          <h2>📧 Email Us</h2>
          <p>support@glownestbeauty.com</p>
          <p>help@glownestbeauty.com</p>
        </div>

      </section>
            {/* Contact Form */}
      <section className="contact-form-section">

        <h2>Send Us a Message</h2>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message here..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      {/* Business Hours */}
      <section className="business-hours">

        <h2>Business Hours</h2>

        <div className="hours-card">

          <p><strong>Monday - Friday:</strong> 9:00 AM – 7:00 PM</p>

          <p><strong>Saturday:</strong> 10:00 AM – 6:00 PM</p>

          <p><strong>Sunday:</strong> Closed</p>

        </div>

      </section>

      {/* FAQ */}
      <section className="contact-faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>How can I track my order?</h3>
          <p>
            You can track your order using the Order Tracking page after logging
            into your GlowNest account.
          </p>
        </div>

        <div className="faq-item">
          <h3>What is your return policy?</h3>
          <p>
            We offer easy returns within 15 days for eligible products.
          </p>
        </div>

        <div className="faq-item">
          <h3>How do I contact customer support?</h3>
          <p>
            You can contact us by phone, email, or using the contact form above.
          </p>
        </div>

      </section>

      {/* Map Placeholder */}
      <section className="map-section">

        <h2>Our Location</h2>

        <div className="map-box">
          Google Map will be added here
        </div>

      </section>

    </div>
  );
};

export default Contact;