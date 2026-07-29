import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Soap.css";

const products = [
  {
    id: 13601,
    brand: "Dove",
    name: "Beauty Bathing Bar",
    price: "₹299",
    image: "/images/products/dove-soap.jpg",
  },

  {
    id: 13602,
    brand: "Pears",
    name: "Pure & Gentle Soap",
    price: "₹199",
    image: "/images/products/pears-soap.jpg",
  },

  {
    id: 13603,
    brand: "Medimix",
    name: "Ayurvedic Classic Soap",
    price: "₹149",
    image: "/images/products/medimix-soap.jpg",
  },

  {
    id: 13604,
    brand: "Dettol",
    name: "Original Bath Soap",
    price: "₹179",
    image: "/images/products/dettol-soap.jpg",
  },
];

function Soap() {
  const navigate = useNavigate();

  return (
    <div className="soap-page">

      <section className="soap-hero">
        <h1>Soap Collection</h1>

        <p>
          Discover gentle soaps that cleanse, nourish and protect your skin.
        </p>
      </section>

      <section className="soap-products">

        <h2>Best Soaps</h2>

        <div className="soap-grid">

          {products.map((product) => (

            <div
              className="soap-card"
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

export default Soap;