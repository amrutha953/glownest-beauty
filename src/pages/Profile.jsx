
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiMapPin,
    FiEdit3
} from "react-icons/fi";
import "./Profile.css";

function Profile() {
    const navigate = useNavigate();

    const [customer, setCustomer] = useState(null);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });

    // ===============================
    // GET CUSTOMER PROFILE
    // ===============================
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    setMessage("Please login first.");
                    setLoading(false);
                    navigate("/login");
                    return;
                }

                const response = await fetch(
                    "https://glownest-beauty-production.up.railway.app/customers/profile",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message || "Failed to load profile"
                    );
                }

                setCustomer(data.customer);

                setFormData({
                    name: data.customer.name || "",
                    phone: data.customer.phone || "",
                    address: data.customer.address || "",
                    city: data.customer.city || "",
                    state: data.customer.state || "",
                    pincode: data.customer.pincode || ""
                });

            } catch (error) {
                console.error("Profile error:", error);

                // If token is invalid or expired
                if (
                    error.message.includes("token") ||
                    error.message.includes("Unauthorized")
                ) {
                    localStorage.removeItem("token");
                    localStorage.removeItem("customer");
                    navigate("/login");
                    return;
                }

                setMessage(error.message);

            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    // ===============================
    // HANDLE INPUT CHANGE
    // ===============================
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // ===============================
    // EDIT PROFILE
    // ===============================
    const handleEdit = () => {
        setMessage("");
        setEditing(true);
    };

    // ===============================
    // CANCEL EDIT
    // ===============================
    const handleCancel = () => {
        if (customer) {
            setFormData({
                name: customer.name || "",
                phone: customer.phone || "",
                address: customer.address || "",
                city: customer.city || "",
                state: customer.state || "",
                pincode: customer.pincode || ""
            });
        }

        setMessage("");
        setEditing(false);
    };

    // ===============================
    // SAVE PROFILE
    // ===============================
    const handleSave = async (e) => {
        e.preventDefault();

        try {
            setSaving(true);
            setMessage("");

            const token = localStorage.getItem("token");

            if (!token) {
                setMessage("Please login first.");
                navigate("/login");
                return;
            }

            const response = await fetch(
                "https://glownest-beauty-production.up.railway.app/customers/profile",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to update profile"
                );
            }

            // Update displayed profile
            setCustomer((prev) => ({
                ...prev,
                ...formData
            }));

            // Update localStorage customer data too
            const storedCustomer =
                JSON.parse(
                    localStorage.getItem("customer")
                ) || {};

            localStorage.setItem(
                "customer",
                JSON.stringify({
                    ...storedCustomer,
                    ...formData
                })
            );

            setEditing(false);

            setMessage(
                "Profile updated successfully! ✓"
            );

        } catch (error) {
            console.error(
                "Update profile error:",
                error
            );

            setMessage(
                error.message ||
                "Unable to update profile"
            );

        } finally {
            setSaving(false);
        }
    };

    // ===============================
    // LOGOUT
    // ===============================
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("customer");

        setCustomer(null);

        navigate("/login");
    };

    // ===============================
    // LOADING
    // ===============================
    if (loading) {
        return (
            <div className="profile-loading">
                <div className="profile-loading-spinner"></div>
                <p>Loading profile...</p>
            </div>
        );
    }

    // ===============================
    // PROFILE NOT FOUND
    // ===============================
    if (!customer) {
        return (
            <div className="profile-error">
                <div className="profile-error-card">
                    <FiUser className="error-icon" />

                    <h2>
                        Unable to load profile
                    </h2>

                    <p>
                        {message ||
                            "Something went wrong."}
                    </p>

                    <button
                        className="back-login-btn"
                        onClick={() =>
                            navigate("/login")
                        }
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-page">

            <div className="profile-container">

                {/* ===============================
                    PROFILE HEADER
                =============================== */}

                <div className="profile-header">

                    <div className="profile-avatar">
                        <FiUser />
                    </div>

                    <div>
                        <h1>My Profile</h1>

                        <p>
                            Manage your GlowNest Beauty
                            account
                        </p>
                    </div>

                </div>

                {/* ===============================
                    SUCCESS / ERROR MESSAGE
                =============================== */}

                {message && (
                    <div className="profile-message">
                        {message}
                    </div>
                )}

                {/* ===============================
                    PROFILE CARD
                =============================== */}

                <div className="profile-card">

                    {/* CARD HEADER */}

                    <div className="profile-card-header">

                        <div>
                            <h2>
                                Personal Information
                            </h2>

                            <p>
                                Update your personal
                                details and contact
                                information.
                            </p>
                        </div>

                        <div className="profile-header-actions">

                            {!editing && (
                                <button
                                    type="button"
                                    className="edit-profile-btn"
                                    onClick={handleEdit}
                                >
                                    <FiEdit3 />
                                    Edit Profile
                                </button>
                            )}

                            <button
                                type="button"
                                className="logout-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </div>

                    </div>

                    {/* ===============================
                        FORM
                    =============================== */}

                    <form onSubmit={handleSave}>

                        {/* NAME */}

                        <div className="profile-field">

                            <label>
                                <FiUser />
                                Full Name
                            </label>

                            {editing ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            ) : (
                                <div className="profile-value">
                                    {customer.name}
                                </div>
                            )}

                        </div>

                        {/* EMAIL */}

                        <div className="profile-field">

                            <label>
                                <FiMail />
                                Email Address
                            </label>

                            <div className="profile-value">
                                {customer.email}
                            </div>

                            <small>
                                Email cannot be changed here.
                            </small>

                        </div>

                        {/* PHONE */}

                        <div className="profile-field">

                            <label>
                                <FiPhone />
                                Phone Number
                            </label>

                            {editing ? (
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            ) : (
                                <div className="profile-value">
                                    {customer.phone ||
                                        "Not provided"}
                                </div>
                            )}

                        </div>

                        {/* ADDRESS */}

                        <div className="profile-field">

                            <label>
                                <FiMapPin />
                                Address
                            </label>

                            {editing ? (
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows="3"
                                />
                            ) : (
                                <div className="profile-value">
                                    {customer.address ||
                                        "Not provided"}
                                </div>
                            )}

                        </div>

                        {/* CITY / STATE / PINCODE */}

                        <div className="profile-row">

                            {/* CITY */}

                            <div className="profile-field">

                                <label>
                                    City
                                </label>

                                {editing ? (
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <div className="profile-value">
                                        {customer.city ||
                                            "Not provided"}
                                    </div>
                                )}

                            </div>

                            {/* STATE */}

                            <div className="profile-field">

                                <label>
                                    State
                                </label>

                                {editing ? (
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <div className="profile-value">
                                        {customer.state ||
                                            "Not provided"}
                                    </div>
                                )}

                            </div>

                            {/* PINCODE */}

                            <div className="profile-field">

                                <label>
                                    Pincode
                                </label>

                                {editing ? (
                                    <input
                                        type="text"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <div className="profile-value">
                                        {customer.pincode ||
                                            "Not provided"}
                                    </div>
                                )}

                            </div>

                        </div>

                        {/* ===============================
                            EDIT BUTTONS
                        =============================== */}

                        {editing && (
                            <div className="profile-actions">

                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={handleCancel}
                                    disabled={saving}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="save-btn"
                                    disabled={saving}
                                >
                                    {saving
                                        ? "Saving..."
                                        : "Save Changes"}
                                </button>

                            </div>
                        )}

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Profile;
