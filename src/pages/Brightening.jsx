import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Brightening.css";


const products = [

  {
    id: 14041,
    brand: "Minimalist",
    name: "Alpha Arbutin Brightening Serum",
    price: "₹599",
    image: "/images/products/minimalist-brightening.jpg",
  },


  {
    id: 14042,
    brand: "Plum",
    name: "15% Vitamin C Brightening Serum",
    price: "₹649",
    image: "/images/products/plum-brightening.jpg",
  },


  {
    id: 14043,
    brand: "Dot & Key",
    name: "Glow Revealing Brightening Serum",
    price: "₹695",
    image: "/images/products/dotkey-brightening.jpg",
  },


  {
    id: 14044,
    brand: "Mamaearth",
    name: "Natural Radiance Brightening Serum",
    price: "₹599",
    image: "/images/products/mamaearth-brightening.jpg",
  },

];


function Brightening() {

  const navigate = useNavigate();


  return (

    <div className="brightening-page">


      <section className="brightening-hero">

        <h1>
          Brightening Serum Collection
        </h1>


        <p>
          Achieve glowing, radiant skin with powerful brightening serums.
        </p>

      </section>



      <section className="brightening-products">


        <h2>
          Best Brightening Serums
        </h2>



        <div className="brightening-grid">


          {products.map((product)=>(


            <div
              className="brightening-card"
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


export default Brightening;