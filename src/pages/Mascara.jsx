import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Mascara.css";

const mascaras = [

{
id:11031,
brand:"Maybelline",
name:"Sky High Mascara",
price:"₹799",
image:"/images/products/maybelline-mascara.jpg",
},

{
id:11032,
brand:"L'Oréal",
name:"Lash Paradise Mascara",
price:"₹899",
image:"/images/products/loreal-mascara.jpg",
},

{
id:11033,
brand:"Lakme",
name:"Eyeconic Curl Mascara",
price:"₹499",
image:"/images/products/lakme-mascara.jpg",
},

{
id:11034,
brand:"Swiss Beauty",
name:"Volume Mascara",
price:"₹399",
image:"/images/products/swiss-mascara.jpg",
},

{
id:11035,
brand:"M.A.C",
name:"Magic Extension Mascara",
price:"₹2299",
image:"/images/products/mac-mascara.jpg",
},

{
id:11036,
brand:"Faces Canada",
name:"Magneteyes Mascara",
price:"₹599",
image:"/images/products/faces-mascara.jpg",
},

];

export default function Mascara(){

const navigate=useNavigate();

return(

<div className="mascara-page">

<section className="mascara-hero">

<h1>Mascara Collection</h1>

<p>
Create longer, thicker and beautifully defined lashes with premium mascaras.
</p>

</section>

<section className="mascara-products">

<h2>Top Mascara Brands</h2>

<div className="mascara-grid">

{mascaras.map((product)=>(

<div
className="mascara-card"
key={product.id}
>

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