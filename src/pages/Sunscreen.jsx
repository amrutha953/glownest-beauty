import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sunscreen.css";

const sunscreens = [

{
id:901,
brand:"La Roche-Posay",
name:"Anthelios SPF 50+",
price:"₹1499",
image:"/images/products/laroche-sunscreen.jpg",
},

{
id:902,
brand:"Minimalist",
name:"SPF 50 Sunscreen",
price:"₹499",
image:"/images/products/minimalist-sunscreen.jpg",
},

{
id:903,
brand:"Dot & Key",
name:"Watermelon Cooling Sunscreen",
price:"₹595",
image:"/images/products/dotkey-sunscreen.jpg",
},

{
id:904,
brand:"Aqualogica",
name:"Glow+ Dewy Sunscreen",
price:"₹499",
image:"/images/products/aqualogica-sunscreen.jpg",
},

{
id:905,
brand:"Dr. Sheth's",
name:"Ceramide & Vitamin C Sunscreen",
price:"₹549",
image:"/images/products/drsheth-sunscreen.jpg",
},

{
id:906,
brand:"Neutrogena",
name:"Ultra Sheer Dry Touch SPF 50+",
price:"₹699",
image:"/images/products/neutrogena-sunscreen.jpg",
},

];

function Sunscreen() {

const navigate = useNavigate();

return (

<div className="sunscreen-page">

<section className="sunscreen-hero">

<h1>Sunscreen Collection</h1>

<p>
Protect your skin from harmful UV rays with premium sunscreens from trusted brands.
</p>

</section>

<section className="sunscreen-products">

<h2>Top Sunscreen Brands</h2>

<div className="sunscreen-grid">

{sunscreens.map((product)=>(

<div
className="sunscreen-card"
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
onClick={()=>navigate(`/product/${product.id}`)}
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

export default Sunscreen;