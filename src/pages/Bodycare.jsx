import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bodycare.css";


const products = [

{
id:1,
name:"GlowNest Body Lotion",
price:"₹499",
image:"/images/body-lotion.jpg",
},

{
id:2,
name:"Nourishing Body Butter",
price:"₹599",
image:"/images/body-butter.jpg",
},

{
id:3,
name:"Refreshing Body Wash",
price:"₹399",
image:"/images/body-wash.jpg",
},

{
id:4,
name:"Exfoliating Body Scrub",
price:"₹549",
image:"/images/body-scrub.jpg",
},

];



const Bodycare =()=>{


const navigate = useNavigate();


return(

<div className="bodycare-page">



{/* Hero Section */}


<section className="body-hero">


<div className="body-overlay">


<h1>
Bodycare Collection
</h1>


<p>
Discover luxurious bodycare essentials that keep
your skin soft, smooth and beautifully nourished.
</p>



<button onClick={()=>navigate("/shop")}>
Shop Bodycare
</button>



</div>


</section>







{/* Introduction */}


<section className="body-intro">


<h2>
Complete Care For Your Body
</h2>


<p>

GlowNest bodycare products are designed with
hydrating and nourishing ingredients to give your
skin long-lasting softness and a healthy glow.

</p>


</section>








{/* Featured Products */}


<section className="featured-products">


<h2>
Featured Bodycare Products
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


<section className="body-benefits">


<h2>
Why Choose Our Bodycare?
</h2>



<div className="benefits-grid">



<div className="benefit-card">

<div className="benefit-icon">
💧
</div>

<h3>
Deep Moisture
</h3>

<p>
Keeps your skin hydrated, soft and smooth.
</p>

</div>





<div className="benefit-card">

<div className="benefit-icon">
🌿
</div>

<h3>
Natural Care
</h3>

<p>
Made with skin-friendly nourishing ingredients.
</p>

</div>






<div className="benefit-card">

<div className="benefit-icon">
✨
</div>

<h3>
Healthy Glow
</h3>

<p>
Improves skin texture and natural radiance.
</p>

</div>







<div className="benefit-card">

<div className="benefit-icon">
🧴
</div>

<h3>
Daily Protection
</h3>

<p>
Perfect essentials for everyday body care.
</p>

</div>



</div>


</section>








{/* Popular Brands */}


<section className="body-brands">


<h2>
Popular Bodycare Brands
</h2>



<div className="brands">


<div className="brand">
Nivea
</div>


<div className="brand">
Dove
</div>


<div className="brand">
The Body Shop
</div>


<div className="brand">
Vaseline
</div>


<div className="brand">
Cetaphil
</div>


<div className="brand">
Plum
</div>


</div>


</section>








{/* Reviews */}


<section className="body-reviews">


<h2>
Customer Reviews
</h2>



<div className="review-grid">



<div className="review-card">

⭐⭐⭐⭐⭐

<p>
"Body lotion feels amazing and keeps my skin soft."
</p>

<h4>
- Priya
</h4>

</div>




<div className="review-card">

⭐⭐⭐⭐⭐

<p>
"Great products with beautiful fragrance."
</p>

<h4>
- Ananya
</h4>

</div>




<div className="review-card">

⭐⭐⭐⭐☆

<p>
"Perfect daily bodycare routine."
</p>

<h4>
- Sneha
</h4>

</div>



</div>


</section>








{/* FAQ */}



<section className="body-faq">


<h2>
Frequently Asked Questions
</h2>




<div className="faq-card">


<h3>
How often should I use body lotion?
</h3>


<p>
Apply body lotion daily after shower for best results.
</p>


</div>





<div className="faq-card">


<h3>
Are these products suitable for all skin types?
</h3>


<p>
Yes, GlowNest bodycare products are designed for different skin needs.
</p>


</div>





<div className="faq-card">


<h3>
Can body scrub be used every day?
</h3>


<p>
Use body scrub 2-3 times a week for gentle exfoliation.
</p>


</div>



</section>





</div>

)

}


export default Bodycare;