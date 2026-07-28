import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Blush.css";


const products = [

{
id:11061,
brand:"Rare Beauty",
name:"Soft Pinch Liquid Blush",
price:"₹1999",
image:"/images/products/pink-blush.jpg",
},


{
id:11062,
brand:"Lakme",
name:"Absolute Blush",
price:"₹650",
image:"/images/products/peach-blush.jpg",
},


{
id:11063,
brand:"Maybelline",
name:"Fit Me Blush",
price:"₹599",
image:"/images/products/matte-blush.jpg",
},


{
id:11064,
brand:"Nykaa",
name:"Matte To Last Blush",
price:"₹799",
image:"/images/products/liquid-blush.jpg",
},


];


function Blush(){

const navigate = useNavigate();


return (

<div className="blush-page">


<section className="blush-hero">

<h1>
Blush Collection
</h1>

<p>
Add a natural flush of colour and a radiant glow to your cheeks.
</p>

</section>




<section className="blush-products">


<h2>
Best Blush Products
</h2>



<div className="blush-grid">


{
products.map((product)=>(


<div
className="blush-card"
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


export default Blush;