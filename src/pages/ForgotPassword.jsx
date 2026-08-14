import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/customers/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      setMessage(
        "If this email is registered, a password reset link has been sent. Please check your email."
      );

      setEmail("");

    } catch (error) {
      console.error("Forgot password error:", error);

      setError(
        "Unable to connect to the server. Please make sure the backend is running."
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
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#e91e63",
            marginBottom: "10px",
          }}
        >
          Forgot Password 💗
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Enter your registered email and we'll send you a password
          reset link.
        </p>

        <form onSubmit={handleSubmit}>

          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          />

          {error && (
            <p
              style={{
                color: "#d32f2f",
                background: "#ffebee",
                padding: "10px",
                borderRadius: "6px",
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
                borderRadius: "6px",
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
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

        </form>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <Link
            to="/login"
            style={{
              color: "#e91e63",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;