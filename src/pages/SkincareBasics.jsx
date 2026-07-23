import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import products from "../data/products";
import "./SkincareBasics.css";

function SkincareBasics() {
const { addToCart } = useContext(CartContext);
const { addToWishlist } = useContext(WishlistContext);

const skincareProducts = products.filter(
  (product) => product.category === "skincare"
);
  return (
    <div className="skincare-basics">
        <div className="breadcrumb">
  <Link to="/">Home</Link>

  <span>›</span>

  <Link to="/">Beauty Academy</Link>

  <span>›</span>

  <strong>Skincare Basics</strong>
</div>

      {/* HERO */}
      <section className="basics-hero">

        <div className="hero-text">
          <span>GLOWNEST BEAUTY ACADEMY</span>

          <h1>Skincare Basics</h1>

          <p>
            Healthy skin begins with a simple routine. Learn the
            essentials of cleansing, moisturizing, sun protection,
            and healthy skincare habits to achieve naturally glowing skin.
          </p>
        </div>

        <div className="hero-image">
          <img
            src="/images/academy/skincare-basics.jpg"
            alt="Skincare Basics"
          />
        </div>

      </section>



      {/* INTRODUCTION */}

      <section className="intro-section">

        <h2>What is Skincare?</h2>

        <p>
          Skincare is the daily practice of protecting and improving
          your skin using the right products and healthy habits.
          A consistent routine helps keep your skin hydrated,
          balanced, and protected from environmental damage.
        </p>

      </section>



      {/* ESSENTIAL STEPS */}

      <section className="steps-section">

        <h2>4 Essential Steps</h2>

        <div className="steps-grid">

          <div className="step-card">

  <div className="step-number">1</div>

  <h3>Cleanse</h3>

  <p>
    Removes dirt, excess oil, sunscreen and makeup while
    keeping your skin fresh and healthy.
  </p>

  <div className="step-info">

    <h4>Why it matters</h4>

    <p>
      Clean skin allows serums and moisturizers to absorb
      better for healthier skin.
    </p>

  </div>

  <div className="step-product">

    Recommended:
    <strong> GlowNest Gentle Cleanser</strong>

  </div>

</div>


          <div className="step-card">

  <div className="step-number">2</div>

  <h3>Moisturize</h3>

  <p>
    Keep your skin hydrated and strengthen the skin barrier.
    A good moisturizer helps maintain soft, healthy, glowing skin.
  </p>


  <div className="step-info">

    <h4>Why it matters</h4>

    <p>
      Moisturizing prevents dryness, supports the skin barrier,
      and keeps your skin smooth and balanced throughout the day.
    </p>

  </div>


  <div className="step-product">

    Recommended:
    <strong> GlowNest Hydrating Moisturizer</strong>

  </div>

</div>


          <div className="step-card">

  <div className="step-number">3</div>

  <h3>Protect</h3>

  <p>
    Wear sunscreen every day to protect your skin from UV damage
    and maintain healthy, youthful-looking skin.
  </p>


  <div className="step-info">

    <h4>Why it matters</h4>

    <p>
      Sunscreen protects your skin from harmful UV rays,
      prevents premature aging, and helps avoid uneven skin tone.
    </p>

  </div>


  <div className="step-product">

    Recommended:
    <strong> GlowNest SPF 50 Sunscreen</strong>

  </div>

</div>


          <div className="step-card">

  <div className="step-number">4</div>

  <h3>Treat</h3>

  <p>
    Use targeted skincare treatments like serums to
    address specific skin concerns and improve your skin health.
  </p>


  <div className="step-info">

    <h4>Why it matters</h4>

    <p>
      Treatments deliver active ingredients that help with
      concerns like dullness, acne, pigmentation, and uneven texture.
    </p>

  </div>


  <div className="step-product">

    Recommended:
    <strong> GlowNest Vitamin C Serum</strong>

  </div>

</div>

        </div>

      </section>



      {/* MORNING ROUTINE */}

      <section className="routine-section">

        <h2>Morning Routine</h2>

        <div className="routine-grid">

          <div className="routine-card">
            <span>1</span>
            <h3>Cleanser</h3>
          </div>

          <div className="routine-card">
            <span>2</span>
            <h3>Vitamin C Serum</h3>
          </div>

          <div className="routine-card">
            <span>3</span>
            <h3>Moisturizer</h3>
          </div>

          <div className="routine-card">
            <span>4</span>
            <h3>Sunscreen SPF 30+</h3>
          </div>

        </div>

      </section>



      {/* NIGHT ROUTINE */}

      <section className="routine-section">

        <h2>Night Routine</h2>

        <div className="routine-grid">

          <div className="routine-card">
            <span>1</span>
            <h3>Cleanser</h3>
          </div>

          <div className="routine-card">
            <span>2</span>
            <h3>Treatment Serum</h3>
          </div>

          <div className="routine-card">
            <span>3</span>
            <h3>Moisturizer</h3>
          </div>

        </div>

      </section>



      {/* COMMON MISTAKES */}

      <section className="mistakes-section">

        <h2>Common Skincare Mistakes</h2>

        <div className="mistakes-grid">

          <div className="mistake-card">
            ❌ Sleeping with Makeup
          </div>

          <div className="mistake-card">
            ❌ Skipping Sunscreen
          </div>

          <div className="mistake-card">
            ❌ Over Exfoliating
          </div>

          <div className="mistake-card">
            ❌ Using Too Many Products
          </div>

        </div>

      </section>



      {/* EXPERT TIPS */}

      <section className="tips-section">

        <h2>Expert Tips</h2>

        <div className="tips-grid">

          <div className="tip">
            💧 Drink plenty of water every day.
          </div>

          <div className="tip">
            🥗 Eat a balanced diet rich in fruits and vegetables.
          </div>

          <div className="tip">
            😴 Sleep 7–8 hours every night.
          </div>

          <div className="tip">
            ☀ Never skip sunscreen, even indoors.
          </div>

          <div className="tip">
            ✨ Be consistent with your skincare routine.
          </div>

          <div className="tip">
            🧴 Patch-test new skincare products.
          </div>

        </div>

      </section>
      {/* RECOMMENDED PRODUCTS */}

<section id="products" className="products-section">

  <h2>Recommended Products</h2>

  <div className="products-grid">

    {skincareProducts.map((product) => (

      <div className="product-card" key={product.id}>

        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>

        <button
          className="wishlist-btn"
          onClick={() => addToWishlist(product)}
        >
          ♡
        </button>

        <h3>
          <Link
            to={`/product/${product.id}`}
            className="product-link"
          >
            {product.name}
          </Link>
        </h3>

        <p>₹{product.price}</p>

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>

    ))}

  </div>

</section>



      {/* CTA */}

      <section className="cta-section">

        <h2>Healthy Skin Starts Today</h2>

        <p>
          Build a simple skincare routine and stay consistent.
          Small daily habits create long-lasting results.
        </p>

        <Link to="/beauty-academy">
  <button>
  Start Your Skin Analysis
</button>
</Link>

      </section>

    </div>
  );
}

export default SkincareBasics;