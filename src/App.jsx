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

/* =========================
   HERO IMAGES
========================= */

const heroImages = [

  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"

];

/* =========================
   HOME PAGE
========================= */

function Home({

  products,
  search,
  setSearch,
  category,
  setCategory,
  addToCart,
  loading,
  setCartOpen

}) {

  const navigate =
    useNavigate();

  const [heroIndex,
    setHeroIndex] =
    useState(0);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setHeroIndex((prev) =>

          prev ===
          heroImages.length - 1

            ? 0

            : prev + 1

        );

      }, 3000);

    return () =>
      clearInterval(interval);

  }, []);

  const categories = [

    "All",

    ...new Set(
      products.map(
        (p) => p.category
      )
    )

  ];

  const featuredProducts =
    products.slice(0, 8);

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

  if (loading) {

    return (

      <div
        style={{
          padding: "120px",
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "700"
        }}
      >
        Loading Products...
      </div>

    );

  }

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
                fontSize:
                  "clamp(42px,7vw,74px)",
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
              decor, gifts and lifestyle
              products.
            </p>

            {/* LIVE */}

            <div
              style={{
                marginTop: "22px",
                display: "flex",
                gap: "16px",
                flexWrap: "wrap"
              }}
            >

              <div
                style={{
                  background:
                    "rgba(255,255,255,0.15)",
                  padding: "12px 18px",
                  borderRadius: "14px"
                }}
              >
                👁 214 Live Visitors
              </div>

              <div
                style={{
                  background:
                    "rgba(255,255,255,0.15)",
                  padding: "12px 18px",
                  borderRadius: "14px"
                }}
              >
                🔥 83 Orders Today
              </div>

            </div>

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
                    .getElementById(
                      "products"
                    )
                    ?.scrollIntoView({
                      behavior: "smooth"
                    });

                }}
                style={primaryBtn}
              >
                Shop Now
              </button>

              <button
                onClick={() => {

                  document
                    .getElementById(
                      "featured"
                    )
                    ?.scrollIntoView({
                      behavior: "smooth"
                    });

                }}
                style={secondaryBtn}
              >
                Best Sellers
              </button>

            </div>

          </div>

          {/* HERO IMAGE */}

          <div>

            <img
              src={heroImages[heroIndex]}
              alt=""
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
                borderRadius: "30px",
                transition: "0.4s"
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
            style={featureCard}
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

        <h2 style={sectionTitle}>
          🔥 Best Selling Products
        </h2>

        <div style={gridStyle}>

          {featuredProducts.map(
            (product, index) => (

              <ProductCard
                key={index}
                product={product}
                addToCart={addToCart}
              />

            )
          )}

        </div>

      </section>

      {/* CATEGORY */}

      <section
        id="categories"
        style={{
          padding: "30px 28px"
        }}
      >

        <h2 style={sectionTitle}>
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
              onClick={() =>
                setCategory(cat)
              }
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

        <h2 style={sectionTitle}>
          🛍 All Products
        </h2>

        <div style={gridStyle}>

          {filteredProducts.map(
            (product, index) => (

              <ProductCard
                key={index}
                product={product}
                addToCart={addToCart}
              />

            )
          )}

        </div>

      </section>

      {/* MOBILE BOTTOM NAV */}

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "#020617",
          display: "flex",
          justifyContent: "space-around",
          padding: "14px 0",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          zIndex: 9999
        }}
      >

        <a
          href="/"
          style={mobileNav}
        >
          🏠
        </a>

        <a
          href="#categories"
          style={mobileNav}
        >
          📦
        </a>

        <a
          href="#products"
          style={mobileNav}
        >
          🛍
        </a>

        <button
          onClick={() =>
            setCartOpen(true)
          }
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          🛒
        </button>

      </div>

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

  const navigate =
    useNavigate();

  const originalPrice =
    Math.floor(

      parseInt(
        product.sellingPrice?.replace(
          /[^\d]/g,
          ""
        )
      ) * 1.6

    );

  return (

    <div style={productCard}>

      {/* IMAGE */}

      <div
        style={{
          position: "relative"
        }}
      >

        {/* DISCOUNT */}

        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: "#ef4444",
            padding: "8px 12px",
            borderRadius: "10px",
            fontSize: "12px",
            fontWeight: "700",
            zIndex: 2
          }}
        >
          40% OFF
        </div>

        <img
          src={product.images?.[0]}
          alt=""
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover"
          }}
        />

      </div>

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
              textDecoration:
                "line-through"
            }}
          >
            ₹{originalPrice}
          </span>

        </div>

        {/* RATING */}

        <div
          style={{
            marginTop: "10px",
            color: "#facc15"
          }}
        >
          ★★★★★
          <span
            style={{
              color: "#94a3b8",
              marginLeft: "8px",
              fontSize: "14px"
            }}
          >
            (4.8)
          </span>
        </div>

        {/* BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px"
          }}
        >

          <button
            onClick={() =>
              navigate(
                `/product/${product.id}`
              )
            }
            style={darkBtn}
          >
            View
          </button>

          <button
            onClick={() =>
              addToCart(product)
            }
            style={primaryBtn}
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

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  const product =
    products.find(
      (p) =>
      String(p.id) ===
      String(id)
    );

  const [selectedImage,
    setSelectedImage] =
    useState("");

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    if (product) {

      setSelectedImage(
        product.images?.[0]
      );

    }

  }, [product]);

  if (!product) {

    return (
      <div
        style={{
          padding: "100px",
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
        padding: "40px 28px 100px"
      }}
    >

      <button
        onClick={() =>
          navigate(-1)
        }
        style={darkBtn}
      >
        ← Back
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(340px,1fr))",
          gap: "50px",
          marginTop: "30px"
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

            {product.images?.map(
              (img, index) => (

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

              )
            )}

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
              fontSize:
                "clamp(28px,4vw,48px)",
              lineHeight: "1.4",
              marginTop: "16px",
              fontWeight: "800"
            }}
          >
            {product.title}
          </h1>

          {/* RATING */}

          <div
            style={{
              marginTop: "14px",
              color: "#facc15"
            }}
          >
            ★★★★★
            <span
              style={{
                color: "#94a3b8",
                marginLeft: "8px"
              }}
            >
              4.8 Ratings
            </span>
          </div>

          {/* PRICE */}

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
                textDecoration:
                  "line-through",
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

          {/* DESCRIPTION */}

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

          {/* SPECS */}

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
                  style={specCard}
                >
                  ✅ {item}
                </div>

              ))}

            </div>

          </div>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "42px",
              flexWrap: "wrap"
            }}
          >

            <button
              onClick={() =>
                addToCart(product)
              }
              style={primaryBtn}
            >
              Add To Cart
            </button>

            <a
              href="https://phon.pe/"
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                minWidth: "220px",
                textDecoration: "none"
              }}
            >

              <button
                style={phonepeBtn}
              >
                Buy Now
              </button>

            </a>

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

  const [products,
    setProducts] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  const [search,
    setSearch] =
    useState("");

  const [category,
    setCategory] =
    useState("All");

  const [cart,
    setCart] =
    useState([]);

  const [cartOpen,
    setCartOpen] =
    useState(false);

  useEffect(() => {

    setLoading(true);

    fetch("/products.json")
      .then((res) =>
        res.json()
      )
      .then((data) => {

        const updated =
          data.map(
            (
              item,
              index
            ) => ({

              ...item,

              id:
                item.id ||
                index + 1

            })
          );

        setProducts(updated);

        setLoading(false);

      });

  }, []);

  const addToCart =
    (product) => {

      const exists =
        cart.find(
          (item) =>
            item.id ===
            product.id
        );

      if (exists) {

        setCart(

          cart.map(
            (item) =>

              item.id ===
              product.id

                ? {
                    ...item,
                    qty:
                      item.qty +
                      1
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

  const totalPrice =
    cart.reduce(
      (
        acc,
        item
      ) => {

        const price =
          parseInt(
            item.sellingPrice?.replace(
              /[^\d]/g,
              ""
            )
          ) || 0;

        return (
          acc +
          price *
            item.qty
        );

      },
      0
    );

  return (

    <BrowserRouter>

      <div
        style={{
          background:
            "#020617",
          color:
            "#fff",
          minHeight:
            "100vh",
          fontFamily:
            "Inter,Arial,sans-serif"
        }}
      >

        {/* ANNOUNCEMENT */}

        <div
          style={{
            background: "#2563eb",
            padding: "10px",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "600"
          }}
        >
          🔥 Free Delivery On All Orders Above ₹999
        </div>

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
            padding:
              "16px 28px",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
            flexWrap: "wrap",
            gap: "18px"
          }}
        >

          <Link
            to="/"
            style={{
              textDecoration:
                "none",
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
              color: "#fff"
            }}
          />

          <button
            onClick={() =>
              setCartOpen(true)
            }
            style={darkBtn}
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
                loading={loading}
                setCartOpen={setCartOpen}

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
            right:
              cartOpen
                ? 0
                : "-430px",
            width: "400px",
            maxWidth: "100%",
            height: "100%",
            background:
              "#0f172a",
            zIndex: 99999,
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
              alignItems:
                "center"
            }}
          >

            <h2>
              🛒 Cart
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

          {/* EMPTY */}

          {cart.length === 0 && (

            <div
              style={{
                textAlign: "center",
                marginTop: "100px"
              }}
            >

              <h2>
                Your Cart is Empty
              </h2>

              <p
                style={{
                  marginTop: "10px",
                  color: "#94a3b8"
                }}
              >
                Add products to continue shopping
              </p>

            </div>

          )}

          {/* CART ITEMS */}

          <div
            style={{
              marginTop: "24px"
            }}
          >

            {cart.map(
              (
                item,
                index
              ) => (

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

                    <h4>
                      {
                        item.title
                      }
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
                      {
                        item.qty
                      }
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

          {cart.length > 0 && (

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
                ₹
                {
                  totalPrice
                }
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

          )}

        </div>

        {/* NEWSLETTER */}

        <section
          style={{
            padding: "70px 28px",
            textAlign: "center"
          }}
        >

          <h2
            style={{
              fontSize: "42px"
            }}
          >
            Join Our Newsletter
          </h2>

          <p
            style={{
              marginTop: "16px",
              color: "#94a3b8"
            }}
          >
            Get updates about new trending products
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "30px",
              flexWrap: "wrap"
            }}
          >

            <input
              placeholder="Enter email"
              style={{
                padding: "16px",
                width: "320px",
                borderRadius: "14px",
                border: "none",
                background: "#0f172a",
                color: "#fff"
              }}
            />

            <button
              style={primaryBtn}
            >
              Subscribe
            </button>

          </div>

        </section>

        {/* WHATSAPP */}

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "80px",
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            background: "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            textDecoration: "none",
            zIndex: 99999
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

              <h2>
                OmniSphere
              </h2>

              <p
                style={{
                  marginTop: "16px",
                  color: "#94a3b8",
                  lineHeight: "1.8"
                }}
              >
                Premium ecommerce experience for trending products.
              </p>

            </div>

            <div>

              <h3>
                Quick Links
              </h3>

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
                  style={footerLink}
                >
                  Home
                </a>

                <a
                  href="#products"
                  style={footerLink}
                >
                  Products
                </a>

                <a
                  href="#categories"
                  style={footerLink}
                >
                  Categories
                </a>

              </div>

            </div>

            <div>

              <h3>
                Support
              </h3>

              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}
              >

                <p style={footerText}>
                  24x7 Customer Support
                </p>

                <p style={footerText}>
                  Secure Payments
                </p>

                <p style={footerText}>
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
            © 2026 OmniSphere. All rights reserved.
          </div>

        </footer>

      </div>

    </BrowserRouter>

  );

}

/* =========================
   STYLES
========================= */

const gridStyle = {

  display: "grid",

  gridTemplateColumns:
    "repeat(auto-fit,minmax(240px,1fr))",

  gap: "22px"

};

const featureCard = {

  background: "#071028",

  padding: "24px",

  borderRadius: "20px",

  textAlign: "center"

};

const productCard = {

  background: "#071028",

  borderRadius: "22px",

  overflow: "hidden",

  border:
    "1px solid rgba(255,255,255,0.05)"

};

const specCard = {

  background: "#071028",

  padding: "18px",

  borderRadius: "16px"

};

const sectionTitle = {

  fontSize: "40px",

  marginBottom: "30px"

};

const primaryBtn = {

  flex: 1,

  minWidth: "220px",

  padding: "16px 28px",

  border: "none",

  borderRadius: "14px",

  background:
    "linear-gradient(135deg,#2563eb,#7c3aed)",

  color: "#fff",

  fontWeight: "700",

  cursor: "pointer",

  fontSize: "15px"

};

const darkBtn = {

  padding: "14px 18px",

  border: "none",

  borderRadius: "14px",

  background: "#111827",

  color: "#fff",

  fontWeight: "700",

  cursor: "pointer"

};

const secondaryBtn = {

  padding: "16px 28px",

  border:
    "1px solid rgba(255,255,255,0.3)",

  borderRadius: "14px",

  background: "transparent",

  color: "#fff",

  fontWeight: "700",

  cursor: "pointer",

  fontSize: "15px"

};

const footerLink = {

  color: "#94a3b8",

  textDecoration: "none"

};

const footerText = {

  color: "#94a3b8"

};

const phonepeBtn = {

  width: "100%",

  padding: "18px",

  border: "none",

  borderRadius: "16px",

  background:
    "linear-gradient(135deg,#5f259f,#7c3aed)",

  color: "#fff",

  fontWeight: "800",

  cursor: "pointer",

  fontSize: "16px"

};

const mobileNav = {

  color: "#fff",

  textDecoration: "none"

};
