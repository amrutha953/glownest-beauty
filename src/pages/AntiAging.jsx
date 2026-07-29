import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AntiAging.css";


const products = [

  {
    id: 14051,
    brand: "Minimalist",
    name: "Multi Peptide Anti Aging Serum",
    price: "₹799",
    image: "/images/products/minimalist-antiaging.jpg",
  },


  {
    id: 14052,
    brand: "The Ordinary",
    name: "Buffet Anti Aging Serum",
    price: "₹999",
    image: "/images/products/ordinary-antiaging.jpg",
  },


  {
    id: 14053,
    brand: "Dot & Key",
    name: "Retinol + Peptide Anti Aging Serum",
    price: "₹895",
    image: "/images/products/dotkey-antiaging.jpg",
  },


];


function AntiAging() {

  const navigate = useNavigate();


  return (

    <div className="antiaging-page">


      <section className="antiaging-hero">

        <h1>
          Anti Aging Serum Collection
        </h1>


        <p>
          Reduce fine lines, improve firmness and restore youthful skin glow
          with advanced anti aging serums.
        </p>

      </section>



      <section className="antiaging-products">


        <h2>
          Best Anti Aging Serums
        </h2>



        <div className="antiaging-grid">


          {products.map((product)=>(


            <div
              className="antiaging-card"
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


export default AntiAging;