import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminOrders = () => {
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [updatingOrderId, setUpdatingOrderId] = useState(null);

    // =====================================================
    // GET ADMIN ORDERS
    // =====================================================

    const fetchOrders = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("adminToken");

            if (!token) {
                navigate("/admin/login");
                return;
            }

            const response = await fetch(
                "https://glownest-beauty-production.up.railway.app/admin/orders",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            console.log("📦 ADMIN ORDERS:", data);

            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("admin");
                navigate("/admin/login");
                return;
            }

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to fetch orders"
                );
            }

            setOrders(data.orders || []);
        } catch (error) {
            console.error("❌ Admin orders error:", error);

            setError(
                error.message || "Failed to load orders"
            );
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // LOAD ORDERS
    // =====================================================

    useEffect(() => {
        fetchOrders();
    }, []);

    // =====================================================
    // UPDATE ORDER STATUS
    // =====================================================

    const updateStatus = async (orderId, status) => {
        try {
            const token = localStorage.getItem("adminToken");

            if (!token) {
                navigate("/admin/login");
                return;
            }

            setUpdatingOrderId(orderId);

            const response = await fetch(
                `https://glownest-beauty-production.up.railway.app/admin/orders/${orderId}/status`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        status,
                    }),
                }
            );

            const data = await response.json();

            console.log("🔄 STATUS UPDATE:", data);

            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("admin");
                navigate("/admin/login");
                return;
            }

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Failed to update order status"
                );
            }

            // Update the order in the UI
            setOrders((previousOrders) =>
                previousOrders.map((order) =>
                    order.id === orderId
                        ? {
                              ...order,
                              status: status,
                          }
                        : order
                )
            );

            console.log(
                `✅ Order #${orderId} status changed to ${status}`
            );
        } catch (error) {
            console.error(
                "❌ Status update error:",
                error
            );

            alert(
                error.message ||
                    "Failed to update order status"
            );
        } finally {
            setUpdatingOrderId(null);
        }
    };

    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    background: "#f8f9fa",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#e91e63" }}>
                        Loading Orders...
                    </h2>

                    <p style={{ color: "#666" }}>
                        Please wait while we load all orders.
                    </p>
                </div>
            </div>
        );
    }

    // =====================================================
    // ERROR
    // =====================================================

    if (error) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    background: "#f8f9fa",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <div
                    style={{
                        background: "#fff",
                        padding: "40px",
                        borderRadius: "12px",
                        textAlign: "center",
                        boxShadow:
                            "0 3px 12px rgba(0,0,0,0.08)",
                    }}
                >
                    <h2 style={{ color: "#e91e63" }}>
                        Unable to Load Orders
                    </h2>

                    <p style={{ color: "#666" }}>
                        {error}
                    </p>

                    <button
                        onClick={fetchOrders}
                        style={{
                            background: "#e91e63",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            marginRight: "10px",
                        }}
                    >
                        Try Again
                    </button>

                    <button
                        onClick={() =>
                            navigate("/admin/dashboard")
                        }
                        style={{
                            background: "#333",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                        }}
                    >
                        Dashboard
                    </button>
                </div>
            </div>
        );
    }

    // =====================================================
    // PAGE
    // =====================================================

    return (
        <div
            style={{
                padding: "30px",
                background: "#f8f9fa",
                minHeight: "100vh",
                fontFamily: "Arial, sans-serif",
                boxSizing: "border-box",
            }}
        >
            {/* HEADER */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "25px",
                    flexWrap: "wrap",
                    gap: "15px",
                }}
            >
                <div>
                    <h1
                        style={{
                            margin: 0,
                            color: "#e91e63",
                        }}
                    >
                        Admin Orders
                    </h1>

                    <p
                        style={{
                            color: "#666",
                            marginBottom: 0,
                        }}
                    >
                        Manage all GlowNest customer orders
                    </p>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                    }}
                >
                    <button
                        onClick={() =>
                            navigate("/admin/dashboard")
                        }
                        style={{
                            background: "#333",
                            color: "#fff",
                            border: "none",
                            padding: "10px 18px",
                            borderRadius: "6px",
                            cursor: "pointer",
                        }}
                    >
                        Dashboard
                    </button>

                    <button
                        onClick={fetchOrders}
                        style={{
                            background: "#e91e63",
                            color: "#fff",
                            border: "none",
                            padding: "10px 18px",
                            borderRadius: "6px",
                            cursor: "pointer",
                        }}
                    >
                        🔄 Refresh
                    </button>
                </div>
            </div>

            {/* ORDER COUNT */}

            <div
                style={{
                    background: "#fff",
                    padding: "18px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    boxShadow:
                        "0 2px 8px rgba(0,0,0,0.08)",
                }}
            >
                <strong>Total Orders:</strong>{" "}
                <span
                    style={{
                        color: "#e91e63",
                        fontWeight: "bold",
                    }}
                >
                    {orders.length}
                </span>
            </div>

            {/* NO ORDERS */}

            {orders.length === 0 ? (
                <div
                    style={{
                        background: "#fff",
                        padding: "40px",
                        textAlign: "center",
                        borderRadius: "10px",
                        boxShadow:
                            "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                >
                    <h3>No Orders Found</h3>

                    <p style={{ color: "#666" }}>
                        There are currently no customer orders.
                    </p>
                </div>
            ) : (
                <div
                    style={{
                        background: "#fff",
                        borderRadius: "10px",
                        overflow: "auto",
                        boxShadow:
                            "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                >
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            minWidth: "1000px",
                        }}
                    >
                        <thead>
                            <tr
                                style={{
                                    background: "#fce4ec",
                                }}
                            >
                                <th style={thStyle}>
                                    Order ID
                                </th>

                                <th style={thStyle}>
                                    Customer
                                </th>

                                <th style={thStyle}>
                                    Email
                                </th>

                                <th style={thStyle}>
                                    Amount
                                </th>

                                <th style={thStyle}>
                                    Status
                                </th>

                                <th style={thStyle}>
                                    Date
                                </th>

                                <th style={thStyle}>
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    {/* ORDER ID */}

                                    <td style={tdStyle}>
                                        <strong>
                                            #{order.id}
                                        </strong>
                                    </td>

                                    {/* CUSTOMER */}

                                    <td style={tdStyle}>
                                        {order.customer_name ||
                                            "Unknown"}
                                    </td>

                                    {/* EMAIL */}

                                    <td style={tdStyle}>
                                        {order.customer_email ||
                                            "N/A"}
                                    </td>

                                    {/* AMOUNT */}

                                    <td style={tdStyle}>
                                        <strong>
                                            ₹
                                            {Number(
                                                order.total_amount
                                            ).toLocaleString(
                                                "en-IN",
                                                {
                                                    minimumFractionDigits: 2,
                                                }
                                            )}
                                        </strong>
                                    </td>

                                    {/* STATUS */}

                                    <td style={tdStyle}>
                                        <select
                                            value={
                                                order.status ||
                                                "Pending"
                                            }
                                            disabled={
                                                updatingOrderId ===
                                                order.id
                                            }
                                            onChange={(e) =>
                                                updateStatus(
                                                    order.id,
                                                    e.target.value
                                                )
                                            }
                                            style={{
                                                padding: "7px",
                                                borderRadius: "5px",
                                                border:
                                                    "1px solid #ddd",
                                                cursor:
                                                    updatingOrderId ===
                                                    order.id
                                                        ? "not-allowed"
                                                        : "pointer",
                                                background:
                                                    "#fff",
                                            }}
                                        >
                                            <option value="Pending">
                                                Pending
                                            </option>

                                            <option value="Confirmed">
                                                Confirmed
                                            </option>

                                            <option value="Shipped">
                                                Shipped
                                            </option>

                                            <option value="Delivered">
                                                Delivered
                                            </option>

                                            <option value="Cancelled">
                                                Cancelled
                                            </option>
                                        </select>

                                        {updatingOrderId ===
                                            order.id && (
                                            <span
                                                style={{
                                                    marginLeft:
                                                        "8px",
                                                    fontSize:
                                                        "12px",
                                                    color:
                                                        "#666",
                                                }}
                                            >
                                                Updating...
                                            </span>
                                        )}
                                    </td>

                                    {/* DATE */}

                                    <td style={tdStyle}>
                                        {order.created_at
                                            ? new Date(
                                                  order.created_at
                                              ).toLocaleString(
                                                  "en-IN"
                                              )
                                            : "N/A"}
                                    </td>

                                    {/* ACTION */}

                                    <td style={tdStyle}>
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/admin/orders/${order.id}`
                                                )
                                            }
                                            style={{
                                                background:
                                                    "#e91e63",
                                                color:
                                                    "#fff",
                                                border:
                                                    "none",
                                                padding:
                                                    "8px 12px",
                                                borderRadius:
                                                    "5px",
                                                cursor:
                                                    "pointer",
                                            }}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

// =====================================================
// TABLE STYLES
// =====================================================

const thStyle = {
    padding: "14px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    whiteSpace: "nowrap",
};

const tdStyle = {
    padding: "14px",
    borderBottom: "1px solid #eee",
    whiteSpace: "nowrap",
};

export default AdminOrders;