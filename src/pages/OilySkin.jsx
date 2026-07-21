import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import "./OilySkin.css";


function OilySkin(){

const {addToCart}=useContext(CartContext);


const products=[

{
id:301,
name:"Oil Control Serum",
price:699,
image:"/images/products/oil-control-serum.jpg",
description:"Controls excess oil and keeps skin balanced."
},

{
id:302,
name:"Oil Free Moisturizer",
price:599,
image:"/images/products/oily-moisturizer.jpg",
description:"Lightweight hydration without greasy feeling."
},

{
id:303,
name:"Foaming Cleanser",
price:499,
image:"/images/products/foaming-cleanser.jpg",
description:"Removes excess oil while keeping skin fresh."
}


];


return(

<div className="oily-skin-page">


{/* HERO */}

<section className="oily-hero">

<div className="oily-hero-content">

<h1>Oily Skin Care Guide</h1>

<p>
Discover the best skincare routine,
ingredients and products to control oil,
reduce shine and keep your skin healthy.
</p>


<button
onClick={()=>{
document.getElementById("oily-products")
.scrollIntoView({
behavior:"smooth"
})
}}
>
Shop Oily Skin Products
</button>


</div>



<div className="oily-hero-image">

<img 
src="/images/skintypes/oily-skin.jpg"
alt="Oily Skin"
/>

</div>


</section>





{/* ABOUT */}

<section className="about-oily">


<div className="oily-image">

<img 
src="/images/skintypes/oily-info.jpg"
/>

</div>



<div className="oily-content">

<h2>What is Oily Skin?</h2>

<p>
Oily skin produces excess sebum which can
cause shine, enlarged pores and breakouts.
With the right ingredients and routine,
skin can stay balanced and healthy.
</p>

</div>


</section>





{/* SIGNS */}

<section className="info-section">

<h2>Common Signs of Oily Skin</h2>


<div className="info-grid">


<div className="info-card">
<h3>Excess Shine</h3>
<p>Skin appears oily especially around T-zone.</p>
</div>


<div className="info-card">
<h3>Large Pores</h3>
<p>Pores become more visible due to excess oil.</p>
</div>


<div className="info-card">
<h3>Breakouts</h3>
<p>Oil buildup can cause pimples.</p>
</div>


<div className="info-card">
<h3>Greasy Texture</h3>
<p>Skin feels heavy and oily during the day.</p>
</div>


</div>

</section>





{/* INGREDIENTS */}

<section className="info-section">

<h2>Best Ingredients For Oily Skin</h2>


<div className="info-grid">


<div className="ingredient-card">
<img src="/images/ingredients/niacinamide.jpg"/>
<h3>Niacinamide</h3>
<p>Controls oil and improves skin texture.</p>
</div>



<div className="ingredient-card">
<img src="/images/ingredients/salicylic.jpg"/>
<h3>Salicylic Acid</h3>
<p>Helps clear pores and prevent breakouts.</p>
</div>



<div className="ingredient-card">
<img src="/images/ingredients/tea-tree.jpg"/>
<h3>Tea Tree</h3>
<p>Supports clearer looking skin.</p>
</div>



<div className="ingredient-card">
<img src="/images/ingredients/zinc.jpg"/>
<h3>Zinc</h3>
<p>Helps balance excess oil.</p>
</div>


</div>

</section>






{/* ROUTINE */}

<section className="routine-section">

<h2>Oily Skin Care Routine</h2>


<div className="routine-grid">


<div className="routine-card">

<h3>Morning Routine</h3>

<p>1. Foaming Cleanser</p>
<p>2. Niacinamide Serum</p>
<p>3. Oil Free Moisturizer</p>
<p>4. Sunscreen SPF 30+</p>

</div>




<div className="routine-card">

<h3>Night Routine</h3>

<p>1. Cleanser</p>
<p>2. Salicylic Acid Serum</p>
<p>3. Lightweight Moisturizer</p>
<p>4. Repair Cream</p>

</div>


</div>

</section>





{/* PRODUCTS */}

<section 
id="oily-products"
className="products-section"
>


<h2>Shop Oily Skin Essentials</h2>


<p className="products-subtitle">
Carefully selected products for oily and acne prone skin.
</p>



<div className="product-grid">


{
products.map(product=>(


<div className="product-card" key={product.id}>


<img src={product.image}/>


<h3>{product.name}</h3>


<p>{product.description}</p>


<div className="product-price">
₹{product.price}
</div>


<button
onClick={()=>addToCart(product)}
>
Add To Cart
</button>


</div>


))
}


</div>


</section>






{/* TRANSFORMATION */}

<section className="transformation-section">


<h2>Oil Balance Transformation</h2>


<div className="transformation-cards">


<div className="transform-card">

<img src="/images/skintypes/oily-before.jpg"/>

<h3>Before</h3>

<p>
Excess oil, shine and uneven texture.
</p>

</div>



<div className="transform-card">

<img src="/images/skintypes/oily-after.jpg"/>

<h3>After</h3>

<p>
Balanced, fresh and healthy looking skin.
</p>

</div>


</div>


</section>





</div>

)

}


export default OilySkin;