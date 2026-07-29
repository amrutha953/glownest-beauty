import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Men.css";


const products = [

  {
    id:15005,
    brand:"Wild Stone",
    name:"Edge Men's Eau De Parfum",
    price:"₹599",
    image:"/images/products/wildstone-men-perfume.jpg",
  },


  {
    id:15006,
    brand:"Denver",
    name:"Hamilton Men's Perfume",
    price:"₹499",
    image:"/images/products/denver-men-perfume.jpg",
  },


  {
    id:15007,
    brand:"Park Avenue",
    name:"Voyage Men's Fragrance",
    price:"₹699",
    image:"/images/products/parkavenue-men-perfume.jpg",
  },


  {
    id:15008,
    brand:"Fogg",
    name:"Fogg Impressio Men's Perfume",
    price:"₹399",
    image:"/images/products/fogg-men-perfume.jpg",
  },


];


function Men(){

const navigate = useNavigate();


return(

<div className="men-page">


<section className="men-hero">

<h1>
Men's Perfume Collection
</h1>

<p>
Discover premium fragrances designed for confident men.
</p>

</section>



<section className="men-products">


<h2>
Best Men's Perfumes
</h2>



<div className="men-grid">


{
products.map((product)=>(


<div
className="men-card"
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


export default Men;