import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

/* =========================
   HOME PAGE
========================= */

function Home({
  products,
  search,
  setSearch,
  category,
  setCategory,
  addToCart
}) {
  const navigate = useNavigate();

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category))
  ];

  const featuredProducts = products.slice(0, 8);

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All"
        ? true
        : item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div>
      {/* HERO */}

      <section
        style={{
          padding: "80px 28px",
          background:
            "linear-gradient(135deg,#1d4ed8,#7c3aed)"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "50px",
            alignItems: "center"
          }}
        >
          <div>
            <span
              style={{
                background:
                  "rgba(255,255,255,0.15)",
                padding: "10px 18px",
                borderRadius: "30px",
                fontSize: "13px"
              }}
            >
              🔥 Trending Products 2026
            </span>

            <h1
              style={{
                fontSize: "clamp(42px,7vw,74px)",
                lineHeight: "1.1",
                marginTop: "24px",
                fontWeight: "900"
              }}
            >
              Discover
              <br />
              Viral Products
            </h1>

            <p
              style={{
                marginTop: "24px",
                lineHeight: "1.9",
                color: "#e2e8f0",
                fontSize: "18px",
                maxWidth: "620px"
              }}
            >
              Premium ecommerce experience
              with trending gadgets,
              decor, gifts, lifestyle and
              viral products.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "34px",
                flexWrap: "wrap"
              }}
            >
              <button
                onClick={() => {
                  document
                    .getElementById("products")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    });
                }}
                style={{
                  padding: "16px 28px",
                  border: "none",
                  borderRadius: "14px",
                  background: "#fff",
                  color: "#111827",
                  fontWeight: "700",
                  cursor: "pointer",
                  fontSize: "15px"
                }}
              >
                Shop Now
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById("featured")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    });
                }}
                style={{
                  padding: "16px 28px",
                  border:
                    "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "14px",
                  background: "transparent",
                  color: "#fff",
                  fontWeight: "700",
                  cursor: "pointer",
                  fontSize: "15px"
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
                height: "500px",
                objectFit: "cover",
                borderRadius: "30px"
              }}
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        style={{
          padding: "28px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "18px"
        }}
      >
        {[
          "🚚 Free Delivery",
          "💳 Secure Payment",
          "🔥 Viral Products",
          "⭐ Premium Quality"
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#071028",
              padding: "24px",
              borderRadius: "20px",
              textAlign: "center"
            }}
          >
            <h3>{item}</h3>
          </div>
        ))}
      </section>

      {/* FEATURED */}

      <section
        id="featured"
        style={{
          padding: "30px 28px"
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "30px"
          }}
        >
          🔥 Best Selling Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap: "22px"
          }}
        >
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      {/* CATEGORY */}

      <section
        id="categories"
        style={{
          padding: "30px 28px"
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "20px"
          }}
        >
          Shop By Categories
        </h2>

        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap"
          }}
        >
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setCategory(cat)}
              style={{
                padding: "12px 22px",
                borderRadius: "40px",
                border: "none",
                background:
                  category === cat
                    ? "linear-gradient(135deg,#2563eb,#7c3aed)"
                    : "#0f172a",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "14px"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}

      <section
        id="products"
        style={{
          padding: "30px 28px 90px"
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "28px"
          }}
        >
          🛍 All Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap: "22px"
          }}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

/* =========================
   PRODUCT CARD
========================= */

function ProductCard({
  product,
  addToCart
}) {
  const navigate = useNavigate();

  const originalPrice = Math.floor(
    parseInt(
      product.sellingPrice?.replace(
        /[^\d]/g,
        ""
      )
    ) * 1.6
  );

  return (
    <div
      style={{
        background: "#071028",
        borderRadius: "22px",
        overflow: "hidden",
        border:
          "1px solid rgba(255,255,255,0.05)"
      }}
    >
      <img
        src={product.images?.[0]}
        alt=""
        style={{
          width: "100%",
          height: "260px",
          objectFit: "cover"
        }}
      />

      <div
        style={{
          padding: "18px"
        }}
      >
        <p
          style={{
            color: "#60a5fa",
            fontSize: "13px"
          }}
        >
          {product.category}
        </p>

        <h3
          style={{
            marginTop: "12px",
            fontSize: "18px",
            lineHeight: "1.6",
            minHeight: "60px"
          }}
        >
          {product.title.slice(0, 60)}...
        </h3>

        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            marginTop: "16px"
          }}
        >
          <span
            style={{
              color: "#22c55e",
              fontSize: "30px",
              fontWeight: "800"
            }}
          >
            {product.sellingPrice}
          </span>

          <span
            style={{
              color: "#94a3b8",
              textDecoration: "line-through"
            }}
          >
            ₹{originalPrice}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px"
          }}
        >
          <button
            onClick={() =>
              navigate(`/product/${product.id}`)
            }
            style={{
              flex: 1,
              padding: "14px",
              border: "none",
              borderRadius: "14px",
              background: "#111827",
              color: "#fff",
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            View
          </button>

          <button
            onClick={() => addToCart(product)}
            style={{
              flex: 1,
              padding: "14px",
              border: "none",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
              color: "#fff",
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================
   PRODUCT PAGE
========================= */

function ProductPage({
  products,
  addToCart
}) {
  const { id } = useParams();

  const navigate = useNavigate();

  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  const [selectedImage, setSelectedImage] =
    useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    if (product) {
      setSelectedImage(product.images?.[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div
        style={{
          padding: "80px",
          textAlign: "center"
        }}
      >
        Product Not Found
      </div>
    );
  }

  return (
    <section
      style={{
        padding: "40px 28px 90px"
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "12px 18px",
          border: "none",
          borderRadius: "12px",
          background: "#111827",
          color: "#fff",
          cursor: "pointer",
          marginBottom: "28px"
        }}
      >
        ← Back
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(340px,1fr))",
          gap: "50px"
        }}
      >
        {/* LEFT */}

        <div>
          <img
            src={selectedImage}
            alt=""
            style={{
              width: "100%",
              height: "520px",
              objectFit: "contain",
              background: "#000",
              borderRadius: "24px"
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "18px",
              overflowX: "auto"
            }}
          >
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() =>
                  setSelectedImage(img)
                }
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  cursor: "pointer",
                  border:
                    selectedImage === img
                      ? "3px solid #2563eb"
                      : "2px solid transparent"
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div>
          <p
            style={{
              color: "#60a5fa"
            }}
          >
            {product.category}
          </p>

          <h1
            style={{
              fontSize: "clamp(28px,4vw,48px)",
              lineHeight: "1.4",
              marginTop: "16px",
              fontWeight: "800"
            }}
          >
            {product.title}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              marginTop: "24px",
              flexWrap: "wrap"
            }}
          >
            <span
              style={{
                color: "#22c55e",
                fontSize: "42px",
                fontWeight: "900"
              }}
            >
              {product.sellingPrice}
            </span>

            <span
              style={{
                color: "#94a3b8",
                textDecoration: "line-through",
                fontSize: "22px"
              }}
            >
              ₹
              {Math.floor(
                parseInt(
                  product.sellingPrice?.replace(
                    /[^\d]/g,
                    ""
                  )
                ) * 1.6
              )}
            </span>
          </div>

          <div
            style={{
              marginTop: "36px"
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "18px"
              }}
            >
              Product Details
            </h3>

            <p
              style={{
                lineHeight: "2",
                color: "#cbd5e1",
                fontSize: "16px"
              }}
            >
              {product.description}
            </p>
          </div>

          <div
            style={{
              marginTop: "36px"
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "18px"
              }}
            >
              Specifications
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",
                gap: "14px"
              }}
            >
              {[
                "Premium Quality",
                "Fast Shipping",
                "Easy Returns",
                "Secure Packaging",
                "Trending Product",
                "Cash On Delivery"
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "#071028",
                    padding: "18px",
                    borderRadius: "16px"
                  }}
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "42px",
              flexWrap: "wrap"
            }}
          >
            <button
              onClick={() => addToCart(product)}
              style={{
                flex: 1,
                minWidth: "220px",
                padding: "18px",
                border: "none",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
                color: "#fff",
                fontWeight: "800",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Add To Cart
            </button>

            <button
              style={{
                flex: 1,
                minWidth: "220px",
                padding: "18px",
                border: "none",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg,#5f259f,#7c3aed)",
                color: "#fff",
                fontWeight: "800",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   APP
========================= */

export default function App() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const [cart, setCart] = useState([]);

  const [cartOpen, setCartOpen] =
    useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map(
          (item, index) => ({
            ...item,
            id: item.id || index + 1
          })
        );

        setProducts(updated);
      });
  }, []);

  const addToCart = (product) => {
    const exists = cart.find(
      (item) => item.id === product.id
    );

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          qty: 1
        }
      ]);
    }

    setCartOpen(true);
  };

  const totalPrice = cart.reduce(
    (acc, item) => {
      const price =
        parseInt(
          item.sellingPrice?.replace(
            /[^\d]/g,
            ""
          )
        ) || 0;

      return acc + price * item.qty;
    },
    0
  );

  return (
    <BrowserRouter>
      <div
        style={{
          background: "#020617",
          color: "#fff",
          minHeight: "100vh",
          fontFamily: "Inter,Arial,sans-serif"
        }}
      >
        {/* HEADER */}

        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 999,
            background:
              "rgba(2,6,23,0.95)",
            backdropFilter: "blur(10px)",
            padding: "16px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "18px"
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#fff"
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                fontWeight: "900"
              }}
            >
              OmniSphere
            </h2>
          </Link>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={{
              width: "340px",
              maxWidth: "100%",
              padding: "14px 18px",
              borderRadius: "14px",
              border: "none",
              outline: "none",
              background: "#0f172a",
              color: "#fff"
            }}
          />

          <button
            onClick={() =>
              setCartOpen(true)
            }
            style={{
              background: "#111827",
              border: "none",
              color: "#fff",
              padding: "14px 18px",
              borderRadius: "14px",
              cursor: "pointer",
              fontWeight: "700"
            }}
          >
            🛒 {cart.length}
          </button>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProductPage
                products={products}
                addToCart={addToCart}
              />
            }
          />
        </Routes>

        {/* CART */}

        <div
          style={{
            position: "fixed",
            top: 0,
            right: cartOpen ? 0 : "-430px",
            width: "400px",
            maxWidth: "100%",
            height: "100%",
            background: "#0f172a",
            zIndex: 9999,
            transition: "0.3s",
            padding: "24px",
            overflowY: "auto"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center"
            }}
          >
            <h2>🛒 Cart</h2>

            <button
              onClick={() =>
                setCartOpen(false)
              }
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "22px",
                cursor: "pointer"
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              marginTop: "24px"
            }}
          >
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#111827",
                  borderRadius: "18px",
                  padding: "14px",
                  display: "flex",
                  gap: "14px",
                  marginBottom: "18px"
                }}
              >
                <img
                  src={item.images?.[0]}
                  alt=""
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                    borderRadius: "14px"
                  }}
                />

                <div>
                  <h4>{item.title}</h4>

                  <p
                    style={{
                      color: "#22c55e",
                      marginTop: "10px"
                    }}
                  >
                    {item.sellingPrice}
                  </p>

                  <p>Qty: {item.qty}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop:
                "1px solid rgba(255,255,255,0.06)",
              paddingTop: "20px",
              marginTop: "20px"
            }}
          >
            <h2>₹{totalPrice}</h2>

            <button
              style={{
                width: "100%",
                padding: "16px",
                border: "none",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
                color: "#fff",
                fontWeight: "700",
                cursor: "pointer",
                marginTop: "14px"
              }}
            >
              Checkout
            </button>
          </div>
        </div>

        {/* WHATSAPP */}

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            background: "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            textDecoration: "none",
            zIndex: 9999
          }}
        >
          💬
        </a>

        {/* FOOTER */}

        <footer
          style={{
            padding: "60px 28px",
            background: "#020617",
            borderTop:
              "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "30px"
            }}
          >
            <div>
              <h2>OmniSphere</h2>

              <p
                style={{
                  marginTop: "16px",
                  color: "#94a3b8",
                  lineHeight: "1.8"
                }}
              >
                Premium ecommerce
                experience for trending
                products.
              </p>
            </div>

            <div>
              <h3>Quick Links</h3>

              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}
              >
                <a
                  href="/"
                  style={{
                    color: "#94a3b8"
                  }}
                >
                  Home
                </a>

                <a
                  href="#products"
                  style={{
                    color: "#94a3b8"
                  }}
                >
                  Products
                </a>

                <a
                  href="#categories"
                  style={{
                    color: "#94a3b8"
                  }}
                >
                  Categories
                </a>
              </div>
            </div>

            <div>
              <h3>Support</h3>

              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}
              >
                <p
                  style={{
                    color: "#94a3b8"
                  }}
                >
                  24x7 Customer Support
                </p>

                <p
                  style={{
                    color: "#94a3b8"
                  }}
                >
                  Secure Payments
                </p>

                <p
                  style={{
                    color: "#94a3b8"
                  }}
                >
                  Easy Returns
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "50px",
              borderTop:
                "1px solid rgba(255,255,255,0.08)",
              paddingTop: "20px",
              textAlign: "center",
              color: "#94a3b8"
            }}
          >
            © 2026 OmniSphere. All
            rights reserved.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
