import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VitaminC.css";

const products = [
  {
    id: 14001,
    brand: "Minimalist",
    name: "10% Vitamin C Face Serum",
    price: "₹699",
    image: "/images/products/minimalist-vitamin-c.jpg",
  },

  {
    id: 14002,
    brand: "Plum",
    name: "Vitamin C Face Serum",
    price: "₹649",
    image: "/images/products/plum-vitamin-c.jpg",
  },

  {
    id: 14003,
    brand: "Dot & Key",
    name: "Cica + Vitamin C Serum",
    price: "₹749",
    image: "/images/products/dotkey-vitamin-c.jpg",
  },

  {
    id: 14004,
    brand: "Mamaearth",
    name: "Skin Illuminate Vitamin C Serum",
    price: "₹599",
    image: "/images/products/mamaearth-vitamin-c.jpg",
  },
];

function VitaminC() {

  const navigate = useNavigate();

  return (

    <div className="vitaminc-page">

      <section className="vitaminc-hero">

        <h1>Vitamin C Serum Collection</h1>

        <p>
          Brighten your skin and reduce dullness with premium Vitamin C serums.
        </p>

      </section>

      <section className="vitaminc-products">

        <h2>Best Vitamin C Serums</h2>

        <div className="vitaminc-grid">

          {products.map((product) => (

            <div
              className="vitaminc-card"
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

export default VitaminC;