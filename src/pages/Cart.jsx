import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);


  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (
    <div className="cart-page">

      <h1>🛒 Shopping Cart</h1>


      <div className="cart-container">


        {/* Cart Items */}

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

                <img
                  src={item.image}
                  alt={item.name}
                />


                <div className="item-details">

                  <h3>
                    {item.name}
                  </h3>


                  <p>
                    ₹{item.price}
                  </p>


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



        {/* Order Summary */}

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


          <button className="checkout-btn">
            Proceed to Checkout
          </button>


        </div>


      </div>


    </div>
  );
}