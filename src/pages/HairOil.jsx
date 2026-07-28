import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HairOil.css";

const products = [
  {
    id: 12021,
    brand: "Indulekha",
    name: "Bringha Hair Oil",
    price: "₹399",
    image: "/images/products/indulekha-hair-oil.jpg",
  },

  {
    id: 12022,
    brand: "Mamaearth",
    name: "Onion Hair Oil",
    price: "₹499",
    image: "/images/products/mamaearth-hair-oil.jpg",
  },

  {
    id: 12023,
    brand: "Parachute",
    name: "Advanced Coconut Hair Oil",
    price: "₹299",
    image: "/images/products/parachute-hair-oil.jpg",
  },

  {
    id: 12024,
    brand: "WOW Skin Science",
    name: "Onion Black Seed Hair Oil",
    price: "₹699",
    image: "/images/products/wow-hair-oil.jpg",
  },
];

function HairOil() {

  const navigate = useNavigate();

  return (

    <div className="hairoil-page">

      <section className="hairoil-hero">

        <h1>Hair Oil Collection</h1>

        <p>
          Nourish your scalp and strengthen your hair with premium hair oils.
        </p>

      </section>

      <section className="hairoil-products">

        <h2>Best Hair Oils</h2>

        <div className="hairoil-grid">

          {products.map((product) => (

            <div
              className="hairoil-card"
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

export default HairOil;