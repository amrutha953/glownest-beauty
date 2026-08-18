const express = require("express");

const router = express.Router();

const {
    sendOrderConfirmation,
} = require("../services/whatsappService");


// =====================================================
// TEST WHATSAPP MESSAGE
// =====================================================

router.post("/test", async (req, res) => {
    try {
        const {
            phoneNumber,
            orderId,
            totalAmount,
        } = req.body;

        if (
            !phoneNumber ||
            !orderId ||
            totalAmount === undefined
        ) {
            return res.status(400).json({
                message:
                    "phoneNumber, orderId and totalAmount are required",
            });
        }

        const result =
            await sendOrderConfirmation({
                phoneNumber,
                orderId,
                totalAmount,
            });

        return res.json(result);
    } catch (error) {
        console.error(
            "WhatsApp test route error:",
            error
        );

        return res.status(500).json({
            message: "WhatsApp test failed",
            error: error.message,
        });
    }
});

module.exports = router;