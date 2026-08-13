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

    if (!total_amount) {
        return res.status(400).json({
            message: "Total amount is required"
        });
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({
            message: "Order items are required"
        });
    }

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

            const itemSql = `
                INSERT INTO order_items
                (order_id, product_id, quantity, price)
                VALUES (?, ?, ?, ?)
            `;

            let completed = 0;

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

                db.query(
                    itemSql,
                    [
                        orderId,
                        productId,
                        quantity,
                        price
                    ],
                    (err) => {

                        if (err) {
                            console.error(
                                "Order item insert error:",
                                err
                            );

                            return res.status(500).json({
                                message: "Order created but failed to add order items",
                                error: err.message
                            });
                        }

                        completed++;

                        if (completed === items.length) {

                            res.status(201).json({
                                message: "Order created successfully",
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
                console.error("Get orders error:", err);

                return res.status(500).json({
                    message: "Failed to get orders",
                    error: err.message
                });
            }

            res.json({
                message: "Orders retrieved successfully",
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
                console.error("Get order error:", err);

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
                JOIN products p
                    ON oi.product_id = p.id
                WHERE oi.order_id = ?
            `;

            db.query(
                itemSql,
                [orderId],
                (err, itemResults) => {

                    if (err) {
                        console.error(
                            "Get order items error:",
                            err
                        );

                        return res.status(500).json({
                            message: "Failed to get order items",
                            error: err.message
                        });
                    }

                    res.json({
                        message: "Order retrieved successfully",
                        order: orderResults[0],
                        items: itemResults
                    });
                }
            );
        }
    );
};

module.exports = {
    createOrder,
    getOrders,
    getOrderById
};