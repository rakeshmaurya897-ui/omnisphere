import React, {
  useEffect,
  useState
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

export default function App() {

  const [products, setProducts] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [cart, setCart] =
    useState([]);

  const [cartOpen, setCartOpen] =
    useState(false);

  useEffect(() => {

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {

        setProducts(data);

      });

  }, []);

  const addToCart = (product) => {

    const exists =
      cart.find(
        (item) =>
        item.id === product.id
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

  const filteredProducts =
    products.filter((item) => {

      const matchSearch =
        item.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchCategory =
        category === "All"
          ? true
          : item.category === category;

      return (
        matchSearch &&
        matchCategory
      );

    });

  const categories = [

    "All",

    ...new Set(
      products.map(
        (p) => p.category
      )
    )

  ];

  const totalPrice =
    cart.reduce((acc, item) => {

      const price =
        parseInt(
          item.sellingPrice
            ?.replace(/[^\d]/g, "")
        ) || 0;

      return (
        acc +
        price * item.qty
      );

    }, 0);

  return (

    <BrowserRouter>

      <div
        style={{
          background: "#020617",
          color: "#fff",
          minHeight: "100vh",
          fontFamily:
            "Inter, Arial, sans-serif"
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
            backdropFilter:
              "blur(10px)",
            borderBottom:
              "1px solid rgba(255,255,255,0.06)",
            padding:
              "16px 28px",
            display: "flex",
            justifyContent:
              "space-between",
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px"
              }}
            >

              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "900",
                  fontSize: "22px"
                }}
              >
                O
              </div>

              <div>

                <h2
                  style={{
                    fontSize: "40px",
                    margin: 0,
                    fontWeight: "800"
                  }}
                >
                  OmniSphere
                </h2>

                <p
                  style={{
                    margin: 0,
                    marginTop: "4px",
                    color: "#94a3b8",
                    fontSize: "14px"
                  }}
                >
                  Premium Ecommerce
                </p>

              </div>

            </div>

          </Link>

          <div
            style={{
              display: "flex",
              gap: "22px",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >

            <button
              onClick={() => {

                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });

              }}
              style={navBtn}
            >
              Home
            </button>

            <button
              onClick={() => {

                document
                  .getElementById(
                    "products"
                  )
                  ?.scrollIntoView({
                    behavior: "smooth"
                  });

              }}
              style={navBtn}
            >
              Products
            </button>

            <button
              onClick={() => {

                document
                  .getElementById(
                    "categories"
                  )
                  ?.scrollIntoView({
                    behavior: "smooth"
                  });

              }}
              style={navBtn}
            >
              Categories
            </button>

          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px"
            }}
          >

            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              style={{
                width: "340px",
                maxWidth: "100%",
                padding:
                  "14px 18px",
                borderRadius:
                  "14px",
                border: "none",
                outline: "none",
                background:
                  "#0f172a",
                color: "#fff",
                fontSize: "15px"
              }}
            />

            <button
              onClick={() =>
                setCartOpen(true)
              }
              style={{
                background:
                  "#0f172a",
                border: "none",
                color: "#fff",
                padding:
                  "14px 18px",
                borderRadius:
                  "14px",
                cursor: "pointer",
                fontWeight: "700"
              }}
            >
              🛒 {cart.length}
            </button>

          </div>

        </header>

        {/* HERO */}

        <section
          style={{
            padding:
              "70px 28px",
            background:
              "linear-gradient(135deg,#1d4ed8,#7c3aed)"
          }}
        >

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
              alignItems:
                "center",
              gap: "50px"
            }}
          >

            <div>

              <span
                style={{
                  background:
                    "rgba(255,255,255,0.18)",
                  padding:
                    "10px 16px",
                  borderRadius:
                    "30px",
                  fontSize: "13px"
                }}
              >
                🔥 Trending Products 2026
              </span>

              <h1
                style={{
                  fontSize:
                    "clamp(42px,7vw,74px)",
                  lineHeight: "1.1",
                  marginTop:
                    "25px",
                  fontWeight:
                    "900"
                }}
              >
                Discover
                <br />
                Viral Products
              </h1>

              <p
                style={{
                  marginTop:
                    "24px",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#e2e8f0",
                  maxWidth:
                    "620px"
                }}
              >
                Premium ecommerce
                experience with
                trending gadgets,
                decor, gifting
                products and
                modern lifestyle
                accessories.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  marginTop:
                    "32px",
                  flexWrap:
                    "wrap"
                }}
              >

                <button
                  onClick={() => {

                    document
                      .getElementById(
                        "products"
                      )
                      ?.scrollIntoView({
                        behavior:
                          "smooth"
                      });

                  }}
                  style={{
                    padding:
                      "16px 28px",
                    border:
                      "none",
                    borderRadius:
                      "14px",
                    background:
                      "#fff",
                    color:
                      "#111827",
                    fontWeight:
                      "700",
                    cursor:
                      "pointer",
                    fontSize:
                      "15px"
                  }}
                >
                  Shop Now
                </button>

                <button
                  style={{
                    padding:
                      "16px 28px",
                    border:
                      "1px solid rgba(255,255,255,0.3)",
                    borderRadius:
                      "14px",
                    background:
                      "transparent",
                    color:
                      "#fff",
                    fontWeight:
                      "700",
                    cursor:
                      "pointer",
                    fontSize:
                      "15px"
                  }}
                >
                  Explore
                </button>

              </div>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop"
                alt=""
                style={{
                  width: "100%",
                  height: "520px",
                  objectFit:
                    "cover",
                  borderRadius:
                    "30px",
                  boxShadow:
                    "0 20px 80px rgba(0,0,0,0.3)"
                }}
              />

            </div>

          </div>

        </section>

        {/* FEATURES */}

        <section
          style={{
            padding:
              "28px",
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
                background:
                  "#071028",
                padding:
                  "24px",
                borderRadius:
                  "20px",
                textAlign:
                  "center",
                border:
                  "1px solid rgba(255,255,255,0.05)"
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "20px"
                }}
              >
                {item}
              </h3>
            </div>

          ))}

        </section>

        {/* CATEGORIES */}

        <section
          id="categories"
          style={{
            padding:
              "20px 28px"
          }}
        >

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap:
                "wrap"
            }}
          >

            {categories.map(
              (cat, index) => (

                <button
                  key={index}
                  onClick={() =>
                    setCategory(cat)
                  }
                  style={{
                    padding:
                      "12px 22px",
                    borderRadius:
                      "40px",
                    border:
                      "none",
                    background:
                      category ===
                      cat
                        ? "linear-gradient(135deg,#2563eb,#7c3aed)"
                        : "#0f172a",
                    color:
                      "#fff",
                    cursor:
                      "pointer",
                    fontWeight:
                      "700",
                    fontSize:
                      "14px"
                  }}
                >
                  {cat}
                </button>

              )
            )}

          </div>

        </section>

        {/* PRODUCTS */}

        <section
          id="products"
          style={{
            padding:
              "30px 28px 80px"
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
              flexWrap:
                "wrap",
              gap: "15px"
            }}
          >

            <h2
              style={{
                fontSize:
                  "clamp(28px,5vw,46px)",
                margin: 0,
                fontWeight:
                  "800"
              }}
            >
              🔥 Best Sellers
            </h2>

            <p
              style={{
                color:
                  "#94a3b8",
                fontSize:
                  "15px"
              }}
            >
              Products:
              {" "}
              {
                filteredProducts.length
              }
            </p>

          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(240px,1fr))",
              gap: "22px"
            }}
          >

            {filteredProducts.map(
              (product, index) => (

                <ProductCard
                  key={index}
                  product={product}
                  addToCart={
                    addToCart
                  }
                />

              )
            )}

          </div>

        </section>

        {/* CART */}

        <div
          style={{
            position: "fixed",
            top: 0,
            right:
              cartOpen
                ? 0
                : "-430px",
            width: "400px",
            maxWidth: "100%",
            height: "100%",
            background:
              "#0f172a",
            zIndex: 9999,
            transition:
              "0.3s",
            padding:
              "24px",
            overflowY:
              "auto"
          }}
        >

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems:
                "center"
            }}
          >

            <h2>
              🛒 Your Cart
            </h2>

            <button
              onClick={() =>
                setCartOpen(false)
              }
              style={{
                background:
                  "transparent",
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
              marginTop:
                "24px"
            }}
          >

            {cart.map(
              (item, index) => (

                <div
                  key={index}
                  style={{
                    background:
                      "#111827",
                    borderRadius:
                      "18px",
                    padding:
                      "14px",
                    display:
                      "flex",
                    gap: "14px",
                    marginBottom:
                      "18px"
                  }}
                >

                  <img
                    src={
                      item.images?.[0]
                    }
                    alt=""
                    style={{
                      width:
                        "90px",
                      height:
                        "90px",
                      objectFit:
                        "cover",
                      borderRadius:
                        "14px"
                    }}
                  />

                  <div>

                    <h4
                      style={{
                        margin: 0,
                        fontSize:
                          "15px",
                        lineHeight:
                          "1.5"
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      style={{
                        color:
                          "#22c55e",
                        marginTop:
                          "10px"
                      }}
                    >
                      {
                        item.sellingPrice
                      }
                    </p>

                    <p>
                      Qty:
                      {" "}
                      {item.qty}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

          <div
            style={{
              borderTop:
                "1px solid rgba(255,255,255,0.06)",
              paddingTop:
                "20px",
              marginTop:
                "20px"
            }}
          >

            <h2>
              ₹{totalPrice}
            </h2>

            <button
              style={{
                width: "100%",
                padding:
                  "16px",
                border:
                  "none",
                borderRadius:
                  "14px",
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
                color:
                  "#fff",
                fontWeight:
                  "700",
                cursor:
                  "pointer",
                marginTop:
                  "14px"
              }}
            >
              Checkout
            </button>

          </div>

        </div>

        {/* FOOTER */}

        <footer
          style={{
            background:
              "#01040f",
            borderTop:
              "1px solid rgba(255,255,255,0.06)",
            padding:
              "70px 28px"
          }}
        >

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "40px"
            }}
          >

            <div>

              <h2
                style={{
                  fontSize:
                    "34px"
                }}
              >
                OmniSphere
              </h2>

              <p
                style={{
                  color:
                    "#94a3b8",
                  lineHeight:
                    "1.8",
                  marginTop:
                    "16px"
                }}
              >
                Premium ecommerce
                platform with
                modern UI and
                trending products.
              </p>

            </div>

            <div>

              <h3>
                Quick Links
              </h3>

              <p
                style={
                  footerLink
                }
              >
                Home
              </p>

              <p
                style={
                  footerLink
                }
              >
                Products
              </p>

              <p
                style={
                  footerLink
                }
              >
                Categories
              </p>

            </div>

            <div>

              <h3>
                Customer Care
              </h3>

              <p
                style={
                  footerLink
                }
              >
                Contact Us
              </p>

              <p
                style={
                  footerLink
                }
              >
                Shipping Policy
              </p>

              <p
                style={
                  footerLink
                }
              >
                Refund Policy
              </p>

            </div>

          </div>

          <div
            style={{
              marginTop:
                "50px",
              borderTop:
                "1px solid rgba(255,255,255,0.06)",
              paddingTop:
                "22px",
              textAlign:
                "center",
              color:
                "#94a3b8",
              fontSize:
                "14px"
            }}
          >
            © 2026 OmniSphere.
            All rights reserved.
          </div>

        </footer>

      </div>

    </BrowserRouter>

  );

}

function ProductCard({
  product,
  addToCart
}) {

  const navigate =
    useNavigate();

  return (

    <div
      style={{
        background:
          "#071028",
        borderRadius:
          "22px",
        overflow:
          "hidden",
        border:
          "1px solid rgba(255,255,255,0.05)",
        transition:
          "0.3s"
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
          padding:
            "18px"
        }}
      >

        <p
          style={{
            color:
              "#60a5fa",
            fontSize:
              "13px",
            margin: 0
          }}
        >
          {product.category}
        </p>

        <h3
          style={{
            marginTop:
              "12px",
            fontSize:
              "22px",
            lineHeight:
              "1.5",
            fontWeight:
              "700",
            minHeight:
              "70px"
          }}
        >
          {product.title}
        </h3>

        <div
          style={{
            display: "flex",
            alignItems:
              "center",
            gap: "12px",
            marginTop:
              "14px"
          }}
        >

          <span
            style={{
              color:
                "#22c55e",
              fontSize:
                "34px",
              fontWeight:
                "800"
            }}
          >
            {
              product.sellingPrice
            }
          </span>

          <span
            style={{
              textDecoration:
                "line-through",
              color:
                "#94a3b8",
              fontSize:
                "18px"
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
            marginTop:
              "20px"
          }}
        >

          <button
            onClick={() =>
              navigate(
                `/product/${product.id}`
              )
            }
            style={{
              flex: 1,
              padding:
                "14px",
              border:
                "none",
              borderRadius:
                "14px",
              background:
                "#111827",
              color:
                "#fff",
              fontWeight:
                "700",
              cursor:
                "pointer"
            }}
          >
            View
          </button>

          <button
            onClick={() =>
              addToCart(
                product
              )
            }
            style={{
              flex: 1,
              padding:
                "14px",
              border:
                "none",
              borderRadius:
                "14px",
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
              color:
                "#fff",
              fontWeight:
                "700",
              cursor:
                "pointer"
            }}
          >
            Add
          </button>

        </div>

      </div>

    </div>

  );

}

const navBtn = {

  background:
    "transparent",

  border: "none",

  color: "#fff",

  fontWeight: "700",

  cursor: "pointer",

  fontSize: "15px"

};

const footerLink = {

  color: "#94a3b8",

  cursor: "pointer",

  marginTop: "12px"

};
