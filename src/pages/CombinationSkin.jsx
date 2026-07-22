import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CombinationSkin.css";

function CombinationSkin(){

const {addToCart}=useContext(CartContext);


return(

<div className="combination-skin-page">


{/* HERO */}

<section className="combination-hero">

<div className="combination-hero-content">

<h1>
Combination Skin Care Guide
</h1>

<p>
Discover the perfect skincare routine specially
selected for combination skin. Balance oily areas,
hydrate dry areas and maintain healthy glowing skin.
</p>


<button
onClick={()=>{
document.getElementById("combination-products")
.scrollIntoView({
behavior:"smooth"
});
}}
>
Shop Combination Skin Products
</button>


</div>


<div className="combination-hero-image">

<img
src="/images/skintypes/combination-skin.jpg"
alt="Combination Skin"
/>

</div>


</section>



{/* ABOUT */}

<section className="about-combination">


<div className="combination-image">

<img
src="/images/skintypes/combination-info.jpg"
alt="Combination Skin Care"
/>

</div>


<div className="combination-content">


<h2>
What is Combination Skin?
</h2>


<p>

Combination skin has both oily and dry areas.
Usually the T-zone becomes oily while cheeks
may feel dry or dehydrated.

<br/><br/>

Using balancing ingredients helps control excess
oil while keeping the skin hydrated and healthy.

</p>


</div>


</section>



{/* SIGNS */}

<section className="info-section">

<h2>
Common Signs of Combination Skin
</h2>


<div className="info-grid">


<div className="info-card">
<h3>Oily T-Zone</h3>
<p>
Forehead, nose and chin produce extra oil.
</p>
</div>


<div className="info-card">
<h3>Dry Cheeks</h3>
<p>
Cheeks may feel dry and dehydrated.
</p>
</div>


<div className="info-card">
<h3>Uneven Texture</h3>
<p>
Different areas have different skin needs.
</p>
</div>


<div className="info-card">
<h3>Visible Pores</h3>
<p>
Oiliness can make pores appear larger.
</p>
</div>


</div>

</section>

<section className="info-section">

<h2>Best Ingredients</h2>

<div className="info-grid">

<div className="ingredient-card">

<img
src="/images/ingredients/niacinamide.jpg"
alt="Niacinamide"
/>

<h3>Niacinamide</h3>

<p>
Controls excess oil and balances combination skin.
</p>

</div>


<div className="ingredient-card">

<img
src="/images/ingredients/hyaluronic-acid.jpg"
alt="Hyaluronic Acid"
/>

<h3>Hyaluronic Acid</h3>

<p>
Provides hydration without making skin oily.
</p>

</div>


<div className="ingredient-card">

<img
src="/images/ingredients/ceramides.jpg"
alt="Ceramides"
/>

<h3>Ceramides</h3>

<p>
Soothes skin and maintains moisture balance.
</p>

</div>


<div className="ingredient-card">

<img
src="/images/ingredients/green-tea.jpg"
alt="Green Tea"
/>

<h3>Green Tea</h3>

<p>
Helps control oil and protects skin.
</p>

</div>


</div>

</section>


{/* ROUTINE */}

<section className="routine-section">


<h2>
Combination Skin Care Routine
</h2>


<div className="routine-grid">


<div className="routine-card">

<h3>
Morning Routine
</h3>

<p>1. Gentle Cleanser</p>
<p>2. Balancing Toner</p>
<p>3. Niacinamide Serum</p>
<p>4. Lightweight Moisturizer</p>
<p>5. SPF 50 Sunscreen</p>


</div>



<div className="routine-card">

<h3>
Night Routine
</h3>

<p>1. Cleanser</p>
<p>2. Hydrating Serum</p>
<p>3. Barrier Repair Cream</p>
<p>4. Sleeping Mask</p>


</div>


</div>


</section>





{/* PRODUCTS */}

<section
id="combination-products"
className="products-section"
>


<h2>
Shop Combination Skin Essentials
</h2>


<div className="product-grid">



<div className="product-card">


<img
src="/images/products/niacinamide-serum.jpg"
alt="Niacinamide Serum"
/>


<h3>
Niacinamide Serum
</h3>


<p>
Controls oil and balances skin.
</p>


<div className="product-price">
₹699
</div>


<button
onClick={()=>addToCart({

id:401,
name:"Niacinamide Serum",
price:699,
image:"/images/products/niacinamide-serum.jpg"

})}
>
Add To Cart
</button>


</div>





<div className="product-card">


<img
src="/images/products/hydrating-moisturizer.jpg"
alt="Moisturizer"
/>


<h3>
Hydrating Moisturizer
</h3>


<p>
Keeps skin hydrated without heaviness.
</p>


<div className="product-price">
₹599
</div>


<button
onClick={()=>addToCart({

id:402,
name:"Hydrating Moisturizer",
price:599,
image:"/images/products/hydrating-moisturizer.jpg"

})}
>
Add To Cart
</button>


</div>





<div className="product-card">


<img
src="/images/products/gentle-cleanser.jpg"
alt="Cleanser"
/>


<h3>
Gentle Cleanser
</h3>


<p>
Cleans skin while maintaining moisture.
</p>


<div className="product-price">
₹499
</div>


<button
onClick={()=>addToCart({

id:403,
name:"Gentle Cleanser",
price:499,
image:"/images/products/gentle-cleanser.jpg"

})}
>
Add To Cart
</button>


</div>



</div>


</section>
<section className="transformation-section">

<h2>Skin Transformation</h2>


<div className="transformation-cards">


<div className="transform-card">

<img
src="/images/skintypes/combination-before.jpg"
alt="Before"
/>

<h3>Before</h3>

<p>
Uneven texture, oily T-zone and dry areas.
</p>

</div>



<div className="transform-card">

<img
src="/images/skintypes/combination-after.jpg"
alt="After"
/>

<h3>After</h3>

<p>
Balanced, hydrated and healthy glowing skin.
</p>

</div>


</div>


</section>
<section className="daily-section">

<h2>Daily Essentials</h2>


<div className="essential-grid">


<div className="essential-card">

<img
src="/images/essentials/gentle-cleanser .jpg"
alt="Cleanser"
/>

<div className="essential-content">

<h3>Gentle Cleanser</h3>

<p>
Cleans skin without removing natural moisture.
</p>

<button
onClick={() =>
addToCart({
id:601,
name:"Gentle Cleanser",
price:499,
image:"/images/essentials/gentle-cleanser .jpg"
})
}
>
Add To Routine
</button>

</div>

</div>



<div className="essential-card">

<img
src="/images/essentials/niacinamide-serum.jpg"
alt="Serum"
/>

<div className="essential-content">

<h3>Niacinamide Serum</h3>

<p>
Controls oil and improves skin balance.
</p>

<button
onClick={() =>
addToCart({
id:602,
name:"Niacinamide Serum",
price:699,
image:"/images/essentials/niacinamide-serum.jpg"
})
}
>
Add To Routine
</button>

</div>

</div>



<div className="essential-card">

<img
src="/images/essentials/gel-moisturizer.jpg"
alt="Moisturizer"
/>

<div className="essential-content">

<h3>Light Moisturizer</h3>

<p>
Hydrates dry areas without heaviness.
</p>

<button
onClick={() =>
addToCart({
id:603,
name:"Light Moisturizer",
price:599,
image:"/images/essentials/gel-moisturizer.jpg"
})
}
>
Add To Routine
</button>

</div>

</div>



<div className="essential-card">

<img
src="/images/essentials/sunscreen.jpg"
alt="Sunscreen"
/>

<div className="essential-content">

<h3>Sunscreen</h3>

<p>
Protects combination skin from UV damage.
</p>

<button
onClick={() =>
addToCart({
id:604,
name:"Mineral Sunscreen",
price:799,
image:"/images/essentials/mineral-sunscreen.jpg"
})
}
>
Add To Routine
</button>

</div>

</div>


</div>

</section>



</div>

)

}


export default CombinationSkin;