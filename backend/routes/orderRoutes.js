const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createOrder,
    getOrders,
    getOrderById,
    updateOrderStatus
} = require("../controllers/orderController");


// =====================================================
// CREATE A NEW ORDER
// =====================================================
router.post(
    "/",
    authMiddleware,
    createOrder
);


// =====================================================
// GET ALL ORDERS OF LOGGED-IN CUSTOMER
// =====================================================
router.get(
    "/",
    authMiddleware,
    getOrders
);


// =====================================================
// GET ONE ORDER
// =====================================================
router.get(
    "/:id",
    authMiddleware,
    getOrderById
);


// =====================================================
// UPDATE ORDER STATUS
// =====================================================
router.put(
    "/:id/status",
    authMiddleware,
    updateOrderStatus
);


module.exports = router;