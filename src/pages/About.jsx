import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
const testimonials = [
  {
    name: "Priya S.",
    review:
      "GlowNest Beauty has completely transformed my skincare routine. The products are authentic and delivery was super fast.",
  },
  {
    name: "Ananya R.",
    review:
      "Amazing shopping experience! Beautiful packaging, genuine products and excellent customer service.",
  },
  {
    name: "Sneha K.",
    review:
      "I absolutely love GlowNest. It's now my favorite destination for beauty products.",
  },
  {
    name: "Meera P.",
    review:
      "Excellent quality products at affordable prices. Highly recommended!",
  },
];

function About() {
  const navigate = useNavigate();
  
  const [customers, setCustomers] = useState(0);
  const [products, setProducts] = useState(0);
  const [brands, setBrands] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

useEffect(() => {

  const animate = (setter, target, step, speed) => {

    let count = 0;

    const interval = setInterval(() => {

      count += step;

      if (count >= target) {
        count = 0; // Restart immediately
      }

      setter(count);

    }, speed);

    return interval;
  };

  // Same speed (100ms) for all counters
  const c1 = animate(setCustomers, 10, 1, 100);
  const c2 = animate(setProducts, 500, 5, 100);
  const c3 = animate(setBrands, 100, 1, 100);

  return () => {
    clearInterval(c1);
    clearInterval(c2);
    clearInterval(c3);
  };

}, []);
useEffect(() => {

    const interval = setInterval(() => {

      setCurrentReview((prev) =>
        (prev + 1) % testimonials.length
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

    
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

          <button onClick={() => navigate("/shop")}>
            Explore Products
          </button>

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
          <h2>{customers}K+</h2>
          <span>Happy Customers</span>
        </div>

        <div className="stat">
          <h2>{products}+</h2>
          <span>Beauty Products</span>
        </div>

        <div className="stat">
          <h2>{brands}%</h2>
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

          <div
            className="why-card"
            onClick={() => navigate("/shop")}
          >
            ✔ 100% Authentic Products
          </div>

          <div
            className="why-card"
            onClick={() => navigate("/shop/skincare")}
          >
            ✔ Dermatologist Recommended
          </div>

          <div
            className="why-card"
            onClick={() => navigate("/shipping-policy")}
          >
            ✔ Fast & Safe Delivery
          </div>

          <div
            className="why-card"
            onClick={() => navigate("/privacy")}
          > 
            ✔ Secure Payments
          </div>

          <div
            className="why-card"
            onClick={() => navigate("/return-policy")}
          >
            ✔ Easy Returns
          </div>

          <div
            className="why-card"
            onClick={() => navigate("/contact")}
          >
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
          <button
            className="founder-btn"
            onClick={() => navigate("/contact")}
          > 
            Contact Us
          </button>

        </div>

      </section>
      <section className="testimonials">

  <h2>What Our Customers Say</h2>

  <div className="testimonial-slider">

    <button
      className="arrow"
      onClick={() =>
        setCurrentReview(
          currentReview === 0
            ? testimonials.length - 1
            : currentReview - 1
        )
      }
    >
      ❮
    </button>

    <div className="testimonial-card fade">

      <div className="stars">★★★★★</div>

      <p>{testimonials[currentReview].review}</p>

      <h4>— {testimonials[currentReview].name}</h4>

    </div>

    <button
      className="arrow"
      onClick={() =>
        setCurrentReview((currentReview + 1) % testimonials.length)
      }
    >
      ❯
    </button>

  </div>

  <div className="dots">

    {testimonials.map((_, index) => (

      <span
        key={index}
        className={currentReview === index ? "dot active" : "dot"}
        onClick={() => setCurrentReview(index)}
      />

    ))}

  </div>

</section>


      {/* CALL TO ACTION */}

<section className="about-cta">

  <h2>Join Our Beauty Community</h2>

  <p>
    Discover premium skincare, makeup, haircare and exclusive beauty offers.
    Start your beauty journey with GlowNest today.
  </p>

  <button
    className="cta-btn"
    onClick={() => navigate("/shop")}
  >
    Shop Now
  </button>

</section>

    </div>
  );
}

export default About;