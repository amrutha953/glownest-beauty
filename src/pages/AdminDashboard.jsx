import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    // Dashboard statistics
    const [stats, setStats] = useState({
        products: 0,
        orders: 0,
        customers: 0,
        revenue: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");
        navigate("/admin/login");
    };

    // Fetch dashboard statistics
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const adminToken =
                    localStorage.getItem("adminToken");

                // If admin token doesn't exist
                if (!adminToken) {
                    navigate("/admin/login");
                    return;
                }

                const response = await fetch(
                    "http://localhost:5000/admin/dashboard/stats",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${adminToken}`,
                        },
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message ||
                            "Failed to load dashboard statistics"
                    );
                }

                console.log(
                    "📊 DASHBOARD STATS:",
                    data
                );

                setStats(data.stats);
            } catch (err) {
                console.error(
                    "❌ Dashboard stats error:",
                    err
                );

                setError(
                    err.message ||
                        "Failed to load dashboard statistics"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [navigate]);

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f8f9fa",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* =====================================================
                HEADER
            ====================================================== */}
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
                <h2 style={{ margin: 0 }}>
                    GlowNest Admin
                </h2>

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

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}
            <main
                style={{
                    padding: "40px",
                }}
            >
                <h1
                    style={{
                        marginBottom: "30px",
                        color: "#333",
                    }}
                >
                    Admin Dashboard
                </h1>

                {/* Error Message */}
                {error && (
                    <div
                        style={{
                            background: "#ffe6e6",
                            color: "#d32f2f",
                            padding: "15px 20px",
                            borderRadius: "8px",
                            marginBottom: "25px",
                            border: "1px solid #ffcdd2",
                        }}
                    >
                        ❌ {error}
                    </div>
                )}

                {/* =====================================================
                    STATISTICS
                ====================================================== */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "25px",
                        marginBottom: "40px",
                    }}
                >
                    {/* =================================================
                        PRODUCTS
                    ================================================== */}
                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "12px",
                            boxShadow:
                                "0 3px 12px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3
                            style={{
                                color: "#666",
                                marginTop: 0,
                            }}
                        >
                            Products
                        </h3>

                        <p
                            style={{
                                fontSize: "32px",
                                fontWeight: "bold",
                                color: "#e91e63",
                                margin: "10px 0",
                            }}
                        >
                            {loading
                                ? "..."
                                : stats.products}
                        </p>

                        <button
                            onClick={() =>
                                navigate("/admin/products")
                            }
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

                    {/* =================================================
                        ORDERS
                    ================================================== */}
                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "12px",
                            boxShadow:
                                "0 3px 12px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3
                            style={{
                                color: "#666",
                                marginTop: 0,
                            }}
                        >
                            Orders
                        </h3>

                        <p
                            style={{
                                fontSize: "32px",
                                fontWeight: "bold",
                                color: "#e91e63",
                                margin: "10px 0",
                            }}
                        >
                            {loading
                                ? "..."
                                : stats.orders}
                        </p>

                        <button
                            onClick={() =>
                                navigate("/admin/orders")
                            }
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

                    {/* =================================================
                        CUSTOMERS
                    ================================================== */}
                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "12px",
                            boxShadow:
                                "0 3px 12px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3
                            style={{
                                color: "#666",
                                marginTop: 0,
                            }}
                        >
                            Customers
                        </h3>

                        <p
                            style={{
                                fontSize: "32px",
                                fontWeight: "bold",
                                color: "#e91e63",
                                margin: "10px 0",
                            }}
                        >
                            {loading
                                ? "..."
                                : stats.customers}
                        </p>

                        <button
                            onClick={() =>
                                navigate("/admin/customers")
                            }
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

                    {/* =================================================
                        REVENUE
                    ================================================== */}
                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "12px",
                            boxShadow:
                                "0 3px 12px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3
                            style={{
                                color: "#666",
                                marginTop: 0,
                            }}
                        >
                            Revenue
                        </h3>

                        <p
                            style={{
                                fontSize: "32px",
                                fontWeight: "bold",
                                color: "#e91e63",
                                margin: "10px 0",
                            }}
                        >
                            {loading
                                ? "..."
                                : `₹${Number(
                                      stats.revenue
                                  ).toLocaleString(
                                      "en-IN"
                                  )}`}
                        </p>

                        <button
                            onClick={() =>
                                navigate("/admin/orders")
                            }
                            style={{
                                background: "#e91e63",
                                color: "#fff",
                                border: "none",
                                padding: "10px 15px",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            View Orders
                        </button>
                    </div>
                </div>

                {/* =====================================================
                    QUICK ACTIONS
                ====================================================== */}
                <section
                    style={{
                        background: "#fff",
                        padding: "30px",
                        borderRadius: "12px",
                        boxShadow:
                            "0 3px 12px rgba(0,0,0,0.08)",
                    }}
                >
                    <h2
                        style={{
                            marginTop: 0,
                        }}
                    >
                        Quick Actions
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                            flexWrap: "wrap",
                        }}
                    >
                        {/* Add Product */}
                        <button
                            onClick={() =>
                                navigate("/admin/products")
                            }
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

                        {/* View Orders */}
                        <button
                            onClick={() =>
                                navigate("/admin/orders")
                            }
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

                        {/* View Customers */}
                        <button
                            onClick={() =>
                                navigate("/admin/customers")
                            }
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