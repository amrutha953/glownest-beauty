import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FaceWash.css";

const faceWashes = [
  {
    id: 801,
    brand: "Cetaphil",
    name: "Gentle Foaming Face Wash",
    price: "₹499",
    image: "/images/products/cetaphil-facewash.jpg",
  },
  {
    id: 802,
    brand: "Simple",
    name: "Refreshing Face Wash",
    price: "₹399",
    image: "/images/products/simple-facewash.jpg",
  },
  {
    id: 803,
    brand: "Minimalist",
    name: "Aquaporin Face Wash",
    price: "₹549",
    image: "/images/products/minimalist-facewash.jpg",
  },
  {
    id: 804,
    brand: "Dot & Key",
    name: "Cica Face Wash",
    price: "₹445",
    image: "/images/products/dotkey-facewash.jpg",
  },
  {
    id: 805,
    brand: "Plum",
    name: "Green Tea Face Wash",
    price: "₹375",
    image: "/images/products/plum-facewash.jpg",
  },
  {
    id: 806,
    brand: "CeraVe",
    name: "Foaming Facial Cleanser",
    price: "₹899",
    image: "/images/products/cerave-facewash.jpg",
  },
];

function FaceWash() {
  const navigate = useNavigate();

  return (
    <div className="facewash-page">

      <section className="facewash-hero">
        <h1>Face Wash Collection</h1>
        <p>
          Discover premium face washes from trusted beauty brands for healthy,
          clean, and glowing skin.
        </p>
      </section>

      <section className="facewash-products">

        <h2>Top Face Wash Brands</h2>

        <div className="facewash-grid">

          {faceWashes.map((product) => (

            <div className="facewash-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <span className="brand">{product.brand}</span>

              <h3>{product.name}</h3>

              <div className="rating">★★★★★</div>

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

export default FaceWash;