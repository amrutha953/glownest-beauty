import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BodyScrub.css";

const products = [
  {
    id: 13301,
    brand: "MCaffeine",
    name: "Coffee Body Scrub",
    price: "₹449",
    image: "/images/products/mcaffeine-body-scrub.jpg",
  },

  {
    id: 13302,
    brand: "Plum",
    name: "BodyLovin Sugar Scrub",
    price: "₹599",
    image: "/images/products/plum-body-scrub.jpg",
  },

  {
    id: 13303,
    brand: "Dove",
    name: "Exfoliating Body Polish",
    price: "₹499",
    image: "/images/products/dove-body-scrub.jpg",
  },

  {
    id: 13304,
    brand: "The Body Shop",
    name: "British Rose Body Scrub",
    price: "₹999",
    image: "/images/products/bodyshop-body-scrub.jpg",
  },
];

function BodyScrub() {

  const navigate = useNavigate();

  return (

    <div className="bodyscrub-page">

      <section className="bodyscrub-hero">

        <h1>Body Scrub Collection</h1>

        <p>
          Exfoliate dead skin cells and reveal smooth, glowing skin.
        </p>

      </section>

      <section className="bodyscrub-products">

        <h2>Best Body Scrubs</h2>

        <div className="bodyscrub-grid">

          {products.map((product) => (

            <div
              className="bodyscrub-card"
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

export default BodyScrub;