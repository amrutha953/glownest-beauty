import React, { useEffect, useState } from "react";

const AdminOrders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // =====================================================
    // GET ADMIN ORDERS
    // =====================================================

    const fetchOrders = async () => {

        try {

            setLoading(true);
            setError("");

            const token = localStorage.getItem("adminToken");

            if (!token) {
                setError("Admin session not found. Please login again.");
                return;
            }

            const response = await fetch(
                "http://localhost:5000/admin/orders",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            console.log("📦 ADMIN ORDERS:", data);

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to fetch orders"
                );
            }

            setOrders(data.orders || []);

        } catch (error) {

            console.error(
                "❌ Admin orders error:",
                error
            );

            setError(error.message);

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

            const response = await fetch(
                `http://localhost:5000/admin/orders/${orderId}/status`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        status
                    })
                }
            );

            const data = await response.json();

            console.log(
                "🔄 STATUS UPDATE:",
                data
            );

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to update order status"
                );
            }

            // Update UI immediately
            setOrders((previousOrders) =>
                previousOrders.map((order) =>
                    order.id === orderId
                        ? {
                            ...order,
                            status: status
                        }
                        : order
                )
            );

        } catch (error) {

            console.error(
                "❌ Status update error:",
                error
            );

            alert(error.message);

        }
    };


    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {

        return (
            <div
                style={{
                    padding: "40px",
                    textAlign: "center"
                }}
            >
                <h2>Loading Orders...</h2>
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
                    padding: "40px",
                    textAlign: "center"
                }}
            >

                <h2>Unable to Load Orders</h2>

                <p>{error}</p>

                <button
                    onClick={fetchOrders}
                    style={{
                        padding: "10px 20px",
                        cursor: "pointer"
                    }}
                >
                    Try Again
                </button>

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
                background: "#f8f8f8",
                minHeight: "100vh"
            }}
        >

            {/* HEADER */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "25px"
                }}
            >

                <div>

                    <h1
                        style={{
                            margin: 0,
                            color: "#e91e63"
                        }}
                    >
                        Admin Orders
                    </h1>

                    <p
                        style={{
                            color: "#666"
                        }}
                    >
                        Manage all GlowNest customer orders
                    </p>

                </div>


                <button
                    onClick={fetchOrders}
                    style={{
                        background: "#e91e63",
                        color: "white",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "6px",
                        cursor: "pointer"
                    }}
                >
                    🔄 Refresh
                </button>

            </div>


            {/* ORDER COUNT */}

            <div
                style={{
                    background: "white",
                    padding: "18px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    boxShadow:
                        "0 2px 8px rgba(0,0,0,0.08)"
                }}
            >

                <strong>
                    Total Orders:
                </strong>{" "}

                {orders.length}

            </div>


            {/* NO ORDERS */}

            {orders.length === 0 ? (

                <div
                    style={{
                        background: "white",
                        padding: "40px",
                        textAlign: "center",
                        borderRadius: "10px"
                    }}
                >

                    <h3>No Orders Found</h3>

                </div>

            ) : (

                <div
                    style={{
                        background: "white",
                        borderRadius: "10px",
                        overflow: "auto",
                        boxShadow:
                            "0 2px 8px rgba(0,0,0,0.08)"
                    }}
                >

                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            minWidth: "1000px"
                        }}
                    >

                        <thead>

                            <tr
                                style={{
                                    background: "#fce4ec"
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

                            </tr>

                        </thead>


                        <tbody>

                            {orders.map((order) => (

                                <tr key={order.id}>

                                    <td style={tdStyle}>
                                        #{order.id}
                                    </td>

                                    <td style={tdStyle}>
                                        {order.customer_name ||
                                            "Unknown"}
                                    </td>

                                    <td style={tdStyle}>
                                        {order.customer_email ||
                                            "N/A"}
                                    </td>

                                    <td style={tdStyle}>
                                        ₹
                                        {Number(
                                            order.total_amount
                                        ).toFixed(2)}
                                    </td>

                                    <td style={tdStyle}>

                                        <select
                                            value={
                                                order.status ||
                                                "Pending"
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
                                                cursor: "pointer"
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

                                    </td>

                                    <td style={tdStyle}>

                                        {order.created_at
                                            ? new Date(
                                                order.created_at
                                            ).toLocaleString()
                                            : "N/A"}

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
    whiteSpace: "nowrap"
};

const tdStyle = {
    padding: "14px",
    borderBottom: "1px solid #eee",
    whiteSpace: "nowrap"
};


export default AdminOrders;