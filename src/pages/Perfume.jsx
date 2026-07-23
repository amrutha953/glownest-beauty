import React from "react";
import { useNavigate } from "react-router-dom";
import "./Perfume.css";


const products = [

  {
    id:1,
    name:"Luxury Rose Eau De Parfum",
    price:"₹1299",
    image:"/images/luxury-rose-perfume.jpg",
  },

  {
    id:2,
    name:"Midnight Oud Perfume",
    price:"₹1499",
    image:"/images/midnight-oud-perfume.jpg",
  },

  {
    id:3,
    name:"Floral Bloom Fragrance",
    price:"₹999",
    image:"/images/floral-bloom-perfume.jpg",
  },

  {
    id:4,
    name:"Royal Musk Perfume",
    price:"₹1199",
    image:"/images/royal-musk-perfume.jpg",
  },

];



const Perfume = () => {

const navigate = useNavigate();


return (

<div className="perfume-page">


{/* HERO */}

<section className="perfume-hero">

<div className="perfume-overlay">

<h1>
GlowNest Perfume Collection
</h1>


<p>
Discover elegant fragrances crafted to match
your personality and every special moment.
</p>


<button onClick={()=>navigate("/shop")}>
Shop Perfumes
</button>


</div>

</section>





{/* INTRODUCTION */}

<section className="perfume-intro">

<h2>
Find Your Signature Fragrance
</h2>


<p>
Explore floral, fresh, woody and luxurious perfumes
designed to make you feel confident and beautiful.
</p>


</section>





{/* PRODUCTS */}

<section className="featured-products">


<h2>
Featured Perfumes
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





{/* BENEFITS */}

<section className="perfume-benefits">


<h2>
Why Choose GlowNest Perfume?
</h2>


<div className="benefits-grid">


<div className="benefit-card">

<h3>
Long Lasting
</h3>

<p>
Enjoy beautiful fragrances that stay fresh all day.
</p>

</div>



<div className="benefit-card">

<h3>
Premium Ingredients
</h3>

<p>
Made with carefully selected fragrance notes.
</p>

</div>




<div className="benefit-card">

<h3>
Luxury Experience
</h3>

<p>
Elegant scents created for special occasions.
</p>

</div>



<div className="benefit-card">

<h3>
Perfect Gift
</h3>

<p>
Beautiful perfumes for your loved ones.
</p>

</div>


</div>


</section>






{/* CATEGORIES */}


<section className="perfume-categories">


<h2>
Perfume Categories
</h2>


<div className="categories-grid">


<div className="category-card">
<h3>Floral</h3>
<p>Rose, jasmine and soft feminine fragrances.</p>
</div>


<div className="category-card">
<h3>Fresh</h3>
<p>Light citrus and refreshing everyday scents.</p>
</div>


<div className="category-card">
<h3>Woody</h3>
<p>Warm and sophisticated fragrances.</p>
</div>


<div className="category-card">
<h3>Oriental</h3>
<p>Rich luxurious notes for special occasions.</p>
</div>


</div>


</section>





{/* BRANDS */}


<section className="perfume-brands">

<h2>
Popular Fragrance Brands
</h2>


<div className="brands">


<div className="brand">
Chanel
</div>


<div className="brand">
Dior
</div>


<div className="brand">
Gucci
</div>


<div className="brand">
Versace
</div>


<div className="brand">
YSL
</div>


<div className="brand">
Calvin Klein
</div>


</div>


</section>






{/* REVIEWS */}


<section className="perfume-reviews">


<h2>
Customer Reviews
</h2>


<div className="review-grid">


<div className="review-card">

⭐⭐⭐⭐⭐

<p>
"Beautiful fragrance and lasts all day."
</p>

<h4>- Priya</h4>

</div>



<div className="review-card">

⭐⭐⭐⭐⭐

<p>
"Premium quality perfume collection."
</p>

<h4>- Ananya</h4>

</div>



<div className="review-card">

⭐⭐⭐⭐☆

<p>
"Lovely scents with elegant packaging."
</p>

<h4>- Sneha</h4>

</div>


</div>


</section>






{/* FAQ */}


<section className="perfume-faq">


<h2>
Frequently Asked Questions
</h2>



<div className="faq-card">

<h3>
How long does perfume last?
</h3>

<p>
Most premium perfumes can last between 6-12 hours depending on skin type.
</p>

</div>




<div className="faq-card">

<h3>
Which perfume is best for daily use?
</h3>

<p>
Fresh and floral fragrances are perfect for everyday wear.
</p>

</div>




<div className="faq-card">

<h3>
Can perfume be gifted?
</h3>

<p>
Yes, perfumes make elegant gifts for birthdays and special occasions.
</p>

</div>



</section>



</div>

);

};


export default Perfume;