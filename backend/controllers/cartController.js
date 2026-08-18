const db = require("../config/db");

// =====================================================
// GET CART
// =====================================================

const getCart = (req, res) => {

    const customerId = req.user.id;

    console.log(
        "🛒 GET CART FOR CUSTOMER:",
        customerId
    );

    const sql = `
        SELECT
            ci.id,
            ci.customer_id,
            ci.product_id,
            ci.quantity,
            p.name,
            p.brand,
            p.category,
            p.price,
            p.image,
            p.description,
            p.stock
        FROM cart_items ci
        INNER JOIN products p
            ON ci.product_id = p.id
        WHERE ci.customer_id = ?
        ORDER BY ci.id DESC
    `;

    db.query(
        sql,
        [customerId],
        (err, results) => {

            if (err) {

                console.error(
                    "❌ Get cart error:",
                    err
                );

                return res.status(500).json({
                    message: "Failed to get cart",
                    error: err.message
                });
            }

            console.log(
                "✅ Cart retrieved:",
                results
            );

            return res.json({
                message: "Cart retrieved successfully",
                cart: results
            });
        }
    );
};


// =====================================================
// ADD TO CART
// =====================================================

const addToCart = (req, res) => {

    const customerId = req.user.id;

    const {
        product_id,
        quantity
    } = req.body;

    const productId = Number(product_id);
    const itemQuantity = Number(quantity || 1);

    console.log(
        "🛒 ADD TO CART:",
        {
            customerId,
            productId,
            itemQuantity
        }
    );

    // -------------------------------------------------
    // VALIDATION
    // -------------------------------------------------

    if (
        !Number.isInteger(productId) ||
        productId <= 0
    ) {

        return res.status(400).json({
            message: "Valid product ID is required"
        });
    }

    if (
        !Number.isInteger(itemQuantity) ||
        itemQuantity <= 0
    ) {

        return res.status(400).json({
            message: "Valid quantity is required"
        });
    }

    // -------------------------------------------------
    // CHECK PRODUCT
    // -------------------------------------------------

    const productSql = `
        SELECT
            id,
            stock
        FROM products
        WHERE id = ?
    `;

    db.query(
        productSql,
        [productId],
        (productErr, productResults) => {

            if (productErr) {

                console.error(
                    "❌ Product check error:",
                    productErr
                );

                return res.status(500).json({
                    message: "Database error",
                    error: productErr.message
                });
            }

            if (productResults.length === 0) {

                return res.status(404).json({
                    message: "Product not found"
                });
            }

            const product =
                productResults[0];

            // -------------------------------------------------
            // CHECK STOCK
            // -------------------------------------------------

            if (
                product.stock !== null &&
                itemQuantity > Number(product.stock)
            ) {

                return res.status(400).json({
                    message: "Insufficient stock"
                });
            }

            // -------------------------------------------------
            // CHECK EXISTING CART ITEM
            // -------------------------------------------------

            const existingSql = `
                SELECT
                    id,
                    quantity
                FROM cart_items
                WHERE customer_id = ?
                AND product_id = ?
            `;

            db.query(
                existingSql,
                [
                    customerId,
                    productId
                ],
                (existingErr, existingResults) => {

                    if (existingErr) {

                        console.error(
                            "❌ Existing cart check error:",
                            existingErr
                        );

                        return res.status(500).json({
                            message: "Database error",
                            error: existingErr.message
                        });
                    }

                    // -------------------------------------------------
                    // EXISTING ITEM → INCREASE QUANTITY
                    // -------------------------------------------------

                    if (existingResults.length > 0) {

                        const cartItem =
                            existingResults[0];

                        const newQuantity =
                            Number(cartItem.quantity) +
                            itemQuantity;

                        if (
                            product.stock !== null &&
                            newQuantity > Number(product.stock)
                        ) {

                            return res.status(400).json({
                                message:
                                    "Requested quantity exceeds available stock"
                            });
                        }

                        const updateSql = `
                            UPDATE cart_items
                            SET quantity = ?
                            WHERE id = ?
                        `;

                        db.query(
                            updateSql,
                            [
                                newQuantity,
                                cartItem.id
                            ],
                            (updateErr) => {

                                if (updateErr) {

                                    console.error(
                                        "❌ Cart update error:",
                                        updateErr
                                    );

                                    return res.status(500).json({
                                        message:
                                            "Failed to update cart",
                                        error:
                                            updateErr.message
                                    });
                                }

                                return res.json({
                                    message:
                                        "Cart updated successfully",

                                    cartItemId:
                                        cartItem.id,

                                    quantity:
                                        newQuantity
                                });
                            }
                        );

                        return;
                    }

                    // -------------------------------------------------
                    // NEW ITEM
                    // -------------------------------------------------

                    const insertSql = `
                        INSERT INTO cart_items
                        (
                            customer_id,
                            product_id,
                            quantity
                        )
                        VALUES (?, ?, ?)
                    `;

                    db.query(
                        insertSql,
                        [
                            customerId,
                            productId,
                            itemQuantity
                        ],
                        (insertErr, result) => {

                            if (insertErr) {

                                console.error(
                                    "❌ Add cart item error:",
                                    insertErr
                                );

                                return res.status(500).json({
                                    message:
                                        "Failed to add item to cart",
                                    error:
                                        insertErr.message
                                });
                            }

                            return res.status(201).json({
                                message:
                                    "Product added to cart successfully",

                                cartItemId:
                                    result.insertId,

                                quantity:
                                    itemQuantity
                            });
                        }
                    );
                }
            );
        }
    );
};


// =====================================================
// UPDATE CART ITEM QUANTITY
// =====================================================

const updateCartItem = (req, res) => {

    const customerId = req.user.id;
    const cartItemId = req.params.id;

    const {
        quantity
    } = req.body;

    const newQuantity = Number(quantity);

    if (
        !Number.isInteger(newQuantity) ||
        newQuantity <= 0
    ) {

        return res.status(400).json({
            message: "Valid quantity is required"
        });
    }

    const sql = `
        UPDATE cart_items
        SET quantity = ?
        WHERE id = ?
        AND customer_id = ?
    `;

    db.query(
        sql,
        [
            newQuantity,
            cartItemId,
            customerId
        ],
        (err, result) => {

            if (err) {

                console.error(
                    "❌ Update cart error:",
                    err
                );

                return res.status(500).json({
                    message:
                        "Failed to update cart",
                    error:
                        err.message
                });
            }

            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({
                    message:
                        "Cart item not found"
                });
            }

            return res.json({
                message:
                    "Cart item updated successfully",
                quantity:
                    newQuantity
            });
        }
    );
};


// =====================================================
// REMOVE CART ITEM
// =====================================================

const removeFromCart = (req, res) => {

    const customerId = req.user.id;
    const cartItemId = req.params.id;

    const sql = `
        DELETE FROM cart_items
        WHERE id = ?
        AND customer_id = ?
    `;

    db.query(
        sql,
        [
            cartItemId,
            customerId
        ],
        (err, result) => {

            if (err) {

                console.error(
                    "❌ Remove cart item error:",
                    err
                );

                return res.status(500).json({
                    message:
                        "Failed to remove cart item",
                    error:
                        err.message
                });
            }

            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({
                    message:
                        "Cart item not found"
                });
            }

            return res.json({
                message:
                    "Cart item removed successfully"
            });
        }
    );
};


// =====================================================
// CLEAR CART
// =====================================================

const clearCart = (req, res) => {

    const customerId = req.user.id;

    const sql = `
        DELETE FROM cart_items
        WHERE customer_id = ?
    `;

    db.query(
        sql,
        [customerId],
        (err) => {

            if (err) {

                console.error(
                    "❌ Clear cart error:",
                    err
                );

                return res.status(500).json({
                    message:
                        "Failed to clear cart",
                    error:
                        err.message
                });
            }

            return res.json({
                message:
                    "Cart cleared successfully"
            });
        }
    );
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
};