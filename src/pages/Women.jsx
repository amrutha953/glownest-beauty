import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Women.css";


const products = [

  {
    id: 15001,
    brand: "Bella Vita",
    name: "Women's Floral Eau De Parfum",
    price: "₹699",
    image: "/images/products/women-floral.jpg",
  },

  {
    id: 15002,
    brand: "Yves Rocher",
    name: "Elegant Rose Women's Perfume",
    price: "₹899",
    image: "/images/products/women-rose.jpg",
  },

  {
    id: 15003,
    brand: "Plum",
    name: "Vanilla Vibes Women's Perfume",
    price: "₹799",
    image: "/images/products/women-vanilla.jpg",
  },

  {
    id: 15004,
    brand: "The Body Shop",
    name: "White Musk Women's Fragrance",
    price: "₹999",
    image: "/images/products/women-musk.jpg",
  },

];


function Women() {


  const navigate = useNavigate();


  return (

    <div className="women-page">


      <section className="women-hero">


        <h1>
          Women's Perfume Collection
        </h1>


        <p>
          Explore elegant fragrances crafted for modern women.
        </p>


      </section>



      <section className="women-products">


        <h2>
          Best Women's Perfumes
        </h2>



        <div className="women-grid">


          {products.map((product)=>(


            <div
              className="women-card"
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


export default Women;