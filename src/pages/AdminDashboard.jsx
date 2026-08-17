import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");
        navigate("/admin/login");
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f8f9fa",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* Header */}
            <header
                style={{
                    height: "70px",
                    background: "#e91e63",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 30px",
                    boxSizing: "border-box",
                }}
            >
                <h2 style={{ margin: 0 }}>GlowNest Admin</h2>

                <button
                    onClick={handleLogout}
                    style={{
                        background: "#fff",
                        color: "#e91e63",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Logout
                </button>
            </header>

            {/* Main Content */}
            <main style={{ padding: "40px" }}>
                <h1
                    style={{
                        marginBottom: "30px",
                        color: "#333",
                    }}
                >
                    Admin Dashboard
                </h1>

                {/* Statistics */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "25px",
                        marginBottom: "40px",
                    }}
                >
                    {/* Products */}
                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "12px",
                            boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3 style={{ color: "#666" }}>Products</h3>
                        <p
                            style={{
                                fontSize: "32px",
                                fontWeight: "bold",
                                color: "#e91e63",
                                margin: "10px 0",
                            }}
                        >
                            0
                        </p>
                        <button
                            onClick={() => navigate("/admin/products")}
                            style={{
                                background: "#e91e63",
                                color: "#fff",
                                border: "none",
                                padding: "10px 15px",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Manage Products
                        </button>
                    </div>

                    {/* Orders */}
                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "12px",
                            boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3 style={{ color: "#666" }}>Orders</h3>
                        <p
                            style={{
                                fontSize: "32px",
                                fontWeight: "bold",
                                color: "#e91e63",
                                margin: "10px 0",
                            }}
                        >
                            0
                        </p>
                        <button
                            onClick={() => navigate("/admin/orders")}
                            style={{
                                background: "#e91e63",
                                color: "#fff",
                                border: "none",
                                padding: "10px 15px",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Manage Orders
                        </button>
                    </div>

                    {/* Customers */}
                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "12px",
                            boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3 style={{ color: "#666" }}>Customers</h3>
                        <p
                            style={{
                                fontSize: "32px",
                                fontWeight: "bold",
                                color: "#e91e63",
                                margin: "10px 0",
                            }}
                        >
                            0
                        </p>
                        <button
                            onClick={() => navigate("/admin/customers")}
                            style={{
                                background: "#e91e63",
                                color: "#fff",
                                border: "none",
                                padding: "10px 15px",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            View Customers
                        </button>
                    </div>
                </div>

                {/* Quick Actions */}
                <section
                    style={{
                        background: "#fff",
                        padding: "30px",
                        borderRadius: "12px",
                        boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                    }}
                >
                    <h2 style={{ marginTop: 0 }}>Quick Actions</h2>

                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                            flexWrap: "wrap",
                        }}
                    >
                        <button
                            onClick={() => navigate("/admin/products")}
                            style={{
                                padding: "12px 20px",
                                background: "#e91e63",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                            }}
                        >
                            Add Product
                        </button>

                        <button
                            onClick={() => navigate("/admin/orders")}
                            style={{
                                padding: "12px 20px",
                                background: "#333",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                            }}
                        >
                            View Orders
                        </button>

                        <button
                            onClick={() => navigate("/admin/customers")}
                            style={{
                                padding: "12px 20px",
                                background: "#555",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                            }}
                        >
                            View Customers
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;