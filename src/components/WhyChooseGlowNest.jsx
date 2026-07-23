import React from "react";
import "../styles/WhyChooseGlowNest.css";

import { GiHerbsBundle } from "react-icons/gi";
import { FaStar, FaGem, FaHeart } from "react-icons/fa";


function WhyChooseGlowNest() {

  const reasons = [
    {
      icon: <GiHerbsBundle />,
      title: "Skin-Focused Care",
      description:
        "Personalized skincare guidance and routines designed for every skin type."
    },
    {
      icon: <FaStar />,
      title: "Expert Beauty Knowledge",
      description:
        "Learn skincare tips, ingredients, and routines through GlowNest Academy."
    },
    {
      icon: <FaGem />,
      title: "Quality Products",
      description:
        "Carefully selected beauty essentials for healthy and glowing skin."
    },
    {
      icon: <FaHeart />,
      title: "Customer First Experience",
      description:
        "Enjoy a simple, trusted, and comfortable beauty shopping journey."
    }
  ];


  return (

    <section className="why-section">

      <div className="why-heading">

        <span>WHY CHOOSE US</span>

        <h2>
          Why Choose GlowNest?
        </h2>

        <p>
          More than beauty products, we create personalized skincare experiences.
        </p>

      </div>


      <div className="why-container">

        {
          reasons.map((item, index) => (

            <div className="why-card" key={index}>


              <div className="why-icon">

                {item.icon}

              </div>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.description}
              </p>


            </div>

          ))
        }

      </div>


    </section>

  );
}


export default WhyChooseGlowNest;