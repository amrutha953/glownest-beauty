import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BodyWash.css";

const products = [
  {
    id: 13001,
    brand: "Dove",
    name: "Deeply Nourishing Body Wash",
    price: "₹399",
    image: "/images/products/dove-body-wash.jpg",
  },

  {
    id: 13002,
    brand: "Nivea",
    name: "Creme Soft Body Wash",
    price: "₹349",
    image: "/images/products/nivea-body-wash.jpg",
  },

  {
    id: 13003,
    brand: "Palmolive",
    name: "Aroma Morning Tonic Body Wash",
    price: "₹299",
    image: "/images/products/palmolive-body-wash.jpg",
  },

  {
    id: 13004,
    brand: "Fiama",
    name: "Blackcurrant Body Wash",
    price: "₹275",
    image: "/images/products/fiama-body-wash.jpg",
  },
];

function BodyWash() {
  const navigate = useNavigate();

  return (
    <div className="bodywash-page">

      <section className="bodywash-hero">

        <h1>Body Wash Collection</h1>

        <p>
          Cleanse, nourish and refresh your skin with premium body washes.
        </p>

      </section>

      <section className="bodywash-products">

        <h2>Best Body Wash Products</h2>

        <div className="bodywash-grid">

          {products.map((product) => (

            <div
              className="bodywash-card"
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

export default BodyWash;