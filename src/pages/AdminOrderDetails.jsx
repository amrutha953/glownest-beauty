import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AdminOrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // =====================================================
    // FETCH ADMIN ORDER DETAILS
    // =====================================================

    const fetchOrderDetails = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("adminToken");

            if (!token) {
                navigate("/admin/login");
                return;
            }

            const response = await fetch(
                `http://localhost:5000/admin/orders/${id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            console.log("📦 ADMIN ORDER DETAILS:", data);

            // =====================================================
            // ADMIN TOKEN ERROR
            // =====================================================

            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("admin");

                navigate("/admin/login");
                return;
            }

            // =====================================================
            // API ERROR
            // =====================================================

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to fetch order details"
                );
            }

            // =====================================================
            // IMPORTANT:
            // BACKEND RETURNS:
            //
            // {
            //     order: {...},
            //     items: [...]
            // }
            //
            // So we combine them into ONE object.
            // =====================================================

            setOrder({
                ...(data.order || data),
                items: data.items || [],
            });
        } catch (error) {
            console.error(
                "❌ Admin order details error:",
                error
            );

            setError(
                error.message ||
                    "Failed to load order details"
            );
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // LOAD ORDER
    // =====================================================

    useEffect(() => {
        fetchOrderDetails();
    }, [id]);

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
                <h2
                    style={{
                        color: "#e91e63",
                    }}
                >
                    Loading Order Details...
                </h2>
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
                    <h2
                        style={{
                            color: "#e91e63",
                        }}
                    >
                        Unable to Load Order
                    </h2>

                    <p
                        style={{
                            color: "#666",
                        }}
                    >
                        {error}
                    </p>

                    <button
                        onClick={() =>
                            navigate("/admin/orders")
                        }
                        style={{
                            background: "#e91e63",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                        }}
                    >
                        Back to Orders
                    </button>
                </div>
            </div>
        );
    }

    // =====================================================
    // ORDER NOT FOUND
    // =====================================================

    if (!order) {
        return (
            <div
                style={{
                    padding: "40px",
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <h2>Order Not Found</h2>

                <button
                    onClick={() =>
                        navigate("/admin/orders")
                    }
                    style={{
                        background: "#e91e63",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Back to Orders
                </button>
            </div>
        );
    }

    // =====================================================
    // CALCULATE ITEMS TOTAL
    // =====================================================

    const calculatedTotal = (order.items || []).reduce(
        (total, item) => {
            const price = Number(item.price || 0);
            const quantity = Number(
                item.quantity || 0
            );

            return total + price * quantity;
        },
        0
    );

    // =====================================================
    // MAIN UI
    // =====================================================

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f8f9fa",
                padding: "30px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* =====================================================
                HEADER
            ===================================================== */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "25px",
                }}
            >
                <div>
                    <h1
                        style={{
                            margin: 0,
                            color: "#e91e63",
                        }}
                    >
                        Order #{order.id}
                    </h1>

                    <p
                        style={{
                            color: "#666",
                            marginTop: "8px",
                        }}
                    >
                        Admin Order Details
                    </p>
                </div>

                <button
                    onClick={() =>
                        navigate("/admin/orders")
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
                    ← Back to Orders
                </button>
            </div>

            {/* =====================================================
                CUSTOMER INFORMATION
            ===================================================== */}

            <div
                style={{
                    background: "#fff",
                    padding: "25px",
                    borderRadius: "12px",
                    boxShadow:
                        "0 2px 8px rgba(0,0,0,0.08)",
                    marginBottom: "20px",
                }}
            >
                <h2
                    style={{
                        color: "#e91e63",
                        marginTop: 0,
                    }}
                >
                    Customer Information
                </h2>

                <p>
                    <strong>Name:</strong>{" "}
                    {order.customer_name ||
                        "Unknown"}
                </p>

                <p>
                    <strong>Email:</strong>{" "}
                    {order.customer_email ||
                        "N/A"}
                </p>

                <p>
                    <strong>Customer ID:</strong>{" "}
                    {order.customer_id ||
                        "N/A"}
                </p>
            </div>

            {/* =====================================================
                ORDER INFORMATION
            ===================================================== */}

            <div
                style={{
                    background: "#fff",
                    padding: "25px",
                    borderRadius: "12px",
                    boxShadow:
                        "0 2px 8px rgba(0,0,0,0.08)",
                    marginBottom: "20px",
                }}
            >
                <h2
                    style={{
                        color: "#e91e63",
                        marginTop: 0,
                    }}
                >
                    Order Information
                </h2>

                <p>
                    <strong>Order ID:</strong> #
                    {order.id}
                </p>

                <p>
                    <strong>Status:</strong>{" "}
                    <span
                        style={{
                            display: "inline-block",
                            padding: "5px 12px",
                            borderRadius: "20px",
                            background:
                                order.status ===
                                "Delivered"
                                    ? "#d4edda"
                                    : order.status ===
                                      "Shipped"
                                    ? "#cce5ff"
                                    : order.status ===
                                      "Confirmed"
                                    ? "#fff3cd"
                                    : "#f8d7da",
                            color:
                                order.status ===
                                "Delivered"
                                    ? "#155724"
                                    : order.status ===
                                      "Shipped"
                                    ? "#004085"
                                    : order.status ===
                                      "Confirmed"
                                    ? "#856404"
                                    : "#721c24",
                            fontWeight: "600",
                        }}
                    >
                        {order.status ||
                            "Pending"}
                    </span>
                </p>

                <p>
                    <strong>Total Amount:</strong>{" "}
                    ₹
                    {Number(
                        order.total_amount || 0
                    ).toLocaleString(
                        "en-IN",
                        {
                            minimumFractionDigits: 2,
                        }
                    )}
                </p>

                <p>
                    <strong>Order Date:</strong>{" "}
                    {order.created_at
                        ? new Date(
                              order.created_at
                          ).toLocaleString(
                              "en-IN"
                          )
                        : "N/A"}
                </p>
            </div>

            {/* =====================================================
                PURCHASED PRODUCTS
            ===================================================== */}

            <div
                style={{
                    background: "#fff",
                    padding: "25px",
                    borderRadius: "12px",
                    boxShadow:
                        "0 2px 8px rgba(0,0,0,0.08)",
                    marginBottom: "20px",
                }}
            >
                <h2
                    style={{
                        color: "#e91e63",
                        marginTop: 0,
                        marginBottom: "20px",
                    }}
                >
                    Purchased Products
                </h2>

                {order.items &&
                order.items.length > 0 ? (
                    <>
                        <div
                            style={{
                                overflowX:
                                    "auto",
                            }}
                        >
                            <table
                                style={{
                                    width: "100%",
                                    borderCollapse:
                                        "collapse",
                                    minWidth:
                                        "650px",
                                }}
                            >
                                <thead>
                                    <tr
                                        style={{
                                            background:
                                                "#fce4ec",
                                        }}
                                    >
                                        <th
                                            style={
                                                thStyle
                                            }
                                        >
                                            #
                                        </th>

                                        <th
                                            style={
                                                thStyle
                                            }
                                        >
                                            Product
                                        </th>

                                        <th
                                            style={
                                                thStyle
                                            }
                                        >
                                            Quantity
                                        </th>

                                        <th
                                            style={
                                                thStyle
                                            }
                                        >
                                            Price
                                        </th>

                                        <th
                                            style={
                                                thStyle
                                            }
                                        >
                                            Item Total
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {order.items.map(
                                        (
                                            item,
                                            index
                                        ) => {
                                            const price =
                                                Number(
                                                    item.price ||
                                                        0
                                                );

                                            const quantity =
                                                Number(
                                                    item.quantity ||
                                                        0
                                                );

                                            const itemTotal =
                                                price *
                                                quantity;

                                            return (
                                                <tr
                                                    key={
                                                        item.id ||
                                                        index
                                                    }
                                                >
                                                    <td
                                                        style={
                                                            tdStyle
                                                        }
                                                    >
                                                        {index +
                                                            1}
                                                    </td>

                                                    <td style={tdStyle}>
    <div
        style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
        }}
    >
        {item.image ? (
            <img
                src={item.image}
                alt={item.name || "Product"}
                style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    border: "1px solid #eee",
                    background: "#fff",
                }}
                onError={(e) => {
                    e.currentTarget.style.display =
                        "none";
                }}
            />
        ) : (
            <div
                style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "8px",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#999",
                    fontSize: "12px",
                }}
            >
                No Image
            </div>
        )}

        <div>
            <strong>
                {item.name ||
                    "Unknown Product"}
            </strong>

            <div
                style={{
                    fontSize: "12px",
                    color: "#777",
                    marginTop: "4px",
                }}
            >
                Product ID: {item.product_id}
            </div>

            {item.brand && (
                <div
                    style={{
                        fontSize: "12px",
                        color: "#777",
                    }}
                >
                    Brand: {item.brand}
                </div>
            )}
        </div>
    </div>
</td>

                                                    <td
                                                        style={
                                                            tdStyle
                                                        }
                                                    >
                                                        {
                                                            quantity
                                                        }
                                                    </td>

                                                    <td
                                                        style={
                                                            tdStyle
                                                        }
                                                    >
                                                        ₹
                                                        {price.toLocaleString(
                                                            "en-IN",
                                                            {
                                                                minimumFractionDigits:
                                                                    2,
                                                            }
                                                        )}
                                                    </td>

                                                    <td
                                                        style={
                                                            tdStyle
                                                        }
                                                    >
                                                        <strong>
                                                            ₹
                                                            {itemTotal.toLocaleString(
                                                                "en-IN",
                                                                {
                                                                    minimumFractionDigits:
                                                                        2,
                                                                }
                                                            )}
                                                        </strong>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* =================================================
                            TOTALS
                        ================================================= */}

                        <div
                            style={{
                                marginTop:
                                    "25px",
                                borderTop:
                                    "1px solid #ddd",
                                paddingTop:
                                    "20px",
                                display: "flex",
                                justifyContent:
                                    "flex-end",
                            }}
                        >
                            <div
                                style={{
                                    width: "300px",
                                }}
                            >
                                <div
                                    style={{
                                        display:
                                            "flex",
                                        justifyContent:
                                            "space-between",
                                        marginBottom:
                                            "10px",
                                        color: "#666",
                                    }}
                                >
                                    <span>
                                        Items Total
                                    </span>

                                    <span>
                                        ₹
                                        {calculatedTotal.toLocaleString(
                                            "en-IN",
                                            {
                                                minimumFractionDigits:
                                                    2,
                                            }
                                        )}
                                    </span>
                                </div>

                                <div
                                    style={{
                                        display:
                                            "flex",
                                        justifyContent:
                                            "space-between",
                                        paddingTop:
                                            "12px",
                                        borderTop:
                                            "1px solid #ddd",
                                        fontSize:
                                            "20px",
                                        fontWeight:
                                            "bold",
                                    }}
                                >
                                    <span>
                                        Grand Total
                                    </span>

                                    <span
                                        style={{
                                            color:
                                                "#e91e63",
                                        }}
                                    >
                                        ₹
                                        {Number(
                                            order.total_amount ||
                                                calculatedTotal ||
                                                0
                                        ).toLocaleString(
                                            "en-IN",
                                            {
                                                minimumFractionDigits:
                                                    2,
                                            }
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div
                        style={{
                            padding: "30px",
                            textAlign: "center",
                            background:
                                "#f8f9fa",
                            borderRadius:
                                "8px",
                            color: "#666",
                        }}
                    >
                        <p>
                            No products found
                            for this order.
                        </p>
                    </div>
                )}
            </div>
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
    fontWeight: "600",
};

const tdStyle = {
    padding: "14px",
    borderBottom: "1px solid #eee",
};

export default AdminOrderDetails;