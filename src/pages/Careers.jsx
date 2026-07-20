import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers-page">

      {/* Hero */}
      <section className="careers-hero">
        <div className="careers-overlay">
          <h1>Careers at GlowNest</h1>
          <p>Join our team and help redefine beauty shopping.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="careers-container">

        <div className="careers-card">
          <h2>Work With Us</h2>

          <p>
            At GlowNest Beauty, we believe great ideas come from passionate
            people. We’re building a team that values creativity, innovation,
            teamwork, and customer satisfaction.
          </p>

          <p>
            Whether you're just starting your career or bringing years of
            experience, we welcome talented individuals who want to grow with us.
          </p>
        </div>

        <div className="jobs-grid">

          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>Build beautiful, responsive user interfaces using modern web technologies.</p>
          </div>

          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Create engaging designs and improve the customer shopping experience.</p>
          </div>

          <div className="job-card">
            <h3>Operations Executive</h3>
            <p>Manage order processing, logistics, and inventory operations.</p>
          </div>

          <div className="job-card">
            <h3>Customer Support</h3>
            <p>Assist customers with orders, returns, and product-related queries.</p>
          </div>

        </div>

        <div className="apply-box">
          <h2>Why Join GlowNest?</h2>

          <ul>
            <li> Friendly work environment</li>
            <li> Career growth opportunities</li>
            <li> Skill development programs</li>
            <li> Collaborative team culture</li>
            <li> Performance recognition</li>
          </ul>

          <a href="mailto:careers@glownestbeauty.com" className="apply-btn">
            Apply Now
          </a>
        </div>

      </section>

    </div>
  );
};

export default Careers;