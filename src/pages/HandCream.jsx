import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HandCream.css";

const products = [
  {
    id: 13401,
    brand: "Neutrogena",
    name: "Norwegian Formula Hand Cream",
    price: "₹299",
    image: "/images/products/neutrogena-hand-cream.jpg",
  },

  {
    id: 13402,
    brand: "The Body Shop",
    name: "Shea Hand Cream",
    price: "₹595",
    image: "/images/products/bodyshop-hand-cream.jpg",
  },

  {
    id: 13403,
    brand: "Nivea",
    name: "Soft Hand Cream",
    price: "₹249",
    image: "/images/products/nivea-hand-cream.jpg",
  },

  {
    id: 13404,
    brand: "Vaseline",
    name: "Healthy Hands Cream",
    price: "₹199",
    image: "/images/products/vaseline-hand-cream.jpg",
  },
];

function HandCream() {

  const navigate = useNavigate();

  return (

    <div className="handcream-page">

      <section className="handcream-hero">

        <h1>Hand Cream Collection</h1>

        <p>
          Keep your hands soft, smooth, and moisturized every day.
        </p>

      </section>

      <section className="handcream-products">

        <h2>Best Hand Creams</h2>

        <div className="handcream-grid">

          {products.map((product) => (

            <div
              className="handcream-card"
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

export default HandCream;