import React from "react";
import { Link } from "react-router-dom";
import "./BeautyTips.css";

const BeautyTips = () => {
  return (
    <div className="beauty-tips-page">


      {/* Hero Section */}

      <section className="beauty-hero">

        <div className="beauty-content">

          <h1>GlowNest Beauty Tips</h1>

          <p>
            Discover simple beauty routines, skincare
            secrets and expert tips for your daily glow.
          </p>

          <Link to="/shop/skincare">
            <button>
              Explore Tips
            </button>
          </Link>
            
          

        </div>

      </section>




      {/* Introduction */}

      <section className="beauty-intro">

        <h2>Your Beauty Guide</h2>

        <p>
          From skincare routines to makeup tricks and
          haircare advice, GlowNest brings you helpful
          beauty knowledge.
        </p>

      </section>




      {/* Tips Categories */}

      <section className="tips-section">

        <h2>Beauty Tips Categories</h2>


        <div className="tips-cards">


          <div className="tip-card">

            <h3>🌿 Skincare Tips</h3>

            <p>
              Learn daily skincare routines, hydration
              tips and ways to maintain healthy skin.
            </p>

          </div>



          <div className="tip-card">

            <h3>💄 Makeup Tips</h3>

            <p>
              Discover makeup techniques, product
              selection and beauty hacks.
            </p>

          </div>



          <div className="tip-card">

            <h3>💆 Haircare Tips</h3>

            <p>
              Get tips for stronger, shinier and
              healthier hair.
            </p>

          </div>



        </div>


      </section>




      {/* Daily Routine */}

      <section className="daily-routine">

        <h2>Daily Beauty Routine</h2>


        <div className="routine-cards">


          <div className="routine-card">

            <h3>☀️ Morning</h3>

            <p>
              Cleanse, moisturize and protect your
              skin with sunscreen.
            </p>

          </div>



          <div className="routine-card">

            <h3>🌙 Night</h3>

            <p>
              Remove makeup, apply skincare and
              hydrate your skin.
            </p>

          </div>



          <div className="routine-card">

            <h3>✨ Weekly Care</h3>

            <p>
              Pamper yourself with masks and
              nourishing treatments.
            </p>

          </div>


        </div>


      </section>


    </div>
  );
};


export default BeautyTips;