import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

import { FaHeart } from "react-icons/fa";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";


const products = [

  {
    id:1,
    name:"Vitamin C Face Serum",
    price:699,

    image:"/images/vitamin-c-face-serum.jpg",

    images:[
      "/images/vitamin-c-face-serum.jpg",
      "/images/vitamin-c-face-serum-1.jpg",
      "/images/vitamin-c-face-serum-2.jpg",
      "/images/vitamin-c-face-serum-3.jpg"
    ],

    description:
    "Brightening Vitamin C Face Serum enriched with antioxidants to reduce pigmentation, hydrate the skin, and provide a natural radiant glow."
  },


  {
  id:2,
  name:"Daily Face Cleanser",
  price:399,

  image:"/images/daily-face-cleanser.jpg",

  images:[
    "/images/daily-face-cleanser.jpg",
    "/images/daily-face-cleanser-1.jpg",
    "/images/daily-face-cleanser-2.jpg",
    "/images/daily-face-cleanser-3.jpg"
  ],

  description:
  "Gentle cleanser that removes dirt and excess oil without drying the skin."
},


  {
  id:3,
  name:"Hydrating Moisturizer",
  price:549,

  image:"/images/hydrating moisturizer.jpg",

  images:[
    "/images/hydrating moisturizer.jpg",
    "/images/hydrating moisturizer-1.jpg",
    "/images/hydrating moisturizer-2.jpg",
    "/images/hydrating moisturizer-3.jpg"
  ],

  description:
  "Lightweight moisturizer for soft, healthy and hydrated skin."
},


  {
  id:4,
  name:"SPF 50 Sunscreen",
  price:599,

  image:"/images/spf 50 sunscreen.jpg",

  images:[
    "/images/spf 50 sunscreen.jpg",
    "/images/spf 50 sunscreen-1.jpg",
    "/images/spf 50 sunscreen-2.jpg",
    "/images/spf 50 sunscreen-3.jpg"
  ],

  description:
  "Broad spectrum SPF 50 sunscreen for everyday UV protection."
},

{
  id:101,
  name:"Matte Lipstick",
  price:499,

  image:"/images/matte-lipstick.jpg",

  images:[
    "/images/matte-lipstick.jpg",
    "/images/matte-lipstick-1.jpg",
    "/images/matte-lipstick-2.jpg",
    "/images/matte-lipstick-3.jpg"
  ],

  description:
  "A long-lasting matte lipstick with rich color payoff and a comfortable matte finish."
},
{
  id:102,
  name:"Liquid Foundation",
  price:899,

  image:"/images/liquid-foundation.jpg",

  images:[
    "/images/liquid-foundation.jpg",
    "/images/liquid-foundation-1.jpg",
    "/images/liquid-foundation-2.jpg",
    "/images/liquid-foundation-3.jpg"
  ],

  description:
  "Lightweight liquid foundation that provides full coverage with a smooth natural finish."
},

{
  id:103,
  name:"Waterproof Mascara",
  price:699,

  image:"/images/waterproof-mascara.jpg",

  images:[
    "/images/waterproof-mascara.jpg",
    "/images/waterproof-mascara-1.jpg",
    "/images/waterproof-mascara-2.jpg",
    "/images/waterproof-mascara-3.jpg"
  ],

  description:
  "Smudge-proof waterproof mascara that adds volume, length, and definition for all-day wear."
},

{
  id:104,
  name:"Eyeshadow Palette",
  price:999,

  image:"/images/eyeshadow-palette.jpg",

  images:[
    "/images/eyeshadow-palette.jpg",
    "/images/eyeshadow-palette-1.jpg",
    "/images/eyeshadow-palette-2.jpg",
    "/images/eyeshadow-palette-3.jpg"
  ],

  description:
  "Highly pigmented eyeshadow palette with vibrant matte and shimmer shades for every occasion."
},

{
  id: 201,
  name: "Nourishing Shampoo",
  price: 599,

  image: "/images/nourishing-shampoo.jpg",

  images: [
    "/images/nourishing-shampoo.jpg",
    "/images/nourishing-shampoo-1.jpg",
    "/images/nourishing-shampoo-2.jpg",
    "/images/nourishing-shampoo-3.jpg"
  ],

  description:
    "A nourishing shampoo that gently cleanses the scalp while strengthening and adding shine to your hair."
},

{
  id: 202,
  name: "Repair Conditioner",
  price: 649,

  image: "/images/repair-conditioner.jpg",

  images: [
    "/images/repair-conditioner.jpg",
    "/images/repair-conditioner-1.jpg",
    "/images/repair-conditioner-2.jpg",
    "/images/repair-conditioner-3.jpg"
  ],

  description:
    "A rich conditioner that deeply nourishes dry and damaged hair, leaving it smooth and manageable."
},

{
  id: 203,
  name: "Hair Serum",
  price: 799,

  image: "/images/hair-serum.jpg",

  images: [
    "/images/hair-serum.jpg",
    "/images/hair-serum-1.jpg",
    "/images/hair-serum-2.jpg",
    "/images/hair-serum-3.jpg"
  ],

  description:
    "Lightweight hair serum that controls frizz, adds shine, and protects hair from daily damage."
},

{
  id: 204,
  name: "Hair Mask",
  price: 899,

  image: "/images/hair-mask.jpg",

  images: [
    "/images/hair-mask.jpg",
    "/images/hair-mask-1.jpg",
    "/images/hair-mask-2.jpg",
    "/images/hair-mask-3.jpg"
  ],

  description:
    "An intensive hair mask that repairs damaged strands and restores softness and moisture."
},

{
  id: 301,
  name: "Body Lotion",
  price: 499,

  image: "/images/body-lotion.jpg",

  images: [
    "/images/body-lotion.jpg",
    "/images/body-lotion-1.jpg",
    "/images/body-lotion-2.jpg",
    "/images/body-lotion-3.jpg"
  ],

  description:
    "A deeply nourishing body lotion that provides long-lasting hydration, leaving your skin soft, smooth, and healthy."
},

{
  id: 302,
  name: "Body Wash",
  price: 399,

  image: "/images/body-wash.jpg",

  images: [
    "/images/body-wash.jpg",
    "/images/body-wash-1.jpg",
    "/images/body-wash-2.jpg",
    "/images/body-wash-3.jpg"
  ],

  description:
    "A gentle body wash that cleanses, refreshes, and moisturizes the skin while maintaining its natural softness."
},

{
  id: 303,
  name: "Body Scrub",
  price: 599,

  image: "/images/body-scrub.jpg",

  images: [
    "/images/body-scrub.jpg",
    "/images/body-scrub-1.jpg",
    "/images/body-scrub-2.jpg",
    "/images/body-scrub-3.jpg"
  ],

  description:
    "An exfoliating body scrub that removes dead skin cells, smooths rough areas, and reveals naturally glowing skin."
},

{
  id: 304,
  name: "Hand Cream",
  price: 349,

  image: "/images/hand-cream.jpg",

  images: [
    "/images/hand-cream.jpg",
    "/images/hand-cream-1.jpg",
    "/images/hand-cream-2.jpg",
    "/images/hand-cream-3.jpg"
  ],

  description:
    "A rich hand cream that deeply moisturizes dry hands, keeping them soft, nourished, and protected throughout the day."
},

{
  id: 401,
  name: "Vitamin C Serum",
  price: 699,

  image: "/images/vitamin-c-face-serum.jpg",

  images: [
    "/images/vitamin-c-face-serum.jpg",
    "/images/vitamin-c-face-serum-1.jpg",
    "/images/vitamin-c-face-serum-2.jpg",
    "/images/vitamin-c-face-serum-3.jpg"
  ],

  description:
    "A powerful Vitamin C serum that brightens the skin, reduces dark spots, and provides antioxidant protection for a healthy glow."
},

{
  id: 402,
  name: "Hyaluronic Acid Serum",
  price: 799,

  image: "/images/hyaluronic-serum.jpg",

  images: [
    "/images/hyaluronic-serum.jpg",
    "/images/hyaluronic-serum-1.jpg",
    "/images/hyaluronic-serum-2.jpg",
    "/images/hyaluronic-serum-3.jpg"
  ],

  description:
    "A deeply hydrating serum enriched with Hyaluronic Acid to lock in moisture and leave your skin soft, plump, and refreshed."
},

{
  id: 403,
  name: "Niacinamide Serum",
  price: 749,

  image: "/images/niacinamide-serum.jpg",

  images: [
    "/images/niacinamide-glow-serum.jpg",
    "/images/niacinamide-glow-serum-1.jpg",
    "/images/niacinamide-glow-serum-2.jpg",
    "/images/niacinamide-glow-serum-3.jpg"
  ],

  description:
    "A lightweight Niacinamide serum that helps reduce pores, control excess oil, and improve overall skin texture."
},

{
  id: 404,
  name: "Retinol Serum",
  price: 899,

  image: "/images/retinol-serum.jpg",

  images: [
    "/images/retinol-serum.jpg",
    "/images/retinol-serum-1.jpg",
    "/images/retinol-serum-2.jpg",
    "/images/retinol-serum-3.jpg"
  ],

  description:
    "An advanced Retinol serum that supports skin renewal, smooths fine lines, and promotes a youthful-looking complexion."
},

];



export default function ProductDetails(){


  const {id}=useParams();

  const navigate=useNavigate();


  const {addToCart}=useContext(CartContext);

  const {addToWishlist}=useContext(WishlistContext);



  const product=products.find(
    item=>item.id===Number(id)
  );



  const [selectedImage,setSelectedImage]=useState(
    product?.images ? product.images[0] : product?.image
  );


  const [isWishlisted,setIsWishlisted]=useState(false);


  const [showToast,setShowToast]=useState(false);




  if(!product){

    return(

      <h2 style={{textAlign:"center"}}>

        Product Not Found

      </h2>

    );

  }



  const images=product.images || [product.image];





  const previousImage=()=>{


    const current=images.indexOf(selectedImage);


    const previous=
    (current-1+images.length)%images.length;


    setSelectedImage(images[previous]);

  };





  const nextImage=()=>{


    const current=images.indexOf(selectedImage);


    const next=
    (current+1)%images.length;


    setSelectedImage(images[next]);

  };






  const handleWishlist=()=>{


    addToWishlist(product);


    setIsWishlisted(!isWishlisted);



    setShowToast(true);



    setTimeout(()=>{

      setShowToast(false);

    },2000);


  };






return(


<div className="product-details-page">



<div className="product-details-card">






{/* IMAGE SECTION */}


<div className="image-section">



<div className="product-image">



{
images.length>1 &&

<button

className="arrow left-arrow"

onClick={previousImage}

>

❮

</button>

}




<img

src={selectedImage}

alt={product.name}

/>





{
images.length>1 &&

<button

className="arrow right-arrow"

onClick={nextImage}

>

❯

</button>

}



</div>





{/* THUMBNAILS */}



<div className="thumbnail-container">


{

images.map((img,index)=>(


<img

key={index}

src={img}

alt="thumbnail"


className={

selectedImage===img

?

"thumbnail active-thumb"

:

"thumbnail"

}


onClick={()=>setSelectedImage(img)}


/>


))

}



</div>



</div>









{/* PRODUCT INFORMATION */}



<div className="product-info">



<h1>

{product.name}

</h1>




<p className="price">

₹{product.price}

</p>




<p className="rating">

⭐⭐⭐⭐⭐ (4.8/5)

</p>




<p className="description">

{product.description}

</p>





<div className="product-buttons">



<button

className="cart-btn"

onClick={()=>addToCart(product)}

>

Add to Cart

</button>






<button

className={

`wishlist-action ${
isWishlisted ? "active": ""
}`

}


onClick={handleWishlist}

>


<FaHeart/>


{

isWishlisted

?

"Added"

:

"Wishlist"

}


</button>






<button

className="buy-now-btn"

onClick={()=>{


addToCart(product);


navigate("/cart");


}}

>

Buy Now

</button>



</div>



</div>




</div>






{

showToast &&

<div className="wishlist-toast">

Added to Wishlist ❤️

</div>

}



</div>



);


}