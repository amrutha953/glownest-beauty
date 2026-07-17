import React from "react";
import { Link } from "react-router-dom";
import "./Membership.css";

const Membership = () => {
  return (
    <div className="membership-page">


      {/* Hero Section */}

      <section className="membership-hero">

        <div className="membership-content">

          <h1>GlowNest Membership</h1>

          <p>
            Join GlowNest Premium and enjoy exclusive
            beauty benefits, special offers and rewards.
          </p>

         <Link to="/contact">
           <button>
             Join Now
           </button>
         </Link>

        </div>

      </section>




      {/* Introduction */}

      <section className="membership-intro">

        <h2>Experience Premium Beauty Shopping</h2>

        <p>
          GlowNest Membership gives you access to
          special discounts, early launches and
          exciting beauty rewards.
        </p>

      </section>




      {/* Benefits */}

      <section className="membership-benefits">

        <h2>Membership Benefits</h2>


        <div className="membership-cards">


          <div className="membership-card">

            <h3>💎 Exclusive Discounts</h3>

            <p>
              Enjoy special member-only offers
              on your favourite beauty products.
            </p>

          </div>



          <div className="membership-card">

            <h3>🚀 Early Access</h3>

            <p>
              Get first access to new launches
              and limited collections.
            </p>

          </div>



          <div className="membership-card">

            <h3>⭐ Reward Points</h3>

            <p>
              Earn points every time you shop
              and redeem exciting rewards.
            </p>

          </div>



        </div>


      </section>




      {/* Plans */}

      <section className="membership-plans">

        <h2>Choose Your Plan</h2>


        <div className="plan-cards">


          <div className="plan-card">

            <h3>✨ Basic</h3>

            <h4>₹499 / Year</h4>

            <p>
              Essential beauty benefits.
            </p>

          </div>



          <div className="plan-card featured">

            <h3>👑 Premium</h3>

            <h4>₹999 / Year</h4>

            <p>
              Maximum benefits and rewards.
            </p>

          </div>



          <div className="plan-card">

            <h3>💖 Luxury</h3>

            <h4>₹1999 / Year</h4>

            <p>
              Exclusive premium experience.
            </p>

          </div>


        </div>


      </section>


    </div>
  );
};


export default Membership;