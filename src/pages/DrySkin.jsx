import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import "./DrySkin.css";

function DrySkin() {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (

    <div className="dry-skin-page">


      {/* HERO */}

      <section className="dry-hero">

        <div className="dry-hero-content">

          <h1>Dry Skin Care Guide</h1>

          <p>
            Discover the best skincare routine, ingredients,
            and products to keep your skin hydrated,
            soft, and naturally glowing.
          </p>

          <button 
          onClick={() => {
          document.getElementById("dry-products").scrollIntoView({
          behavior:"smooth"
          });
          }}
          >
          Shop Dry Skin Products
          </button>

        </div>


        <div className="dry-hero-image">

          <img
            src="/images/skintypes/dry-skin.jpg"
            alt="Dry Skin"
          />

        </div>

      </section>




      {/* ABOUT DRY SKIN */}


      <section className="about-dry-skin">


        <div className="about-image">

          <img
            src="/images/skintypes/dry-info.jpg"
            alt="Dry Skin Care"
          />

        </div>



        <div className="about-content">

          <h2>What is Dry Skin?</h2>

          <p>
            Dry skin is a common skin type that lacks enough
            natural oils and moisture. It may feel tight,
            rough, itchy, or flaky.

            With the right skincare routine and hydrating
            ingredients, dry skin can become soft,
            healthy, and naturally radiant.
          </p>

        </div>


      </section>





      {/* SIGNS */}


      <section className="info-section">


        <h2>Common Signs of Dry Skin</h2>


        <div className="info-grid">


          <div className="info-card">

            <h3>Tight Skin</h3>

            <p>
              Skin feels stretched and uncomfortable after cleansing.
            </p>

          </div>



          <div className="info-card">

            <h3>Flaky Skin</h3>

            <p>
              Dry patches and peeling skin appear on the face.
            </p>

          </div>



          <div className="info-card">

            <h3>Dull Skin</h3>

            <p>
              Skin loses its healthy glow and looks tired.
            </p>

          </div>



          <div className="info-card">

            <h3>Fine Lines</h3>

            <p>
              Dryness makes fine lines more noticeable.
            </p>

          </div>


        </div>


      </section>






      {/* INGREDIENTS */}



      <section className="info-section">


        <h2>Best Ingredients</h2>


        <div className="info-grid">



          <div className="ingredient-card">

            <img src="/images/ingredients/hyaluronic.jpg"/>

            <h3>Hyaluronic Acid</h3>

            <p>
              Deeply hydrates skin and locks moisture.
            </p>

          </div>




          <div className="ingredient-card">

            <img src="/images/ingredients/ceramides.jpg"/>

            <h3>Ceramides</h3>

            <p>
              Strengthens skin barrier and prevents moisture loss.
            </p>

          </div>





          <div className="ingredient-card">

            <img src="/images/ingredients/squalane.jpg"/>

            <h3>Squalane</h3>

            <p>
              Nourishes dry skin and gives smooth texture.
            </p>

          </div>





          <div className="ingredient-card">

            <img src="/images/ingredients/glycerin.jpg"/>

            <h3>Glycerin</h3>

            <p>
              Attracts moisture and keeps skin hydrated.
            </p>

          </div>



        </div>


      </section>







      {/* ROUTINE TIMELINE */}



      <section className="routine-section">


        <h2>Dry Skin Care Routine</h2>


        <div className="routine-timeline">



          <div className="routine-card">

            <h3>Morning Routine</h3>

            <p>1. Gentle Hydrating Cleanser</p>

            <p>2. Hyaluronic Acid Serum</p>

            <p>3. Ceramide Moisturizer</p>

            <p>4. Sunscreen SPF 30+</p>

          </div>





          <div className="routine-card">


            <h3>Night Routine</h3>


            <p>1. Remove Makeup & Cleanse</p>

            <p>2. Nourishing Serum</p>

            <p>3. Barrier Repair Cream</p>

            <p>4. Overnight Hydration Mask</p>


          </div>



        </div>


      </section>







      
      {/* PRODUCTS */}


<section 
id="dry-products"
className="products-section"
>


<h2>Shop Dry Skin Essentials</h2>


<p className="products-subtitle">
Hydrating skincare products specially selected
for dry and dehydrated skin.
</p>



<div className="product-grid">



<div className="product-card">


<img 
src="/images/products/hydrating-serum.jpg"
alt="Hydrating Serum"
/>


<h3>Hydrating Serum</h3>


<p>
Deep hydration with Hyaluronic Acid
for soft and glowing skin.
</p>


<div className="product-price">
₹699
</div>
<button
className="wishlist-btn"
onClick={() =>
addToWishlist({
id:301,
name:"Hydrating Serum",
price:699,
image:"/images/products/hydrating-serum.jpg"
})
}
>
♡
</button>


<button
onClick={() =>
addToCart({
id: 301,
name:"Hydrating Serum",
price:699,
image:"/images/products/hydrating-serum.jpg",
quantity:1
})
}
>
Add To Cart
</button>


</div>





<div className="product-card">


<img 
src="/images/products/ceramide-moisturizer.jpg"
alt="Ceramide Moisturizer"
/>


<h3>Ceramide Moisturizer</h3>


<p>
Repairs skin barrier and locks
long-lasting moisture.
</p>


<div className="product-price">
₹599
</div>
<button
className="wishlist-btn"
onClick={() =>
addToWishlist({
id:302,
name:"Ceramide Moisturizer",
price:599,
image:"/images/products/ceramide-moisturizer.jpg"
})
}
>
♡
</button>


<button
onClick={() =>
addToCart({
id:302,
name:"Ceramide Moisturizer",
price:599,
image:"/images/products/ceramide-moisturizer.jpg",
quantity:1
})
}
>
Add To Cart
</button>


</div>






<div className="product-card">


<img 
src="/images/products/gentle-cleanser.jpg"
alt="Gentle Cleanser"
/>


<h3>Gentle Cleanser</h3>


<p>
Cleanses skin without removing
natural moisture.
</p>


<div className="product-price">
₹499
</div>
<button
className="wishlist-btn"
onClick={() =>
addToWishlist({
id:303,
name:"Gentle Cleanser",
price:499,
image:"/images/products/gentle-cleanser.jpg"
})
}
>
♡
</button>


<button
onClick={() =>
addToCart({
id:303,
name:"Gentle Cleanser",
price:499,
image:"/images/products/gentle-cleanser.jpg",
quantity:1
})
}
>
Add To Cart
</button>


</div>



</div>


</section>







      {/* Hydration Transformation */}

<section className="hydration-section">

    <h2>Hydration Transformation</h2>

    <div className="transformation-cards">


        <div className="transform-card">

            <img
                src="/images/skintypes/dry-before.jpg"
                alt="Before Hydration"
            />

            <h3>Before</h3>

            <p>
                Dryness, rough texture,
                dull appearance
            </p>

        </div>



        <div className="transform-card">

            <img
                src="/images/skintypes/dry-after.jpg"
                alt="After Hydration"
            />

            <h3>After</h3>

            <p>
                Soft, smooth and glowing
                hydrated skin
            </p>

        </div>


    </div>

</section>


{/* Daily Essentials */}

<section className="daily-section">

<h2>Daily Essentials</h2>

<div className="essential-grid">


<div className="essential-card">

<img 
src="/images/essentials/cleanser.jpg"
alt="Cleanser"
/>

<h3>Cleanser</h3>

<p>
Removes impurities while keeping skin hydrated.
</p>

<button
onClick={() =>
addToCart({
id:701,
name:"Hydrating Cleanser",
price:499,
image:"/images/essentials/cleanser.jpg",
quantity:1
})
}
>
Add To Routine
</button>

</div>




<div className="essential-card">

<img 
src="/images/essentials/hydrating serum.jpg"
alt="Hydrating Serum"
/>

<h3>Hydrating Serum</h3>

<p>
Boosts moisture and restores skin glow.
</p>

<button
onClick={() =>
addToCart({
id:702,
name:"Hydrating Serum",
price:699,
image:"/images/essentials/hydrating serum.jpg",
quantity:1
})
}
>
Add To Routine
</button>

</div>





<div className="essential-card">

<img 
src="/images/essentials/moisturizer.jpg"
alt="Moisturizer"
/>

<h3>Moisturizer</h3>

<p>
Repairs skin barrier and locks hydration.
</p>

<button
onClick={() =>
addToCart({
id:703,
name:"Hydrating Moisturizer",
price:599,
image:"/images/essentials/moisturizer.jpg",
quantity:1
})
}
>
Add To Routine
</button>

</div>





<div className="essential-card">

<img 
src="/images/essentials/sunscreen.jpg"
alt="Sunscreen"
/>

<h3>Sunscreen</h3>

<p>
Protects skin from harmful UV rays.
</p>

<button
onClick={() =>
addToCart({
id:704,
name:"Sunscreen SPF 50",
price:799,
image:"/images/essentials/sunscreen.jpg",
quantity:1
})
}
>
Add To Routine
</button>

</div>


</div>

</section>
          
</div>

  );

}

export default DrySkin;





      