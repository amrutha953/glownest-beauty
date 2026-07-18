import React, { useContext } from "react";
import "./Shop.css";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const products = [
  {
    id: 201,
    name: "GlowNest Skincare Kit",
    price: 599,
    image: "/images/skincare.jpg",
  },
  {
    id: 202,
    name: "GlowNest Makeup Collection",
    price: 899,
    image: "/images/makeup.jpg",
  },
  {
    id: 203,
    name: "GlowNest Haircare Essentials",
    price: 699,
    image: "/images/haircare.jpg",
  },
  {
    id: 204,
    name: "GlowNest Body Care Lotion",
    price: 499,
    image: "/images/bodycare.jpg",
  },
  {
    id: 205,
    name: "GlowNest Premium Serum",
    price: 799,
    image: "/images/serum.jpg",
  },
  {
    id: 206,
    name: "GlowNest Luxury Perfume",
    price: 999,
    image: "/images/perfume.jpg",
  },
];

export default function Shop() {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  return (
    <div className="shop-page">
      <h1 className="shop-title">GlowNest Beauty Shop</h1>

      <div className="shop-products">
        {products.map((product) => (
          <div className="shop-card" key={product.id}>
            <div className="shop-image">
              <img src={product.image} alt={product.name} />
              <button
                className="wishlist-btn"
                onClick={() => addToWishlist(product)}
              >
                ♡
              </button>
          </div>

          <div className="shop-info">
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>

            <button
              className="cart-btn"
              onClick={() => {
                addToCart(product);
                alert(`${product.name} added to cart! 🛒`);
              }}
            >
              Add to Cart
            </button>
         </div>
      </div>
        ))}
      </div>
    </div>
  );
}