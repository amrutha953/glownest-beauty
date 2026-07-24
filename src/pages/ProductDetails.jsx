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