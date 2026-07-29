import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Luxury.css";


const products = [

  {
    id:15009,
    brand:"Bella Vita",
    name:"Luxury Oud Eau De Parfum",
    price:"₹1299",
    image:"/images/products/luxury-oud-perfume.jpg",
  },


  {
    id:15010,
    brand:"Ajmal",
    name:"Amber Wood Luxury Perfume",
    price:"₹2499",
    image:"/images/products/ajmal-luxury-perfume.jpg",
  },


  {
    id:15011,
    brand:"Yardley",
    name:"London Premium Fragrance",
    price:"₹899",
    image:"/images/products/yardley-luxury-perfume.jpg",
  },


  {
    id:15012,
    brand:"The Man Company",
    name:"Luxury Signature Perfume",
    price:"₹1499",
    image:"/images/products/man-company-luxury-perfume.jpg",
  },


];


function Luxury(){

const navigate = useNavigate();


return(

<div className="luxury-page">


<section className="luxury-hero">

<h1>
Luxury Perfume Collection
</h1>

<p>
Experience premium fragrances crafted for elegance and sophistication.
</p>

</section>



<section className="luxury-products">


<h2>
Premium Luxury Perfumes
</h2>



<div className="luxury-grid">


{
products.map((product)=>(


<div
className="luxury-card"
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
onClick={()=>
navigate(`/product/${product.id}`)
}
>
View Details
</button>



</div>


))
}


</div>


</section>


</div>

);

}


export default Luxury;