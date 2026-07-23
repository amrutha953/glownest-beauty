import React from "react";
import { useNavigate } from "react-router-dom";
import "./Skincare.css";

const products = [
  {
    id: 1,
    name: "Vitamin C Face Serum",
    price: "₹699",
    image: "/images/vitamin-c-face-serum.jpg",
  },
  {
    id: 2,
    name: "Daily Face Cleanser",
    price: "₹399",
    image: "/images/daily-face-cleanser.jpg",
  },
  {
    id: 3,
    name: "Hydrating Moisturizer",
    price: "₹549",
    image: "/images/hydrating moisturizer.jpg",
  },
  {
    id: 4,
    name: "SPF 50 Sunscreen",
    price: "₹599",
    image: "/images/spf 50 sunscreen.jpg",
  },
];

const Skincare = () => {
    const navigate = useNavigate();
  return (
    <div className="skincare-page">

      {/* Hero Section */}
      <section className="skin-hero">
        <div className="skin-overlay">
          <h1>Skincare Collection</h1>

          <p>
            Discover premium skincare products that keep your skin healthy,
            hydrated and naturally glowing.
          </p>

          <button onClick={() => navigate("/shop")}>
            Shop Skincare
          </button>
        </div>
      </section>

      {/* Introduction */}

      <section className="skin-intro">

        <h2>Healthy Skin Starts Here</h2>

        <p>
          Whether you're looking for cleansers, moisturizers, serums or
          sunscreens, GlowNest brings together trusted skincare essentials
          suitable for every skin type.
        </p>

      </section>

      {/* Featured Products */}

      <section className="featured-products">

        <h2>Featured Products</h2>

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
            {/* Benefits */}

      <section className="skin-benefits">

        <h2>Why Choose Our Skincare?</h2>

        <div className="benefits-grid">

          <div className="benefit-card">
            <div className="benefit-icon">💧</div>
            <h3>Deep Hydration</h3>
            <p>
              Moisturizes your skin and keeps it soft, smooth, and healthy
              throughout the day.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🌿</div>
            <h3>Natural Ingredients</h3>
            <p>
              Made with carefully selected botanical extracts suitable for all
              skin types.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">☀️</div>
            <h3>UV Protection</h3>
            <p>
              Protect your skin from harmful sun damage with daily skincare.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">✨</div>
            <h3>Healthy Glow</h3>
            <p>
              Improve skin texture and reveal a naturally radiant complexion.
            </p>
          </div>

        </div>

      </section>


      {/* Popular Brands */}

      <section className="skin-brands">

        <h2>Popular Brands</h2>

        <div className="brands">

          <div className="brand">Cetaphil</div>
          <div className="brand">CeraVe</div>
          <div className="brand">Minimalist</div>
          <div className="brand">Dot & Key</div>
          <div className="brand">Neutrogena</div>
          <div className="brand">Lakmé</div>

        </div>

      </section>


      {/* Customer Reviews */}

      <section className="skin-reviews">

        <h2>Customer Reviews</h2>

        <div className="review-grid">

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "Amazing products! My skin feels healthier after just two weeks."
            </p>
            <h4>- Priya</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "Excellent quality and fast delivery. Highly recommended."
            </p>
            <h4>- Ananya</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐☆
            <p>
              "Loved the moisturizer. Lightweight and perfect for daily use."
            </p>
            <h4>- Sneha</h4>
          </div>

        </div>

      </section>


      {/* FAQ */}

      <section className="skin-faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-card">
          <h3>Which skincare products are best for beginners?</h3>

          <p>
            Start with a gentle cleanser, moisturizer, sunscreen, and a Vitamin
            C serum for daily care.
          </p>
        </div>

        <div className="faq-card">
          <h3>Can I use these products every day?</h3>

          <p>
            Yes. Most products are designed for daily use. Always follow the
            instructions on the product label.
          </p>
        </div>

        <div className="faq-card">
          <h3>Are the products suitable for sensitive skin?</h3>

          <p>
            Many products are suitable for sensitive skin, but we recommend
            performing a patch test before regular use.
          </p>
        </div>

      </section>

    </div>
  );
};

export default Skincare;