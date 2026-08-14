import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        if (!password || !confirmPassword) {
            setError("Please enter both passwords.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                `http://localhost:5000/customers/reset-password/${token}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to reset password.");
                return;
            }

            setMessage(
                "Password reset successfully! You can now login."
            );

            setPassword("");
            setConfirmPassword("");

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (err) {
            console.error("Reset password error:", err);

            setError(
                "Unable to connect to the server. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#fff5f8",
                padding: "40px 20px"
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "450px",
                    background: "white",
                    padding: "40px",
                    borderRadius: "12px",
                    boxShadow: "0 5px 25px rgba(0,0,0,0.1)"
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        color: "#e91e63",
                        marginBottom: "10px"
                    }}
                >
                    Reset Your Password 💗
                </h2>

                <p
                    style={{
                        textAlign: "center",
                        color: "#666",
                        marginBottom: "30px"
                    }}
                >
                    Enter your new GlowNest Beauty password.
                </p>

                <form onSubmit={handleSubmit}>

                    <label
                        style={{
                            display: "block",
                            marginBottom: "8px",
                            fontWeight: "bold"
                        }}
                    >
                        New Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginBottom: "20px",
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            boxSizing: "border-box"
                        }}
                    />

                    <label
                        style={{
                            display: "block",
                            marginBottom: "8px",
                            fontWeight: "bold"
                        }}
                    >
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginBottom: "20px",
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            boxSizing: "border-box"
                        }}
                    />

                    {error && (
                        <p
                            style={{
                                color: "#d32f2f",
                                background: "#ffebee",
                                padding: "10px",
                                borderRadius: "6px"
                            }}
                        >
                            {error}
                        </p>
                    )}

                    {message && (
                        <p
                            style={{
                                color: "#2e7d32",
                                background: "#e8f5e9",
                                padding: "10px",
                                borderRadius: "6px"
                            }}
                        >
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            padding: "13px",
                            background: "#e91e63",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        {loading
                            ? "Resetting..."
                            : "Reset Password"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ResetPassword;