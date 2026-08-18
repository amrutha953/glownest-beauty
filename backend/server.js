const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

require("dotenv").config();

// ======================================================
// GOOGLE CLIENT
// ======================================================

const googleClient = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID
);

// ======================================================
// CONFIG / DATABASE / MIDDLEWARE
// ======================================================

const db = require("./config/db");
const transporter = require("./config/mailer");

const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");

const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");
const whatsappRoutes = require("./routes/whatsappRoutes");
const instagramRoutes =require("./routes/instagramRoutes");
const app = express();

// ======================================================
// CORS
// ======================================================

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5175",
        ],
        credentials: true
    })
);

// ======================================================
// BODY PARSER
// ======================================================

app.use(express.json());

// ======================================================
// HOME
// ======================================================

app.get("/", (req, res) => {
    res.json({
        message: "GlowNest Backend is Running 🚀"
    });
});

// ======================================================
// CUSTOMER ORDERS
// ======================================================

app.use(
    "/orders",
    orderRoutes
);
app.use(
    "/cart",
    cartRoutes
);

app.use(
    "/whatsapp", 
    whatsappRoutes
);

app.use(
    "/instagram",
    instagramRoutes
);

// ======================================================
// ADMIN ORDERS
// ======================================================

app.use(
    "/admin/orders",
    adminOrderRoutes
);

// ======================================================
// PUBLIC PRODUCTS - GET ALL
// ======================================================

app.get(
    "/products",
    (req, res) => {

        const sql = `
            SELECT *
            FROM products
            ORDER BY id DESC
        `;

        db.query(
            sql,
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Get products error:",
                        err
                    );

                    return res.status(500).json({
                        message: "Database Error",
                        error: err.message
                    });
                }

                return res.json(results);
            }
        );
    }
);

// ======================================================
// PUBLIC PRODUCTS - ADD
// ======================================================

app.post(
    "/products",
    (req, res) => {

        const {
            name,
            brand,
            category,
            price,
            image,
            description,
            stock
        } = req.body;

        if (
            !name ||
            !brand ||
            !category ||
            price === undefined ||
            stock === undefined
        ) {

            return res.status(400).json({
                message:
                    "Name, brand, category, price and stock are required"
            });
        }

        const sql = `
            INSERT INTO products
            (
                name,
                brand,
                category,
                price,
                image,
                description,
                stock
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                name,
                brand,
                category,
                price,
                image || null,
                description || null,
                stock
            ],
            (err, result) => {

                if (err) {

                    console.error(
                        "❌ Add product error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to add product",
                        error:
                            err.message
                    });
                }

                return res.status(201).json({
                    message:
                        "Product added successfully",
                    productId:
                        result.insertId
                });
            }
        );
    }
);

// ======================================================
// PUBLIC PRODUCTS - UPDATE
// ======================================================

app.put(
    "/products/:id",
    (req, res) => {

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

        if (
            !name ||
            !brand ||
            !category ||
            price === undefined ||
            stock === undefined
        ) {

            return res.status(400).json({
                message:
                    "Name, brand, category, price and stock are required"
            });
        }

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
                image || null,
                description || null,
                stock,
                id
            ],
            (err, result) => {

                if (err) {

                    console.error(
                        "❌ Update product error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to update product",
                        error:
                            err.message
                    });
                }

                if (
                    result.affectedRows === 0
                ) {

                    return res.status(404).json({
                        message:
                            "Product not found"
                    });
                }

                return res.json({
                    message:
                        "Product updated successfully"
                });
            }
        );
    }
);

// ======================================================
// PUBLIC PRODUCTS - DELETE
// ======================================================

app.delete(
    "/products/:id",
    (req, res) => {

        const { id } = req.params;

        const sql = `
            DELETE FROM products
            WHERE id = ?
        `;

        db.query(
            sql,
            [id],
            (err, result) => {

                if (err) {

                    console.error(
                        "❌ Delete product error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to delete product",
                        error:
                            err.message
                    });
                }

                if (
                    result.affectedRows === 0
                ) {

                    return res.status(404).json({
                        message:
                            "Product not found"
                    });
                }

                return res.json({
                    message:
                        "Product deleted successfully"
                });
            }
        );
    }
);

// ======================================================
// CUSTOMER REGISTRATION
// ======================================================

app.post(
    "/customers/register",
    (req, res) => {

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

        if (
            !name ||
            !email ||
            !password
        ) {

            return res.status(400).json({
                message:
                    "Name, email and password are required"
            });
        }

        const checkEmailSql = `
            SELECT id
            FROM customers
            WHERE email = ?
        `;

        db.query(
            checkEmailSql,
            [email],
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Email check error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Database error",
                        error:
                            err.message
                    });
                }

                if (
                    results.length > 0
                ) {

                    return res.status(409).json({
                        message:
                            "Email already registered"
                    });
                }

                bcrypt.hash(
                    password,
                    10,
                    (hashErr, hashedPassword) => {

                        if (hashErr) {

                            console.error(
                                "❌ Password hashing error:",
                                hashErr
                            );

                            return res.status(500).json({
                                message:
                                    "Password hashing failed",
                                error:
                                    hashErr.message
                            });
                        }

                        const verificationToken =
                            crypto
                                .randomBytes(32)
                                .toString("hex");

                        const verificationExpires =
                            new Date(
                                Date.now() +
                                24 * 60 * 60 * 1000
                            );

                        const insertSql = `
                            INSERT INTO customers
                            (
                                name,
                                email,
                                phone,
                                password,
                                address,
                                city,
                                state,
                                pincode,
                                email_verified,
                                verification_token,
                                verification_expires
                            )
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?)
                        `;

                        db.query(
                            insertSql,
                            [
                                name,
                                email,
                                phone || null,
                                hashedPassword,
                                address || null,
                                city || null,
                                state || null,
                                pincode || null,
                                verificationToken,
                                verificationExpires
                            ],
                            async (
                                insertErr,
                                result
                            ) => {

                                if (insertErr) {

                                    console.error(
                                        "❌ Customer registration error:",
                                        insertErr
                                    );

                                    return res.status(500).json({
                                        message:
                                            "Failed to register customer",
                                        error:
                                            insertErr.message
                                    });
                                }

                                const customerId =
                                    result.insertId;

                                const verificationLink =
                                    `http://localhost:5000/customers/verify-email/${verificationToken}`;

                                try {

                                    await transporter.sendMail({

                                        from:
                                            `"GlowNest Beauty" <${process.env.EMAIL_USER}>`,

                                        to:
                                            email,

                                        subject:
                                            "Verify your GlowNest Beauty account 💗",

                                        html: `
                                            <div style="
                                                font-family: Arial, sans-serif;
                                                max-width: 600px;
                                                margin: auto;
                                                padding: 30px;
                                                border: 1px solid #eee;
                                                border-radius: 10px;
                                            ">

                                                <h2 style="
                                                    color: #e91e63;
                                                    text-align: center;
                                                ">
                                                    Welcome to GlowNest Beauty 💗
                                                </h2>

                                                <p>
                                                    Hi
                                                    <strong>${name}</strong>,
                                                </p>

                                                <p>
                                                    Thank you for registering
                                                    with GlowNest Beauty.
                                                </p>

                                                <p>
                                                    Please verify your email
                                                    address.
                                                </p>

                                                <div style="
                                                    text-align: center;
                                                    margin: 30px 0;
                                                ">

                                                    <a
                                                        href="${verificationLink}"
                                                        style="
                                                            background:#e91e63;
                                                            color:white;
                                                            padding:12px 25px;
                                                            text-decoration:none;
                                                            border-radius:6px;
                                                            font-weight:bold;
                                                        "
                                                    >
                                                        Verify My Email
                                                    </a>

                                                </div>

                                                <p>
                                                    This link will expire
                                                    in 24 hours.
                                                </p>

                                                <p>
                                                    Regards,<br>
                                                    <strong>
                                                        GlowNest Beauty Team
                                                    </strong>
                                                </p>

                                            </div>
                                        `
                                    });

                                    console.log(
                                        `✅ Verification email sent to ${email}`
                                    );

                                    return res.status(201).json({

                                        message:
                                            "Registration successful. Please check your email to verify your account.",

                                        customerId:
                                            customerId
                                    });

                                } catch (emailError) {

                                    console.error(
                                        "❌ Verification email error:",
                                        emailError
                                    );

                                    return res.status(500).json({

                                        message:
                                            "Account created, but verification email could not be sent.",

                                        error:
                                            emailError.message
                                    });
                                }
                            }
                        );
                    }
                );
            }
        );
    }
);

// ======================================================
// VERIFY CUSTOMER EMAIL
// ======================================================

app.get(
    "/customers/verify-email/:token",
    (req, res) => {

        const { token } =
            req.params;

        if (!token) {

            return res.status(400).send(
                "Verification token is required."
            );
        }

        const sql = `
            SELECT
                id,
                name,
                email,
                email_verified,
                verification_expires
            FROM customers
            WHERE verification_token = ?
        `;

        db.query(
            sql,
            [token],
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Email verification error:",
                        err
                    );

                    return res.status(500).send(
                        "Database error while verifying email."
                    );
                }

                if (
                    results.length === 0
                ) {

                    return res.status(400).send(`
                        <div style="
                            font-family:Arial;
                            text-align:center;
                            margin-top:80px;
                        ">

                            <h2 style="color:#e91e63;">
                                Invalid or expired verification link
                            </h2>

                            <p>
                                Please register again.
                            </p>

                        </div>
                    `);
                }

                const customer =
                    results[0];

                if (
                    Number(
                        customer.email_verified
                    ) === 1
                ) {

                    return res.send(`
                        <div style="
                            font-family:Arial;
                            text-align:center;
                            margin-top:80px;
                        ">

                            <h2 style="color:#e91e63;">
                                Your email is already verified 💗
                            </h2>

                        </div>
                    `);
                }

                if (
                    !customer.verification_expires ||
                    new Date(
                        customer.verification_expires
                    ) < new Date()
                ) {

                    return res.status(400).send(`
                        <div style="
                            font-family:Arial;
                            text-align:center;
                            margin-top:80px;
                        ">

                            <h2 style="color:#e91e63;">
                                Verification link expired
                            </h2>

                        </div>
                    `);
                }

                const updateSql = `
                    UPDATE customers
                    SET
                        email_verified = 1,
                        verification_token = NULL,
                        verification_expires = NULL
                    WHERE id = ?
                `;

                db.query(
                    updateSql,
                    [customer.id],
                    (updateErr) => {

                        if (updateErr) {

                            console.error(
                                "❌ Email verification update error:",
                                updateErr
                            );

                            return res.status(500).send(
                                "Failed to verify email."
                            );
                        }

                        return res.send(`
                            <div style="
                                font-family:Arial;
                                max-width:600px;
                                margin:80px auto;
                                text-align:center;
                                padding:30px;
                            ">

                                <h1 style="color:#e91e63;">
                                    Email Verified Successfully! 🎉
                                </h1>

                                <p>
                                    Welcome to GlowNest Beauty,
                                    <strong>
                                        ${customer.name}
                                    </strong>
                                </p>

                                <p>
                                    Your email address has been
                                    successfully verified.
                                </p>

                            </div>
                        `);
                    }
                );
            }
        );
    }
);

// ======================================================
// CREATE ADMIN
// ======================================================

app.post(
    "/admins/create",
    async (req, res) => {

        try {

            const {
                name,
                email,
                password
            } = req.body;

            if (
                !name ||
                !email ||
                !password
            ) {

                return res.status(400).json({
                    message:
                        "Name, email and password are required"
                });
            }

            const checkSql = `
                SELECT id
                FROM admins
                WHERE email = ?
            `;

            db.query(
                checkSql,
                [email],
                async (err, results) => {

                    if (err) {

                        console.error(
                            "❌ Admin check error:",
                            err
                        );

                        return res.status(500).json({
                            message:
                                "Database error",
                            error:
                                err.message
                        });
                    }

                    if (
                        results.length > 0
                    ) {

                        return res.status(409).json({
                            message:
                                "Admin email already exists"
                        });
                    }

                    const hashedPassword =
                        await bcrypt.hash(
                            password,
                            10
                        );

                    const insertSql = `
                        INSERT INTO admins
                        (
                            name,
                            email,
                            password
                        )
                        VALUES (?, ?, ?)
                    `;

                    db.query(
                        insertSql,
                        [
                            name,
                            email,
                            hashedPassword
                        ],
                        (insertErr, result) => {

                            if (insertErr) {

                                console.error(
                                    "❌ Admin creation error:",
                                    insertErr
                                );

                                return res.status(500).json({
                                    message:
                                        "Failed to create admin",
                                    error:
                                        insertErr.message
                                });
                            }

                            return res.status(201).json({

                                message:
                                    "Admin created successfully",

                                adminId:
                                    result.insertId
                            });
                        }
                    );
                }
            );

        } catch (error) {

            console.error(
                "❌ Create admin error:",
                error
            );

            return res.status(500).json({
                message:
                    "Server error"
            });
        }
    }
);

// ======================================================
// ADMIN LOGIN
// ======================================================

app.post(
    "/admins/login",
    (req, res) => {

        const {
            email,
            password
        } = req.body;

        if (
            !email ||
            !password
        ) {

            return res.status(400).json({
                message:
                    "Email and password are required"
            });
        }

        const sql = `
            SELECT *
            FROM admins
            WHERE email = ?
        `;

        db.query(
            sql,
            [email],
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Admin login error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Database error",
                        error:
                            err.message
                    });
                }

                if (
                    results.length === 0
                ) {

                    return res.status(401).json({
                        message:
                            "Invalid admin email or password"
                    });
                }

                const admin =
                    results[0];

                bcrypt.compare(
                    password,
                    admin.password,
                    (compareErr, isMatch) => {

                        if (compareErr) {

                            return res.status(500).json({
                                message:
                                    "Password comparison failed"
                            });
                        }

                        if (!isMatch) {

                            return res.status(401).json({
                                message:
                                    "Invalid admin email or password"
                            });
                        }

                        const token =
                            jwt.sign(
                                {
                                    id:
                                        admin.id,

                                    email:
                                        admin.email,

                                    role:
                                        "admin"
                                },
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:
                                        "1h"
                                }
                            );

                        return res.json({

                            message:
                                "Admin login successful",

                            token:
                                token,

                            admin: {
                                id:
                                    admin.id,

                                name:
                                    admin.name,

                                email:
                                    admin.email,

                                role:
                                    "admin"
                            }
                        });
                    }
                );
            }
        );
    }
);

// ======================================================
// ADMIN PRODUCTS - GET
// ======================================================

app.get(
    "/admin/products",
    adminMiddleware,
    (req, res) => {

        const sql = `
            SELECT *
            FROM products
            ORDER BY id DESC
        `;

        db.query(
            sql,
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Admin get products error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to get products",
                        error:
                            err.message
                    });
                }

                return res.json({

                    message:
                        "Admin products retrieved successfully",

                    products:
                        results
                });
            }
        );
    }
);

// ======================================================
// ADMIN PRODUCTS - ADD
// ======================================================

app.post(
    "/admin/products",
    adminMiddleware,
    (req, res) => {

        const {
            name,
            brand,
            category,
            price,
            image,
            description,
            stock
        } = req.body;

        if (
            !name ||
            !brand ||
            !category ||
            price === undefined ||
            stock === undefined
        ) {

            return res.status(400).json({
                message:
                    "Name, brand, category, price and stock are required"
            });
        }

        const sql = `
            INSERT INTO products
            (
                name,
                brand,
                category,
                price,
                image,
                description,
                stock
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                name,
                brand,
                category,
                price,
                image || null,
                description || null,
                stock
            ],
            (err, result) => {

                if (err) {

                    console.error(
                        "❌ Admin add product error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to add product",
                        error:
                            err.message
                    });
                }

                return res.status(201).json({

                    message:
                        "Product added successfully",

                    productId:
                        result.insertId
                });
            }
        );
    }
);

// ======================================================
// ADMIN PRODUCTS - UPDATE
// ======================================================

app.put(
    "/admin/products/:id",
    adminMiddleware,
    (req, res) => {

        const { id } =
            req.params;

        const {
            name,
            brand,
            category,
            price,
            image,
            description,
            stock
        } = req.body;

        if (
            !name ||
            !brand ||
            !category ||
            price === undefined ||
            stock === undefined
        ) {

            return res.status(400).json({
                message:
                    "Name, brand, category, price and stock are required"
            });
        }

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
                image || null,
                description || null,
                stock,
                id
            ],
            (err, result) => {

                if (err) {

                    console.error(
                        "❌ Admin update product error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to update product",
                        error:
                            err.message
                    });
                }

                if (
                    result.affectedRows === 0
                ) {

                    return res.status(404).json({
                        message:
                            "Product not found"
                    });
                }

                return res.json({
                    message:
                        "Product updated successfully"
                });
            }
        );
    }
);

// ======================================================
// ADMIN PRODUCTS - DELETE
// ======================================================

app.delete(
    "/admin/products/:id",
    adminMiddleware,
    (req, res) => {

        const { id } =
            req.params;

        const sql = `
            DELETE FROM products
            WHERE id = ?
        `;

        db.query(
            sql,
            [id],
            (err, result) => {

                if (err) {

                    console.error(
                        "❌ Admin delete product error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to delete product",
                        error:
                            err.message
                    });
                }

                if (
                    result.affectedRows === 0
                ) {

                    return res.status(404).json({
                        message:
                            "Product not found"
                    });
                }

                return res.json({
                    message:
                        "Product deleted successfully"
                });
            }
        );
    }
);

// ======================================================
// ADMIN DASHBOARD - STATISTICS
// ======================================================

app.get(
    "/admin/dashboard/stats",
    adminMiddleware,
    (req, res) => {

        console.log("📊 ADMIN DASHBOARD STATS");

        const productsSql = `
            SELECT COUNT(*) AS total
            FROM products
        `;

        const ordersSql = `
            SELECT
                COUNT(*) AS total,
                COALESCE(SUM(total_amount), 0) AS revenue
            FROM orders
        `;

        const customersSql = `
            SELECT COUNT(*) AS total
            FROM customers
        `;

        db.query(
            productsSql,
            (productsErr, productsResult) => {

                if (productsErr) {

                    console.error(
                        "❌ Dashboard products error:",
                        productsErr
                    );

                    return res.status(500).json({
                        message:
                            "Failed to get product statistics",
                        error:
                            productsErr.message
                    });
                }

                db.query(
                    ordersSql,
                    (ordersErr, ordersResult) => {

                        if (ordersErr) {

                            console.error(
                                "❌ Dashboard orders error:",
                                ordersErr
                            );

                            return res.status(500).json({
                                message:
                                    "Failed to get order statistics",
                                error:
                                    ordersErr.message
                            });
                        }

                        db.query(
                            customersSql,
                            (
                                customersErr,
                                customersResult
                            ) => {

                                if (customersErr) {

                                    console.error(
                                        "❌ Dashboard customers error:",
                                        customersErr
                                    );

                                    return res.status(500).json({
                                        message:
                                            "Failed to get customer statistics",
                                        error:
                                            customersErr.message
                                    });
                                }

                                const stats = {

                                    products:
                                        Number(
                                            productsResult[0].total
                                        ),

                                    orders:
                                        Number(
                                            ordersResult[0].total
                                        ),

                                    customers:
                                        Number(
                                            customersResult[0].total
                                        ),

                                    revenue:
                                        Number(
                                            ordersResult[0].revenue
                                        )

                                };

                                console.log(
                                    "✅ Dashboard stats:",
                                    stats
                                );

                                return res.json({

                                    message:
                                        "Dashboard statistics retrieved successfully",

                                    stats

                                });

                            }
                        );

                    }
                );

            }
        );

    }
);

// ======================================================
// CUSTOMER LOGIN
// ======================================================

app.post(
    "/customers/login",
    (req, res) => {

        const {
            email,
            password
        } = req.body;

        if (
            !email ||
            !password
        ) {

            return res.status(400).json({
                message:
                    "Email and password are required"
            });
        }

        const sql = `
            SELECT *
            FROM customers
            WHERE email = ?
        `;

        db.query(
            sql,
            [email],
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Login database error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Database error",
                        error:
                            err.message
                    });
                }

                if (
                    results.length === 0
                ) {

                    return res.status(401).json({
                        message:
                            "Invalid email or password"
                    });
                }

                const customer =
                    results[0];

                if (
                    Number(
                        customer.email_verified
                    ) !== 1
                ) {

                    return res.status(403).json({
                        message:
                            "Please verify your email before logging in."
                    });
                }

                bcrypt.compare(
                    password,
                    customer.password,
                    (compareErr, isMatch) => {

                        if (compareErr) {

                            return res.status(500).json({
                                message:
                                    "Password comparison failed"
                            });
                        }

                        if (!isMatch) {

                            return res.status(401).json({
                                message:
                                    "Invalid email or password"
                            });
                        }

                        const token =
                            jwt.sign(
                                {
                                    id:
                                        customer.id,

                                    email:
                                        customer.email
                                },
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:
                                        "1h"
                                }
                            );

                        return res.json({

                            message:
                                "Login successful",

                            token:
                                token,

                            customer: {
                                id:
                                    customer.id,

                                name:
                                    customer.name,

                                email:
                                    customer.email,

                                phone:
                                    customer.phone
                            }
                        });
                    }
                );
            }
        );
    }
);

// ======================================================
// GOOGLE LOGIN
// ======================================================

app.post(
    "/customers/google-login",
    async (req, res) => {

        try {

            const {
                credential
            } = req.body;

            if (!credential) {

                return res.status(400).json({
                    message:
                        "Google credential is required"
                });
            }

            const ticket =
                await googleClient.verifyIdToken({
                    idToken:
                        credential,

                    audience:
                        process.env.GOOGLE_CLIENT_ID
                });

            const payload =
                ticket.getPayload();

            const email =
                payload.email;

            const name =
                payload.name;

            const findCustomerSql = `
                SELECT *
                FROM customers
                WHERE email = ?
            `;

            db.query(
                findCustomerSql,
                [email],
                async (
                    err,
                    results
                ) => {

                    if (err) {

                        console.error(
                            "❌ Google login database error:",
                            err
                        );

                        return res.status(500).json({
                            message:
                                "Database error",
                            error:
                                err.message
                        });
                    }

                    // EXISTING CUSTOMER

                    if (
                        results.length > 0
                    ) {

                        const customer =
                            results[0];

                        const token =
                            jwt.sign(
                                {
                                    id:
                                        customer.id,

                                    email:
                                        customer.email
                                },
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:
                                        "1h"
                                }
                            );

                        return res.json({

                            message:
                                "Google login successful",

                            token:
                                token,

                            customer: {
                                id:
                                    customer.id,

                                name:
                                    customer.name,

                                email:
                                    customer.email,

                                phone:
                                    customer.phone
                            }
                        });
                    }

                    // NEW GOOGLE CUSTOMER

                    const randomPassword =
                        crypto
                            .randomBytes(32)
                            .toString("hex");

                    const hashedPassword =
                        await bcrypt.hash(
                            randomPassword,
                            10
                        );

                    const insertSql = `
                        INSERT INTO customers
                        (
                            name,
                            email,
                            password,
                            email_verified
                        )
                        VALUES (?, ?, ?, 1)
                    `;

                    db.query(
                        insertSql,
                        [
                            name ||
                                "Google User",

                            email,

                            hashedPassword
                        ],
                        (
                            insertErr,
                            result
                        ) => {

                            if (insertErr) {

                                console.error(
                                    "❌ Google customer creation error:",
                                    insertErr
                                );

                                return res.status(500).json({
                                    message:
                                        "Failed to create Google customer",
                                    error:
                                        insertErr.message
                                });
                            }

                            const customerId =
                                result.insertId;

                            const token =
                                jwt.sign(
                                    {
                                        id:
                                            customerId,

                                        email:
                                            email
                                    },
                                    process.env.JWT_SECRET,
                                    {
                                        expiresIn:
                                            "1h"
                                    }
                                );

                            return res.status(201).json({

                                message:
                                    "Google account created successfully",

                                token:
                                    token,

                                customer: {
                                    id:
                                        customerId,

                                    name:
                                        name ||
                                        "Google User",

                                    email:
                                        email,

                                    phone:
                                        null
                                }
                            });
                        }
                    );
                }
            );

        } catch (error) {

            console.error(
                "❌ Google authentication error:",
                error
            );

            return res.status(401).json({
                message:
                    "Invalid Google credential",
                error:
                    error.message
            });
        }
    }
);

// ======================================================
// CUSTOMER PROFILE - GET
// ======================================================

app.get(
    "/customers/profile",
    authMiddleware,
    (req, res) => {

        const customerId =
            req.user.id;

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
                created_at,
                email_verified
            FROM customers
            WHERE id = ?
        `;

        db.query(
            sql,
            [customerId],
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Profile error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to get customer profile",
                        error:
                            err.message
                    });
                }

                if (
                    results.length === 0
                ) {

                    return res.status(404).json({
                        message:
                            "Customer not found"
                    });
                }

                return res.json({

                    message:
                        "Profile retrieved successfully",

                    customer:
                        results[0]
                });
            }
        );
    }
);

// ======================================================
// CUSTOMER PROFILE - UPDATE
// ======================================================

app.put(
    "/customers/profile",
    authMiddleware,
    (req, res) => {

        const customerId =
            req.user.id;

        const {
            name,
            phone,
            address,
            city,
            state,
            pincode
        } = req.body;

        if (!name) {

            return res.status(400).json({
                message:
                    "Name is required"
            });
        }

        const sql = `
            UPDATE customers
            SET
                name = ?,
                phone = ?,
                address = ?,
                city = ?,
                state = ?,
                pincode = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                name,
                phone || null,
                address || null,
                city || null,
                state || null,
                pincode || null,
                customerId
            ],
            (err, result) => {

                if (err) {

                    console.error(
                        "❌ Update profile error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to update profile",
                        error:
                            err.message
                    });
                }

                if (
                    result.affectedRows === 0
                ) {

                    return res.status(404).json({
                        message:
                            "Customer not found"
                    });
                }

                return res.json({
                    message:
                        "Profile updated successfully"
                });
            }
        );
    }
);

// ======================================================
// FORGOT PASSWORD
// ======================================================

app.post(
    "/customers/forgot-password",
    (req, res) => {

        const {
            email
        } = req.body;

        if (!email) {

            return res.status(400).json({
                message:
                    "Email is required"
            });
        }

        const sql = `
            SELECT
                id,
                name,
                email
            FROM customers
            WHERE email = ?
        `;

        db.query(
            sql,
            [email],
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Forgot password error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Database error"
                    });
                }

                if (
                    results.length === 0
                ) {

                    return res.json({
                        message:
                            "If the email exists, a password reset link has been sent."
                    });
                }

                const customer =
                    results[0];

                const resetToken =
                    crypto
                        .randomBytes(32)
                        .toString("hex");

                const resetExpires =
                    new Date(
                        Date.now() +
                        15 * 60 * 1000
                    );

                const updateSql = `
                    UPDATE customers
                    SET
                        reset_token = ?,
                        reset_expires = ?
                    WHERE id = ?
                `;

                db.query(
                    updateSql,
                    [
                        resetToken,
                        resetExpires,
                        customer.id
                    ],
                    async (updateErr) => {

                        if (updateErr) {

                            console.error(
                                "❌ Reset token update error:",
                                updateErr
                            );

                            return res.status(500).json({
                                message:
                                    "Failed to create reset token"
                            });
                        }

                        const resetLink =
                            `http://localhost:5173/reset-password/${resetToken}`;

                        try {

                            await transporter.sendMail({

                                from:
                                    `"GlowNest Beauty" <${process.env.EMAIL_USER}>`,

                                to:
                                    customer.email,

                                subject:
                                    "Reset your GlowNest Beauty password",

                                html: `
                                    <div style="
                                        font-family:Arial;
                                        max-width:600px;
                                        margin:auto;
                                        padding:30px;
                                    ">

                                        <h2 style="
                                            color:#e91e63;
                                            text-align:center;
                                        ">
                                            GlowNest Beauty 💗
                                        </h2>

                                        <p>
                                            Hi
                                            <strong>
                                                ${customer.name}
                                            </strong>,
                                        </p>

                                        <p>
                                            We received a request to reset
                                            your password.
                                        </p>

                                        <div style="
                                            text-align:center;
                                            margin:30px;
                                        ">

                                            <a
                                                href="${resetLink}"
                                                style="
                                                    background:#e91e63;
                                                    color:white;
                                                    padding:12px 25px;
                                                    text-decoration:none;
                                                    border-radius:6px;
                                                    font-weight:bold;
                                                "
                                            >
                                                Reset Password
                                            </a>

                                        </div>

                                        <p>
                                            This link expires in
                                            15 minutes.
                                        </p>

                                    </div>
                                `
                            });

                            console.log(
                                `✅ Password reset email sent to ${customer.email}`
                            );

                            return res.json({
                                message:
                                    "If the email exists, a password reset link has been sent."
                            });

                        } catch (emailError) {

                            console.error(
                                "❌ Password reset email error:",
                                emailError
                            );

                            return res.status(500).json({
                                message:
                                    "Failed to send password reset email",
                                error:
                                    emailError.message
                            });
                        }
                    }
                );
            }
        );
    }
);

// ======================================================
// RESET PASSWORD
// ======================================================

app.post(
    "/customers/reset-password/:token",
    (req, res) => {

        const {
            token
        } = req.params;

        const {
            password
        } = req.body;

        if (
            !token ||
            !password
        ) {

            return res.status(400).json({
                message:
                    "Token and password are required"
            });
        }

        if (
            password.length < 6
        ) {

            return res.status(400).json({
                message:
                    "Password must be at least 6 characters"
            });
        }

        const sql = `
            SELECT
                id,
                email,
                reset_token,
                reset_expires
            FROM customers
            WHERE reset_token = ?
        `;

        db.query(
            sql,
            [token],
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Reset password error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Database error",
                        error:
                            err.message
                    });
                }

                if (
                    results.length === 0
                ) {

                    return res.status(400).json({
                        message:
                            "Invalid or expired reset token"
                    });
                }

                const customer =
                    results[0];

                if (
                    !customer.reset_expires ||
                    new Date(
                        customer.reset_expires
                    ) < new Date()
                ) {

                    return res.status(400).json({
                        message:
                            "Reset token has expired"
                    });
                }

                bcrypt.hash(
                    password,
                    10,
                    (hashErr, hashedPassword) => {

                        if (hashErr) {

                            return res.status(500).json({
                                message:
                                    "Password hashing failed"
                            });
                        }

                        const updateSql = `
                            UPDATE customers
                            SET
                                password = ?,
                                reset_token = NULL,
                                reset_expires = NULL
                            WHERE id = ?
                        `;

                        db.query(
                            updateSql,
                            [
                                hashedPassword,
                                customer.id
                            ],
                            (
                                updateErr,
                                result
                            ) => {

                                if (updateErr) {

                                    console.error(
                                        "❌ Password reset update error:",
                                        updateErr
                                    );

                                    return res.status(500).json({
                                        message:
                                            "Failed to reset password",
                                        error:
                                            updateErr.message
                                    });
                                }

                                if (
                                    result.affectedRows === 0
                                ) {

                                    return res.status(404).json({
                                        message:
                                            "Customer not found"
                                    });
                                }

                                return res.json({
                                    message:
                                        "Password reset successfully"
                                });
                            }
                        );
                    }
                );
            }
        );
    }
);

// ======================================================
// ADMIN - GET ALL CUSTOMERS
// ======================================================

app.get(
    "/admin/customers",
    adminMiddleware,
    (req, res) => {

        console.log(
            "👥 ADMIN GET ALL CUSTOMERS"
        );

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
                email_verified,
                created_at
            FROM customers
            ORDER BY id DESC
        `;

        db.query(
            sql,
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Admin get customers error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to get customers",
                        error:
                            err.message
                    });
                }

                console.log(
                    "✅ Admin customers retrieved:",
                    results.length
                );

                return res.json({

                    message:
                        "Customers retrieved successfully",

                    customers:
                        results
                });
            }
        );
    }
);

// ======================================================
// ADMIN - GET ONE CUSTOMER
// ======================================================

app.get(
    "/admin/customers/:id",
    adminMiddleware,
    (req, res) => {

        const {
            id
        } = req.params;

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
                email_verified,
                created_at
            FROM customers
            WHERE id = ?
        `;

        db.query(
            sql,
            [id],
            (err, results) => {

                if (err) {

                    console.error(
                        "❌ Admin get customer error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to get customer",
                        error:
                            err.message
                    });
                }

                if (
                    results.length === 0
                ) {

                    return res.status(404).json({
                        message:
                            "Customer not found"
                    });
                }

                return res.json({

                    message:
                        "Customer retrieved successfully",

                    customer:
                        results[0]
                });
            }
        );
    }
);

// ======================================================
// ADMIN - DELETE CUSTOMER
// ======================================================

app.delete(
    "/admin/customers/:id",
    adminMiddleware,
    (req, res) => {

        const {
            id
        } = req.params;

        console.log(
            "🗑️ ADMIN DELETE CUSTOMER:",
            id
        );

        const sql = `
            DELETE FROM customers
            WHERE id = ?
        `;

        db.query(
            sql,
            [id],
            (err, result) => {

                if (err) {

                    console.error(
                        "❌ Admin delete customer error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to delete customer",
                        error:
                            err.message
                    });
                }

                if (
                    result.affectedRows === 0
                ) {

                    return res.status(404).json({
                        message:
                            "Customer not found"
                    });
                }

                console.log(
                    "✅ Customer deleted:",
                    id
                );

                return res.json({
                    message:
                        "Customer deleted successfully"
                });
            }
        );
    }
);

// ======================================================
// 404 API HANDLER
// ======================================================

app.use(
    (req, res) => {

        console.log(
            "❌ API route not found:",
            req.method,
            req.originalUrl
        );

        return res.status(404).json({
            message:
                "API route not found",
            path:
                req.originalUrl
        });
    }
);

// ======================================================
// ERROR HANDLER
// ======================================================

app.use(
    (err, req, res, next) => {

        console.error(
            "❌ SERVER ERROR:",
            err
        );

        return res.status(500).json({
            message:
                "Internal server error",
            error:
                err.message
        });
    }
);

// ======================================================
// START SERVER
// ======================================================

const PORT =
    process.env.PORT || 5000;

app.listen(
    PORT,
    () => {

        console.log(
            `🚀 Server is running on port ${PORT}`
        );

    }
);