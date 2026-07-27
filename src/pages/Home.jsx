import React from "react";
import { useNavigate } from "react-router-dom";

import HeroSlider from "../components/HeroSlider";
import BeautyStudio from "./BeautyStudio";
import BeautyAcademy from "./BeautyAcademy";
import WhyChooseGlowNest from "../components/WhyChooseGlowNest";
import "../styles/Home.css";
const Home = () => {

  const navigate = useNavigate();


  return (
    <>

      {/* Hero Banner */}
      <HeroSlider />


      {/* Beauty Sections */}
      <BeautyStudio />

      <BeautyAcademy />

      <WhyChooseGlowNest />


      {/* Customer Review Section */}

<section className="review-section">


  <div className="review-left">

    <span className="review-tag">
      CUSTOMER LOVE
    </span>


    <h2>
      Your Beauty Journey Matters To Us
    </h2>


    <p>
      Share your experience with GlowNest Beauty.
      Your reviews help thousands of beauty lovers
      choose the right products with confidence.
    </p>


    <div className="review-stats">

      <div>
        <h3>10K+</h3>
        <span>Happy Customers</span>
      </div>


      <div>
        <h3>500+</h3>
        <span>Beauty Products</span>
      </div>


      <div>
        <h3>4.9★</h3>
        <span>Average Rating</span>
      </div>

    </div>


    <button
      onClick={() => navigate("/write-review")}
    >
      Write Your Review
    </button>


  </div>




  <div className="review-card">


    <div className="quote">
      “
    </div>


    <div className="stars">
      ★★★★★
    </div>


    <p>
      GlowNest has completely changed my skincare
      routine. Authentic products, beautiful packaging
      and amazing service.
    </p>


    <h4>
      Priya S.
    </h4>


    <span>
      Verified Customer
    </span>


  </div>


</section>


    </>
  );
};


export default Home;