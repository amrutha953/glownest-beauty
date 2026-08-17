const express = require("express");
const router = express.Router();

const db = require("../config/db");
const adminMiddleware = require("../middleware/adminMiddleware");


// =====================================================
// ADMIN - GET ALL CUSTOMERS
// =====================================================

router.get(
    "/",
    adminMiddleware,
    (req, res) => {

        console.log("👥 ADMIN GET ALL CUSTOMERS");

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
                        message: "Failed to get customers",
                        error: err.message
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


// =====================================================
// ADMIN - GET ONE CUSTOMER
// =====================================================

router.get(
    "/:id",
    adminMiddleware,
    (req, res) => {

        const customerId = req.params.id;

        console.log(
            "🔎 ADMIN GET CUSTOMER:",
            customerId
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
            WHERE id = ?
        `;

        db.query(
            sql,
            [customerId],
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

                if (results.length === 0) {

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


// =====================================================
// ADMIN - DELETE CUSTOMER
// =====================================================

router.delete(
    "/:id",
    adminMiddleware,
    (req, res) => {

        const customerId = req.params.id;

        console.log(
            "🗑️ ADMIN DELETE CUSTOMER:",
            customerId
        );


        // -------------------------------------------------
        // CHECK CUSTOMER EXISTS
        // -------------------------------------------------

        const checkSql = `
            SELECT
                id,
                name,
                email
            FROM customers
            WHERE id = ?
        `;

        db.query(
            checkSql,
            [customerId],
            (checkErr, customerResults) => {

                if (checkErr) {

                    console.error(
                        "❌ Customer check error:",
                        checkErr
                    );

                    return res.status(500).json({
                        message:
                            "Failed to check customer",

                        error:
                            checkErr.message
                    });
                }


                if (customerResults.length === 0) {

                    return res.status(404).json({
                        message:
                            "Customer not found"
                    });

                }


                const customer =
                    customerResults[0];


                // -------------------------------------------------
                // DELETE CUSTOMER
                // -------------------------------------------------

                const deleteSql = `
                    DELETE FROM customers
                    WHERE id = ?
                `;

                db.query(
                    deleteSql,
                    [customerId],
                    (deleteErr, result) => {

                        if (deleteErr) {

                            console.error(
                                "❌ Admin delete customer error:",
                                deleteErr
                            );

                            return res.status(500).json({
                                message:
                                    "Failed to delete customer",

                                error:
                                    deleteErr.message
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
                            `✅ Customer deleted: ${customer.email}`
                        );


                        return res.json({

                            message:
                                "Customer deleted successfully",

                            customerId:
                                Number(customerId)

                        });

                    }
                );

            }
        );

    }
);


module.exports = router;