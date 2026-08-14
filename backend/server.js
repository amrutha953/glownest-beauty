const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

require("dotenv").config();
const googleClient = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID
);

const db = require("./config/db");
const transporter = require("./config/mailer");
const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");
const orderRoutes = require("./routes/orderRoutes");

const app = express();


// ======================================================
// MIDDLEWARE
// ======================================================

app.use(cors());
app.use(express.json());


// ======================================================
// ORDER ROUTES
// ======================================================

app.use("/orders", orderRoutes);


// ======================================================
// HOME ROUTE
// ======================================================

app.get("/", (req, res) => {
    res.send("GlowNest Backend is Running 🚀");
});


// ======================================================
// GET ALL PRODUCTS
// ======================================================

app.get("/products", (req, res) => {

    const sql = "SELECT * FROM products";

    db.query(sql, (err, results) => {

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


// ======================================================
// ADD NEW PRODUCT
// ======================================================

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


// ======================================================
// UPDATE PRODUCT
// ======================================================

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


// ======================================================
// DELETE PRODUCT
// ======================================================

app.delete("/products/:id", (req, res) => {

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
        }
    );
});


// ======================================================
// CUSTOMER REGISTRATION
// ======================================================

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


    // --------------------------------------------------
    // CHECK REQUIRED FIELDS
    // --------------------------------------------------

    if (!name || !email || !password) {

        return res.status(400).json({
            message: "Name, email and password are required"
        });

    }


    // --------------------------------------------------
    // CHECK IF EMAIL ALREADY EXISTS
    // --------------------------------------------------

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
                    "Email check error:",
                    err
                );

                return res.status(500).json({
                    message: "Database error",
                    error: err.message
                });

            }


            // --------------------------------------------------
            // EMAIL ALREADY EXISTS
            // --------------------------------------------------

            if (results.length > 0) {

                return res.status(409).json({
                    message: "Email already registered"
                });

            }


            // --------------------------------------------------
            // HASH PASSWORD
            // --------------------------------------------------

            bcrypt.hash(
                password,
                10,
                (err, hashedPassword) => {

                    if (err) {

                        console.error(
                            "Password hashing error:",
                            err
                        );

                        return res.status(500).json({
                            message: "Password hashing failed",
                            error: err.message
                        });

                    }


                    // --------------------------------------------------
                    // GENERATE VERIFICATION TOKEN
                    // --------------------------------------------------

                    const verificationToken =
                        crypto
                            .randomBytes(32)
                            .toString("hex");


                    // --------------------------------------------------
                    // TOKEN EXPIRES AFTER 24 HOURS
                    // --------------------------------------------------

                    const verificationExpires =
                        new Date(
                            Date.now() +
                            24 * 60 * 60 * 1000
                        );


                    // --------------------------------------------------
                    // INSERT CUSTOMER
                    // --------------------------------------------------

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
                        async (err, result) => {

                            if (err) {

                                console.error(
                                    "Customer registration error:",
                                    err
                                );

                                return res.status(500).json({
                                    message:
                                        "Failed to register customer",
                                    error: err.message
                                });

                            }


                            const customerId =
                                result.insertId;


                            // --------------------------------------------------
                            // CREATE VERIFICATION LINK
                            // --------------------------------------------------

                            const verificationLink =
                                `http://localhost:5000/customers/verify-email/${verificationToken}`;


                            // --------------------------------------------------
                            // SEND VERIFICATION EMAIL
                            // --------------------------------------------------

                            try {

                                await transporter.sendMail({

                                    from:
                                        `"GlowNest Beauty" <${process.env.EMAIL_USER}>`,

                                    to: email,

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
                                            background-color: #ffffff;
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
                                                address by clicking the
                                                button below.
                                            </p>

                                            <div style="
                                                text-align: center;
                                                margin: 30px 0;
                                            ">

                                                <a
                                                    href="${verificationLink}"
                                                    style="
                                                        background-color: #e91e63;
                                                        color: white;
                                                        padding: 12px 25px;
                                                        text-decoration: none;
                                                        border-radius: 6px;
                                                        display: inline-block;
                                                        font-weight: bold;
                                                    "
                                                >
                                                    Verify My Email
                                                </a>

                                            </div>

                                            <p>
                                                This verification link
                                                will expire in
                                                <strong>24 hours</strong>.
                                            </p>

                                            <p>
                                                If you did not create
                                                this account, you can
                                                safely ignore this email.
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
                                    "Verification email error:",
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

});


// ======================================================
// VERIFY CUSTOMER EMAIL
// ======================================================

app.get(
    "/customers/verify-email/:token",
    (req, res) => {

        const { token } = req.params;


        // --------------------------------------------------
        // CHECK TOKEN
        // --------------------------------------------------

        if (!token) {

            return res.status(400).send(
                "Verification token is required."
            );

        }


        // --------------------------------------------------
        // FIND CUSTOMER
        // --------------------------------------------------

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
                        "Email verification database error:",
                        err
                    );

                    return res.status(500).send(
                        "Database error while verifying email."
                    );

                }


                // --------------------------------------------------
                // TOKEN NOT FOUND
                // --------------------------------------------------

                if (results.length === 0) {

                    return res.status(400).send(`
                        <div style="
                            font-family: Arial;
                            text-align: center;
                            margin-top: 80px;
                        ">

                            <h2 style="color: #e91e63;">
                                Invalid or expired verification link
                            </h2>

                            <p>
                                Please register again or request
                                a new verification email.
                            </p>

                        </div>
                    `);

                }


                const customer = results[0];


                // --------------------------------------------------
                // ALREADY VERIFIED
                // --------------------------------------------------

                if (customer.email_verified === 1) {

                    return res.send(`
                        <div style="
                            font-family: Arial;
                            text-align: center;
                            margin-top: 80px;
                        ">

                            <h2 style="color: #e91e63;">
                                Your email is already verified 💗
                            </h2>

                            <p>
                                You can now log in to
                                GlowNest Beauty.
                            </p>

                        </div>
                    `);

                }


                // --------------------------------------------------
                // CHECK TOKEN EXPIRATION
                // --------------------------------------------------

                if (
                    !customer.verification_expires ||
                    new Date(customer.verification_expires) <
                    new Date()
                ) {

                    return res.status(400).send(`
                        <div style="
                            font-family: Arial;
                            text-align: center;
                            margin-top: 80px;
                        ">

                            <h2 style="color: #e91e63;">
                                Verification link expired
                            </h2>

                            <p>
                                Please register again or request
                                a new verification email.
                            </p>

                        </div>
                    `);

                }


                // --------------------------------------------------
                // VERIFY CUSTOMER
                // --------------------------------------------------

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
                                "Email verification update error:",
                                updateErr
                            );

                            return res.status(500).send(
                                "Failed to verify email."
                            );

                        }


                        console.log(
                            `✅ Email verified: ${customer.email}`
                        );


                        // --------------------------------------------------
                        // SUCCESS PAGE
                        // --------------------------------------------------

                        res.send(`
                            <div style="
                                font-family: Arial, sans-serif;
                                max-width: 600px;
                                margin: 80px auto;
                                text-align: center;
                                padding: 30px;
                            ">

                                <h1 style="
                                    color: #e91e63;
                                ">
                                    Email Verified Successfully! 🎉
                                </h1>

                                <p>
                                    Welcome to GlowNest Beauty,
                                    <strong>
                                        ${customer.name}
                                    </strong>!
                                </p>

                                <p>
                                    Your email address has been
                                    successfully verified.
                                </p>

                                <p>
                                    You can now return to
                                    GlowNest Beauty and log in.
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
// TEMPORARY SETUP ROUTE
// ======================================================

app.post("/admins/create", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required"
            });
        }

        const checkSql = `
            SELECT id
            FROM admins
            WHERE email = ?
        `;

        db.query(checkSql, [email], async (err, results) => {

            if (err) {
                console.error("Admin check error:", err);

                return res.status(500).json({
                    message: "Database error",
                    error: err.message
                });
            }

            if (results.length > 0) {
                return res.status(409).json({
                    message: "Admin email already exists"
                });
            }

            const hashedPassword = await bcrypt.hash(
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
                            "Admin creation error:",
                            insertErr
                        );

                        return res.status(500).json({
                            message: "Failed to create admin",
                            error: insertErr.message
                        });
                    }

                    return res.status(201).json({
                        message: "Admin created successfully",
                        adminId: result.insertId
                    });

                }
            );

        });

    } catch (error) {

        console.error(
            "Create admin error:",
            error
        );

        return res.status(500).json({
            message: "Server error"
        });

    }

});
// ======================================================
// ADMIN LOGIN
// ======================================================

app.post("/admins/login", (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    const sql = `
        SELECT *
        FROM admins
        WHERE email = ?
    `;

    db.query(sql, [email], (err, results) => {

        if (err) {
            console.error("Admin login database error:", err);

            return res.status(500).json({
                message: "Database error",
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                message: "Invalid admin email or password"
            });
        }

        const admin = results[0];

        bcrypt.compare(
            password,
            admin.password,
            (compareErr, isMatch) => {

                if (compareErr) {
                    console.error(
                        "Admin password comparison error:",
                        compareErr
                    );

                    return res.status(500).json({
                        message: "Password comparison failed"
                    });
                }

                if (!isMatch) {
                    return res.status(401).json({
                        message: "Invalid admin email or password"
                    });
                }

                const token = jwt.sign(
                    {
                        id: admin.id,
                        email: admin.email,
                        role: "admin"
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h"
                    }
                );

                return res.json({
                    message: "Admin login successful",
                    token: token,
                    admin: {
                        id: admin.id,
                        name: admin.name,
                        email: admin.email,
                        role: "admin"
                    }
                });

            }
        );

    });

});

// ======================================================
// ADMIN - GET ALL PRODUCTS
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

        db.query(sql, (err, results) => {

            if (err) {

                console.error(
                    "Admin get products error:",
                    err
                );

                return res.status(500).json({
                    message: "Failed to get products",
                    error: err.message
                });

            }

            return res.json({
                message: "Admin products retrieved successfully",
                products: results
            });

        });

    }
);
// ======================================================
// ADMIN - ADD PRODUCT
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

        // --------------------------------------------------
        // CHECK REQUIRED FIELDS
        // --------------------------------------------------

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

        // --------------------------------------------------
        // INSERT PRODUCT
        // --------------------------------------------------

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
                        "Admin add product error:",
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
// ADMIN - UPDATE PRODUCT
// ======================================================

app.put(
    "/admin/products/:id",
    adminMiddleware,
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
                        "Admin update product error:",
                        err
                    );

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

                return res.json({
                    message: "Product updated successfully"
                });

            }
        );

    }
);
// ======================================================
// ADMIN - DELETE PRODUCT
// ======================================================

app.delete(
    "/admin/products/:id",
    adminMiddleware,
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
                        "Admin delete product error:",
                        err
                    );

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

                return res.json({
                    message: "Product deleted successfully"
                });

            }
        );

    }
);
// ======================================================
// CUSTOMER LOGIN
// ======================================================

app.post("/customers/login", (req, res) => {

    const {
        email,
        password
    } = req.body;


    // --------------------------------------------------
    // CHECK REQUIRED FIELDS
    // --------------------------------------------------

    if (!email || !password) {

        return res.status(400).json({
            message: "Email and password are required"
        });

    }


    // --------------------------------------------------
    // FIND CUSTOMER
    // --------------------------------------------------

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
                    "Login database error:",
                    err
                );

                return res.status(500).json({
                    message: "Database error",
                    error: err.message
                });

            }


            // --------------------------------------------------
            // CUSTOMER NOT FOUND
            // --------------------------------------------------

            if (results.length === 0) {

                return res.status(401).json({
                    message: "Invalid email or password"
                });

            }


            const customer = results[0];


            // --------------------------------------------------
            // CHECK EMAIL VERIFICATION
            // --------------------------------------------------

            if (customer.email_verified !== 1) {

                return res.status(403).json({
                    message:
                        "Please verify your email before logging in."
                });

            }


            // --------------------------------------------------
            // COMPARE PASSWORD
            // --------------------------------------------------

            bcrypt.compare(
                password,
                customer.password,
                (err, isMatch) => {

                    if (err) {

                        console.error(
                            "Password comparison error:",
                            err
                        );

                        return res.status(500).json({
                            message:
                                "Password comparison failed"
                        });

                    }


                    // --------------------------------------------------
                    // WRONG PASSWORD
                    // --------------------------------------------------

                    if (!isMatch) {

                        return res.status(401).json({
                            message:
                                "Invalid email or password"
                        });

                    }


                    // --------------------------------------------------
                    // CREATE JWT
                    // --------------------------------------------------

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


                    // --------------------------------------------------
                    // SUCCESSFUL LOGIN
                    // --------------------------------------------------

                    res.json({

                        message:
                            "Login successful",

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

        }
    );

});
// ======================================================
// GOOGLE LOGIN
// ======================================================

app.post("/customers/google-login", async (req, res) => {

    try {

        const { credential } = req.body;

        // --------------------------------------------------
        // CHECK GOOGLE CREDENTIAL
        // --------------------------------------------------

        if (!credential) {

            return res.status(400).json({
                message: "Google credential is required"
            });

        }

        // --------------------------------------------------
        // VERIFY GOOGLE TOKEN
        // --------------------------------------------------

        const ticket = await googleClient.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();

        const email = payload.email;
        const name = payload.name;

        console.log("✅ Google user:", {
            email,
            name
        });

        // --------------------------------------------------
        // FIND CUSTOMER
        // --------------------------------------------------

        const findCustomerSql = `
            SELECT *
            FROM customers
            WHERE email = ?
        `;

        db.query(
            findCustomerSql,
            [email],
            async (err, results) => {

                if (err) {

                    console.error(
                        "Google login database error:",
                        err
                    );

                    return res.status(500).json({
                        message: "Database error",
                        error: err.message
                    });

                }

                // --------------------------------------------------
                // CUSTOMER EXISTS
                // --------------------------------------------------

                if (results.length > 0) {

                    const customer = results[0];

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

                    console.log(
                        `✅ Google login successful: ${customer.email}`
                    );

                    return res.json({

                        message: "Google login successful",

                        token: token,

                        customer: {
                            id: customer.id,
                            name: customer.name,
                            email: customer.email,
                            phone: customer.phone
                        }

                    });

                }

                // --------------------------------------------------
                // CUSTOMER DOES NOT EXIST
                // --------------------------------------------------

                const randomPassword =
                    crypto.randomBytes(32).toString("hex");

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
                        name || "Google User",
                        email,
                        hashedPassword
                    ],
                    (insertErr, result) => {

                        if (insertErr) {

                            console.error(
                                "Google customer creation error:",
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

                        const token = jwt.sign(
                            {
                                id: customerId,
                                email: email
                            },
                            process.env.JWT_SECRET,
                            {
                                expiresIn: "1h"
                            }
                        );

                        console.log(
                            `✅ New Google customer created: ${email}`
                        );

                        return res.status(201).json({

                            message:
                                "Google account created successfully",

                            token: token,

                            customer: {
                                id: customerId,
                                name: name || "Google User",
                                email: email,
                                phone: null
                            }

                        });

                    }
                );

            }
        );

    } catch (error) {

        console.error(
            "Google authentication error:",
            error
        );

        return res.status(401).json({
            message: "Invalid Google credential",
            error: error.message
        });

    }

});


// ======================================================
// CUSTOMER PROFILE
// PROTECTED ROUTE
// ======================================================

app.get(
    "/customers/profile",
    authMiddleware,
    (req, res) => {

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
                        "Profile error:",
                        err
                    );

                    return res.status(500).json({
                        message:
                            "Failed to get customer profile",
                        error: err.message
                    });

                }


                if (results.length === 0) {

                    return res.status(404).json({
                        message:
                            "Customer not found"
                    });

                }


                res.json({

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
// FORGOT PASSWORD
// ======================================================

app.post("/customers/forgot-password", (req, res) => {

    const { email } = req.body;

    // --------------------------------------------------
    // CHECK EMAIL
    // --------------------------------------------------

    if (!email) {

        return res.status(400).json({
            message: "Email is required"
        });

    }

    // --------------------------------------------------
    // FIND CUSTOMER
    // --------------------------------------------------

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
                    "Forgot password database error:",
                    err
                );

                return res.status(500).json({
                    message: "Database error"
                });

            }

            // --------------------------------------------------
            // EMAIL NOT FOUND
            // --------------------------------------------------

            if (results.length === 0) {

                return res.json({
                    message:
                        "If the email exists, a password reset link has been sent."
                });

            }

            const customer = results[0];

            // --------------------------------------------------
            // GENERATE RESET TOKEN
            // --------------------------------------------------

            const resetToken =
                crypto
                    .randomBytes(32)
                    .toString("hex");

            // --------------------------------------------------
            // TOKEN EXPIRES AFTER 15 MINUTES
            // --------------------------------------------------

            const resetExpires =
                new Date(
                    Date.now() +
                    15 * 60 * 1000
                );

            // --------------------------------------------------
            // SAVE RESET TOKEN
            // --------------------------------------------------

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
                            "Reset token update error:",
                            updateErr
                        );

                        return res.status(500).json({
                            message:
                                "Failed to create reset token"
                        });

                    }

                    // --------------------------------------------------
                    // CREATE RESET LINK
                    // --------------------------------------------------

                    const resetLink =
                        `http://localhost:5173/reset-password/${resetToken}`;

                    // --------------------------------------------------
                    // SEND RESET EMAIL
                    // --------------------------------------------------

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
                                    font-family: Arial, sans-serif;
                                    max-width: 600px;
                                    margin: auto;
                                    padding: 30px;
                                    border: 1px solid #eee;
                                    border-radius: 10px;
                                    background-color: #ffffff;
                                ">

                                    <h2 style="
                                        color: #e91e63;
                                        text-align: center;
                                    ">
                                        GlowNest Beauty 💗
                                    </h2>

                                    <p>
                                        Hi
                                        <strong>${customer.name}</strong>,
                                    </p>

                                    <p>
                                        We received a request to reset
                                        your GlowNest Beauty password.
                                    </p>

                                    <p>
                                        Click the button below to create
                                        a new password.
                                    </p>

                                    <div style="
                                        text-align: center;
                                        margin: 30px 0;
                                    ">

                                        <a
                                            href="${resetLink}"
                                            style="
                                                background-color: #e91e63;
                                                color: white;
                                                padding: 12px 25px;
                                                text-decoration: none;
                                                border-radius: 6px;
                                                display: inline-block;
                                                font-weight: bold;
                                            "
                                        >
                                            Reset Password
                                        </a>

                                    </div>

                                    <p>
                                        This link will expire in
                                        <strong>15 minutes</strong>.
                                    </p>

                                    <p>
                                        If you did not request a password
                                        reset, you can safely ignore this email.
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
                            `✅ Password reset email sent to ${customer.email}`
                        );

                        return res.json({
                            message:
                                "If the email exists, a password reset link has been sent."
                        });

                    } catch (emailError) {

                        console.error(
                            "Password reset email error:",
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

});
// ======================================================
// RESET PASSWORD
// ======================================================

app.post("/customers/reset-password/:token", (req, res) => {

    const { token } = req.params;
    const { password } = req.body;

    // --------------------------------------------------
    // CHECK REQUIRED FIELDS
    // --------------------------------------------------

    if (!token || !password) {
        return res.status(400).json({
            message: "Token and password are required"
        });
    }

    // --------------------------------------------------
    // CHECK PASSWORD LENGTH
    // --------------------------------------------------

    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters"
        });
    }

    // --------------------------------------------------
    // FIND CUSTOMER USING RESET TOKEN
    // --------------------------------------------------

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
                    "Reset password database error:",
                    err
                );

                return res.status(500).json({
                    message: "Database error",
                    error: err.message
                });

            }

            // --------------------------------------------------
            // TOKEN NOT FOUND
            // --------------------------------------------------

            if (results.length === 0) {

                return res.status(400).json({
                    message: "Invalid or expired reset token"
                });

            }

            const customer = results[0];

            // --------------------------------------------------
            // CHECK TOKEN EXPIRATION
            // --------------------------------------------------

            if (
                !customer.reset_expires ||
                new Date(customer.reset_expires) < new Date()
            ) {

                return res.status(400).json({
                    message: "Reset token has expired"
                });

            }

            // --------------------------------------------------
            // HASH NEW PASSWORD
            // --------------------------------------------------

            bcrypt.hash(
                password,
                10,
                (hashErr, hashedPassword) => {

                    if (hashErr) {

                        console.error(
                            "Password hashing error:",
                            hashErr
                        );

                        return res.status(500).json({
                            message: "Password hashing failed"
                        });

                    }

                    // --------------------------------------------------
                    // UPDATE PASSWORD
                    // CLEAR RESET TOKEN
                    // --------------------------------------------------

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
                        (updateErr, result) => {

                            if (updateErr) {

                                console.error(
                                    "Password reset update error:",
                                    updateErr
                                );

                                return res.status(500).json({
                                    message:
                                        "Failed to reset password",
                                    error:
                                        updateErr.message
                                });

                            }

                            if (result.affectedRows === 0) {

                                return res.status(404).json({
                                    message:
                                        "Customer not found"
                                });

                            }

                            console.log(
                                `✅ Password successfully reset for ${customer.email}`
                            );

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

});
// ======================================================
// UPDATE CUSTOMER PROFILE
// PROTECTED ROUTE
// ======================================================

app.put(
    "/customers/profile",
    authMiddleware,
    (req, res) => {

        const customerId = req.user.id;


        const {
            name,
            phone,
            address,
            city,
            state,
            pincode
        } = req.body;


        // --------------------------------------------------
        // CHECK REQUIRED FIELD
        // --------------------------------------------------

        if (!name) {

            return res.status(400).json({
                message: "Name is required"
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
                        "Update profile error:",
                        err
                    );

                    return res.status(500).json({

                        message:
                            "Failed to update profile",

                        error:
                            err.message

                    });

                }


                if (result.affectedRows === 0) {

                    return res.status(404).json({
                        message:
                            "Customer not found"
                    });

                }


                res.json({

                    message:
                        "Profile updated successfully"

                });

            }
        );

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
            `Server is running on port ${PORT}`
        );

    }
);