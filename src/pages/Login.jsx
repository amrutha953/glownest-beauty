import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/customers/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // Store JWT token
    localStorage.setItem("token", data.token);

    // Store customer information
    localStorage.setItem(
      "customer",
      JSON.stringify(data.customer)
    );

    alert("Login successful! 🎉");

    navigate("/");

  } catch (error) {
    console.error("Login error:", error);

    alert(
      "Unable to connect to the server. Please make sure the backend is running."
    );
  }
};

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to your GlowNest Beauty account</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            LOGIN
          </button>

        </form>

        <div className="login-footer">

          <p>
            New to GlowNest?{" "}
            <Link to="/register">
              Create Account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;