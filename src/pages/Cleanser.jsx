import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cleanser.css";

const cleansers = [
  {
    id: 601,
    brand: "Cetaphil",
    name: "Gentle Skin Cleanser",
    price: "₹399",
    image: "/images/products/cetaphil-cleanser.jpg",
  },
  {
    id: 602,
    brand: "CeraVe",
    name: "Hydrating Facial Cleanser",
    price: "₹799",
    image: "/images/products/cerave-cleanser.jpg",
  },
  {
    id: 603,
    brand: "Simple",
    name: "Refreshing Face Wash",
    price: "₹349",
    image: "/images/products/simple-cleanser.jpg",
  },
  {
    id: 604,
    brand: "Minimalist",
    name: "Oat Gentle Cleanser",
    price: "₹499",
    image: "/images/products/minimalist-cleanser.jpg",
  },
  {
    id: 605,
    brand: "Dot & Key",
    name: "Barrier Repair Cleanser",
    price: "₹445",
    image: "/images/products/dotkey-cleanser.jpg",
  },
  {
    id: 606,
    brand: "Plum",
    name: "Green Tea Cleanser",
    price: "₹375",
    image: "/images/products/plum-cleanser.jpg",
  },
];

function Cleanser() {
  const navigate = useNavigate();

  return (
    <div className="cleanser-page">

      {/* Hero Section */}
      <section className="cleanser-hero">
        <h1>Cleanser Collection</h1>
        <p>
          Discover premium facial cleansers from trusted beauty brands for every
          skin type.
        </p>
      </section>

      {/* Products */}
      <section className="cleanser-products">

        <h2>Top Cleanser Brands</h2>

        <div className="cleanser-grid">

          {cleansers.map((product) => (

            <div className="cleanser-card" key={product.id}>

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
                onClick={() => navigate(`/product/${product.id}`)}
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

export default Cleanser;