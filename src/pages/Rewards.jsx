import React from "react";
import { Link } from "react-router-dom";
import "./Rewards.css";

const Rewards = () => {
  return (
    <div className="rewards-page">


      {/* Hero Section */}

      <section className="rewards-hero">

        <div className="rewards-content">

          <h1>GlowNest Rewards</h1>

          <p>
            Earn points, unlock benefits and enjoy
            exciting rewards every time you shop.
          </p>

          <Link to="/membership">
            <button>
              Start Earning
            </button>
          </Link>

        </div>

      </section>




      {/* Introduction */}

      <section className="rewards-intro">

        <h2>Beauty Rewards Made Simple</h2>

        <p>
          With GlowNest Rewards, every purchase brings
          you closer to exciting offers, discounts and
          exclusive beauty benefits.
        </p>

      </section>




      {/* Points System */}

      <section className="points-section">

        <h2>How To Earn Points?</h2>


        <div className="points-cards">


          <div className="points-card">

            <h3>🛍️ Shop Products</h3>

            <p>
              Earn points on every GlowNest purchase.
            </p>

          </div>



          <div className="points-card">

            <h3>⭐ Write Reviews</h3>

            <p>
              Share your experience and collect rewards.
            </p>

          </div>



          <div className="points-card">

            <h3>🎁 Special Events</h3>

            <p>
              Get bonus points during special offers.
            </p>

          </div>


        </div>


      </section>




      {/* Benefits */}

      <section className="reward-benefits">

        <h2>Rewards Benefits</h2>


        <div className="benefit-cards">


          <div className="benefit-card">

            💖

            <h3>Exclusive Discounts</h3>

            <p>
              Redeem points for special savings.
            </p>

          </div>



          <div className="benefit-card">

            ✨

            <h3>Premium Offers</h3>

            <p>
              Access members-only beauty deals.
            </p>

          </div>



          <div className="benefit-card">

            👑

            <h3>Special Rewards</h3>

            <p>
              Enjoy exciting gifts and surprises.
            </p>

          </div>


        </div>


      </section>


    </div>
  );
};


export default Rewards;