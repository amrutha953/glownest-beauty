import React from "react";
import { useNavigate } from "react-router-dom";
import "./Makeup.css";

const products = [
  {
    id: 1,
    name: "Matte Lipstick",
    price: "₹499",
    image: "/images/makeup.jpg",
  },
  {
    id: 2,
    name: "Liquid Foundation",
    price: "₹899",
    image: "/images/makeup.jpg",
  },
  {
    id: 3,
    name: "Waterproof Mascara",
    price: "₹699",
    image: "/images/makeup.jpg",
  },
  {
    id: 4,
    name: "Eyeshadow Palette",
    price: "₹999",
    image: "/images/makeup.jpg",
  },
];

const Makeup = () => {
  const navigate = useNavigate();

  return (
    <div className="makeup-page">

      {/* Hero Section */}
      <section className="makeup-hero">
        <div className="makeup-overlay">
          <h1>Makeup Collection</h1>

          <p>
            Discover premium makeup products that help you create stunning looks
            for every occasion.
          </p>

          <button onClick={() => navigate("/shop")}>
            Shop Makeup
          </button>
        </div>
      </section>

      {/* Introduction */}

      <section className="makeup-intro">

        <h2>Enhance Your Natural Beauty</h2>

        <p>
          Explore our collection of lipsticks, foundations, mascaras,
          eyeshadows, blushes and more from trusted beauty brands.
        </p>

      </section>

      {/* Featured Products */}

      <section className="featured-products">

        <h2>Featured Makeup Products</h2>

        <div className="products-grid">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <span>{product.price}</span>

              <button
                onClick={() =>
                  alert(`${product.name} added to cart!`)
                }
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </section>
            {/* Benefits */}

      <section className="makeup-benefits">

        <h2>Why You'll Love Our Makeup</h2>

        <div className="benefits-grid">

          <div className="benefit-card">
            <div className="benefit-icon">💄</div>
            <h3>Long Lasting</h3>
            <p>
              Enjoy makeup that stays fresh and beautiful throughout the day.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">✨</div>
            <h3>Radiant Finish</h3>
            <p>
              Achieve a flawless look with smooth, lightweight formulas.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🌸</div>
            <h3>Skin Friendly</h3>
            <p>
              Gentle ingredients suitable for everyday makeup routines.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🎨</div>
            <h3>Wide Shades</h3>
            <p>
              Find colors that perfectly complement every skin tone.
            </p>
          </div>

        </div>

      </section>

      {/* Popular Brands */}

      <section className="makeup-brands">

        <h2>Popular Makeup Brands</h2>

        <div className="brands">

          <div className="brand">Maybelline</div>
          <div className="brand">Lakmé</div>
          <div className="brand">L'Oréal Paris</div>
          <div className="brand">Huda Beauty</div>
          <div className="brand">Swiss Beauty</div>
          <div className="brand">Mamaearth</div>

        </div>

      </section>

      {/* Customer Reviews */}

      <section className="makeup-reviews">

        <h2>Customer Reviews</h2>

        <div className="review-grid">

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "The lipstick is amazing and lasts all day!"
            </p>
            <h4>- Aisha</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              "Foundation blends perfectly and gives a natural finish."
            </p>
            <h4>- Neha</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐☆
            <p>
              "Excellent quality and affordable prices."
            </p>
            <h4>- Kavya</h4>
          </div>

        </div>

      </section>

      {/* Makeup Tips */}

      <section className="makeup-tips">

        <h2>Quick Makeup Tips</h2>

        <div className="tips-grid">

          <div className="tip-card">
            💡 Always apply moisturizer before foundation.
          </div>

          <div className="tip-card">
            💄 Use a lip liner for longer-lasting lipstick.
          </div>

          <div className="tip-card">
            ✨ Blend makeup well for a natural finish.
          </div>

          <div className="tip-card">
            ☀️ Never skip sunscreen before makeup.
          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="makeup-faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-card">
          <h3>Which makeup products should beginners buy?</h3>

          <p>
            Start with foundation, compact powder, lipstick, mascara and kajal.
          </p>
        </div>

        <div className="faq-card">
          <h3>Is the makeup suitable for daily use?</h3>

          <p>
            Yes, our collection includes lightweight products suitable for everyday wear.
          </p>
        </div>

        <div className="faq-card">
          <h3>How do I choose the right foundation shade?</h3>

          <p>
            Select a shade that closely matches your neck and jawline for the most natural look.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Makeup;