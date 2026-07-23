import React from "react";
import { useNavigate } from "react-router-dom";
import "./Haircare.css";


const products = [

{
id:1,
name:"Nourishing Shampoo",
price:"₹499",
image:"/images/nourishing-shampoo.jpg",
},

{
id:2,
name:"Hair Conditioner",
price:"₹549",
image:"/images/hair-conditioner.jpg",
},

{
id:3,
name:"Hair Serum",
price:"₹699",
image:"/images/hair-serum.jpg",
},

{
id:4,
name:"Repair Hair Mask",
price:"₹799",
image:"/images/hair-mask.jpg",
},

];



const Haircare =()=>{


const navigate=useNavigate();


return(

<div className="haircare-page">



{/* Hero Section */}


<section className="hair-hero">


<div className="hair-overlay">


<h1>
Haircare Collection
</h1>


<p>
Discover premium haircare products that nourish,
strengthen and protect your hair for a healthy shine.
</p>


<button onClick={()=>navigate("/shop")}>
Shop Haircare
</button>


</div>


</section>








{/* Introduction */}



<section className="hair-intro">


<h2>
Healthy Hair Begins Here
</h2>


<p>

GlowNest brings you shampoos, conditioners,
serums and masks specially selected to keep your
hair soft, smooth and beautiful.

</p>


</section>








{/* Featured Products */}



<section className="featured-products">


<h2>
Featured Haircare Products
</h2>



<div className="products-grid">


{
products.map((product)=>(


<div className="product-card" key={product.id}>


<img
src={product.image}
alt={product.name}
/>


<h3>
{product.name}
</h3>


<span>
{product.price}
</span>



<button
onClick={()=>alert(`${product.name} added to cart!`)}
>
Add to Cart
</button>



</div>


))
}



</div>


</section>









{/* Benefits */}



<section className="hair-benefits">


<h2>
Why Choose Our Haircare?
</h2>



<div className="benefits-grid">



<div className="benefit-card">


<div className="benefit-icon">
🌿
</div>


<h3>
Natural Ingredients
</h3>


<p>
Gentle formulas enriched with nourishing extracts.
</p>


</div>





<div className="benefit-card">


<div className="benefit-icon">
✨
</div>


<h3>
Healthy Shine
</h3>


<p>
Helps improve smoothness and hair texture.
</p>


</div>





<div className="benefit-card">


<div className="benefit-icon">
💧
</div>


<h3>
Deep Nourishment
</h3>


<p>
Provides moisture and strength for your hair.
</p>


</div>





<div className="benefit-card">


<div className="benefit-icon">
💖
</div>


<h3>
All Hair Types
</h3>


<p>
Suitable for dry, oily and damaged hair.
</p>


</div>



</div>


</section>









{/* Popular Brands */}



<section className="hair-brands">


<h2>
Popular Haircare Brands
</h2>



<div className="brands">



<div className="brand">
L'Oreal Paris
</div>


<div className="brand">
Dove
</div>


<div className="brand">
Tresemme
</div>


<div className="brand">
Mamaearth
</div>


<div className="brand">
OGX
</div>


<div className="brand">
Pantene
</div>



</div>


</section>









{/* Customer Reviews */}



<section className="hair-reviews">


<h2>
Customer Reviews
</h2>



<div className="review-grid">



<div className="review-card">


⭐⭐⭐⭐⭐


<p>
"My hair feels softer and healthier after using GlowNest products."
</p>


<h4>
- Sneha
</h4>


</div>





<div className="review-card">


⭐⭐⭐⭐⭐


<p>
"The serum reduced frizz and improved shine."
</p>


<h4>
- Anjali
</h4>


</div>





<div className="review-card">


⭐⭐⭐⭐☆


<p>
"Great quality products for daily haircare."
</p>


<h4>
- Priya
</h4>


</div>



</div>


</section>









{/* FAQ */}



<section className="hair-faq">


<h2>
Frequently Asked Questions
</h2>




<div className="faq-card">


<h3>
How often should I wash my hair?
</h3>


<p>
It depends on your hair type. Most people can wash 2-3 times weekly.
</p>


</div>





<div className="faq-card">


<h3>
Can I use hair serum daily?
</h3>


<p>
Yes, hair serum can be used daily to control frizz and add shine.
</p>


</div>





<div className="faq-card">


<h3>
Are these products suitable for all hair types?
</h3>


<p>
Yes, GlowNest offers products for different hair needs.
</p>


</div>



</section>






</div>

)

}


export default Haircare;