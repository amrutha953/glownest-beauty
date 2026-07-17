import React from "react";
import "./Serum.css";

const Serum = () => {
  return (
    <div className="serum-page">

      {/* Hero Section */}
      <section className="serum-hero">
        <div className="serum-content">
          <h1>GlowNest Serum</h1>

          <p>
            Unlock your skin's natural glow with our
            premium face serums made for every skin type.
          </p>

          <button>
            Shop Serum
          </button>
        </div>
      </section>


      {/* Introduction */}
      <section className="serum-intro">

        <h2>Powerful Serums For Beautiful Skin</h2>

        <p>
          GlowNest serums are lightweight skincare essentials
          packed with active ingredients to hydrate, brighten,
          and improve your skin texture.
        </p>

      </section>


      {/* Benefits */}
      <section className="serum-benefits">

        <h2>Benefits of Using Serum</h2>

        <div className="serum-cards">

          <div className="serum-box">
            <h3>✨ Brightens Skin</h3>
            <p>
              Helps reduce dullness and gives a natural glow.
            </p>
          </div>


          <div className="serum-box">
            <h3>💧 Deep Hydration</h3>
            <p>
              Keeps skin soft, smooth and moisturized.
            </p>
          </div>


          <div className="serum-box">
            <h3>🌿 Improves Texture</h3>
            <p>
              Supports healthier and smoother looking skin.
            </p>
          </div>

        </div>

      </section>
            {/* Why Choose GlowNest Serum */}

      <section className="why-serum">

        <h2>Why Choose GlowNest Serum?</h2>

        <div className="why-serum-cards">

          <div className="why-card">
            <h3>✨ Advanced Formula</h3>
            <p>
              Enriched with powerful ingredients that
              support healthy and glowing skin.
            </p>
          </div>


          <div className="why-card">
            <h3>🌿 Skin Friendly</h3>
            <p>
              Gentle formulas designed for different
              skin types and daily skincare needs.
            </p>
          </div>


          <div className="why-card">
            <h3>💖 Visible Glow</h3>
            <p>
              Helps improve skin brightness, texture
              and natural radiance.
            </p>
          </div>

        </div>

      </section>



      {/* Serum Types Guide */}

      <section className="serum-types">

        <h2>Serum Types Guide</h2>


        <div className="types-cards">


          <div className="type-card">

            <h3>💧 Hydrating Serum</h3>

            <p>
              Best for dry skin. Provides deep moisture
              and keeps skin soft.
            </p>

          </div>



          <div className="type-card">

            <h3>✨ Vitamin C Serum</h3>

            <p>
              Helps brighten dull skin and gives a
              fresh glowing look.
            </p>

          </div>



          <div className="type-card">

            <h3>🌙 Retinol Serum</h3>

            <p>
              Supports smoother skin and improves
              the appearance of fine lines.
            </p>

          </div>



          <div className="type-card">

            <h3>🌿 Niacinamide Serum</h3>

            <p>
              Helps balance oil and improves skin
              texture.
            </p>

          </div>


        </div>

      </section>




      {/* Skincare Routine */}

      <section className="serum-routine">

        <h2>GlowNest Serum Skincare Routine</h2>


        <div className="routine-cards">


          <div className="routine-card">

            <span>1</span>

            <h3>Cleanse</h3>

            <p>
              Wash your face and remove impurities.
            </p>

          </div>



          <div className="routine-card">

            <span>2</span>

            <h3>Apply Serum</h3>

            <p>
              Apply 2-3 drops and gently massage.
            </p>

          </div>



          <div className="routine-card">

            <span>3</span>

            <h3>Moisturize</h3>

            <p>
              Lock hydration for a healthy glow.
            </p>

          </div>


        </div>

      </section>




      {/* Customer Reviews */}

      <section className="serum-reviews">

        <h2>Customer Reviews</h2>


        <div className="review-cards">


          <div className="review-card">

            ⭐⭐⭐⭐⭐

            <p>
              "My skin feels brighter and smoother
              after using GlowNest Serum."
            </p>

            <h4>- Ananya</h4>

          </div>



          <div className="review-card">

            ⭐⭐⭐⭐⭐

            <p>
              "Lightweight serum with amazing
              hydration."
            </p>

            <h4>- Priya</h4>

          </div>



          <div className="review-card">

            ⭐⭐⭐⭐⭐

            <p>
              "Perfect addition to my daily routine."
            </p>

            <h4>- Sneha</h4>

          </div>


        </div>

      </section>




      {/* CTA Section */}

      <section className="serum-cta">

        <h2>
          Ready To Glow With GlowNest?
        </h2>


        <p>
          Find the perfect serum for your skincare journey.
        </p>


        <button>
          Explore Serums
        </button>


      </section>
    </div>
  );
};


export default Serum;