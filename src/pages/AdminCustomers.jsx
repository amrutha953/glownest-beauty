import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminCustomers = () => {
    const navigate = useNavigate();

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // =====================================================
    // GET CUSTOMERS
    // =====================================================

    const fetchCustomers = async () => {
        try {
            setLoading(true);
            setError("");

            const adminToken =
                localStorage.getItem("adminToken");

            if (!adminToken) {
                navigate("/admin/login");
                return;
            }

            const response = await fetch(
                "https://glownest-beauty-production.up.railway.app/admin/customers",
                {
                    method: "GET",

                    headers: {
                        "Content-Type": "application/json",

                        Authorization:
                            `Bearer ${adminToken}`,
                    },
                }
            );

            // Read response as text first
            // This prevents the JSON '<' error
            const text = await response.text();

            console.log(
                "CUSTOMERS RESPONSE:",
                text
            );

            let data;

            try {
                data = JSON.parse(text);
            } catch (jsonError) {
                console.error(
                    "❌ Response is not JSON:",
                    text
                );

                throw new Error(
                    "Backend returned an invalid response. Make sure backend is running on port 5000."
                );
            }

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to load customers"
                );
            }

            setCustomers(
                data.customers || []
            );
        } catch (err) {
            console.error(
                "❌ Customer loading error:",
                err
            );

            setError(
                err.message ||
                "Unable to load customers"
            );
        } finally {
            setLoading(false);
        }
    };


    // =====================================================
    // LOAD CUSTOMERS
    // =====================================================

    useEffect(() => {
        fetchCustomers();
    }, []);


    // =====================================================
    // DELETE CUSTOMER
    // =====================================================

    const handleDelete = async (id) => {
        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this customer?"
            );

        if (!confirmDelete) {
            return;
        }

        try {
            const adminToken =
                localStorage.getItem("adminToken");

            const response = await fetch(
                `https://glownest-beauty-production.up.railway.app/admin/customers/${id}`,
                {
                    method: "DELETE",

                    headers: {
                        "Content-Type":
                            "application/json",

                        Authorization:
                            `Bearer ${adminToken}`,
                    },
                }
            );

            const text =
                await response.text();

            let data;

            try {
                data = JSON.parse(text);
            } catch {
                throw new Error(
                    "Invalid response from backend"
                );
            }

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to delete customer"
                );
            }

            alert(
                "Customer deleted successfully"
            );

            fetchCustomers();
        } catch (err) {
            console.error(
                "❌ Delete customer error:",
                err
            );

            alert(
                err.message ||
                "Failed to delete customer"
            );
        }
    };


    // =====================================================
    // LOGOUT
    // =====================================================

    const handleLogout = () => {
        localStorage.removeItem(
            "adminToken"
        );

        localStorage.removeItem("admin");

        navigate("/admin/login");
    };


    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Arial",
                }}
            >
                <h2>
                    Loading Customers...
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
                    fontFamily: "Arial",
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
                        justifyContent:
                            "space-between",

                        padding:
                            "0 30px",
                    }}
                >

                    <h2>
                        GlowNest Admin
                    </h2>

                    <button
                        onClick={handleLogout}
                        style={{
                            background: "#fff",
                            color: "#e91e63",
                            border: "none",
                            padding:
                                "10px 20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        Logout
                    </button>

                </header>


                <div
                    style={{
                        textAlign: "center",
                        padding: "100px 20px",
                    }}
                >

                    <h2
                        style={{
                            color: "#e91e63",
                        }}
                    >
                        Unable to Load Customers
                    </h2>

                    <p>
                        {error}
                    </p>

                    <button
                        onClick={fetchCustomers}
                        style={{
                            background:
                                "#e91e63",
                            color: "#fff",
                            border: "none",
                            padding:
                                "12px 25px",
                            borderRadius:
                                "6px",
                            cursor: "pointer",
                            fontWeight:
                                "bold",
                        }}
                    >
                        Try Again
                    </button>

                </div>

            </div>
        );
    }


    // =====================================================
    // MAIN PAGE
    // =====================================================

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f8f9fa",
                fontFamily:
                    "Arial, sans-serif",
            }}
        >

            {/* =====================================================
                HEADER
            ===================================================== */}

            <header
                style={{
                    height: "70px",
                    background: "#e91e63",
                    color: "#fff",

                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                        "space-between",

                    padding:
                        "0 30px",

                    boxSizing:
                        "border-box",
                }}
            >

                <h2
                    style={{
                        margin: 0,
                    }}
                >
                    GlowNest Admin
                </h2>


                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                    }}
                >

                    <button
                        onClick={() =>
                            navigate(
                                "/admin/dashboard"
                            )
                        }
                        style={{
                            background:
                                "rgba(255,255,255,0.2)",
                            color: "#fff",
                            border: "1px solid #fff",
                            padding:
                                "10px 15px",
                            borderRadius:
                                "6px",
                            cursor:
                                "pointer",
                        }}
                    >
                        Dashboard
                    </button>


                    <button
                        onClick={handleLogout}
                        style={{
                            background: "#fff",
                            color: "#e91e63",
                            border: "none",
                            padding:
                                "10px 20px",
                            borderRadius:
                                "6px",
                            cursor:
                                "pointer",
                            fontWeight:
                                "bold",
                        }}
                    >
                        Logout
                    </button>

                </div>

            </header>


            {/* =====================================================
                MAIN
            ===================================================== */}

            <main
                style={{
                    padding: "40px",
                }}
            >

                <div
                    style={{
                        display: "flex",
                        justifyContent:
                            "space-between",
                        alignItems:
                            "center",
                        marginBottom:
                            "30px",
                    }}
                >

                    <div>

                        <h1
                            style={{
                                margin:
                                    "0 0 8px",
                                color:
                                    "#333",
                            }}
                        >
                            Customers
                        </h1>

                        <p
                            style={{
                                margin: 0,
                                color:
                                    "#777",
                            }}
                        >
                            Manage GlowNest customers
                        </p>

                    </div>


                    <div
                        style={{
                            background:
                                "#fff",
                            padding:
                                "15px 25px",
                            borderRadius:
                                "10px",
                            boxShadow:
                                "0 3px 12px rgba(0,0,0,0.08)",
                        }}
                    >

                        <strong
                            style={{
                                color:
                                    "#e91e63",
                                fontSize:
                                    "24px",
                            }}
                        >
                            {customers.length}
                        </strong>

                        <span
                            style={{
                                marginLeft:
                                    "8px",
                                color:
                                    "#666",
                            }}
                        >
                            Customers
                        </span>

                    </div>

                </div>


                {/* =====================================================
                    CUSTOMER TABLE
                ===================================================== */}

                <div
                    style={{
                        background:
                            "#fff",
                        borderRadius:
                            "12px",
                        boxShadow:
                            "0 3px 12px rgba(0,0,0,0.08)",
                        overflow:
                            "hidden",
                    }}
                >

                    {customers.length === 0 ? (

                        <div
                            style={{
                                padding:
                                    "70px 20px",
                                textAlign:
                                    "center",
                            }}
                        >

                            <h2
                                style={{
                                    color:
                                        "#555",
                                }}
                            >
                                No Customers Found
                            </h2>

                            <p
                                style={{
                                    color:
                                        "#888",
                                }}
                            >
                                There are currently no customers in the database.
                            </p>

                        </div>

                    ) : (

                        <div
                            style={{
                                overflowX:
                                    "auto",
                            }}
                        >

                            <table
                                style={{
                                    width:
                                        "100%",
                                    borderCollapse:
                                        "collapse",
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
                                            style={thStyle}
                                        >
                                            ID
                                        </th>

                                        <th
                                            style={thStyle}
                                        >
                                            Name
                                        </th>

                                        <th
                                            style={thStyle}
                                        >
                                            Email
                                        </th>

                                        <th
                                            style={thStyle}
                                        >
                                            Phone
                                        </th>

                                        <th
                                            style={thStyle}
                                        >
                                            Verified
                                        </th>

                                        <th
                                            style={thStyle}
                                        >
                                            Created
                                        </th>

                                        <th
                                            style={thStyle}
                                        >
                                            Action
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {customers.map(
                                        (customer) => (

                                            <tr
                                                key={
                                                    customer.id
                                                }
                                                style={{
                                                    borderBottom:
                                                        "1px solid #eee",
                                                }}
                                            >

                                                <td
                                                    style={
                                                        tdStyle
                                                    }
                                                >
                                                    {
                                                        customer.id
                                                    }
                                                </td>

                                                <td
                                                    style={{
                                                        ...tdStyle,
                                                        fontWeight:
                                                            "bold",
                                                    }}
                                                >
                                                    {
                                                        customer.name
                                                    }
                                                </td>

                                                <td
                                                    style={
                                                        tdStyle
                                                    }
                                                >
                                                    {
                                                        customer.email
                                                    }
                                                </td>

                                                <td
                                                    style={
                                                        tdStyle
                                                    }
                                                >
                                                    {
                                                        customer.phone ||
                                                        "N/A"
                                                    }
                                                </td>

                                                <td
                                                    style={
                                                        tdStyle
                                                    }
                                                >

                                                    {Number(
                                                        customer.email_verified
                                                    ) ===
                                                    1 ? (

                                                        <span
                                                            style={{
                                                                background:
                                                                    "#e8f5e9",
                                                                color:
                                                                    "#2e7d32",
                                                                padding:
                                                                    "5px 10px",
                                                                borderRadius:
                                                                    "15px",
                                                                fontSize:
                                                                    "13px",
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                        >
                                                            Verified
                                                        </span>

                                                    ) : (

                                                        <span
                                                            style={{
                                                                background:
                                                                    "#fff3e0",
                                                                color:
                                                                    "#ef6c00",
                                                                padding:
                                                                    "5px 10px",
                                                                borderRadius:
                                                                    "15px",
                                                                fontSize:
                                                                    "13px",
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                        >
                                                            Not Verified
                                                        </span>

                                                    )}

                                                </td>


                                                <td
                                                    style={
                                                        tdStyle
                                                    }
                                                >
                                                    {customer.created_at
                                                        ? new Date(
                                                            customer.created_at
                                                        ).toLocaleDateString(
                                                            "en-IN"
                                                        )
                                                        : "N/A"}
                                                </td>


                                                <td
                                                    style={
                                                        tdStyle
                                                    }
                                                >

                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                customer.id
                                                            )
                                                        }
                                                        style={{
                                                            background:
                                                                "#dc3545",
                                                            color:
                                                                "#fff",
                                                            border:
                                                                "none",
                                                            padding:
                                                                "8px 14px",
                                                            borderRadius:
                                                                "5px",
                                                            cursor:
                                                                "pointer",
                                                        }}
                                                    >
                                                        Delete
                                                    </button>

                                                </td>

                                            </tr>

                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </main>

        </div>
    );
};


// =====================================================
// TABLE STYLES
// =====================================================

const thStyle = {
    padding: "15px",
    textAlign: "left",
    color: "#444",
    fontWeight: "bold",
};

const tdStyle = {
    padding: "15px",
    color: "#555",
};


export default AdminCustomers;