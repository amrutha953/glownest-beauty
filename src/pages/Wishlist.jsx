import React from "react";

export default function Wishlist() {
  return (
    <div style={{ padding: "70px", textAlign: "center" }}>
      <h1>❤️ My Wishlist</h1>

      <p>
        You haven't added any products to your wishlist yet.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#e91e63",
          color: "#fff",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
        }}
      >
        Continue Shopping
      </button>
    </div>
  );
}