import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Conditioner.css";

const products = [
  {
    id: 12011,
    brand: "Dove",
    name: "Intense Repair Conditioner",
    price: "₹399",
    image: "/images/products/dove-conditioner.jpg",
  },

  {
    id: 12012,
    brand: "L'Oréal Paris",
    name: "Dream Lengths Conditioner",
    price: "₹499",
    image: "/images/products/loreal-conditioner.jpg",
  },

  {
    id: 12013,
    brand: "Tresemmé",
    name: "Keratin Smooth Conditioner",
    price: "₹699",
    image: "/images/products/tresemme-conditioner.jpg",
  },

  {
    id: 12014,
    brand: "Mamaearth",
    name: "Onion Conditioner",
    price: "₹549",
    image: "/images/products/mamaearth-conditioner.jpg",
  },
];

function Conditioner() {
  const navigate = useNavigate();

  return (
    <div className="conditioner-page">

      <section className="conditioner-hero">
        <h1>Conditioner Collection</h1>

        <p>
          Deeply nourish, smooth, and strengthen your hair with premium conditioners.
        </p>
      </section>

      <section className="conditioner-products">

        <h2>Best Conditioner Products</h2>

        <div className="conditioner-grid">

          {products.map((product) => (

            <div
              className="conditioner-card"
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

export default Conditioner;