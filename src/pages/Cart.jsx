import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  // ================================
  // CALCULATE SUBTOTAL
  // ================================
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  // ================================
  // CHECKOUT
  // ================================
  const handleCheckout = async () => {
    try {
      // --------------------------------
      // CHECK LOGIN
      // --------------------------------
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login before placing an order");
        return;
      }

      // --------------------------------
      // CHECK EMPTY CART
      // --------------------------------
      if (!cartItems || cartItems.length === 0) {
        alert("Your cart is empty");
        return;
      }

      setLoading(true);

      // --------------------------------
      // DEBUG CART
      // --------------------------------
      console.log("🔥 CART ITEMS BEFORE CHECKOUT:");
      console.log(cartItems);

      // --------------------------------
      // PREPARE ORDER ITEMS
      // --------------------------------
      const items = cartItems.map((item) => {
        const productId = Number(item.id);
        const quantity = Number(item.quantity);
        const price = Number(item.price);

        console.log("🛒 Product:", item.name);
        console.log("🆔 Product ID:", productId);
        console.log("🔢 Quantity:", quantity);
        console.log("💰 Price:", price);

        return {
          product_id: productId,
          quantity: quantity,
          price: price,
        };
      });

      // --------------------------------
      // VALIDATE PRODUCT IDS
      // --------------------------------
      const invalidItems = items.filter(
        (item) =>
          !Number.isInteger(item.product_id) ||
          item.product_id <= 0 ||
          !Number.isInteger(item.quantity) ||
          item.quantity <= 0 ||
          !Number.isFinite(item.price) ||
          item.price < 0
      );

      if (invalidItems.length > 0) {
        console.error("❌ INVALID ORDER ITEMS:", invalidItems);

        alert(
          "Some products in your cart have invalid product information. Please remove them and add them again."
        );

        return;
      }

      // --------------------------------
      // FINAL ORDER DATA
      // --------------------------------
      const orderData = {
        total_amount: subtotal,
        items: items,
      };

      console.log("🔥 ORDER DATA BEING SENT:");
      console.log(orderData);

      // --------------------------------
      // SEND ORDER TO BACKEND
      // --------------------------------
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(orderData),
      });

      // --------------------------------
      // READ RESPONSE
      // --------------------------------
      const data = await response.json();

      console.log("🔥 ORDER RESPONSE:");
      console.log(data);

      // --------------------------------
      // HANDLE ERROR
      // --------------------------------
      if (!response.ok) {
        console.error("❌ ORDER FAILED:", data);

        alert(data.message || "Failed to place order");

        return;
      }

      // --------------------------------
      // SUCCESS
      // --------------------------------
      console.log("✅ ORDER CREATED:", data);

      alert(`Order placed successfully! Order ID: ${data.orderId}`);

    } catch (error) {
      console.error("❌ CHECKOUT ERROR:", error);

      alert("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  // ================================
  // UI
  // ================================
  return (
    <div className="cart-page">

      <h1>🛒 Shopping Cart</h1>

      <div className="cart-container">

        {/* ================================
            CART ITEMS
        ================================= */}

        <div className="cart-items">

          {cartItems.length === 0 ? (

            <h2>
              Your cart is empty 💖
            </h2>

          ) : (

            cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                {/* PRODUCT IMAGE */}

                <img
                  src={item.image}
                  alt={item.name}
                />

                {/* PRODUCT DETAILS */}

                <div className="item-details">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₹{item.price}
                  </p>

                  {/* QUANTITY */}

                  <div className="quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* REMOVE */}

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            ))

          )}

        </div>

        {/* ================================
            ORDER SUMMARY
        ================================= */}

        <div className="cart-summary">

          <h2>
            Order Summary
          </h2>

          <p>
            Subtotal

            <span>
              ₹{subtotal}
            </span>
          </p>

          <p>
            Shipping

            <span>
              FREE
            </span>
          </p>

          <hr />

          <h3>
            Total

            <span>
              ₹{subtotal}
            </span>
          </h3>

          {/* CHECKOUT BUTTON */}

          <button
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={loading || cartItems.length === 0}
          >
            {loading
              ? "Placing Order..."
              : "Proceed to Checkout"}
          </button>

        </div>

      </div>

    </div>
  );
}