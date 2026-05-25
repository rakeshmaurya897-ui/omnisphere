import React, { useEffect, useState } from "react";

export default function App() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));

  }, []);

  // CATEGORY

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category))
  ];

  // FILTER

  const filteredProducts = products.filter((item) => {

    const matchSearch =
      item.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All"
        ? true
        : item.category === activeCategory;

    return matchSearch && matchCategory;

  });

  // OPEN PRODUCT

  const openProduct = (product) => {

    setSelectedProduct(product);
    setSelectedImage(product.images?.[0]);

  };

  // CART

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

  // QUANTITY

  const increaseQty = (id) => {

    setCart(
      cart.map((item) =>

        item.id === id
          ? {
              ...item,
              qty: item.qty + 1
            }
          : item

      )
    );

  };

  const decreaseQty = (id) => {

    setCart(
      cart
        .map((item) =>

          item.id === id
            ? {
                ...item,
                qty: item.qty - 1
              }
            : item

        )
        .filter((item) => item.qty > 0)
    );

  };

  // TOTAL

  const totalPrice = cart.reduce(
    (acc, item) => {

      const price =
        parseInt(
          item.sellingPrice?.replace(/[^\d]/g, "")
        ) || 0;

      return acc + price * item.qty;

    },
    0
  );

  return (

    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial"
      }}
    >

      {/* HEADER */}

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(2,6,23,0.9)",
          backdropFilter: "blur(10px)",
          padding: "18px 25px",
          borderBottom:
            "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px"
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >

          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "800",
              fontSize: "22px"
            }}
          >
            O
          </div>

          <div>

            <h2
              style={{
                fontSize: "28px",
                fontWeight: "800"
              }}
            >
              OmniSphere
            </h2>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "13px"
              }}
            >
              Premium Ecommerce
            </p>

          </div>

        </div>

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            width: "350px",
            maxWidth: "100%",
            outline: "none",
            background: "#111827",
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
            padding: "12px 18px",
            borderRadius: "12px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "700"
          }}
        >
          🛒 {cart.length}
        </button>

      </header>

      {/* HERO */}

      <section
        style={{
          padding: "60px 25px",
          background:
            "linear-gradient(135deg,#1d4ed8,#7c3aed)"
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "40px",
            alignItems: "center"
          }}
        >

          <div>

            <span
              style={{
                background:
                  "rgba(255,255,255,0.15)",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "13px"
              }}
            >
              🔥 Trending Products 2026
            </span>

            <h1
              style={{
                fontSize: "65px",
                lineHeight: "1.1",
                marginTop: "20px",
                fontWeight: "900"
              }}
            >
              Discover
              <br />
              Viral Products
            </h1>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "1.9",
                color: "#e5e7eb",
                fontSize: "18px"
              }}
            >
              Explore trending gadgets,
              gifts, decor and premium
              lifestyle products.
            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
                borderRadius: "28px"
              }}
            />

          </div>

        </div>

      </section>

      {/* CATEGORY */}

      <section
        style={{
          padding: "25px"
        }}
      >

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap"
          }}
        >

          {categories.map((cat, i) => (

            <button
              key={i}
              onClick={() =>
                setActiveCategory(cat)
              }
              style={{
                padding: "12px 20px",
                borderRadius: "30px",
                border: "none",
                background:
                  activeCategory === cat
                    ? "#2563eb"
                    : "#111827",
                color: "#fff",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              {cat}
            </button>

          ))}

        </div>

      </section>

      {/* PRODUCTS */}

      <section
        style={{
          padding: "0 25px 80px"
        }}
      >

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "30px"
          }}
        >
          🔥 Best Sellers
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap: "20px"
          }}
        >

          {filteredProducts.map((product, i) => (

            <div
              key={i}
              style={{
                background: "#071028",
                borderRadius: "22px",
                overflow: "hidden"
              }}
            >

              <img
                src={product.images?.[0]}
                alt=""
                style={{
                  width: "100%",
                  height: "240px",
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
                    marginTop: "10px",
                    lineHeight: "1.5",
                    minHeight: "70px"
                  }}
                >
                  {product.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginTop: "15px"
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
                    display: "flex",
                    gap: "10px",
                    marginTop: "20px"
                  }}
                >

                  <button
                    onClick={() =>
                      openProduct(product)
                    }
                    style={{
                      flex: 1,
                      padding: "12px",
                      border: "none",
                      borderRadius: "12px",
                      background: "#111827",
                      color: "#fff",
                      fontWeight: "700",
                      cursor: "pointer"
                    }}
                  >
                    View
                  </button>

                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                    style={{
                      flex: 1,
                      padding: "12px",
                      border: "none",
                      borderRadius: "12px",
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

          ))}

        </div>

      </section>

      {/* PRODUCT MODAL */}

      {selectedProduct && (

        <div
          onClick={() =>
            setSelectedProduct(null)
          }
          style={{
            position: "fixed",
            inset: 0,
            background:
              "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            overflowY: "auto"
          }}
        >

          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            style={{
              background: "#0f172a",
              width: "100%",
              maxWidth: "950px",
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              maxHeight: "95vh",
              overflowY: "auto"
            }}
          >

            {/* CLOSE */}

            <button
              onClick={() =>
                setSelectedProduct(null)
              }
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "none",
                background: "#fff",
                color: "#000",
                fontSize: "20px",
                fontWeight: "700",
                cursor: "pointer",
                zIndex: 100
              }}
            >
              ✕
            </button>

            {/* IMAGE */}

            <div
              style={{
                padding: "25px"
              }}
            >

              <img
                src={selectedImage}
                alt=""
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "contain",
                  borderRadius: "18px",
                  background: "#000"
                }}
              />

              {/* THUMBNAILS */}

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "15px",
                  overflowX: "auto"
                }}
              >

                {selectedProduct.images?.map(
                  (img, index) => (

                    <img
                      key={index}
                      src={img}
                      alt=""
                      onClick={() =>
                        setSelectedImage(img)
                      }
                      style={{
                        width: "85px",
                        height: "85px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        cursor: "pointer",
                        border:
                          selectedImage === img
                            ? "3px solid #2563eb"
                            : "2px solid transparent"
                      }}
                    />

                  )
                )}

              </div>

            </div>

            {/* CONTENT */}

            <div
              style={{
                padding: "25px"
              }}
            >

              <p
                style={{
                  color: "#60a5fa"
                }}
              >
                {selectedProduct.category}
              </p>

              <h2
                style={{
                  fontSize: "42px",
                  lineHeight: "1.3",
                  marginTop: "10px"
                }}
              >
                {selectedProduct.title}
              </h2>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginTop: "20px"
                }}
              >

                <span
                  style={{
                    color: "#22c55e",
                    fontSize: "34px",
                    fontWeight: "800"
                  }}
                >
                  {selectedProduct.sellingPrice}
                </span>

                <span
                  style={{
                    color: "#94a3b8",
                    textDecoration: "line-through"
                  }}
                >
                  ₹
                  {Math.floor(
                    parseInt(
                      selectedProduct.sellingPrice?.replace(
                        /[^\d]/g,
                        ""
                      )
                    ) * 1.6
                  )}
                </span>

              </div>

              {/* DESCRIPTION */}

              <p
                style={{
                  marginTop: "25px",
                  color: "#cbd5e1",
                  lineHeight: "1.9"
                }}
              >
                {selectedProduct.description}
              </p>

              {/* BUTTONS */}

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "30px",
                  flexWrap: "wrap"
                }}
              >

                <button
                  onClick={() =>
                    addToCart(selectedProduct)
                  }
                  style={{
                    flex: 1,
                    minWidth: "220px",
                    padding: "16px",
                    border: "none",
                    borderRadius: "14px",
                    background:
                      "linear-gradient(135deg,#2563eb,#7c3aed)",
                    color: "#fff",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                >
                  Add To Cart
                </button>

                <button
                  style={{
                    flex: 1,
                    minWidth: "220px",
                    padding: "16px",
                    border: "none",
                    borderRadius: "14px",
                    background:
                      "linear-gradient(135deg,#22c55e,#16a34a)",
                    color: "#fff",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                >
                  Buy Now
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* CART */}

      <div
        style={{
          position: "fixed",
          top: 0,
          right:
            cartOpen
              ? 0
              : "-420px",
          width: "400px",
          maxWidth: "100%",
          height: "100%",
          background: "#0f172a",
          zIndex: 99999,
          transition: "0.3s",
          padding: "25px",
          overflowY: "auto"
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >

          <h2>🛒 Your Cart</h2>

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
            marginTop: "25px"
          }}
        >

          {cart.map((item, i) => (

            <div
              key={i}
              style={{
                display: "flex",
                gap: "12px",
                background: "#111827",
                padding: "12px",
                borderRadius: "16px",
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
                  borderRadius: "12px"
                }}
              />

              <div
                style={{
                  flex: 1
                }}
              >

                <h4
                  style={{
                    lineHeight: "1.5"
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    color: "#22c55e",
                    marginTop: "10px"
                  }}
                >
                  {item.sellingPrice}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "10px"
                  }}
                >

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div
          style={{
            marginTop: "25px",
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
            paddingTop: "20px"
          }}
        >

          <h2>
            Total: ₹{totalPrice}
          </h2>

          <button
            style={{
              width: "100%",
              marginTop: "18px",
              padding: "16px",
              border: "none",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
              color: "#fff",
              fontWeight: "700",
              cursor: "pointer"
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
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          background: "#22c55e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
          textDecoration: "none",
          zIndex: 99999
        }}
      >
        💬
      </a>

    </div>

  );

}
