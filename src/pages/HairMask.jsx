import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HairMask.css";

const products = [

  {
    id: 12041,
    brand: "L'Oréal Paris",
    name: "Total Repair 5 Hair Mask",
    price: "₹699",
    image: "/images/products/loreal-hair-mask.jpg",
  },

  {
    id: 12042,
    brand: "Mamaearth",
    name: "Argan Hair Mask",
    price: "₹599",
    image: "/images/products/mamaearth-hair-mask.jpg",
  },

  {
    id: 12043,
    brand: "Tresemmé",
    name: "Keratin Smooth Hair Mask",
    price: "₹799",
    image: "/images/products/tresemme-hair-mask.jpg",
  },

  {
    id: 12044,
    brand: "Dove",
    name: "Intense Repair Hair Mask",
    price: "₹649",
    image: "/images/products/dove-hair-mask.jpg",
  },

];

function HairMask() {

  const navigate = useNavigate();

  return (

    <div className="hairmask-page">

      <section className="hairmask-hero">

        <h1>Hair Mask Collection</h1>

        <p>
          Deep conditioning treatments that repair, strengthen, and nourish damaged hair.
        </p>

      </section>

      <section className="hairmask-products">

        <h2>Best Hair Masks</h2>

        <div className="hairmask-grid">

          {products.map((product) => (

            <div
              className="hairmask-card"
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

export default HairMask;