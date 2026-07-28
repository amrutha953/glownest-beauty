import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HairSpray.css";

const products = [

  {
    id: 12051,
    brand: "Tresemmé",
    name: "Completely Invisible Hair Spray",
    price: "₹699",
    image: "/images/products/tresemme-hair-spray.jpg",
  },

  {
    id: 12052,
    brand: "L'Oréal Paris",
    name: "Elnett Satin Hair Spray",
    price: "₹899",
    image: "/images/products/loreal-hair-spray.jpg",
  },

  {
    id: 12053,
    brand: "Schwarzkopf",
    name: "Taft Power Hair Spray",
    price: "₹799",
    image: "/images/products/schwarzkopf-hair-spray.jpg",
  },

  {
    id: 12054,
    brand: "BBlunt",
    name: "Hot Shot Hair Spray",
    price: "₹650",
    image: "/images/products/bblunt-hair-spray.jpg",
  },

];

function HairSpray() {

  const navigate = useNavigate();

  return (

    <div className="hairspray-page">

      <section className="hairspray-hero">

        <h1>Hair Spray Collection</h1>

        <p>
          Long-lasting hold and styling with professional hair sprays.
        </p>

      </section>

      <section className="hairspray-products">

        <h2>Best Hair Sprays</h2>

        <div className="hairspray-grid">

          {products.map((product) => (

            <div
              className="hairspray-card"
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

export default HairSpray;