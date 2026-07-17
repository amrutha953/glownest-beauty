import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Vitamin C Serum",
      price: 699,
      image: "/images/serum.jpg",
      quantity: 1,
    },
  ]);


  // Add product
  const addToCart = (product) => {

    setCartItems((prev) => {

      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {

        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];

    });

  };


  // Increase quantity
  const increaseQuantity = (id) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };


  // Decrease quantity
  const decreaseQuantity = (id) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );

  };


  // Remove product
  const removeFromCart = (id) => {

    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}