import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await fetch(
      "https://glownest-beauty-production.up.railway.app/customers/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    alert("Account created successfully! 🎉");

    window.location.href = "/login";

  } catch (error) {
    console.error("Registration error:", error);

    alert(
      "Unable to connect to the server. Please make sure the backend is running."
    );
  }
};

  return (
    <div className="register-page">

      <div className="register-container">

        <div className="register-header">
          <h1>Create Account</h1>
          <p>Join GlowNest Beauty today</p>
        </div>

        <form onSubmit={handleRegister}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-button">
            CREATE ACCOUNT
          </button>

        </form>

        <div className="register-footer">

          <p>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;