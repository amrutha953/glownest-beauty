import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bodycare.css";

const products = [
  {
    id: 1,
    name: "Nourishing Body Lotion",
    price: "₹499",
    image: "/images/bodycare.jpg",
  },
  {
    id: 2,
    name: "Refreshing Body Wash",
    price: "₹399",
    image: "/images/bodycare.jpg",
  },
  {
    id: 3,
    name: "Exfoliating Body Scrub",
    price: "₹599",
    image: "/images/bodycare.jpg",
  },
  {
    id: 4,
    name: "Hydrating Body Butter",
    price: "₹799",
    image: "/images/bodycare.jpg",
  },
];

const Bodycare = () => {
  const navigate = useNavigate();

  return (
    <div className="bodycare-page">

      {/* Hero Section */}

      <section className="body-hero">
        <div className="body-overlay">

          <h1>Bodycare Collection</h1>

          <p>
            Pamper your skin with luxurious bodycare essentials designed to
            cleanse, nourish and hydrate for healthy, glowing skin every day.
          </p>

          <button onClick={() => navigate("/shop/bodycare")}>
            Shop Bodycare
          </button>

        </div>
      </section>

      {/* Introduction */}

      <section className="body-intro">

        <h2>Glow From Head To Toe</h2>

        <p>
          Explore premium body lotions, body washes, scrubs and body butters
          specially curated to keep your skin soft, smooth and beautifully
          moisturized.
        </p>

      </section>

      {/* Featured Products */}

      <section className="featured-products">

        <h2>Featured Bodycare Products</h2>

        <div className="products-grid">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <span>{product.price}</span>

              <button
                onClick={() => alert(`${product.name} added to cart!`)}
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </section>
            {/* Why Choose GlowNest */}

      <section className="why-bodycare">

        <h2>Why Choose GlowNest Bodycare?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>💧 Deep Hydration</h3>
            <p>
              Our bodycare products lock in moisture to keep your skin soft,
              smooth and hydrated throughout the day.
            </p>
          </div>

          <div className="why-card">
            <h3>🌿 Natural Ingredients</h3>
            <p>
              Enriched with nourishing botanical extracts that gently care for
              every skin type.
            </p>
          </div>

          <div className="why-card">
            <h3>✨ Healthy Glow</h3>
            <p>
              Enjoy radiant and healthy-looking skin with products designed for
              everyday body care.
            </p>
          </div>

        </div>

      </section>

      {/* Daily Routine */}

      <section className="body-routine">

        <h2>Daily Body Care Routine</h2>

        <div className="routine-grid">

          <div className="routine-card">
            <span>🚿</span>
            <h3>Step 1</h3>
            <p>Cleanse your skin with a refreshing body wash.</p>
          </div>

          <div className="routine-card">
            <span>🧴</span>
            <h3>Step 2</h3>
            <p>Exfoliate gently using a nourishing body scrub.</p>
          </div>

          <div className="routine-card">
            <span>💖</span>
            <h3>Step 3</h3>
            <p>Apply body lotion to keep your skin hydrated.</p>
          </div>

          <div className="routine-card">
            <span>🌸</span>
            <h3>Step 4</h3>
            <p>Use body butter at night for deep nourishment.</p>
          </div>

        </div>

      </section>

      {/* Customer Reviews */}

      <section className="body-reviews">

        <h2>Customer Reviews</h2>

        <div className="review-grid">

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "The body lotion is incredibly moisturizing and keeps my skin soft all day."
            </p>
            <h4>- Aisha</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "The body scrub leaves my skin feeling fresh, smooth and glowing."
            </p>
            <h4>- Neha</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "GlowNest bodycare products have become part of my daily routine."
            </p>
            <h4>- Meera</h4>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="body-cta">

        <h2>Give Your Skin the Care It Deserves</h2>

        <p>
          Explore premium bodycare essentials specially designed to nourish,
          protect and refresh your skin every day.
        </p>

        <button onClick={() => navigate("/shop/bodycare")}>
          Explore More
        </button>

      </section>

    </div>
  );
};

export default Bodycare;