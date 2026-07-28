import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HairSerum.css";

const products = [

  {
    id: 12031,
    brand: "L'Oréal Paris",
    name: "Extraordinary Oil Hair Serum",
    price: "₹599",
    image: "/images/products/loreal-hair-serum.jpg",
  },

  {
    id: 12032,
    brand: "Livon",
    name: "Anti-Frizz Hair Serum",
    price: "₹299",
    image: "/images/products/livon-hair-serum.jpg",
  },

  {
    id: 12033,
    brand: "Streax",
    name: "Professional Hair Serum",
    price: "₹399",
    image: "/images/products/streax-hair-serum.jpg",
  },

  {
    id: 12034,
    brand: "Mamaearth",
    name: "Onion Hair Serum",
    price: "₹499",
    image: "/images/products/mamaearth-hair-serum.jpg",
  },

];

function HairSerum() {

  const navigate = useNavigate();

  return (

    <div className="hairserum-page">

      <section className="hairserum-hero">

        <h1>Hair Serum Collection</h1>

        <p>
          Control frizz, add shine, and protect your hair with nourishing serums.
        </p>

      </section>

      <section className="hairserum-products">

        <h2>Best Hair Serums</h2>

        <div className="hairserum-grid">

          {products.map((product) => (

            <div
              className="hairserum-card"
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

export default HairSerum;