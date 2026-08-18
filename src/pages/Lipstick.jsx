import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Lipstick.css";

const lipsticks = [

{
id:12001,
brand:"M.A.C",
name:"Matte Lipstick",
price:"₹1999",
image:"/images/products/mac-lipstick.jpg",
},

{
id:12002,
brand:"Maybelline",
name:"Super Stay Matte Ink",
price:"₹699",
image:"/images/products/maybelline-lipstick.jpg",
},

{
id:12003,
brand:"Lakme",
name:"9to5 Primer + Matte",
price:"₹499",
image:"/images/products/lakme-lipstick.jpg",
},

{
id:12004,
brand:"Nykaa",
name:"So Matte Lipstick",
price:"₹399",
image:"/images/products/nykaa-lipstick.jpg",
},

{
id:12005,
brand:"Swiss Beauty",
name:"Non Transfer Lipstick",
price:"₹349",
image:"/images/products/swiss-lipstick.jpg",
},

{
id:12006,
brand:"L'Oréal",
name:"Color Riche Lipstick",
price:"₹899",
image:"/images/products/loreal-lipstick.jpg",
},

];

export default function Lipstick() {

const navigate=useNavigate();

return(

<div className="lipstick-page">

<section className="lipstick-hero">

<h1>Lipstick Collection</h1>

<p>
Discover beautiful matte, glossy and long-lasting lipsticks from top beauty brands.
</p>

</section>

<section className="lipstick-products">

<h2>Top Lipstick Brands</h2>

<div className="lipstick-grid">

{lipsticks.map((product)=>(

<div
className="lipstick-card"
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