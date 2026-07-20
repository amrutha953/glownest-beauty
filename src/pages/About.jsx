import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-content">
          <span className="tag">ABOUT GLOWNEST BEAUTY</span>

          <h1>Glow Naturally. Shine Beautifully.</h1>

          <p>
            GlowNest Beauty is your trusted destination for skincare,
            makeup, haircare, fragrances and self-care essentials.
            We carefully curate premium beauty products that help
            you look confident and feel beautiful every day.
          </p>

          <p>
            Our mission is to make authentic beauty products
            accessible to everyone while providing a safe,
            enjoyable and inspiring shopping experience.
          </p>

          <button>Explore Products</button>

        </div>

        <div className="about-image">
          <img src="/images/about.jpg" alt="GlowNest Beauty" />
        </div>

      </section>



      {/* OUR STORY */}

      <section className="story">

        <h2>Our Story</h2>

        <p>
          GlowNest Beauty was created with one simple vision—
          to make premium beauty products available for everyone.
          From skincare to makeup, every product is selected
          with quality, authenticity and customer satisfaction
          in mind.

          We believe beauty is not about perfection;
          it's about confidence, self-care and expressing
          your unique personality.
        </p>

      </section>



      {/* MISSION & VISION */}

      <section className="mission-vision">

        <div className="box">
          <h3>Our Mission</h3>

          <p>
            Deliver authentic beauty products,
            exceptional customer service and
            a delightful shopping experience.
          </p>

        </div>

        <div className="box">
          <h3>Our Vision</h3>

          <p>
            To become India's most trusted
            online beauty destination by
            empowering confidence through beauty.
          </p>

        </div>

      </section>



      {/* STATS */}

      <section className="stats">

        <div className="stat">
          <h2>10K+</h2>
          <span>Happy Customers</span>
        </div>

        <div className="stat">
          <h2>500+</h2>
          <span>Beauty Products</span>
        </div>

        <div className="stat">
          <h2>100%</h2>
          <span>Authentic Brands</span>
        </div>

        <div className="stat">
          <h2>24/7</h2>
          <span>Customer Support</span>
        </div>

      </section>



      {/* WHY CHOOSE */}

      <section className="why">

        <h2>Why Shop With GlowNest?</h2>

        <div className="why-grid">

          <div className="why-card">
            ✔ 100% Authentic Products
          </div>

          <div className="why-card">
            ✔ Dermatologist Recommended
          </div>

          <div className="why-card">
            ✔ Fast & Safe Delivery
          </div>

          <div className="why-card">
            ✔ Secure Payments
          </div>

          <div className="why-card">
            ✔ Easy Returns
          </div>

          <div className="why-card">
            ✔ Premium Customer Care
          </div>

        </div>

      </section>



      {/* FOUNDER */}

      <section className="founder">

        <div className="founder-image">
          <img src="/images/founder.jpg" alt="Founder" />
        </div>

        <div className="founder-content">

          <h2>Meet Our Founder</h2>

          <p>
            "GlowNest Beauty was built with a passion
            for helping people feel confident in their
            own skin. Every product reflects our
            commitment to quality, authenticity
            and customer happiness."
          </p>

          <h4>— Founder, GlowNest Beauty</h4>

        </div>

      </section>

    </div>
  );
}

export default About;