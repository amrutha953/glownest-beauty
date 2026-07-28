import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Toner.css";

const toners = [

{
id:1001,
brand:"Minimalist",
name:"PHA 3% Toner",
price:"₹499",
image:"/images/products/minimalist-toner.jpg",
},

{
id:1002,
brand:"Plum",
name:"Green Tea Alcohol-Free Toner",
price:"₹399",
image:"/images/products/plum-toner.jpg",
},

{
id:1003,
brand:"Dot & Key",
name:"Cica Calming Toner",
price:"₹545",
image:"/images/products/dotkey-toner.jpg",
},

{
id:1004,
brand:"Simple",
name:"Kind To Skin Soothing Toner",
price:"₹425",
image:"/images/products/simple-toner.jpg",
},

{
id:1005,
brand:"L'Oréal Paris",
name:"Revitalift Crystal Toner",
price:"₹699",
image:"/images/products/loreal-toner.jpg",
},

{
id:1006,
brand:"COSRX",
name:"AHA/BHA Clarifying Toner",
price:"₹999",
image:"/images/products/cosrx-toner.jpg",
},

];

function Toner() {

const navigate = useNavigate();

return (

<div className="toner-page">

<section className="toner-hero">

<h1>Toner Collection</h1>

<p>
Refresh, balance and prepare your skin with premium facial toners from top skincare brands.
</p>

</section>

<section className="toner-products">

<h2>Top Toner Brands</h2>

<div className="toner-grid">

{toners.map((product)=>(

<div className="toner-card" key={product.id}>

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

export default Toner;