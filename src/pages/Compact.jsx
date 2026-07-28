import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Compact.css";


const products = [

{
id:11041,
brand:"Maybelline",
name:"Fit Me Compact Powder",
price:"₹299",
image:"/images/products/maybelline-compact.jpg",
},


{
id:11042,
brand:"Lakme",
name:"Radiance Compact Powder",
price:"₹250",
image:"/images/products/lakme-compact.jpg",
},


{
id:11043,
brand:"Swiss Beauty",
name:"HD Compact Powder",
price:"₹399",
image:"/images/products/hd-compact.jpg",
},


{
id:11044,
brand:"M.A.C",
name:"Studio Fix Compact",
price:"₹3200",
image:"/images/products/mac-compact.jpg",
},


{
id:11045,
brand:"Faces Canada",
name:"Weightless Matte Compact",
price:"₹599",
image:"/images/products/faces-compact.jpg",
},


{
id:11046,
brand:"Nykaa",
name:"All Day Matte Compact",
price:"₹499",
image:"/images/products/nykaa-compact.jpg",
},


];


function Compact(){

const navigate=useNavigate();


return (

<div className="compact-page">


<section className="compact-hero">

<h1>
Compact Powder Collection
</h1>

<p>
Smooth, flawless and shine-free finish for your perfect makeup look.
</p>

</section>




<section className="compact-products">


<h2>
Top Compact Brands
</h2>



<div className="compact-grid">


{
products.map((product)=>(


<div 
className="compact-card"
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


export default Compact;