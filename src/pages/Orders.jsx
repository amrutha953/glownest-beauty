const db = require("../config/db");

// ===============================
// CREATE ORDER
// ===============================
const createOrder = (req, res) => {
    console.log("🔥 CREATE ORDER FUNCTION CALLED");

    const customerId = req.user.id;
    const { total_amount, items } = req.body;

    console.log("Customer ID:", customerId);
    console.log("Total amount:", total_amount);
    console.log("Items received:", items);

    // Validate total amount
    if (!total_amount) {
        return res.status(400).json({
            message: "Total amount is required"
        });
    }

    // Validate order items
    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({
            message: "Order items are required"
        });
    }

    // ===============================
    // INSERT ORDER
    // ===============================
    const orderSql = `
        INSERT INTO orders
        (customer_id, total_amount)
        VALUES (?, ?)
    `;

    db.query(
        orderSql,
        [customerId, total_amount],
        (err, result) => {

            if (err) {
                console.error("Create order error:", err);

                return res.status(500).json({
                    message: "Failed to create order",
                    error: err.message
                });
            }

            const orderId = result.insertId;

            console.log("✅ Order created:", orderId);

            // ===============================
            // INSERT ORDER ITEMS
            // ===============================
            const itemSql = `
                INSERT INTO order_items
                (order_id, product_id, quantity, price)
                VALUES (?, ?, ?, ?)
            `;

            let completed = 0;
            let responseSent = false;

            items.forEach((item) => {

                const productId = Number(item.product_id);
                const quantity = Number(item.quantity);
                const price = Number(item.price);

                console.log(
                    "Adding item:",
                    productId,
                    quantity,
                    price
                );

                // Validate item data
                if (
                    !Number.isInteger(productId) ||
                    productId <= 0 ||
                    !Number.isInteger(quantity) ||
                    quantity <= 0 ||
                    Number.isNaN(price)
                ) {
                    if (!responseSent) {
                        responseSent = true;

                        return res.status(400).json({
                            message: "Invalid order item data",
                            item
                        });
                    }

                    return;
                }

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
                                "Order item insert error:",
                                itemErr
                            );

                            if (!responseSent) {
                                responseSent = true;

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
                            `✅ Order item added (${completed}/${items.length})`
                        );

                        if (
                            completed === items.length &&
                            !responseSent
                        ) {
                            responseSent = true;

                            console.log(
                                "✅ All order items added successfully"
                            );

                            return res.status(201).json({
                                message:
                                    "Order created successfully",
                                orderId: orderId
                            });
                        }
                    }
                );
            });
        }
    );
};


// ===============================
// GET CUSTOMER ORDERS
// ===============================
const getOrders = (req, res) => {

    const customerId = req.user.id;

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
                    "Get orders error:",
                    err
                );

                return res.status(500).json({
                    message: "Failed to get orders",
                    error: err.message
                });
            }

            console.log(
                "✅ Customer orders:",
                results
            );

            res.json({
                message:
                    "Orders retrieved successfully",
                orders: results
            });
        }
    );
};


// ===============================
// GET SINGLE ORDER WITH ITEMS
// ===============================
const getOrderById = (req, res) => {

    const customerId = req.user.id;
    const orderId = req.params.id;

    // ===============================
    // GET ORDER
    // ===============================
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
                    "Get order error:",
                    err
                );

                return res.status(500).json({
                    message: "Failed to get order",
                    error: err.message
                });
            }

            // Order doesn't exist
            if (orderResults.length === 0) {
                return res.status(404).json({
                    message: "Order not found"
                });
            }

            // ===============================
            // GET ORDER ITEMS + PRODUCT DATA
            // ===============================
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
                            "Get order items error:",
                            itemErr
                        );

                        return res.status(500).json({
                            message:
                                "Failed to get order items",
                            error: itemErr.message
                        });
                    }

                    console.log(
                        "🔥 ORDER:",
                        orderResults[0]
                    );

                    console.log(
                        "🔥 ORDER ITEMS:",
                        itemResults
                    );

                    // ===============================
                    // RETURN ORDER + ITEMS
                    // ===============================
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


// ===============================
// EXPORT CONTROLLERS
// ===============================
module.exports = {
    createOrder,
    getOrders,
    getOrderById
};