import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

const handleSearch = () => {
  const text = searchText.toLowerCase();

  if (
    text.includes("cleanser") ||
    text.includes("moisturizer") ||
    text.includes("face wash") ||
    text.includes("sunscreen")
  ) {
    navigate("/shop/skincare");
  }

  else if (
    text.includes("lipstick") ||
    text.includes("foundation") ||
    text.includes("mascara")
  ) {
    navigate("/shop/makeup");
  }

  else if (
    text.includes("shampoo") ||
    text.includes("conditioner") ||
    text.includes("hair oil")
  ) {
    navigate("/shop/haircare");
  }

  else if (
    text.includes("body wash") ||
    text.includes("body lotion")
  ) {
    navigate("/shop/bodycare");
  }

  else if (
    text.includes("serum") ||
    text.includes("vitamin c") ||
    text.includes("retinol")
  ) {
    navigate("/serum");
  }

  else if (
    text.includes("perfume") ||
    text.includes("fragrance")
  ) {
    navigate("/shop/perfume");
  }

  else {
    alert("No matching products found.");
  }
};
  const popularSearches = [
    "Vitamin C Serum",
    "Sunscreen",
    "Lipstick",
    "Face Wash",
    "Perfume",
    "Shampoo",
    "Moisturizer",
    "Hair Oil",
  ];

  return (
    <div className="search-page">

      <h1>🔍 Search Products</h1>

      <p>
        Find your favourite beauty products instantly.
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for skincare, makeup, haircare..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
/>
        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      <h2>Popular Searches</h2>

      <div className="popular-searches">
        {popularSearches.map((item) => (
          <button
            key={item}
            onClick={() => setSearchText(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="search-banner">
        <h2>✨ Discover Beauty with GlowNest</h2>
        <p>
          Explore premium skincare, makeup, haircare,
          perfumes and more.
        </p>
      </div>

    </div>
  );
}