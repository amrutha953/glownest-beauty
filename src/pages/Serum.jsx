import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Serum.css";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";


const products = [
  {
    id: 401,
    name: "Vitamin C Serum",
    price: "₹699",
    image: "/images/vitamin-c-face-serum.jpg",
    images: [
      "/images/vitamin-c-face-serum.jpg",
      "/images/vitamin-c-face-serum-1.jpg",
      "/images/vitamin-c-face-serum-2.jpg",
      "/images/vitamin-c-face-serum-3.jpg",
    ],
  },

  {
    id: 402,
    name: "Hyaluronic Acid Serum",
    price: "₹799",
    image: "/images/hyaluronic-serum.jpg",
    images: [
      "/images/hyaluronic-serum.jpg",
      "/images/hyaluronic-serum-1.jpg",
      "/images/hyaluronic-serum-2.jpg",
      "/images/hyaluronic-serum-3.jpg",
    ],
  },

  {
    id: 403,
    name: "Niacinamide Serum",
    price: "₹749",
    image: "/images/niacinamide-glow-serum.jpg",
    images: [
      "/images/niacinamide-glow-serum.jpg",
      "/images/niacinamide-glow-serum-1.jpg",
      "/images/niacinamide-glow-serum-2.jpg",
      "/images/niacinamide-glow-serum-3.jpg",
    ],
  },

  {
    id: 404,
    name: "Retinol Serum",
    price: "₹899",
    image: "/images/retinol-serum.jpg",
    images: [
      "/images/retinol-serum.jpg",
      "/images/retinol-serum-1.jpg",
      "/images/retinol-serum-2.jpg",
      "/images/retinol-serum-3.jpg",
    ],
  },
];



const Serum =()=>{


const navigate=useNavigate();


const {addToCart}=useContext(CartContext);

const {addToWishlist}=useContext(WishlistContext);



return(

<div className="serum-page">



{/* Hero Section */}

<section className="serum-hero">


<div className="serum-overlay">


<h1>
Serum Collection
</h1>


<p>
Discover powerful face serums designed to hydrate,
brighten and improve your skin health.
</p>


<button onClick={()=>navigate("/shop")}>
Shop Serum
</button>


</div>


</section>





{/* Introduction */}


<section className="serum-intro">


<h2>
Powerful Serums For Glowing Skin
</h2>


<p>

GlowNest serums are lightweight skincare essentials
formulated with active ingredients to give your skin
hydration, brightness and a healthy glow.

</p>


</section>







{/* Featured Products */}

<section className="featured-products">

  <h2>Featured Serums</h2>

  <div className="products-grid">

    {products.map((product) => (

      <div
        className="product-card"
        key={product.id}
        onClick={() => navigate(`/product/${product.id}`)}
      >

        <img
          src={product.image}
          alt={product.name}
        />

        <h3>{product.name}</h3>

        <span>{product.price}</span>

        <button
          onClick={(e) => {
            e.stopPropagation();

            addToCart({
              ...product,
              quantity: 1,
            });
          }}
        >
          Add to Cart
        </button>

      </div>

    ))}

  </div>

</section>







{/* Benefits */}


<section className="serum-benefits">


<h2>
Why Choose Our Serums?
</h2>



<div className="benefits-grid">


<div className="benefit-card">

<div className="benefit-icon">
💧
</div>

<h3>
Deep Hydration
</h3>

<p>
Keeps skin moisturized and soft throughout the day.
</p>

</div>





<div className="benefit-card">

<div className="benefit-icon">
✨
</div>

<h3>
Bright Skin
</h3>

<p>
Helps reduce dullness and improves natural glow.
</p>

</div>






<div className="benefit-card">

<div className="benefit-icon">
🌿
</div>

<h3>
Skin Friendly
</h3>

<p>
Gentle formulas suitable for different skin types.
</p>

</div>






<div className="benefit-card">

<div className="benefit-icon">
💖
</div>

<h3>
Healthy Texture
</h3>

<p>
Supports smoother and healthier looking skin.
</p>

</div>



</div>


</section>







{/* Popular Brands */}



<section className="serum-brands">


<h2>
Popular Serum Brands
</h2>



<div className="brands">


<div className="brand">
Minimalist
</div>


<div className="brand">
The Ordinary
</div>


<div className="brand">
CeraVe
</div>


<div className="brand">
Dot & Key
</div>


<div className="brand">
L'Oreal Paris
</div>


<div className="brand">
Neutrogena
</div>



</div>


</section>







{/* Reviews */}



<section className="serum-reviews">


<h2>
Customer Reviews
</h2>



<div className="review-grid">


<div className="review-card">

⭐⭐⭐⭐⭐

<p>
"My skin feels brighter and smoother after using GlowNest serum."
</p>

<h4>
- Priya
</h4>

</div>



<div className="review-card">

⭐⭐⭐⭐⭐

<p>
"Lightweight serum with amazing hydration."
</p>

<h4>
- Ananya
</h4>

</div>



<div className="review-card">

⭐⭐⭐⭐☆

<p>
"Perfect serum for daily skincare routine."
</p>

<h4>
- Sneha
</h4>

</div>



</div>


</section>







{/* FAQ */}



<section className="serum-faq">


<h2>
Frequently Asked Questions
</h2>




<div className="faq-card">


<h3>
Which serum is best for beginners?
</h3>


<p>
Vitamin C and Hyaluronic Acid serums are good choices for beginners.
</p>


</div>




<div className="faq-card">


<h3>
Can serum be used daily?
</h3>


<p>
Yes, most serums can be used daily according to skin needs.
</p>


</div>




<div className="faq-card">


<h3>
Should serum be applied before moisturizer?
</h3>


<p>
Yes, apply serum first and then moisturizer.
</p>


</div>



</section>



</div>

)

}


export default Serum;