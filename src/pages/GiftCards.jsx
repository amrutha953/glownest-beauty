import React from "react";
import { Link } from "react-router-dom";
import "./GiftCards.css";

const GiftCards = () => {
  return (
    <div className="gift-page">


      {/* Hero Section */}

      <section className="gift-hero">

        <div className="gift-content">

          <h1>GlowNest Gift Cards</h1>

          <p>
            Share the joy of beauty with your loved ones.
            Choose the perfect GlowNest gift card for every occasion.
          </p>
          <Link to="/contact">
            <button>
              Buy Gift Card
            </button>
          </Link>

        </div>

      </section>




      {/* Introduction */}

      <section className="gift-intro">

        <h2>Give The Gift Of Beauty</h2>

        <p>
          Let your loved ones explore premium skincare,
          makeup, haircare, bodycare and fragrances with
          GlowNest gift cards.
        </p>

      </section>




      {/* Gift Card Options */}

      <section className="gift-options">

        <h2>Choose Your Gift Card</h2>


        <div className="gift-cards">


          <div className="gift-card">

            <h3>💖 Beauty Starter</h3>

            <h4>₹499</h4>

            <p>
              Perfect for trying new beauty essentials.
            </p>

          </div>



          <div className="gift-card">

            <h3>✨ Glow Package</h3>

            <h4>₹999</h4>

            <p>
              A complete beauty shopping experience.
            </p>

          </div>



          <div className="gift-card">

            <h3>👑 Luxury Gift</h3>

            <h4>₹1999</h4>

            <p>
              Premium beauty collection for special moments.
            </p>

          </div>


        </div>


      </section>




      {/* Benefits */}

      <section className="gift-benefits">

        <h2>Why Choose GlowNest Gift Cards?</h2>


        <div className="benefit-cards">


          <div className="benefit-card">

            🎁

            <h3>Perfect Gift</h3>

            <p>
              A thoughtful gift for every beauty lover.
            </p>

          </div>



          <div className="benefit-card">

            💳

            <h3>Easy Payment</h3>

            <p>
              Simple and secure checkout experience.
            </p>

          </div>



          <div className="benefit-card">

            ✨

            <h3>Wide Collection</h3>

            <p>
              Shop across all GlowNest categories.
            </p>

          </div>


        </div>

      </section>


    </div>
  );
};


export default GiftCards;