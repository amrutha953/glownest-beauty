import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Niacinamide.css";

const products = [

  {
    id: 14011,
    brand: "Minimalist",
    name: "10% Niacinamide Face Serum",
    price: "₹599",
    image: "/images/products/minimalist-niacinamide.jpg",
  },

  {
    id: 14012,
    brand: "The Ordinary",
    name: "Niacinamide 10% + Zinc 1% Serum",
    price: "₹699",
    image: "/images/products/ordinary-niacinamide.jpg",
  },

  {
    id: 14013,
    brand: "Plum",
    name: "Plum Niacinamide Serum",
    price: "₹575",
    image: "/images/products/plum-niacinamide.jpg",
  },

  {
    id: 14014,
    brand: "Dot & Key",
    name: "Barrier Repair Niacinamide Serum",
    price: "₹645",
    image: "/images/products/dotkey-niacinamide.jpg",
  },

];


function Niacinamide() {

  const navigate = useNavigate();


  return (

    <div className="niacinamide-page">

      <section className="niacinamide-hero">

        <h1>Niacinamide Serum Collection</h1>

        <p>
          Control oil, minimize pores and strengthen your skin barrier with
          powerful Niacinamide serums.
        </p>

      </section>


      <section className="niacinamide-products">

        <h2>Best Niacinamide Serums</h2>


        <div className="niacinamide-grid">

          {products.map((product)=>(

            <div 
              className="niacinamide-card"
              key={product.id}
            >

              <img 
                src={product.image}
                alt={product.name}
              />


              <span className="brand">
                {product.brand}
              </span>


              <h3>
                {product.name}
              </h3>


              <div className="rating">
                ★★★★★
              </div>


              <h4>
                {product.price}
              </h4>


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


export default Niacinamide;