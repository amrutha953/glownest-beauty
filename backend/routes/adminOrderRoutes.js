const express = require("express");
const router = express.Router();

const db = require("../config/db");
const adminMiddleware = require("../middleware/adminMiddleware");
const {
    sendOrderStatusUpdate,
} = require("../services/whatsappService");


// =====================================================
// ADMIN - GET ALL ORDERS
// =====================================================

router.get(
    "/",
    adminMiddleware,
    (req, res) => {

        console.log("📦 ADMIN GET ALL ORDERS");

        const sql = `
            SELECT
                o.id,
                o.customer_id,
                o.total_amount,
                o.status,
                o.created_at,
                c.name AS customer_name,
                c.email AS customer_email,
                c.phone AS customer_phone
            FROM orders o
            LEFT JOIN customers c
                ON o.customer_id = c.id
            ORDER BY o.created_at DESC
        `;

        db.query(
            sql,
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Admin get orders error:",
                        err
                    );

                    return res.status(500).json({
                        message: "Failed to get orders",
                        error: err.message
                    });
                }

                console.log(
                    "✅ Admin orders retrieved:",
                    results.length
                );

                return res.json({
                    message:
                        "Admin orders retrieved successfully",
                    orders: results
                });

            }
        );

    }
);


// =====================================================
// ADMIN - GET ONE ORDER
// =====================================================

router.get(
    "/:id",
    adminMiddleware,
    (req, res) => {

        const orderId = req.params.id;

        console.log(
            "🔎 ADMIN GET ORDER:",
            orderId
        );

        const orderSql = `
            SELECT
                o.id,
                o.customer_id,
                o.total_amount,
                o.status,
                o.created_at,
                c.name AS customer_name,
                c.email AS customer_email,
                c.phone AS customer_phone
            FROM orders o
            LEFT JOIN customers c
                ON o.customer_id = c.id
            WHERE o.id = ?
        `;

        db.query(
            orderSql,
            [orderId],
            (err, orderResults) => {

                if (err) {

                    console.error(
                        "❌ Admin get order error:",
                        err
                    );

                    return res.status(500).json({
                        message: "Failed to get order",
                        error: err.message
                    });
                }

                if (orderResults.length === 0) {

                    return res.status(404).json({
                        message: "Order not found"
                    });
                }


                const itemSql = `
                    SELECT
                        oi.id,
                        oi.order_id,
                        oi.product_id,
                        oi.quantity,
                        oi.price,
                        p.name,
                        p.brand,
                        p.category,
                        p.image
                    FROM order_items oi
                    LEFT JOIN products p
                        ON oi.product_id = p.id
                    WHERE oi.order_id = ?
                `;

                db.query(
                    itemSql,
                    [orderId],
                    (itemErr, itemResults) => {

                        if (itemErr) {

                            console.error(
                                "❌ Admin get order items error:",
                                itemErr
                            );

                            return res.status(500).json({
                                message:
                                    "Failed to get order items",
                                error:
                                    itemErr.message
                            });
                        }

                        return res.json({
                            message:
                                "Admin order retrieved successfully",

                            order:
                                orderResults[0],

                            items:
                                itemResults
                        });

                    }
                );

            }
        );

    }
);


// =====================================================
// ADMIN - UPDATE ORDER STATUS + WHATSAPP
// =====================================================

router.put(
    "/:id/status",
    adminMiddleware,
    (req, res) => {

        const orderId = req.params.id;
        const { status } = req.body;

        console.log(
            "🔄 ADMIN UPDATE ORDER STATUS:",
            {
                orderId,
                status
            }
        );

        // =================================================
        // ALLOWED STATUSES
        // =================================================

        const allowedStatuses = [
            "Pending",
            "Confirmed",
            "Shipped",
            "Delivered",
            "Cancelled"
        ];

        // =================================================
        // VALIDATE STATUS
        // =================================================

        if (
            !status ||
            !allowedStatuses.includes(status)
        ) {

            return res.status(400).json({
                message: "Invalid order status",
                allowedStatuses
            });

        }

        // =================================================
        // UPDATE ORDER
        // =================================================

        const sql = `
            UPDATE orders
            SET status = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                status,
                orderId
            ],
            (err, result) => {

                if (err) {

                    console.error(
                        "❌ Admin update order status error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to update order status",
                        error:
                            err.message
                    });

                }

                // =================================================
                // ORDER NOT FOUND
                // =================================================

                if (result.affectedRows === 0) {

                    return res.status(404).json({
                        message:
                            "Order not found"
                    });

                }

                console.log(
                    "✅ Admin order status updated:",
                    orderId,
                    status
                );

                // =================================================
                // GET CUSTOMER PHONE
                // =================================================

                const customerSql = `
                    SELECT
                        o.total_amount,
                        c.phone
                    FROM orders o
                    LEFT JOIN customers c
                        ON o.customer_id = c.id
                    WHERE o.id = ?
                `;

                db.query(
                    customerSql,
                    [orderId],
                    async (
                        customerErr,
                        customerResults
                    ) => {

                        if (customerErr) {

                            console.error(
                                "⚠️ Customer phone lookup error:",
                                customerErr
                            );

                            return res.json({
                                message:
                                    "Order status updated successfully",

                                orderId:
                                    Number(orderId),

                                status:

                                    status,

                                whatsapp: {
                                    success: false,
                                    message:
                                        "Could not get customer phone"
                                }
                            });

                        }

                        // =================================================
                        // CUSTOMER PHONE NOT FOUND
                        // =================================================

                        if (
                            customerResults.length === 0 ||
                            !customerResults[0].phone
                        ) {

                            console.log(
                                "⚠️ Customer phone not available"
                            );

                            return res.json({
                                message:
                                    "Order status updated successfully",

                                orderId:
                                    Number(orderId),

                                status:
                                    status,

                                whatsapp: {
                                    success: false,
                                    message:
                                        "Customer phone number unavailable"
                                }
                            });

                        }

                        // =================================================
                        // SEND WHATSAPP STATUS UPDATE
                        // =================================================

                        const whatsappResult =
                            await sendOrderStatusUpdate({
                                phoneNumber:
                                    customerResults[0].phone,

                                orderId:
                                    Number(orderId),

                                status:
                                    status
                            });

                        console.log(
                            "📱 WhatsApp status notification:",
                            whatsappResult
                        );

                        // =================================================
                        // FINAL RESPONSE
                        // =================================================

                        return res.json({

                            message:
                                "Order status updated successfully",

                            orderId:
                                Number(orderId),

                            status:
                                status,

                            whatsapp:
                                whatsappResult

                        });

                    }
                );

            }
        );

    }
);

module.exports = router;