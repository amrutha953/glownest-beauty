import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Foundation.css";

const foundations = [
  {
    id: 11011,
    brand: "Maybelline",
    name: "Fit Me Foundation",
    price: "₹699",
    image: "/images/products/fitme-foundation.jpg",
  },
  {
    id: 11012,
    brand: "L'Oréal",
    name: "Infallible Foundation",
    price: "₹899",
    image: "/images/products/loreal-foundation.jpg",
  },
  {
    id: 11013,
    brand: "Lakme",
    name: "9to5 Foundation",
    price: "₹599",
    image: "/images/products/lakme-foundation.jpg",
  },
  {
    id: 11014,
    brand: "Swiss Beauty",
    name: "HD Foundation",
    price: "₹499",
    image: "/images/products/swiss-foundation.jpg",
  },
  {
    id: 11015,
    brand: "M.A.C",
    name: "Studio Fix Fluid",
    price: "₹2999",
    image: "/images/products/mac-foundation.jpg",
  },
  {
    id: 11016,
    brand: "Kay Beauty",
    name: "Hydrating Foundation",
    price: "₹1200",
    image: "/images/products/kay-foundation.jpg",
  },
];

export default function Foundation() {
  const navigate = useNavigate();

  return (
    <div className="foundation-page">

      <section className="foundation-hero">
        <h1>Foundation Collection</h1>
        <p>Find your perfect foundation for every skin tone.</p>
      </section>

      <section className="foundation-products">

        <h2>Top Foundation Brands</h2>

        <div className="foundation-grid">

          {foundations.map((product) => (

            <div className="foundation-card" key={product.id}>

              <img src={product.image} alt={product.name} />

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