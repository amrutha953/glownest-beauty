import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BodyButter.css";

const products = [
  {
    id: 13201,
    brand: "The Body Shop",
    name: "Shea Body Butter",
    price: "₹999",
    image: "/images/products/shea-body-butter.jpg",
  },

  {
    id: 13202,
    brand: "Plum",
    name: "Vanilla Body Butter",
    price: "₹649",
    image: "/images/products/plum-body-butter.jpg",
  },

  {
    id: 13203,
    brand: "MCaffeine",
    name: "Coffee Body Butter",
    price: "₹599",
    image: "/images/products/mcaffeine-body-butter.jpg",
  },

  {
    id: 13204,
    brand: "WOW Skin Science",
    name: "Cocoa Body Butter",
    price: "₹549",
    image: "/images/products/wow-body-butter.jpg",
  },
];

function BodyButter() {

  const navigate = useNavigate();

  return (

    <div className="bodybutter-page">

      <section className="bodybutter-hero">

        <h1>Body Butter Collection</h1>

        <p>
          Deep nourishment and long-lasting hydration for soft, glowing skin.
        </p>

      </section>

      <section className="bodybutter-products">

        <h2>Best Body Butters</h2>

        <div className="bodybutter-grid">

          {products.map((product) => (

            <div
              className="bodybutter-card"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <span className="brand">
                {product.brand}
              </span>

              <h3>{product.name}</h3>

              <div className="rating">
                ★★★★★
              </div>

              <h4>{product.price}</h4>

              <button
                onClick={() =>
                  navigate(`/product/${product.id}`)
                }
              >
                View Details
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>

  );

}

export default BodyButter;