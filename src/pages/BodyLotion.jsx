import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BodyLotion.css";

const products = [
  {
    id: 13101,
    brand: "Nivea",
    name: "Cocoa Nourish Body Lotion",
    price: "₹399",
    image: "/images/products/nivea-body-lotion.jpg",
  },

  {
    id: 13102,
    brand: "Vaseline",
    name: "Intensive Care Deep Moisture Lotion",
    price: "₹349",
    image: "/images/products/vaseline-body-lotion.jpg",
  },

  {
    id: 13103,
    brand: "Dove",
    name: "Deeply Nourishing Body Lotion",
    price: "₹425",
    image: "/images/products/dove-body-lotion.jpg",
  },

  {
    id: 13104,
    brand: "Cetaphil",
    name: "Moisturizing Body Lotion",
    price: "₹799",
    image: "/images/products/cetaphil-body-lotion.jpg",
  },
];

function BodyLotion() {

  const navigate = useNavigate();

  return (

    <div className="bodylotion-page">

      <section className="bodylotion-hero">

        <h1>Body Lotion Collection</h1>

        <p>
          Keep your skin soft, hydrated, and healthy with our premium body lotions.
        </p>

      </section>

      <section className="bodylotion-products">

        <h2>Best Body Lotions</h2>

        <div className="bodylotion-grid">

          {products.map((product) => (

            <div
              className="bodylotion-card"
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

export default BodyLotion;