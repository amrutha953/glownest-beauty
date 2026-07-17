import React from "react";
import { useNavigate } from "react-router-dom";
import "./Haircare.css";

const products = [
  {
    id: 1,
    name: "Nourishing Shampoo",
    price: "₹499",
    image: "/images/haircare.jpg",
  },
  {
    id: 2,
    name: "Hair Conditioner",
    price: "₹549",
    image: "/images/haircare.jpg",
  },
  {
    id: 3,
    name: "Hair Serum",
    price: "₹699",
    image: "/images/haircare.jpg",
  },
  {
    id: 4,
    name: "Hair Mask",
    price: "₹799",
    image: "/images/haircare.jpg",
  },
];

const Haircare = () => {
  const navigate = useNavigate();

  return (
    <div className="haircare-page">

      {/* Hero Section */}
      <section className="hair-hero">
        <div className="hair-overlay">
          <h1>Haircare Collection</h1>

          <p>
            Discover premium haircare products that nourish, strengthen and
            protect your hair for a healthy, shiny look every day.
          </p>

          <button onClick={() => navigate("/shop/haircare")}>
            Shop Haircare
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="hair-intro">

        <h2>Healthy Hair Begins Here</h2>

        <p>
          Explore shampoos, conditioners, hair oils, serums and masks specially
          selected for all hair types to keep your hair soft, smooth and healthy.
        </p>

      </section>

      {/* Featured Products */}
      <section className="featured-products">

        <h2>Featured Haircare Products</h2>

        <div className="products-grid">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <span>{product.price}</span>

              <button onClick={() => alert(`${product.name} added to cart!`)}>
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </section>
            {/* Why Choose GlowNest */}

      <section className="why-haircare">

        <h2>Why Choose GlowNest Haircare?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>🌿 Natural Ingredients</h3>
            <p>
              Our haircare range is enriched with natural extracts that nourish
              your hair without harsh chemicals.
            </p>
          </div>

          <div className="why-card">
            <h3>✨ Healthy Shine</h3>
            <p>
              Keep your hair silky, smooth and shiny with premium quality
              shampoos, conditioners and serums.
            </p>
          </div>

          <div className="why-card">
            <h3>💖 Suitable for Everyone</h3>
            <p>
              Products carefully selected for dry, oily, curly and damaged hair.
            </p>
          </div>

        </div>

      </section>

      {/* Hair Care Routine */}

      <section className="hair-routine">

        <h2>Daily Hair Care Routine</h2>

        <div className="routine-grid">

          <div className="routine-card">
            <span>🧴</span>
            <h3>Step 1</h3>
            <p>Cleanse your hair using a nourishing shampoo.</p>
          </div>

          <div className="routine-card">
            <span>💧</span>
            <h3>Step 2</h3>
            <p>Condition your hair to lock in moisture.</p>
          </div>

          <div className="routine-card">
            <span>✨</span>
            <h3>Step 3</h3>
            <p>Apply hair serum for smoothness and shine.</p>
          </div>

          <div className="routine-card">
            <span>🌸</span>
            <h3>Step 4</h3>
            <p>Use a weekly hair mask for deep nourishment.</p>
          </div>

        </div>

      </section>

      {/* Customer Reviews */}

      <section className="hair-reviews">

        <h2>Customer Reviews</h2>

        <div className="review-grid">

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "The shampoo made my hair soft and manageable. Highly recommended!"
            </p>
            <h4>- Sneha</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "The hair serum reduced frizz and gave an amazing shine."
            </p>
            <h4>- Anjali</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "GlowNest has become my favourite destination for haircare."
            </p>
            <h4>- Priya</h4>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="hair-cta">

        <h2>Love Your Hair Every Day</h2>

        <p>
          Discover premium haircare essentials specially curated for healthy,
          beautiful hair.
        </p>

        <button onClick={() => navigate("/shop/haircare")}>
          Explore More
        </button>

      </section>
    </div>
  );
};

export default Haircare;