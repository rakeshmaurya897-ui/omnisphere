import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded products:", data.length);
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "15px",
      }}
    >
      {/* HERO */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#1d4ed8,#7c3aed)",
          borderRadius: "25px",
          padding: "25px",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            lineHeight: "58px",
            marginBottom: "15px",
            fontStyle: "italic",
          }}
        >
          Discover <br /> Viral Products
        </h1>

        <p
          style={{
            color: "#ddd",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          Trending gadgets, gifts, decor and viral products.
        </p>

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px",
          }}
        />
      </div>

      <h2
        style={{
          fontSize: "40px",
          marginBottom: "20px",
          fontStyle: "italic",
        }}
      >
        🔥 Best Sellers
      </h2>

      <p>Products Loaded: {products.length}</p>

      {/* PRODUCTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#0f172a",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            }}
          >
            <img
              src={item.images?.[0]}
              alt={item.title}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                background: "#111",
              }}
            />

            <div style={{ padding: "15px" }}>
              <p
                style={{
                  color: "#60a5fa",
                  fontSize: "13px",
                }}
              >
                {item.category}
              </p>

              <h3
                style={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  margin: "10px 0",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#bbb",
                  fontSize: "14px",
                  height: "60px",
                  overflow: "hidden",
                }}
              >
                {item.description}
              </p>

              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: "#22c55e",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  {item.sellingPrice}
                </span>

                <span
                  style={{
                    color: "#888",
                    textDecoration: "line-through",
                  }}
                >
                  {item.price}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "15px",
                }}
              >
                <button
                  style={{
                    flex: 1,
                    background: "#2563eb",
                    border: "none",
                    padding: "12px",
                    borderRadius: "10px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Add To Cart
                </button>

                <a
                  href={item.productUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: 1,
                    background: "#22c55e",
                    padding: "12px",
                    borderRadius: "10px",
                    textAlign: "center",
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
