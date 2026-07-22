import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./SensitiveSkin.css";

function SensitiveSkin() {

  const { addToCart } = useContext(CartContext);

  return (

    <div className="sensitive-skin-page">

      {/* HERO */}

      <section className="sensitive-hero">

        <div className="sensitive-hero-content">

          <h1>Sensitive Skin Care Guide</h1>

          <p>
            Discover gentle skincare products and soothing
            ingredients specially selected for sensitive skin.
            Keep your skin calm, healthy and protected every day.
          </p>

          <button
            onClick={() => {
              document.getElementById("sensitive-products").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Shop Sensitive Skin Products
          </button>

        </div>

        <div className="sensitive-hero-image">

          <img
            src="/images/skintypes/sensitive-skin.jpg"
            alt="Sensitive Skin"
          />

        </div>

      </section>



      {/* ABOUT SENSITIVE SKIN */}

      <section className="about-sensitive">

        <div className="sensitive-image">

          <img
            src="/images/skintypes/sensitive-info.jpg"
            alt="Sensitive Skin Care"
          />

        </div>

        <div className="sensitive-content">

          <h2>What is Sensitive Skin?</h2>

          <p>
            Sensitive skin reacts easily to environmental
            factors, skincare products and weather changes.
            It may become red, itchy, irritated or dry after
            using harsh ingredients.

            <br /><br />

            Using fragrance-free products and calming
            ingredients helps strengthen the skin barrier
            and keeps your skin healthy, comfortable and
            protected.
          </p>

        </div>

      </section>
      {/* COMMON SIGNS */}

<section className="info-section">

  <h2>Common Signs of Sensitive Skin</h2>

  <div className="info-grid">

    <div className="info-card">

      <h3>Redness</h3>

      <p>
        Skin becomes red easily after using products or exposure to heat.
      </p>

    </div>

    <div className="info-card">

      <h3>Burning Sensation</h3>

      <p>
        Tingling or burning feeling after applying skincare products.
      </p>

    </div>

    <div className="info-card">

      <h3>Itching</h3>

      <p>
        Sensitive skin often feels itchy and uncomfortable.
      </p>

    </div>

    <div className="info-card">

      <h3>Dry & Irritated</h3>

      <p>
        Skin barrier becomes weak causing dryness and irritation.
      </p>

    </div>

  </div>

</section>
{/* BEST INGREDIENTS */}

<section className="info-section">

  <h2>Best Ingredients</h2>

  <div className="info-grid">

    <div className="ingredient-card">

      <img
        src="/images/ingredients/centella.jpg"
        alt="Centella"
      />

      <h3>Centella Asiatica</h3>

      <p>
        Calms irritation and strengthens the skin barrier.
      </p>

    </div>

    <div className="ingredient-card">

      <img
        src="/images/ingredients/panthenol.jpg"
        alt="Panthenol"
      />

      <h3>Panthenol</h3>

      <p>
        Soothes sensitive skin and provides deep hydration.
      </p>

    </div>

    <div className="ingredient-card">

      <img
        src="/images/ingredients/oat-extract.jpg"
        alt="Oat Extract"
      />

      <h3>Oat Extract</h3>

      <p>
        Relieves itching while protecting delicate skin.
      </p>

    </div>

    <div className="ingredient-card">

      <img
        src="/images/ingredients/niacinamide.jpg"
        alt="Niacinamide"
      />

      <h3>Niacinamide</h3>

      <p>
        Reduces redness and improves the skin barrier.
      </p>

    </div>

  </div>

</section>
{/* ROUTINE */}

<section className="routine-section">

  <h2>Sensitive Skin Care Routine</h2>

  <div className="routine-grid">

    <div className="routine-card">

      <h3>Morning Routine</h3>

      <p>1. Gentle Cleanser</p>

      <p>2. Centella Toner</p>

      <p>3. Niacinamide Serum</p>

      <p>4. Lightweight Moisturizer</p>

      <p>5. SPF 50 Sunscreen</p>

    </div>

    <div className="routine-card">

      <h3>Night Routine</h3>

      <p>1. Gentle Cleanser</p>

      <p>2. Panthenol Serum</p>

      <p>3. Barrier Repair Cream</p>

      <p>4. Sleeping Mask</p>

    </div>

  </div>

</section>
<section
id="sensitive-products"
className="products-section"
>

<h2>Shop Sensitive Skin Essentials</h2>

<p className="products-subtitle">
Gentle skincare specially selected
for delicate and sensitive skin.
</p>

<div className="product-grid">

<div className="product-card">

<img
src="/images/products/centella-serum.jpg"
alt="Centella Serum"
/>

<h3>Centella Serum</h3>

<p>
Calms irritation and strengthens
the skin barrier.
</p>

<div className="product-price">
₹699
</div>

<button
onClick={()=>
addToCart({
id:301,
name:"Centella Serum",
price:699,
image:"/images/products/centella-serum.jpg"
})
}
>
Add To Cart
</button>

</div>



<div className="product-card">

<img
src="/images/products/barrier-cream.jpg"
alt="Barrier Cream"
/>

<h3>Barrier Cream</h3>

<p>
Repairs and protects
sensitive skin.
</p>

<div className="product-price">
₹599
</div>

<button
onClick={()=>
addToCart({
id:302,
name:"Barrier Cream",
price:599,
image:"/images/products/barrier-cream.jpg"
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
Cleans without stripping
natural moisture.
</p>

<div className="product-price">
₹499
</div>

<button
onClick={()=>
addToCart({
id:303,
name:"Gentle Cleanser",
price:499,
image:"/images/products/gentle-cleanser.jpg"
})
}
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
src="/images/skintypes/sensitive-before.jpg"
alt="Before"
/>

<h3>Before</h3>

<p>
Redness, irritation and
weak skin barrier.
</p>

</div>

<div className="transform-card">

<img
src="/images/skintypes/sensitive-after.jpg"
alt="After"
/>

<h3>After</h3>

<p>
Calm, healthy and
comfortable skin.
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
alt="Gentle Cleanser"
/>

<div className="essential-content">

<h3>Gentle Cleanser</h3>

<p>
Removes dirt while protecting
sensitive skin.
</p>

<button>Add To Routine</button>

</div>

</div>



<div className="essential-card">

<img
src="/images/essentials/centella-serum.jpg"
alt="Centella Serum"
/>

<div className="essential-content">

<h3>Centella Serum</h3>

<p>
Instantly calms redness and
irritation.
</p>

<button>Add To Routine</button>

</div>

</div>



<div className="essential-card">

<img
src="/images/essentials/barrier-cream.jpg"
alt="Barrier Cream"
/>

<div className="essential-content">

<h3>Barrier Cream</h3>

<p>
Repairs damaged skin barrier
and locks moisture.
</p>

<button>Add To Routine</button>

</div>

</div>



<div className="essential-card">

<img
src="/images/essentials/mineral-sunscreen.jpg"
alt="Mineral Sunscreen"
/>

<div className="essential-content">

<h3>Mineral Sunscreen</h3>

<p>
Protects sensitive skin from
UV damage.
</p>

<button>Add To Routine</button>

</div>

</div>

</div>

</section>
    </div>

  );

}

export default SensitiveSkin;