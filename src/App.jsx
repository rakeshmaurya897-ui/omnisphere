import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded Products:", data.length);
        setProducts(data);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
      });
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
        fontFamily: "serif",
      }}
    >
      {/* HERO SECTION */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#1d4ed8,#7c3aed)",
          borderRadius: "30px",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.15)",
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "20px",
                marginBottom: "15px",
                fontSize: "14px",
              }}
            >
              🔥 Trending Ecommerce Store
            </div>

            <h1
              style={{
                fontSize: "70px",
                lineHeight: "75px",
                marginBottom: "20px",
                fontStyle: "italic",
              }}
            >
              Discover <br />
              Viral Products
            </h1>

            <p
              style={{
                fontSize: "20px",
                color: "#ddd",
                marginBottom: "25px",
              }}
            >
              Explore trending gadgets, gifts,
              decor, lamps, toys and premium
              lifestyle products.
            </p>

            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  padding: "14px 28px",
                  borderRadius: "14px",
                  border: "none",
                  background: "white",
                  color: "#111",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Shop Now
              </button>

              <button
                style={{
                  padding: "14px 28px",
                  borderRadius: "14px",
                  border: "2px solid white",
                  background: "transparent",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Best Sellers
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                borderRadius: "25px",
                height: "420px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "18px",
          borderRadius: "14px",
          border: "none",
          marginBottom: "20px",
          fontSize: "17px",
        }}
      />

      <p style={{ marginBottom: "25px" }}>
        Products Loaded: {products.length}
      </p>

      {/* TITLE */}

      <h2
        style={{
          fontSize: "55px",
          marginBottom: "30px",
          fontStyle: "italic",
        }}
      >
        🔥 Best Sellers
      </h2>

      {/* PRODUCTS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#0f172a",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <img
              src={
                item.images?.[0] ||
                "https://via.placeholder.com/400"
              }
              alt={item.title}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                background: "#111",
              }}
            />

            <div style={{ padding: "18px" }}>
              <p
                style={{
                  color: "#60a5fa",
                  fontSize: "13px",
                  marginBottom: "10px",
                }}
              >
                {item.category}
              </p>

              <h3
                style={{
                  fontSize: "24px",
                  lineHeight: "32px",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "15px",
                  height: "70px",
                  overflow: "hidden",
                  marginBottom: "15px",
                }}
              >
                {item.description}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    color: "#22c55e",
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                >
                  {item.sellingPrice}
                </span>

                <span
                  style={{
                    color: "#94a3b8",
                    textDecoration: "line-through",
                    fontSize: "18px",
                  }}
                >
                  {item.price}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <button
                  style={{
                    flex: 1,
                    background: "#2563eb",
                    border: "none",
                    padding: "14px",
                    borderRadius: "12px",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
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
                    padding: "14px",
                    borderRadius: "12px",
                    color: "white",
                    textAlign: "center",
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
