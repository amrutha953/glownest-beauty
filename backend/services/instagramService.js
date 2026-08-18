// =====================================================
// INSTAGRAM CONFIGURATION
// =====================================================

const INSTAGRAM_ENABLED =
    process.env.INSTAGRAM_ENABLED === "true";


// =====================================================
// SEND INSTAGRAM MOCK MESSAGE
// =====================================================

const sendInstagramMessage = async ({
    username,
    message,
}) => {
    try {

        // =================================================
        // MOCK MODE
        // =================================================

        if (!INSTAGRAM_ENABLED) {
            console.log(
                "Instagram is currently disabled."
            );

            console.log(
                "Mock Instagram message:"
            );

            console.log({
                username,
                message,
            });

            return {
                success: true,
                mock: true,
                message:
                    "Mock Instagram message generated",
            };
        }


        // =================================================
        // REAL INSTAGRAM PLACEHOLDER
        // =================================================

        console.log(
            "Real Instagram integration is not configured."
        );

        return {
            success: false,
            mock: false,
            message:
                "Instagram real integration is not configured",
        };

    } catch (error) {

        console.error(
            "Instagram message error:",
            error
        );

        return {
            success: false,
            error: error.message,
        };
    }
};


// =====================================================
// ORDER CONFIRMATION
// =====================================================

const sendInstagramOrderConfirmation = async ({
    username,
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

Your order #${orderId} has been confirmed.

Order Total: Rs. ${formattedAmount}

Thank you for shopping with GlowNest Beauty!`;

    return sendInstagramMessage({
        username,
        message,
    });
};


// =====================================================
// ORDER STATUS UPDATE
// =====================================================

const sendInstagramOrderStatusUpdate = async ({
    username,
    orderId,
    status,
}) => {

    const message =
`GlowNest Beauty

Your order #${orderId} status has been updated.

Current Status: ${status}

Thank you for shopping with GlowNest Beauty!`;

    return sendInstagramMessage({
        username,
        message,
    });
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {
    sendInstagramMessage,
    sendInstagramOrderConfirmation,
    sendInstagramOrderStatusUpdate,
};