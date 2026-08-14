const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    console.log("🔐 Authorization Header:", authHeader);

    // --------------------------------------------------
    // CHECK AUTHORIZATION HEADER
    // --------------------------------------------------

    if (!authHeader || !authHeader.startsWith("Bearer ")) {

        return res.status(401).json({
            message: "Admin authorization token required"
        });

    }

    // --------------------------------------------------
    // GET TOKEN
    // --------------------------------------------------

    const token = authHeader.split(" ")[1];

    console.log(
        "🔐 Admin token received:",
        token ? "YES" : "NO"
    );

    try {

        // --------------------------------------------------
        // VERIFY JWT
        // --------------------------------------------------

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // --------------------------------------------------
        // DEBUG DECODED TOKEN
        // --------------------------------------------------

        console.log(
            "🔐 ADMIN DECODED TOKEN:",
            decoded
        );

        // --------------------------------------------------
        // CHECK ADMIN ROLE
        // --------------------------------------------------

        if (decoded.role !== "admin") {

            console.log(
                "❌ Admin role missing or incorrect:",
                decoded.role
            );

            return res.status(403).json({
                message: "Admin access required"
            });

        }

        // --------------------------------------------------
        // STORE ADMIN INFORMATION
        // --------------------------------------------------

        req.admin = decoded;

        console.log(
            "✅ Admin authorization successful:",
            decoded.email
        );

        // --------------------------------------------------
        // CONTINUE
        // --------------------------------------------------

        next();

    } catch (error) {

    console.error(
        "❌ ADMIN JWT VERIFY ERROR:",
        error.message
    );

    return res.status(401).json({
        message: "Invalid or expired admin token"
    });

}

};

module.exports = adminMiddleware;