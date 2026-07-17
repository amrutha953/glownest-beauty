import React from "react";
import "./CustomerCare.css";

const CustomerCare = () => {
  return (
    <div className="customer-care-page">

      <section className="care-hero">

        <h1>GlowNest Customer Care</h1>

        <p>
          We are here to make your beauty shopping
          experience simple and delightful.
        </p>

      </section>



      <section className="care-options">

        <h2>How Can We Help You?</h2>


        <div className="care-cards">


          <div className="care-card">

            <h3>📞 Support</h3>

            <p>
              Get help with orders, products and
              account related questions.
            </p>

          </div>



          <div className="care-card">

            <h3>🎁 Gift Cards</h3>

            <p>
              Send beautiful beauty gifts to your
              loved ones.
            </p>

          </div>



          <div className="care-card">

            <h3>🏷️ Coupons</h3>

            <p>
              Discover exciting offers and
              exclusive discounts.
            </p>

          </div>



          <div className="care-card">

            <h3>💄 Beauty Tips</h3>

            <p>
              Learn skincare and beauty routines
              from experts.
            </p>

          </div>



          <div className="care-card">

            <h3>💎 Membership</h3>

            <p>
              Enjoy premium benefits and rewards.
            </p>

          </div>



          <div className="care-card">

            <h3>⭐ Rewards</h3>

            <p>
              Earn points and enjoy special offers.
            </p>

          </div>


        </div>

      </section>


    </div>
  );
};


export default CustomerCare;