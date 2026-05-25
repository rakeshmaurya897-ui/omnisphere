import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded Products:", data.length);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const openProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          background: "linear-gradient(135deg,#1d4ed8,#7c3aed)",
          padding: "50px 25px",
          borderRadius: "0 0 30px 30px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "280px" }}>
          <span
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "8px 16px",
              borderRadius: "20px",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            🔥 Trending Ecommerce Store
          </span>

          <h1
            style={{
              fontSize: "65px",
              color: "#fff",
              marginTop: "20px",
              lineHeight: "1.1",
              fontWeight: "800",
            }}
          >
            Discover <br /> Viral Products
          </h1>

          <p
            style={{
              color: "#e5e7eb",
              fontSize: "18px",
              marginTop: "20px",
              lineHeight: "1.7",
              maxWidth: "600px",
            }}
          >
            Explore trending gadgets, gifts, home decor, lamps,
            accessories and premium lifestyle products.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "14px 28px",
                borderRadius: "12px",
                border: "none",
                background: "#fff",
                color: "#111827",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>

            <button
              style={{
                padding: "14px 28px",
                borderRadius: "12px",
                border: "2px solid #fff",
                background: "transparent",
                color: "#fff",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Best Sellers
            </button>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: "280px", textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop"
            alt=""
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "30px",
              objectFit: "cover",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </section>

      {/* SEARCH */}
      <div style={{ padding: "0 20px" }}>
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "15px",
            border: "none",
            fontSize: "16px",
            outline: "none",
            marginBottom: "25px",
          }}
        />
      </div>

      {/* TITLE */}
      <div style={{ padding: "0 20px" }}>
        <h2
          style={{
            color: "#fff",
            fontSize: "50px",
            marginBottom: "25px",
          }}
        >
          🔥 Best Sellers
        </h2>

        <p style={{ color: "#fff", marginBottom: "20px" }}>
          Products Loaded: {filteredProducts.length}
        </p>
      </div>

      {/* PRODUCTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            style={{
              background: "#071028",
              borderRadius: "22px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <img
              src={product.images?.[0]}
              alt=""
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "18px" }}>
              <p
                style={{
                  color: "#60a5fa",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                {product.category}
              </p>

              <h3
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  lineHeight: "1.5",
                  minHeight: "60px",
                }}
              >
                {product.title.slice(0, 55)}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "18px",
                }}
              >
                <span
                  style={{
                    color: "#22c55e",
                    fontSize: "20px",
                    fontWeight: "800",
                  }}
                >
                  {product.sellingPrice}
                </span>

                <span
                  style={{
                    color: "#9ca3af",
                    textDecoration: "line-through",
                    fontSize: "16px",
                  }}
                >
                  ₹
                  {Math.floor(
                    parseInt(
                      product.sellingPrice.replace(/[^\d]/g, "")
                    ) * 1.6
                  )}
                </span>
              </div>

              <button
                onClick={() => openProduct(product)}
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "13px",
                  border: "none",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",
                  color: "#fff",
                  fontWeight: "700",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div
          onClick={closeProduct}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#0f172a",
              width: "100%",
              maxWidth: "700px",
              borderRadius: "20px",
              overflow: "hidden",
              color: "#fff",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <img
              src={selectedProduct.images?.[0]}
              alt=""
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
                {selectedProduct.title}
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                {selectedProduct.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginBottom: "25px",
                }}
              >
                <span
                  style={{
                    color: "#22c55e",
                    fontSize: "32px",
                    fontWeight: "800",
                  }}
                >
                  {selectedProduct.sellingPrice}
                </span>

                <span
                  style={{
                    color: "#9ca3af",
                    textDecoration: "line-through",
                    fontSize: "20px",
                  }}
                >
                  ₹
                  {Math.floor(
                    parseInt(
                      selectedProduct.sellingPrice.replace(/[^\d]/g, "")
                    ) * 1.6
                  )}
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(120px,1fr))",
                  gap: "12px",
                }}
              >
                {selectedProduct.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                ))}
              </div>

              <button
                style={{
                  width: "100%",
                  marginTop: "25px",
                  padding: "15px",
                  border: "none",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg,#22c55e,#16a34a)",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
