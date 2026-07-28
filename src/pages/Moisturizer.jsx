import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Moisturizer.css";

const moisturizers = [

{
id:701,
brand:"CeraVe",
name:"Moisturizing Cream",
price:"₹899",
image:"/images/products/cerave-moisturizer.jpg",
},

{
id:702,
brand:"Cetaphil",
name:"Moisturizing Lotion",
price:"₹699",
image:"/images/products/cetaphil-moisturizer.jpg",
},

{
id:703,
brand:"Minimalist",
name:"Ceramide Moisturizer",
price:"₹599",
image:"/images/products/minimalist-moisturizer.jpg",
},

{
id:704,
brand:"Dot & Key",
name:"Hydrating Moisturizer",
price:"₹549",
image:"/images/products/dotkey-moisturizer.jpg",
},

{
id:705,
brand:"Plum",
name:"Green Tea Moisturizer",
price:"₹499",
image:"/images/products/plum-moisturizer.jpg",
},

{
id:706,
brand:"Simple",
name:"Hydrating Light Moisturizer",
price:"₹449",
image:"/images/products/simple-moisturizer.jpg",
},

];

function Moisturizer() {
  const navigate = useNavigate();

  return (
    <div className="moisturizer-page">

      {/* Hero Section */}
      <section className="moisturizer-hero">
        <h1>Moisturizer Collection</h1>
        <p>
          Discover premium facial cleansers from trusted beauty brands for every
          skin type.
        </p>
      </section>

      {/* Products */}
      <section className="moisturizer-products">

        <h2>Top Moisturizer Brands</h2>

        <div className="moisturizer-grid">

          {moisturizers.map((product) => (

            <div className="moisturizer-card" key={product.id}>

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
                onClick={() => navigate(`/product/${product.id}`)}
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

export default Moisturizer;