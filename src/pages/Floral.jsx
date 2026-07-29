import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Floral.css";


const products = [

  {
    id:15013,
    brand:"Engage",
    name:"Bloom Floral Eau De Parfum",
    price:"₹499",
    image:"/images/products/engage-floral-perfume.jpg",
  },


  {
    id:15014,
    brand:"Yardley",
    name:"English Rose Floral Perfume",
    price:"₹599",
    image:"/images/products/yardley-floral-perfume.jpg",
  },


  {
    id:15015,
    brand:"Plum",
    name:"BodyLovin' Hawaiian Rumba Perfume",
    price:"₹699",
    image:"/images/products/plum-floral-perfume.jpg",
  },


  {
    id:15016,
    brand:"The Body Shop",
    name:"Floral Musk Fragrance",
    price:"₹1299",
    image:"/images/products/bodyshop-floral-perfume.jpg",
  },

];


function Floral(){

const navigate = useNavigate();


return(

<div className="floral-page">


<section className="floral-hero">

<h1>
Floral Perfume Collection
</h1>

<p>
Fresh floral fragrances inspired by flowers and nature.
</p>

</section>



<section className="floral-products">


<h2>
Best Floral Perfumes
</h2>



<div className="floral-grid">


{
products.map((product)=>(


<div
className="floral-card"
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


export default Floral;