import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HyaluronicAcid.css";


const products = [

  {
    id: 14031,
    brand: "Minimalist",
    name: "2% Hyaluronic Acid Face Serum",
    price: "₹599",
    image: "/images/products/minimalist-hyaluronic.jpg",
  },


  {
    id: 14032,
    brand: "The Ordinary",
    name: "Hyaluronic Acid 2% + B5 Serum",
    price: "₹899",
    image: "/images/products/ordinary-hyaluronic.jpg",
  },


  {
    id: 14033,
    brand: "Dot & Key",
    name: "Hydrating Hyaluronic Acid Serum",
    price: "₹695",
    image: "/images/products/dotkey-hyaluronic.jpg",
  },


  {
    id: 14034,
    brand: "Plum",
    name: "Plum Hyaluronic Acid Serum",
    price: "₹575",
    image: "/images/products/plum-hyaluronic.jpg",
  },

];


function HyaluronicAcid() {

  const navigate = useNavigate();


  return (

    <div className="hyaluronic-page">


      <section className="hyaluronic-hero">

        <h1>
          Hyaluronic Acid Serum Collection
        </h1>


        <p>
          Deep hydration and glowing skin with lightweight Hyaluronic Acid serums.
        </p>

      </section>



      <section className="hyaluronic-products">


        <h2>
          Best Hyaluronic Acid Serums
        </h2>



        <div className="hyaluronic-grid">


          {products.map((product)=>(


            <div
              className="hyaluronic-card"
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


export default HyaluronicAcid;