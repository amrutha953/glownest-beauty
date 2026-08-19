import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://glownest-beauty-production.up.railway.app/orders", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("ORDERS:", data);
                setOrders(data.orders || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch orders:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div
                style={{
                    minHeight: "60vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h2>Loading orders...</h2>
            </div>
        );
    }

    return (
        <div
            style={{
                padding: "40px 6%",
                background: "#fafafa",
                minHeight: "70vh",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "10px",
                }}
            >
                My Orders
            </h1>

            <p
                style={{
                    textAlign: "center",
                    color: "#777",
                    marginBottom: "35px",
                }}
            >
                View and track all your GlowNest orders
            </p>

            {orders.length === 0 ? (
                <div
                    style={{
                        textAlign: "center",
                        background: "white",
                        padding: "50px",
                        borderRadius: "12px",
                        border: "1px solid #eee",
                    }}
                >
                    <h2>No orders found</h2>

                    <p style={{ color: "#777" }}>
                        You haven't placed any orders yet.
                    </p>

                    <button
                        onClick={() => navigate("/")}
                        style={{
                            marginTop: "15px",
                            padding: "12px 25px",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            background: "#e91e63",
                            color: "white",
                            fontWeight: "600",
                        }}
                    >
                        Start Shopping
                    </button>
                </div>
            ) : (
                <div
                    style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}
                >
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            style={{
                                background: "white",
                                border: "1px solid #eee",
                                borderRadius: "12px",
                                padding: "25px",
                                marginBottom: "20px",
                                boxShadow:
                                    "0 2px 8px rgba(0,0,0,0.05)",
                            }}
                        >
                            {/* Order Header */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                    gap: "15px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div>
                                    <h2
                                        style={{
                                            margin: 0,
                                            fontSize: "20px",
                                        }}
                                    >
                                        Order #{order.id}
                                    </h2>

                                    <p
                                        style={{
                                            margin: "7px 0 0",
                                            color: "#777",
                                        }}
                                    >
                                        {new Date(
                                            order.created_at
                                        ).toLocaleString()}
                                    </p>
                                </div>

                                <span
                                    style={{
                                        background:
                                            order.status === "Pending"
                                                ? "#fff3cd"
                                                : "#e8f5e9",
                                        color:
                                            order.status === "Pending"
                                                ? "#856404"
                                                : "#2e7d32",
                                        padding: "7px 14px",
                                        borderRadius: "20px",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                    }}
                                >
                                    {order.status}
                                </span>
                            </div>

                            {/* Order Information */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderTop: "1px solid #eee",
                                    paddingTop: "20px",
                                    flexWrap: "wrap",
                                    gap: "15px",
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            margin: 0,
                                            color: "#777",
                                        }}
                                    >
                                        Order Total
                                    </p>

                                    <h3
                                        style={{
                                            margin: "5px 0 0",
                                        }}
                                    >
                                        ₹
                                        {Number(
                                            order.total_amount
                                        ).toFixed(2)}
                                    </h3>
                                </div>

                                <button
                                    onClick={() =>
                                        navigate(
                                            `/orders/${order.id}`
                                        )
                                    }
                                    style={{
                                        padding: "11px 24px",
                                        border: "none",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        background: "#e91e63",
                                        color: "white",
                                        fontWeight: "600",
                                    }}
                                >
                                    View Order Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}