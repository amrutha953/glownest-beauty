import React from "react";
import "./Offers.css";

export default function Offers() {
  const offers = [
    {
      title: "Flat 30% OFF",
      category: "Skincare",
      description: "On all cleansers, moisturizers and sunscreens.",
      code: "SKIN30",
    },
    {
      title: "Buy 2 Get 1 FREE",
      category: "Makeup",
      description: "Applicable on selected lipsticks and mascaras.",
      code: "MAKEUP",
    },
    {
      title: "Up to 40% OFF",
      category: "Haircare",
      description: "Shampoos, conditioners and hair serums.",
      code: "HAIR40",
    },
    {
      title: "20% OFF",
      category: "Perfumes",
      description: "Luxury fragrances for men and women.",
      code: "SCENT20",
    },
  ];

  return (
    <div className="offers-page">

      <section className="offers-hero">
        <h1>🎉 Today's Beauty Deals</h1>
        <p>
          Discover amazing discounts on your favorite beauty products.
        </p>
      </section>

      <section className="offers-grid">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <h2>{offer.title}</h2>
            <h3>{offer.category}</h3>
            <p>{offer.description}</p>

            <div className="coupon-box">
              Use Code: <strong>{offer.code}</strong>
            </div>

            <button>Shop Now</button>
          </div>
        ))}
      </section>

    </div>
  );
}