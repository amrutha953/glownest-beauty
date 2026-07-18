import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { CartContext } from "../context/CartContext";
const products = [
  {
    id: 201,
    name: "GlowNest Skincare Kit",
    price: 599,
    image: "/images/skincare.jpg",
    description:
      "A complete skincare routine including cleanser, moisturizer and sunscreen for glowing, healthy skin.",
  },
  {
    id: 202,
    name: "GlowNest Makeup Collection",
    price: 899,
    image: "/images/makeup.jpg",
    description:
      "A premium makeup collection with foundation, lipstick, mascara and more.",
  },
  {
    id: 203,
    name: "GlowNest Haircare Essentials",
    price: 699,
    image: "/images/haircare.jpg",
    description:
      "Complete haircare essentials for smooth, healthy and shiny hair.",
  },
  {
    id: 204,
    name: "GlowNest Body Care Lotion",
    price: 499,
    image: "/images/bodycare.jpg",
    description:
      "Hydrating body lotion enriched with natural ingredients for soft skin.",
  },
  {
    id: 205,
    name: "GlowNest Premium Serum",
    price: 799,
    image: "/images/serum.jpg",
    description:
      "Vitamin-rich facial serum for brighter, healthier and youthful skin.",
  },
  {
    id: 206,
    name: "GlowNest Luxury Perfume",
    price: 999,
    image: "/images/perfume.jpg",
    description:
      "Long-lasting luxury perfume with an elegant floral fragrance.",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <div className="product-details-page">
      <div className="product-details-card">

        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>

          <p className="price">₹{product.price}</p>

          <p className="rating">
            ⭐⭐⭐⭐⭐ (4.8/5)
          </p>

          <p className="description">
            {product.description}
          </p>

          <button
            className="buy-btn"
            onClick={() => addToCart(product)}
         >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}