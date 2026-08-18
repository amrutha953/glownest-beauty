const axios = require("axios");

// =====================================================
// WHATSAPP CONFIGURATION
// =====================================================

const WHATSAPP_ENABLED =
    process.env.WHATSAPP_ENABLED === "true";

const ACCESS_TOKEN =
    process.env.WHATSAPP_ACCESS_TOKEN;

const PHONE_NUMBER_ID =
    process.env.WHATSAPP_PHONE_NUMBER_ID;

const API_VERSION =
    process.env.WHATSAPP_API_VERSION;


// =====================================================
// SEND WHATSAPP TEXT MESSAGE
// =====================================================

const sendWhatsAppMessage = async ({
    phoneNumber,
    message,
}) => {
    try {
        // =================================================
        // MOCK MODE
        // =================================================

        if (!WHATSAPP_ENABLED) {
            console.log(
                "WhatsApp is currently disabled."
            );

            console.log(
                "Mock WhatsApp message:"
            );

            console.log({
                phoneNumber,
                message,
            });

            return {
                success: true,
                mock: true,
                message:
                    "Mock WhatsApp message generated",
            };
        }

        // =================================================
        // VALIDATE CONFIGURATION
        // =================================================

        if (!ACCESS_TOKEN) {
            throw new Error(
                "WHATSAPP_ACCESS_TOKEN is missing"
            );
        }

        if (!PHONE_NUMBER_ID) {
            throw new Error(
                "WHATSAPP_PHONE_NUMBER_ID is missing"
            );
        }

        if (!API_VERSION) {
            throw new Error(
                "WHATSAPP_API_VERSION is missing"
            );
        }

        if (!phoneNumber) {
            throw new Error(
                "Customer phone number is required"
            );
        }

        if (!message) {
            throw new Error(
                "WhatsApp message is required"
            );
        }

        // =================================================
        // META WHATSAPP CLOUD API URL
        // =================================================

        const url =
            `https://graph.facebook.com/${API_VERSION}` +
            `/${PHONE_NUMBER_ID}/messages`;

        // =================================================
        // SEND MESSAGE
        // =================================================

        const response = await axios.post(
            url,
            {
                messaging_product: "whatsapp",
                to: phoneNumber,
                type: "text",
                text: {
                    body: message,
                },
            },
            {
                headers: {
                    Authorization:
                        `Bearer ${ACCESS_TOKEN}`,
                    "Content-Type":
                        "application/json",
                },
            }
        );

        console.log(
            "WhatsApp message sent successfully"
        );

        console.log(response.data);

        return {
            success: true,
            mock: false,
            data: response.data,
        };
    } catch (error) {
        console.error(
            "WhatsApp message error:"
        );

        console.error(
            error.response?.data ||
                error.message
        );

        return {
            success: false,
            error:
                error.response?.data ||
                error.message,
        };
    }
};


// =====================================================
// SEND ORDER CONFIRMATION
// =====================================================

const sendOrderConfirmation = async ({
    phoneNumber,
    orderId,
    totalAmount,
}) => {
    const formattedAmount =
        Number(totalAmount || 0).toLocaleString(
            "en-IN",
            {
                minimumFractionDigits: 2,
            }
        );

    const message =
`GlowNest Beauty

Your order #${orderId} has been confirmed successfully!

Order Total: Rs. ${formattedAmount}

Thank you for shopping with GlowNest Beauty!`;

    return sendWhatsAppMessage({
        phoneNumber,
        message,
    });
};


// =====================================================
// SEND ORDER STATUS UPDATE
// =====================================================

const sendOrderStatusUpdate = async ({
    phoneNumber,
    orderId,
    status,
}) => {
    const message =
`GlowNest Beauty

Your order #${orderId} status has been updated.

Current Status: ${status}

Thank you for shopping with GlowNest Beauty!`;

    return sendWhatsAppMessage({
        phoneNumber,
        message,
    });
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {
    sendWhatsAppMessage,
    sendOrderConfirmation,
    sendOrderStatusUpdate,
};