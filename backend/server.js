const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");
require("dotenv").config();

const db = require("./config/db");

const app = express();

// ===============================
// Middleware
// ===============================
app.use(cors());
app.use(express.json());


// ===============================
// HOME ROUTE
// ===============================
app.get("/", (req, res) => {
    res.send("GlowNest Backend is Running 🚀");
});


// ===============================
// GET ALL PRODUCTS
// ===============================
app.get("/products", (req, res) => {

    db.query("SELECT * FROM products", (err, results) => {

        if (err) {
            console.error("Get products error:", err);

            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        res.json(results);
    });
});


// ===============================
// ADD NEW PRODUCT
// ===============================
app.post("/products", (req, res) => {

    const {
        name,
        brand,
        category,
        price,
        image,
        description,
        stock
    } = req.body;

    const sql = `
        INSERT INTO products
        (name, brand, category, price, image, description, stock)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            name,
            brand,
            category,
            price,
            image,
            description,
            stock
        ],
        (err, result) => {

            if (err) {
                console.error("Add product error:", err);

                return res.status(500).json({
                    message: "Failed to add product",
                    error: err.message
                });
            }

            res.status(201).json({
                message: "Product added successfully",
                productId: result.insertId
            });
        }
    );
});


// ===============================
// UPDATE PRODUCT
// ===============================
app.put("/products/:id", (req, res) => {

    const { id } = req.params;

    const {
        name,
        brand,
        category,
        price,
        image,
        description,
        stock
    } = req.body;

    const sql = `
        UPDATE products
        SET
            name = ?,
            brand = ?,
            category = ?,
            price = ?,
            image = ?,
            description = ?,
            stock = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            name,
            brand,
            category,
            price,
            image,
            description,
            stock,
            id
        ],
        (err, result) => {

            if (err) {
                console.error("Update product error:", err);

                return res.status(500).json({
                    message: "Failed to update product",
                    error: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            res.json({
                message: "Product updated successfully"
            });
        }
    );
});


// ===============================
// DELETE PRODUCT
// ===============================
app.delete("/products/:id", (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM products WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            console.error("Delete product error:", err);

            return res.status(500).json({
                message: "Failed to delete product",
                error: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json({
            message: "Product deleted successfully"
        });
    });
});


// ===============================
// CUSTOMER REGISTRATION
// ===============================
app.post("/customers/register", (req, res) => {

    const {
        name,
        email,
        phone,
        password,
        address,
        city,
        state,
        pincode
    } = req.body;


    // Check required fields
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Name, email and password are required"
        });
    }


    // Check whether email already exists
    const checkEmailSql = `
        SELECT id
        FROM customers
        WHERE email = ?
    `;

    db.query(checkEmailSql, [email], (err, results) => {

        if (err) {
            console.error("Email check error:", err);

            return res.status(500).json({
                message: "Database error",
                error: err.message
            });
        }


        // Email already exists
        if (results.length > 0) {

            return res.status(409).json({
                message: "Email already registered"
            });
        }


        // Hash password
        bcrypt.hash(password, 10, (err, hashedPassword) => {

            if (err) {
                console.error("Password hashing error:", err);

                return res.status(500).json({
                    message: "Password hashing failed",
                    error: err.message
                });
            }


            // Insert customer
            const sql = `
                INSERT INTO customers
                (
                    name,
                    email,
                    phone,
                    password,
                    address,
                    city,
                    state,
                    pincode
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;

            db.query(
                sql,
                [
                    name,
                    email,
                    phone,
                    hashedPassword,
                    address,
                    city,
                    state,
                    pincode
                ],
                (err, result) => {

                    if (err) {
                        console.error(
                            "Customer registration error:",
                            err
                        );

                        return res.status(500).json({
                            message: "Failed to register customer",
                            error: err.message
                        });
                    }


                    res.status(201).json({
                        message: "Customer registered successfully",
                        customerId: result.insertId
                    });

                }
            );
        });
    });
});
// ===============================
// CUSTOMER LOGIN
// ===============================
app.post("/customers/login", (req, res) => {

    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    // Find customer by email
    const sql = `
        SELECT *
        FROM customers
        WHERE email = ?
    `;

    db.query(sql, [email], (err, results) => {

        if (err) {
            console.error("Login database error:", err);

            return res.status(500).json({
                message: "Database error",
                error: err.message
            });
        }

        // Customer not found
        if (results.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const customer = results[0];

        // Compare entered password with hashed password
        bcrypt.compare(
            password,
            customer.password,
            (err, isMatch) => {

                if (err) {
                    console.error("Password comparison error:", err);

                    return res.status(500).json({
                        message: "Password comparison failed"
                    });
                }

                // Wrong password
                if (!isMatch) {
                    return res.status(401).json({
                        message: "Invalid email or password"
                    });
                }

                // Create JWT token
                const token = jwt.sign(
                    {
                        id: customer.id,
                        email: customer.email
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h"
                    }
                );

                // Successful login
                res.json({
                    message: "Login successful",
                    token: token,
                    customer: {
                        id: customer.id,
                        name: customer.name,
                        email: customer.email,
                        phone: customer.phone
                    }
                });
            }
        );
    });
});
// ===============================
// CUSTOMER PROFILE
// Protected Route
// ===============================
app.get("/customers/profile", authMiddleware, (req, res) => {

    const customerId = req.user.id;

    const sql = `
        SELECT
            id,
            name,
            email,
            phone,
            address,
            city,
            state,
            pincode,
            created_at
        FROM customers
        WHERE id = ?
    `;

    db.query(sql, [customerId], (err, results) => {

        if (err) {
            console.error("Profile error:", err);

            return res.status(500).json({
                message: "Failed to get customer profile"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        res.json({
            message: "Profile retrieved successfully",
            customer: results[0]
        });
    });
});


// ===============================
// START SERVER
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});