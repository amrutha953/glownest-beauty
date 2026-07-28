import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Concealer.css";


const products = [

  {
    id:11051,
    brand:"Maybelline",
    name:"Instant Age Rewind Concealer",
    price:"₹699",
    image:"/images/products/maybelline-concealer.jpg",
  },

  {
    id:11052,
    brand:"L'Oréal",
    name:"Infallible Concealer",
    price:"₹899",
    image:"/images/products/loreal-concealer.jpg",
  },

  {
    id:11053,
    brand:"Swiss Beauty",
    name:"Full Coverage Concealer",
    price:"₹499",
    image:"/images/products/swiss-concealer.jpg",
  },

  {
    id:11054,
    brand:"Lakme",
    name:"Absolute Concealer",
    price:"₹599",
    image:"/images/products/lakme-concealer.jpg",
  },

];


function Concealer(){

const navigate = useNavigate();


return (

<div className="concealer-page">


<section className="concealer-hero">

<h1>
Concealer Collection
</h1>

<p>
Hide imperfections and achieve a flawless natural finish.
</p>

</section>



<section className="concealer-products">

<h2>
Best Concealers
</h2>


<div className="concealer-grid">


{
products.map((product)=>(


<div 
className="concealer-card"
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



<p className="price">
{product.price}
</p>



<button
onClick={() =>
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


export default Concealer;