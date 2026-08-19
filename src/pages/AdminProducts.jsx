import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://glownest-beauty-production.up.railway.app";

function AdminProducts() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        category: "",
        price: "",
        image: "",
        description: "",
        stock: ""
    });

    // =====================================================
    // GET PRODUCTS
    // =====================================================

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("adminToken");

            if (!token) {
                navigate("/admin/login");
                return;
            }

            const response = await fetch(
                `${API_URL}/admin/products`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to fetch products"
                );
            }

            setProducts(data.products || []);

        } catch (err) {
            console.error("Fetch products error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // =====================================================
    // HANDLE INPUT
    // =====================================================

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // =====================================================
    // OPEN ADD FORM
    // =====================================================

    const handleAddProduct = () => {
        setEditingProduct(null);

        setFormData({
            name: "",
            brand: "",
            category: "",
            price: "",
            image: "",
            description: "",
            stock: ""
        });

        setShowForm(true);
    };

    // =====================================================
    // OPEN EDIT FORM
    // =====================================================

    const handleEdit = (product) => {
        setEditingProduct(product);

        setFormData({
            name: product.name || "",
            brand: product.brand || "",
            category: product.category || "",
            price: product.price || "",
            image: product.image || "",
            description: product.description || "",
            stock: product.stock || ""
        });

        setShowForm(true);
    };

    // =====================================================
    // SAVE PRODUCT
    // =====================================================

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("adminToken");

            if (!token) {
                navigate("/admin/login");
                return;
            }

            const url = editingProduct
                ? `${API_URL}/admin/products/${editingProduct.id}`
                : `${API_URL}/admin/products`;

            const method = editingProduct ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...formData,
                    price: Number(formData.price),
                    stock: Number(formData.stock)
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to save product"
                );
            }

            alert(
                editingProduct
                    ? "Product updated successfully!"
                    : "Product added successfully!"
            );

            setShowForm(false);
            setEditingProduct(null);

            fetchProducts();

        } catch (err) {
            console.error("Save product error:", err);
            alert(err.message);
        }
    };

    // =====================================================
    // DELETE PRODUCT
    // =====================================================

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmed) return;

        try {
            const token = localStorage.getItem("adminToken");

            const response = await fetch(
                `${API_URL}/admin/products/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to delete product"
                );
            }

            alert("Product deleted successfully!");

            fetchProducts();

        } catch (err) {
            console.error("Delete product error:", err);
            alert(err.message);
        }
    };

    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {
        return (
            <div style={styles.center}>
                <h2>Loading products...</h2>
            </div>
        );
    }

    // =====================================================
    // PAGE
    // =====================================================

    return (
        <div style={styles.container}>

            {/* HEADER */}

            <div style={styles.header}>
                <div>
                    <h1>Admin Products</h1>
                    <p>Manage GlowNest Beauty products</p>
                </div>

                <div>
                    <button
                        style={styles.backButton}
                        onClick={() => navigate("/admin/dashboard")}
                    >
                        ← Dashboard
                    </button>

                    <button
                        style={styles.addButton}
                        onClick={handleAddProduct}
                    >
                        + Add Product
                    </button>
                </div>
            </div>

            {/* ERROR */}

            {error && (
                <div style={styles.error}>
                    {error}
                </div>
            )}

            {/* PRODUCT FORM */}

            {showForm && (
                <div style={styles.formCard}>

                    <h2>
                        {editingProduct
                            ? "Edit Product"
                            : "Add New Product"}
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div style={styles.grid}>

                            <div>
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label>Brand</label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label>Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label>Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    min="0"
                                    required
                                />
                            </div>

                            <div>
                                <label>Stock</label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    min="0"
                                    required
                                />
                            </div>

                            <div>
                                <label>Image Path</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="/images/products/product.jpg"
                                />
                            </div>

                        </div>

                        <div style={{ marginTop: "15px" }}>
                            <label>Description</label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                            />
                        </div>

                        <div style={styles.formButtons}>

                            <button
                                type="submit"
                                style={styles.saveButton}
                            >
                                {editingProduct
                                    ? "Update Product"
                                    : "Add Product"}
                            </button>

                            <button
                                type="button"
                                style={styles.cancelButton}
                                onClick={() => {
                                    setShowForm(false);
                                    setEditingProduct(null);
                                }}
                            >
                                Cancel
                            </button>

                        </div>

                    </form>
                </div>
            )}

            {/* PRODUCTS TABLE */}

            <div style={styles.tableCard}>

                <h2>
                    Products ({products.length})
                </h2>

                {products.length === 0 ? (

                    <div style={styles.empty}>
                        <p>No products found.</p>

                        <button
                            style={styles.addButton}
                            onClick={handleAddProduct}
                        >
                            + Add Your First Product
                        </button>
                    </div>

                ) : (

                    <div style={{ overflowX: "auto" }}>

                        <table style={styles.table}>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Brand</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>

                                {products.map((product) => (

                                    <tr key={product.id}>

                                        <td>{product.id}</td>

                                        <td>
                                            {product.image ? (
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    style={styles.image}
                                                    onError={(e) => {
                                                        e.target.style.display =
                                                            "none";
                                                    }}
                                                />
                                            ) : (
                                                "No image"
                                            )}
                                        </td>

                                        <td>{product.name}</td>

                                        <td>{product.brand}</td>

                                        <td>{product.category}</td>

                                        <td>
                                            ₹{Number(product.price).toFixed(2)}
                                        </td>

                                        <td>{product.stock}</td>

                                        <td>

                                            <button
                                                style={styles.editButton}
                                                onClick={() =>
                                                    handleEdit(product)
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button
                                                style={styles.deleteButton}
                                                onClick={() =>
                                                    handleDelete(product.id)
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>
    );
}

// =====================================================
// STYLES
// =====================================================

const styles = {

    container: {
        minHeight: "100vh",
        background: "#fff7fa",
        padding: "40px"
    },

    center: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px"
    },

    headerTitle: {
        color: "#e91e63"
    },

    header: {
        background: "#ffffff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 3px 15px rgba(0,0,0,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px"
    },

    addButton: {
        background: "#e91e63",
        color: "white",
        border: "none",
        padding: "12px 20px",
        borderRadius: "6px",
        cursor: "pointer",
        marginLeft: "10px",
        fontWeight: "bold"
    },

    backButton: {
        background: "#333",
        color: "white",
        border: "none",
        padding: "12px 20px",
        borderRadius: "6px",
        cursor: "pointer"
    },

    error: {
        background: "#ffe0e0",
        color: "#d00000",
        padding: "15px",
        borderRadius: "6px",
        marginBottom: "20px"
    },

    formCard: {
        background: "#ffffff",
        padding: "30px",
        borderRadius: "12px",
        marginBottom: "30px",
        boxShadow: "0 3px 15px rgba(0,0,0,0.08)"
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px"
    },

    formButtons: {
        marginTop: "20px"
    },

    saveButton: {
        background: "#e91e63",
        color: "#ffffff",
        border: "none",
        padding: "12px 25px",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold"
    },

    cancelButton: {
        background: "#777",
        color: "#ffffff",
        border: "none",
        padding: "12px 25px",
        borderRadius: "6px",
        cursor: "pointer",
        marginLeft: "10px"
    },

    tableCard: {
        background: "#ffffff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 3px 15px rgba(0,0,0,0.08)"
    },

    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px"
    },

    image: {
        width: "60px",
        height: "60px",
        objectFit: "cover",
        borderRadius: "6px"
    },

    editButton: {
        background: "#333",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "6px"
    },

    deleteButton: {
        background: "#e91e63",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer"
    },

    empty: {
        textAlign: "center",
        padding: "50px"
    }
};

export default AdminProducts;