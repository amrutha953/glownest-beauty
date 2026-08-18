const db = require("../config/db");
const {
    sendOrderConfirmation,
} = require("../services/whatsappService");

// =====================================================
// GET CUSTOMER PHONE
// =====================================================

const getCustomerPhone = (customerId, callback) => {
    const sql = `
        SELECT phone
        FROM customers
        WHERE id = ?
    `;

    db.query(
        sql,
        [customerId],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }

            if (results.length === 0) {
                return callback(
                    new Error("Customer not found"),
                    null
                );
            }

            callback(
                null,
                results[0].phone
            );
        }
    );
};

// =====================================================
// CREATE ORDER
// =====================================================
const createOrder = (req, res) => {
    console.log("🔥 CREATE ORDER FUNCTION CALLED");

    const customerId = req.user.id;
    const { total_amount, items } = req.body;

    console.log("Customer ID:", customerId);
    console.log("Total amount:", total_amount);
    console.log("Items received:", items);

    // -------------------------------
    // VALIDATION
    // -------------------------------
    if (!total_amount || Number(total_amount) <= 0) {
        return res.status(400).json({
            message: "Valid total amount is required"
        });
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({
            message: "Order items are required"
        });
    }

    // Validate every item before creating order
    for (const item of items) {
        const productId = Number(item.product_id);
        const quantity = Number(item.quantity);
        const price = Number(item.price);

        if (
            !Number.isInteger(productId) ||
            productId <= 0 ||
            !Number.isInteger(quantity) ||
            quantity <= 0 ||
            !Number.isFinite(price) ||
            price <= 0
        ) {
            console.error("❌ Invalid order item:", item);

            return res.status(400).json({
                message: "Invalid order item",
                item: item
            });
        }
    }

    // =====================================================
    // CREATE ORDER
    // =====================================================
    const orderSql = `
        INSERT INTO orders
        (customer_id, total_amount)
        VALUES (?, ?)
    `;

    db.query(
        orderSql,
        [customerId, Number(total_amount)],
        (err, result) => {
            if (err) {
                console.error("❌ Create order error:", err);

                return res.status(500).json({
                    message: "Failed to create order",
                    error: err.message
                });
            }

            const orderId = result.insertId;

            console.log("✅ ORDER CREATED:", orderId);

            // =====================================================
            // INSERT ORDER ITEMS
            // =====================================================
            const itemSql = `
                INSERT INTO order_items
                (order_id, product_id, quantity, price)
                VALUES (?, ?, ?, ?)
            `;

            let completed = 0;
            let failed = false;

            items.forEach((item) => {
                const productId = Number(item.product_id);
                const quantity = Number(item.quantity);
                const price = Number(item.price);

                console.log(
                    "🛒 Adding order item:",
                    {
                        orderId,
                        productId,
                        quantity,
                        price
                    }
                );

                db.query(
                    itemSql,
                    [
                        orderId,
                        productId,
                        quantity,
                        price
                    ],
                    (itemErr) => {
                        if (itemErr) {
                            console.error(
                                "❌ Order item insert error:",
                                itemErr
                            );

                            if (!failed) {
                                failed = true;

                                return res.status(500).json({
                                    message:
                                        "Order created but failed to add order items",
                                    error: itemErr.message
                                });
                            }

                            return;
                        }

                        completed++;

                        console.log(
                            `✅ Order item inserted ${completed}/${items.length}`
                        );

                        // All items inserted
                        if (
    completed === items.length &&
    !failed
) {
    console.log(
        "🎉 ALL ORDER ITEMS INSERTED"
    );

    getCustomerPhone(
        customerId,
        async (phoneError, phoneNumber) => {

            if (phoneError) {
                console.error(
                    "⚠️ Could not get customer phone:",
                    phoneError.message
                );

                return res.status(201).json({
                    message:
                        "Order created successfully",

                    orderId: orderId,

                    whatsapp: {
                        success: false,
                        message:
                            "Customer phone number unavailable"
                    }
                });
            }

            const whatsappResult =
                await sendOrderConfirmation({
                    phoneNumber,
                    orderId,
                    totalAmount:
                        Number(total_amount)
                });

            console.log(
                "📱 WhatsApp confirmation result:",
                whatsappResult
            );

            return res.status(201).json({
                message:
                    "Order created successfully",

                orderId: orderId,

                whatsapp:
                    whatsappResult
            });
        }
    );
}
                    }
                );
            });
        }
    );
};


// =====================================================
// GET CUSTOMER ORDERS
// =====================================================
const getOrders = (req, res) => {
    const customerId = req.user.id;

    console.log(
        "📦 Getting orders for customer:",
        customerId
    );

    const sql = `
        SELECT
            id,
            customer_id,
            total_amount,
            status,
            created_at
        FROM orders
        WHERE customer_id = ?
        ORDER BY created_at DESC
    `;

    db.query(
        sql,
        [customerId],
        (err, results) => {
            if (err) {
                console.error(
                    "❌ Get orders error:",
                    err
                );

                return res.status(500).json({
                    message: "Failed to get orders",
                    error: err.message
                });
            }

            console.log(
                "✅ Orders retrieved:",
                results
            );

            return res.json({
                message:
                    "Orders retrieved successfully",
                orders: results
            });
        }
    );
};


// =====================================================
// GET SINGLE ORDER WITH ITEMS
// =====================================================
const getOrderById = (req, res) => {
    const customerId = req.user.id;
    const orderId = req.params.id;

    console.log(
        "🔎 Getting order:",
        orderId,
        "for customer:",
        customerId
    );

    // =================================================
    // GET ORDER
    // =================================================
    const orderSql = `
        SELECT
            id,
            customer_id,
            total_amount,
            status,
            created_at
        FROM orders
        WHERE id = ?
        AND customer_id = ?
    `;

    db.query(
        orderSql,
        [orderId, customerId],
        (err, orderResults) => {
            if (err) {
                console.error(
                    "❌ Get order error:",
                    err
                );

                return res.status(500).json({
                    message: "Failed to get order",
                    error: err.message
                });
            }

            // Order does not belong to customer
            if (orderResults.length === 0) {
                return res.status(404).json({
                    message: "Order not found"
                });
            }

            // =================================================
            // GET ORDER ITEMS
            // =================================================
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
                            "❌ Get order items error:",
                            itemErr
                        );

                        return res.status(500).json({
                            message:
                                "Failed to get order items",
                            error: itemErr.message
                        });
                    }

                    console.log(
                        "✅ ORDER:",
                        orderResults[0]
                    );

                    console.log(
                        "✅ ORDER ITEMS:",
                        itemResults
                    );

                    return res.json({
                        message:
                            "Order retrieved successfully",

                        order: orderResults[0],

                        items: itemResults
                    });
                }
            );
        }
    );
};


// =====================================================
// UPDATE ORDER STATUS
// =====================================================
const updateOrderStatus = (req, res) => {
    const customerId = req.user.id;
    const orderId = req.params.id;
    const { status } = req.body;

    console.log(
        "🔄 Updating order status:",
        {
            customerId,
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
        "Delivered"
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
        AND customer_id = ?
    `;

    db.query(
        sql,
        [
            status,
            orderId,
            customerId
        ],
        (err, result) => {
            if (err) {
                console.error(
                    "❌ Update order status error:",
                    err
                );

                return res.status(500).json({
                    message:
                        "Failed to update order status",
                    error: err.message
                });
            }

            // =================================================
            // ORDER NOT FOUND
            // =================================================
            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Order not found"
                });
            }

            console.log(
                "✅ Order status updated:",
                orderId,
                status
            );

            return res.json({
                message:
                    "Order status updated successfully",

                orderId: Number(orderId),

                status: status
            });
        }
    );
};
// =====================================================
// ADMIN - GET ALL ORDERS
// =====================================================
const getAllOrdersForAdmin = (req, res) => {

    console.log("👑 ADMIN GETTING ALL ORDERS");

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
                    "❌ Admin get all orders error:",
                    err
                );

                return res.status(500).json({
                    message: "Failed to get all orders",
                    error: err.message
                });

            }

            console.log(
                "✅ Admin orders retrieved:",
                results.length
            );

            return res.json({
                message: "All orders retrieved successfully",
                orders: results
            });

        }
    );
};


// =====================================================
// ADMIN - GET SINGLE ORDER WITH ITEMS
// =====================================================
const getOrderByIdForAdmin = (req, res) => {

    const orderId = req.params.id;

    console.log(
        "👑 ADMIN GETTING ORDER:",
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
            c.phone AS customer_phone,
            c.address,
            c.city,
            c.state,
            c.pincode
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
                            "Order retrieved successfully",

                        order:
                            orderResults[0],

                        items:
                            itemResults

                    });

                }
            );

        }
    );
};


// =====================================================
// ADMIN - UPDATE ORDER STATUS
// =====================================================
const updateOrderStatusForAdmin = (req, res) => {

    const orderId = req.params.id;
    const { status } = req.body;

    console.log(
        "👑 ADMIN UPDATING ORDER STATUS:",
        {
            orderId,
            status
        }
    );

    const allowedStatuses = [
        "Pending",
        "Confirmed",
        "Shipped",
        "Delivered",
        "Cancelled"
    ];

    if (
        !status ||
        !allowedStatuses.includes(status)
    ) {

        return res.status(400).json({

            message:
                "Invalid order status",

            allowedStatuses

        });

    }

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

            if (result.affectedRows === 0) {

                return res.status(404).json({

                    message:
                        "Order not found"

                });

            }

            console.log(
                "✅ Admin updated order status:",
                orderId,
                status
            );

            return res.json({

                message:
                    "Order status updated successfully",

                orderId:
                    Number(orderId),

                status:
                    status

            });

        }
    );
};


// =====================================================
// EXPORT ALL CONTROLLERS
// =====================================================
module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    updateOrderStatus
};