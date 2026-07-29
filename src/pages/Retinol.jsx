import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Retinol.css";


const products = [

  {
    id: 14021,
    brand: "Minimalist",
    name: "0.3% Retinol Face Serum",
    price: "₹599",
    image: "/images/products/minimalist-retinol.jpg",
  },


  {
    id: 14022,
    brand: "The Ordinary",
    name: "Retinol 1% in Squalane Serum",
    price: "₹899",
    image: "/images/products/ordinary-retinol.jpg",
  },


  {
    id: 14023,
    brand: "Dot & Key",
    name: "Night Reset Retinol Serum",
    price: "₹795",
    image: "/images/products/dotkey-retinol.jpg",
  },


  {
    id: 14024,
    brand: "Mamaearth",
    name: "Retinol Face Serum",
    price: "₹649",
    image: "/images/products/mamaearth-retinol.jpg",
  },

];


function Retinol() {

  const navigate = useNavigate();


  return (

    <div className="retinol-page">


      <section className="retinol-hero">

        <h1>
          Retinol Serum Collection
        </h1>


        <p>
          Improve skin texture, reduce fine lines and achieve youthful glowing skin with premium Retinol serums.
        </p>

      </section>



      <section className="retinol-products">


        <h2>
          Best Retinol Serums
        </h2>



        <div className="retinol-grid">


          {products.map((product)=>(


            <div
              className="retinol-card"
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


export default Retinol;