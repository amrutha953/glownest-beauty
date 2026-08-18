const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
} = require("../controllers/cartController");


// =====================================================
// GET CART
// =====================================================

router.get(
    "/",
    authMiddleware,
    getCart
);


// =====================================================
// ADD TO CART
// =====================================================

router.post(
    "/",
    authMiddleware,
    addToCart
);


// =====================================================
// UPDATE CART ITEM
// =====================================================

router.put(
    "/:id",
    authMiddleware,
    updateCartItem
);


// =====================================================
// REMOVE CART ITEM
// =====================================================

router.delete(
    "/:id",
    authMiddleware,
    removeFromCart
);


// =====================================================
// CLEAR CART
// =====================================================

router.delete(
    "/",
    authMiddleware,
    clearCart
);


module.exports = router;