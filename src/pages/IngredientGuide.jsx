import React from "react";
import "./IngredientGuide.css";

function IngredientGuide(){

  return (

    <div className="ingredient-page">

      <h1>Ingredient Guide</h1>

      <p>
        Discover powerful skincare ingredients and
        understand how they help your skin.
      </p>


      <div className="ingredient-card">

<img 
src="/images/ingredients/hyaluronic-acid.jpg"
alt="Hyaluronic Acid"
/>

<h2>Hyaluronic Acid</h2>

<p>
Helps attract moisture and keeps skin hydrated,
soft, and plump.
</p>

</div>


      <div className="ingredient-card">

  <img 
    src="/images/ingredients/vitamin-c.jpg"
    alt="Vitamin C"
  />

  <h2>Vitamin C</h2>

  <p>
    A powerful antioxidant that helps brighten dull skin,
    improve uneven skin tone, and protect skin from
    environmental damage.
  </p>

</div>


      <div className="ingredient-card">

  <img 
    src="/images/ingredients/niacinamide.jpg"
    alt="Niacinamide"
  />

  <h2>Niacinamide</h2>

  <p>
    Helps control excess oil, reduce redness,
    minimize the appearance of pores, and
    strengthen the skin barrier.
  </p>

</div>


      <div className="ingredient-card">

  <img 
    src="/images/ingredients/ceramides.jpg"
    alt="Ceramides"
  />

  <h2>Ceramides</h2>

  <p>
    Essential lipids that protect the skin barrier,
    prevent moisture loss, and keep skin smooth
    and healthy.
  </p>

</div>


    </div>

  );

}

export default IngredientGuide;