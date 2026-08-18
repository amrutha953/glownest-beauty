const express = require("express");

const router = express.Router();

const {
    sendInstagramOrderConfirmation,
} = require("../services/instagramService");


// =====================================================
// TEST INSTAGRAM
// =====================================================

router.post("/test", async (req, res) => {
    try {

        const {
            username,
            orderId,
            totalAmount,
        } = req.body;

        if (
            !username ||
            !orderId ||
            totalAmount === undefined
        ) {
            return res.status(400).json({
                message:
                    "username, orderId and totalAmount are required",
            });
        }

        const result =
            await sendInstagramOrderConfirmation({
                username,
                orderId,
                totalAmount,
            });

        return res.json(result);

    } catch (error) {

        console.error(
            "Instagram test route error:",
            error
        );

        return res.status(500).json({
            message:
                "Instagram test failed",
            error: error.message,
        });
    }
});

module.exports = router;