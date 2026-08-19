import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function OrderDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [order, setOrder] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // ==========================================
    // IMAGE URL HELPER
    // ==========================================
    const getImageUrl = (image) => {
        if (!image) {
            return "/images/logo.png";
        }

        // If database already contains a complete URL
        if (
            image.startsWith("http://") ||
            image.startsWith("https://")
        ) {
            return image;
        }

        // If database contains /images/...
        if (image.startsWith("/")) {
            return image;
        }

        // If database contains images/...
        return `/${image}`;
    };

    // ==========================================
    // GET ORDER DETAILS
    // ==========================================
    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch(`https://glownest-beauty-production.up.railway.app/orders/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        `Server returned ${res.status}`
                    );
                }

                return res.json();
            })
            .then((data) => {
                console.log("🔥 ORDER DETAILS:", data);

                setOrder(data.order);
                setItems(data.items || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error(
                    "❌ Failed to fetch order details:",
                    error
                );

                setLoading(false);
            });
    }, [id]);

    // ==========================================
    // LOADING
    // ==========================================
    if (loading) {
        return (
            <div
                style={{
                    padding: "40px",
                    textAlign: "center",
                }}
            >
                <h2>Loading order...</h2>
            </div>
        );
    }

    // ==========================================
    // ORDER NOT FOUND
    // ==========================================
    if (!order) {
        return (
            <div
                style={{
                    padding: "40px",
                    textAlign: "center",
                }}
            >
                <h2>Order not found</h2>

                <button
                    onClick={() => navigate("/orders")}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "6px",
                        background: "#e91e63",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Back to Orders
                </button>
            </div>
        );
    }

    // ==========================================
    // ORDER STATUS
    // ==========================================
    const statuses = [
        "Pending",
        "Confirmed",
        "Shipped",
        "Delivered",
    ];

    const currentStatusIndex = statuses.findIndex(
        (status) =>
            status.toLowerCase() ===
            String(order.status).toLowerCase()
    );

    const activeIndex =
        currentStatusIndex === -1
            ? 0
            : currentStatusIndex;

    // ==========================================
    // PAGE
    // ==========================================
    return (
        <div
            style={{
                padding: "30px",
                maxWidth: "1000px",
                margin: "0 auto",
            }}
        >
            {/* ==========================================
                BACK BUTTON
            ========================================== */}
            <button
                onClick={() => navigate("/orders")}
                style={{
                    padding: "10px 15px",
                    marginBottom: "20px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "6px",
                    background: "#f5f5f5",
                }}
            >
                ← Back to Orders
            </button>

            <h1>Order Details</h1>

            {/* ==========================================
                ORDER SUMMARY
            ========================================== */}
            <div
                style={{
                    border: "1px solid #ddd",
                    padding: "20px",
                    borderRadius: "10px",
                    marginBottom: "25px",
                    background: "#fff",
                }}
            >
                <h2>Order #{order.id}</h2>

                <p>
                    <strong>Status:</strong>{" "}
                    {order.status}
                </p>

                <p>
                    <strong>Date:</strong>{" "}
                    {new Date(
                        order.created_at
                    ).toLocaleString()}
                </p>

                <p>
                    <strong>Total:</strong>{" "}
                    ₹
                    {Number(
                        order.total_amount
                    ).toFixed(2)}
                </p>
            </div>

            {/* ==========================================
                ORDER TRACKING
            ========================================== */}
            <div
                style={{
                    border: "1px solid #ddd",
                    padding: "25px",
                    borderRadius: "10px",
                    marginBottom: "30px",
                    background: "#fff",
                }}
            >
                <h2
                    style={{
                        marginBottom: "30px",
                    }}
                >
                    Order Tracking
                </h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent:
                            "space-between",
                        position: "relative",
                    }}
                >
                    {/* GREY TRACKING LINE */}
                    <div
                        style={{
                            position: "absolute",
                            top: "20px",
                            left: "10%",
                            right: "10%",
                            height: "4px",
                            background: "#ddd",
                            zIndex: 0,
                        }}
                    />

                    {/* PINK ACTIVE LINE */}
                    <div
                        style={{
                            position: "absolute",
                            top: "20px",
                            left: "10%",
                            width:
                                activeIndex === 0
                                    ? "0%"
                                    : `${
                                          (activeIndex /
                                              (statuses.length -
                                                  1)) *
                                          80
                                      }%`,
                            height: "4px",
                            background:
                                "#e91e63",
                            zIndex: 1,
                            transition:
                                "width 0.3s ease",
                        }}
                    />

                    {/* STATUS STEPS */}
                    {statuses.map(
                        (status, index) => {
                            const completed =
                                index <=
                                activeIndex;

                            return (
                                <div
                                    key={status}
                                    style={{
                                        textAlign:
                                            "center",
                                        width: "25%",
                                        position:
                                            "relative",
                                        zIndex: 2,
                                    }}
                                >
                                    <div
                                        style={{
                                            width:
                                                "40px",
                                            height:
                                                "40px",
                                            borderRadius:
                                                "50%",
                                            margin:
                                                "0 auto 10px",
                                            display:
                                                "flex",
                                            alignItems:
                                                "center",
                                            justifyContent:
                                                "center",
                                            background:
                                                completed
                                                    ? "#e91e63"
                                                    : "#ddd",
                                            color: "white",
                                            fontWeight:
                                                "bold",
                                        }}
                                    >
                                        {completed
                                            ? "✓"
                                            : index +
                                              1}
                                    </div>

                                    <strong
                                        style={{
                                            color:
                                                completed
                                                    ? "#e91e63"
                                                    : "#777",
                                        }}
                                    >
                                        {status}
                                    </strong>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>

            {/* ==========================================
                PRODUCTS
            ========================================== */}
            <h2>Products</h2>

            {items.length === 0 ? (
                <p>
                    No products found for this
                    order.
                </p>
            ) : (
                items.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            border: "1px solid #ddd",
                            padding: "20px",
                            marginBottom: "15px",
                            borderRadius: "10px",
                            background: "#fff",
                        }}
                    >
                        {/* ==========================================
                            PRODUCT IMAGE
                        ========================================== */}
                        <div
                            style={{
                                width: "120px",
                                height: "120px",
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                                borderRadius: "8px",
                                background: "#f8f8f8",
                            }}
                        >
                            <img
                                src={getImageUrl(
                                    item.image
                                )}
                                alt={
                                    item.name ||
                                    "Product"
                                }
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit:
                                        "contain",
                                    borderRadius:
                                        "8px",
                                }}
                                onError={(e) => {
                                    console.error(
                                        "❌ Image failed:",
                                        item.image
                                    );

                                    // Prevent infinite
                                    // onError loop
                                    e.currentTarget.onerror =
                                        null;

                                    // Use logo as
                                    // fallback
                                    e.currentTarget.src =
                                        "/images/logo.png";
                                }}
                            />
                        </div>

                        {/* ==========================================
                            PRODUCT INFORMATION
                        ========================================== */}
                        <div>
                            <h3
                                style={{
                                    marginTop: 0,
                                    marginBottom:
                                        "12px",
                                }}
                            >
                                {item.name}
                            </h3>

                            <p>
                                <strong>
                                    Brand:
                                </strong>{" "}
                                {item.brand}
                            </p>

                            <p>
                                <strong>
                                    Category:
                                </strong>{" "}
                                {item.category}
                            </p>

                            <p>
                                <strong>
                                    Quantity:
                                </strong>{" "}
                                {item.quantity}
                            </p>

                            <p>
                                <strong>
                                    Price:
                                </strong>{" "}
                                ₹
                                {Number(
                                    item.price
                                ).toFixed(2)}
                            </p>

                            <p>
                                <strong>
                                    Subtotal:
                                </strong>{" "}
                                ₹
                                {(
                                    Number(
                                        item.price
                                    ) *
                                    Number(
                                        item.quantity
                                    )
                                ).toFixed(2)}
                            </p>
                        </div>
                    </div>
                ))
            )}

            {/* ==========================================
                TOTAL
            ========================================== */}
            <div
                style={{
                    borderTop:
                        "2px solid #ddd",
                    marginTop: "25px",
                    paddingTop: "20px",
                    marginBottom: "40px",
                }}
            >
                <h2>
                    Total: ₹
                    {Number(
                        order.total_amount
                    ).toFixed(2)}
                </h2>
            </div>
        </div>
    );
}