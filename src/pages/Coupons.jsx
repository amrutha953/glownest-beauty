import React from "react";
import { Link } from "react-router-dom";
import "./Coupons.css";

const Coupons = () => {
  return (
    <div className="coupons-page">


      {/* Hero Section */}

      <section className="coupons-hero">

        <div className="coupons-content">

          <h1>GlowNest Coupons</h1>

          <p>
            Unlock amazing beauty deals and enjoy
            exclusive discounts on your favourite products.
          </p>

          <Link to="/offers">
            <button>
              View Offers
            </button>
          </Link>

        </div>

      </section>




      {/* Introduction */}

      <section className="coupons-intro">

        <h2>Exclusive Beauty Offers</h2>

        <p>
          Save more on skincare, makeup, haircare,
          bodycare and fragrances with GlowNest coupons.
        </p>

      </section>




      {/* Coupon Cards */}

      <section className="coupon-section">

        <h2>Available Coupons</h2>


        <div className="coupon-cards">


          <div className="coupon-card">

            <h3>💖 GLOW20</h3>

            <h4>20% OFF</h4>

            <p>
              Get 20% discount on beauty essentials.
            </p>

          </div>



          <div className="coupon-card">

            <h3>✨ FIRST50</h3>

            <h4>₹50 OFF</h4>

            <p>
              Special offer for first-time shoppers.
            </p>

          </div>



          <div className="coupon-card">

            <h3>🌸 BEAUTY30</h3>

            <h4>30% OFF</h4>

            <p>
              Enjoy exciting discounts on selected products.
            </p>

          </div>


        </div>


      </section>




      {/* Benefits */}

      <section className="coupon-benefits">

        <h2>Why Use GlowNest Coupons?</h2>


        <div className="benefit-cards">


          <div className="benefit-card">

            🎁

            <h3>Save Money</h3>

            <p>
              Get the best beauty products at better prices.
            </p>

          </div>



          <div className="benefit-card">

            🛍️

            <h3>More Shopping</h3>

            <p>
              Explore more products with extra savings.
            </p>

          </div>



          <div className="benefit-card">

            ⭐

            <h3>Special Deals</h3>

            <p>
              Access exclusive GlowNest offers.
            </p>

          </div>


        </div>

      </section>


    </div>
  );
};


export default Coupons;