import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Shampoo.css";

const products = [
  {
    id: 12001,
    brand: "L'Oréal Paris",
    name: "Total Repair 5 Shampoo",
    price: "₹499",
    image: "/images/products/loreal-shampoo.jpg",
  },

  {
    id: 12002,
    brand: "Dove",
    name: "Daily Shine Shampoo",
    price: "₹399",
    image: "/images/products/dove-shampoo.jpg",
  },

  {
    id: 12003,
    brand: "Tresemmé",
    name: "Keratin Smooth Shampoo",
    price: "₹699",
    image: "/images/products/tresemme-shampoo.jpg",
  },

  {
    id: 12004,
    brand: "Mamaearth",
    name: "Onion Shampoo",
    price: "₹549",
    image: "/images/products/mamaearth-shampoo.jpg",
  },
];

function Shampoo() {
  const navigate = useNavigate();

  return (
    <div className="shampoo-page">

      {/* Hero */}
      <section className="shampoo-hero">
        <h1>Shampoo Collection</h1>

        <p>
          Cleanse, nourish, and strengthen your hair with premium shampoos.
        </p>
      </section>

      {/* Products */}
      <section className="shampoo-products">

        <h2>Best Shampoo Products</h2>

        <div className="shampoo-grid">

          {products.map((product) => (

            <div
              className="shampoo-card"
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

export default Shampoo;