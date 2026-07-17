import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="support-page">


      {/* Hero Section */}

      <section className="support-hero">

        <div className="support-content">

          <h1>GlowNest Support</h1>

          <p>
            We are here to help you with orders,
            products and every beauty shopping need.
          </p>

          <button>
            Contact Support
          </button>

        </div>

      </section>




      {/* Support Options */}

      <section className="support-options">

        <h2>How Can We Help You?</h2>


        <div className="support-cards">


          <div className="support-card">

            <h3>📦 Order Assistance</h3>

            <p>
              Need help with your order status,
              delivery or order details?
            </p>

          </div>



          <div className="support-card">

            <h3>↩️ Returns & Refunds</h3>

            <p>
              Get assistance with returns,
              replacements and refunds.
            </p>

          </div>



          <div className="support-card">

            <h3>💳 Payment Help</h3>

            <p>
              Issues with payments, transactions
              or billing? We are here to help.
            </p>

          </div>



        </div>


      </section>



    </div>
  );
};


export default Support;