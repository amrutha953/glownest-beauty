import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import "./Wishlist.css";

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-page">
      <h1>❤️ My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <h2>Your wishlist is empty.</h2>
      ) : (
        <div className="wishlist-products">
          {wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <button
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}