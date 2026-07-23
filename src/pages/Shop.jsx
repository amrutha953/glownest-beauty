import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import products from "../data/products";



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
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <button
                className="wishlist-btn"
                onClick={() => addToWishlist(product)}
              >
                ♡
              </button>
          </div>

          <div className="shop-info">
            <h3>
              <Link to={`/product/${product.id}`} className="product-link">
                {product.name}
              </Link>
            </h3>
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