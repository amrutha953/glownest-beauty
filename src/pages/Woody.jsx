import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Woody.css";


const products = [

  {
    id:15017,
    brand:"Ustraa",
    name:"Base Camp Woody Perfume",
    price:"₹699",
    image:"/images/products/ustraa-woody-perfume.jpg",
  },


  {
    id:15018,
    brand:"Skinn",
    name:"Raw Instinct Woody Fragrance",
    price:"₹1199",
    image:"/images/products/skinn-woody-perfume.jpg",
  },


  {
    id:15019,
    brand:"Ajmal",
    name:"Silver Shade Woody Perfume",
    price:"₹1599",
    image:"/images/products/ajmal-woody-perfume.jpg",
  },


  {
    id:15020,
    brand:"Denver",
    name:"Hamilton Woody Edition Perfume",
    price:"₹599",
    image:"/images/products/denver-woody-edition.jpg",
  },

];


function Woody(){

const navigate = useNavigate();


return(

<div className="woody-page">


<section className="woody-hero">

<h1>
Woody Perfume Collection
</h1>

<p>
Explore deep woody fragrances with rich and elegant notes.
</p>

</section>



<section className="woody-products">


<h2>
Best Woody Perfumes
</h2>



<div className="woody-grid">


{
products.map((product)=>(


<div
className="woody-card"
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


export default Woody;