import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FaceMask.css";

const faceMasks = [

{
id:1001,
brand:"Mamaearth",
name:"Ubtan Face Mask",
price:"₹499",
image:"/images/products/mamaearth-face-mask.jpg",
},

{
id:1002,
brand:"Dot & Key",
name:"Hydrating Clay Mask",
price:"₹695",
image:"/images/products/dotkey-face-mask.jpg",
},

{
id:1003,
brand:"Plum",
name:"Green Tea Clear Face Mask",
price:"₹575",
image:"/images/products/plum-face-mask.jpg",
},

{
id:1004,
brand:"The Face Shop",
name:"Real Nature Sheet Mask",
price:"₹199",
image:"/images/products/faceshop-sheet-mask.jpg",
},

{
id:1005,
brand:"Innisfree",
name:"Volcanic Pore Clay Mask",
price:"₹899",
image:"/images/products/innisfree-face-mask.jpg",
},

{
id:1006,
brand:"Minimalist",
name:"PHA Face Mask",
price:"₹599",
image:"/images/products/minimalist-face-mask.jpg",
},

];

function FaceMask() {

const navigate = useNavigate();

return (

<div className="facemask-page">

<section className="facemask-hero">

<h1>Face Mask Collection</h1>

<p>
Pamper your skin with nourishing face masks from premium skincare brands for glowing, healthy skin.
</p>

</section>

<section className="facemask-products">

<h2>Top Face Mask Brands</h2>

<div className="facemask-grid">

{faceMasks.map((product)=>(

<div
className="facemask-card"
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

export default FaceMask;