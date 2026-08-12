const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createOrder,
    getOrders,
    getOrderById
} = require("../controllers/orderController");

// Create a new order
router.post("/", authMiddleware, createOrder);

// Get all orders of logged-in customer
router.get("/", authMiddleware, getOrders);

// Get one order
router.get("/:id", authMiddleware, getOrderById);

module.exports = router;