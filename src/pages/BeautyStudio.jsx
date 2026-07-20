import React from "react";
import "../styles/BeautyStudio.css";

function BeautyStudio() {
  return (
    <section className="beauty-studio-section">

      {/* Heading */}

      <div className="studio-heading">

        <span>GlowNest Beauty Studio</span>

        <h2>
          Find Your Perfect Beauty Routine ✨
        </h2>

        <p>
          Discover personalized skincare and beauty
          recommendations created for your unique needs.
        </p>

      </div>



      {/* Skin Analysis Banner */}

      <div className="studio-banner">

        <div className="banner-text">

          <h3>
            Not sure what your skin needs?
          </h3>

          <p>
            Take our beauty consultation and discover
            products that match your skin type.
          </p>


          <button>
            Start Skin Analysis
          </button>

        </div>


        <div className="banner-image">

          <div className="glow-circle">
            
          </div>

        </div>

      </div>




      {/* Skin Cards */}

      <h3 className="choose-title">
        Choose Your Skin Type
      </h3>


      <div className="beauty-cards">


        <div className="beauty-card">

          <span></span>

          <h4>
            Dry Skin
          </h4>

          <p>
            Hydration focused care for soft,
            healthy and glowing skin.
          </p>

        </div>



        <div className="beauty-card">

          <span></span>

          <h4>
            Oily Skin
          </h4>

          <p>
            Balance excess oil and maintain
            fresh looking skin.
          </p>

        </div>




        <div className="beauty-card">

          <span></span>

          <h4>
            Sensitive Skin
          </h4>

          <p>
            Gentle skincare solutions for
            delicate skin.
          </p>

        </div>



        <div className="beauty-card">

          <span></span>

          <h4>
            Combination Skin
          </h4>

          <p>
            Customized care for balanced
            skin needs.
          </p>

        </div>


      </div>


    </section>
  );
}

export default BeautyStudio;