import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Fresh.css";


const products = [

  {
    id:15021,
    brand:"Fogg",
    name:"Fresh Aqua Men's Perfume",
    price:"₹399",
    image:"/images/products/fogg-fresh-perfume.jpg",
  },


  {
    id:15022,
    brand:"Engage",
    name:"Fresh Citrus Eau De Parfum",
    price:"₹499",
    image:"/images/products/engage-fresh-perfume.jpg",
  },


  {
    id:15023,
    brand:"Nivea",
    name:"Fresh Active Perfume",
    price:"₹599",
    image:"/images/products/nivea-fresh-perfume.jpg",
  },


  {
    id:15024,
    brand:"Wild Stone",
    name:"Fresh Ocean Fragrance",
    price:"₹699",
    image:"/images/products/wildstone-fresh-perfume.jpg",
  },

];


function Fresh(){

const navigate = useNavigate();


return(

<div className="fresh-page">


<section className="fresh-hero">

<h1>
Fresh Perfume Collection
</h1>

<p>
Refreshing fragrances with cool aquatic and citrus notes.
</p>

</section>



<section className="fresh-products">


<h2>
Best Fresh Perfumes
</h2>



<div className="fresh-grid">


{
products.map((product)=>(


<div
className="fresh-card"
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


))
}


</div>


</section>


</div>

);

}


export default Fresh;