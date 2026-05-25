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

function Home({

  products,
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
  addToCart

}) {

  const navigate =
    useNavigate();

  const categories = [

    "All",

    ...new Set(
      products.map(
        (p)=>p.category
      )
    )

  ];

  const filteredProducts =
    products.filter((item)=>{

      const matchSearch =
        item.title
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        );

      const matchCategory =
        activeCategory==="All"
        ? true
        : item.category===activeCategory;

      return (
        matchSearch &&
        matchCategory
      );

    });

  return (

    <div>

      {/* HERO */}

      <section
        style={{
          padding:"80px 25px",
          background:
          "linear-gradient(135deg,#1d4ed8,#7c3aed)"
        }}
      >

        <div
          style={{
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
            gap:"50px",
            alignItems:"center"
          }}
        >

          <div>

            <span
              style={{
                background:
                "rgba(255,255,255,0.15)",
                padding:"8px 16px",
                borderRadius:"20px",
                fontSize:"13px"
              }}
            >
              🔥 Trending Products
            </span>

            <h1
              style={{
                fontSize:"70px",
                lineHeight:"1.1",
                marginTop:"20px",
                fontWeight:"900"
              }}
            >
              Discover
              <br />
              Viral Products
            </h1>

            <p
              style={{
                marginTop:"20px",
                lineHeight:"1.9",
                color:"#e5e7eb",
                fontSize:"18px",
                maxWidth:"600px"
              }}
            >
              Premium ecommerce
              experience with
              trending gadgets,
              gifts and decor.
            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width:"100%",
                height:"500px",
                objectFit:"cover",
                borderRadius:"30px"
              }}
            />

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        style={{
          padding:"25px",
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
          gap:"18px"
        }}
      >

        {[
          "🚚 Free Shipping",
          "💳 Secure Payments",
          "🔥 Trending Products",
          "⭐ Premium Quality"
        ].map((item,index)=>(

          <div
            key={index}
            style={{
              background:"#071028",
              padding:"24px",
              borderRadius:"20px",
              textAlign:"center"
            }}
          >
            <h3>{item}</h3>
          </div>

        ))}

      </section>

      {/* CATEGORY */}

      <section
        id="category-section"
        style={{
          padding:"25px"
        }}
      >

        <div
          style={{
            display:"flex",
            gap:"12px",
            flexWrap:"wrap"
          }}
        >

          {categories.map((cat,i)=>(

            <button
              key={i}
              onClick={()=>
                setActiveCategory(cat)
              }
              style={{
                padding:"12px 20px",
                borderRadius:"30px",
                border:"none",
                background:
                activeCategory===cat
                ? "#2563eb"
                : "#111827",
                color:"#fff",
                fontWeight:"700",
                cursor:"pointer"
              }}
            >
              {cat}
            </button>

          ))}

        </div>

      </section>

      {/* PRODUCTS */}

      <section
        id="products-section"
        style={{
          padding:"0 25px 80px"
        }}
      >

        <h2
          style={{
            fontSize:"42px",
            marginBottom:"30px"
          }}
        >
          🔥 Best Sellers
        </h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
            gap:"20px"
          }}
        >

          {filteredProducts.map((product,i)=>(

            <div
              key={i}
              style={{
                background:"#071028",
                borderRadius:"22px",
                overflow:"hidden"
              }}
            >

              <img
                src={product.images?.[0]}
                alt=""
                style={{
                  width:"100%",
                  height:"250px",
                  objectFit:"cover"
                }}
              />

              <div
                style={{
                  padding:"18px"
                }}
              >

                <p
                  style={{
                    color:"#60a5fa",
                    fontSize:"13px"
                  }}
                >
                  {product.category}
                </p>

                <h3
                  style={{
                    marginTop:"10px",
                    lineHeight:"1.5",
                    minHeight:"70px"
                  }}
                >
                  {product.title}
                </h3>

                <div
                  style={{
                    display:"flex",
                    gap:"12px",
                    alignItems:"center",
                    marginTop:"15px"
                  }}
                >

                  <span
                    style={{
                      color:"#22c55e",
                      fontSize:"30px",
                      fontWeight:"800"
                    }}
                  >
                    {product.sellingPrice}
                  </span>

                  <span
                    style={{
                      color:"#94a3b8",
                      textDecoration:"line-through"
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
                    display:"flex",
                    gap:"10px",
                    marginTop:"20px"
                  }}
                >

                  <button
                    onClick={()=>
                      navigate(
                        `/product/${product.id}`
                      )
                    }
                    style={{
                      flex:1,
                      padding:"12px",
                      border:"none",
                      borderRadius:"12px",
                      background:"#111827",
                      color:"#fff",
                      fontWeight:"700",
                      cursor:"pointer"
                    }}
                  >
                    View
                  </button>

                  <button
                    onClick={()=>
                      addToCart(product)
                    }
                    style={{
                      flex:1,
                      padding:"12px",
                      border:"none",
                      borderRadius:"12px",
                      background:
                      "linear-gradient(135deg,#2563eb,#7c3aed)",
                      color:"#fff",
                      fontWeight:"700",
                      cursor:"pointer"
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

    </div>

  );

}

function ProductPage({

  products,
  addToCart

}) {

  const { id } =
    useParams();

  const product =
    products.find(
      (p)=>
      String(p.id)===String(id)
    );

  const [selectedImage,setSelectedImage] =
    useState("");

  useEffect(()=>{

    if(product){

      setSelectedImage(
        product.images?.[0]
      );

    }

  },[product]);

  if(!product){

    return (
      <div
        style={{
          padding:"50px"
        }}
      >
        Product not found
      </div>
    );

  }

  return (

    <section
      style={{
        padding:"40px 25px"
      }}
    >

      <Link
        to="/"
        style={{
          display:"inline-block",
          marginBottom:"25px",
          padding:"12px 18px",
          borderRadius:"12px",
          background:"#111827",
          color:"#fff",
          textDecoration:"none"
        }}
      >
        ← Back
      </Link>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(350px,1fr))",
          gap:"40px"
        }}
      >

        {/* LEFT */}

        <div>

          <img
            src={selectedImage}
            alt=""
            style={{
              width:"100%",
              height:"520px",
              objectFit:"contain",
              borderRadius:"20px",
              background:"#000"
            }}
          />

          <div
            style={{
              display:"flex",
              gap:"12px",
              marginTop:"15px",
              overflowX:"auto"
            }}
          >

            {product.images?.map(
              (img,index)=>(

              <img
                key={index}
                src={img}
                alt=""
                onClick={()=>
                  setSelectedImage(img)
                }
                style={{
                  width:"90px",
                  height:"90px",
                  objectFit:"cover",
                  borderRadius:"12px",
                  cursor:"pointer",
                  border:
                  selectedImage===img
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
              color:"#60a5fa"
            }}
          >
            {product.category}
          </p>

          <h1
            style={{
              fontSize:"50px",
              lineHeight:"1.2",
              marginTop:"15px"
            }}
          >
            {product.title}
          </h1>

          <div
            style={{
              display:"flex",
              gap:"15px",
              alignItems:"center",
              marginTop:"25px"
            }}
          >

            <span
              style={{
                color:"#22c55e",
                fontSize:"42px",
                fontWeight:"800"
              }}
            >
              {product.sellingPrice}
            </span>

            <span
              style={{
                color:"#94a3b8",
                textDecoration:"line-through",
                fontSize:"22px"
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

          <p
            style={{
              marginTop:"25px",
              lineHeight:"2",
              color:"#cbd5e1"
            }}
          >
            {product.description}
          </p>

          <div
            style={{
              display:"flex",
              gap:"15px",
              marginTop:"35px",
              flexWrap:"wrap"
            }}
          >

            <button
              onClick={()=>
                addToCart(product)
              }
              style={{
                flex:1,
                minWidth:"220px",
                padding:"16px",
                border:"none",
                borderRadius:"14px",
                background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
                color:"#fff",
                fontWeight:"700",
                cursor:"pointer"
              }}
            >
              Add To Cart
            </button>

            <button
              style={{
                flex:1,
                minWidth:"220px",
                padding:"16px",
                border:"none",
                borderRadius:"14px",
                background:
                "linear-gradient(135deg,#22c55e,#16a34a)",
                color:"#fff",
                fontWeight:"700",
                cursor:"pointer"
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

export default function App() {

  const [products,setProducts] =
    useState([]);

  const [search,setSearch] =
    useState("");

  const [activeCategory,setActiveCategory] =
    useState("All");

  const [cart,setCart] =
    useState([]);

  const [cartOpen,setCartOpen] =
    useState(false);

  useEffect(()=>{

    fetch("/products.json")
      .then((res)=>res.json())
      .then((data)=>{

        const updated =
          data.map((item,index)=>({

            ...item,
            id:item.id || index + 1

          }));

        setProducts(updated);

      });

  },[]);

  const addToCart = (product)=>{

    const exists =
      cart.find(
        (item)=>
        item.id===product.id
      );

    if(exists){

      setCart(

        cart.map((item)=>

          item.id===product.id

          ? {
              ...item,
              qty:item.qty + 1
            }

          : item

        )

      );

    } else {

      setCart([

        ...cart,

        {
          ...product,
          qty:1
        }

      ]);

    }

    setCartOpen(true);

  };

  const increaseQty = (id)=>{

    setCart(

      cart.map((item)=>

        item.id===id

        ? {
            ...item,
            qty:item.qty + 1
          }

        : item

      )

    );

  };

  const decreaseQty = (id)=>{

    setCart(

      cart
      .map((item)=>

        item.id===id

        ? {
            ...item,
            qty:item.qty - 1
          }

        : item

      )
      .filter((item)=>
        item.qty > 0
      )

    );

  };

  const totalPrice =
    cart.reduce((acc,item)=>{

      const price =
        parseInt(
          item.sellingPrice
          ?.replace(/[^\d]/g,"")
        ) || 0;

      return (
        acc + price * item.qty
      );

    },0);

  return (

    <BrowserRouter>

      <div
        style={{
          background:"#020617",
          minHeight:"100vh",
          color:"#fff",
          fontFamily:"Arial"
        }}
      >

        {/* HEADER */}

        <header
          style={{
            position:"sticky",
            top:0,
            zIndex:1000,
            background:
            "rgba(2,6,23,0.92)",
            backdropFilter:"blur(10px)",
            padding:"18px 25px",
            borderBottom:
            "1px solid rgba(255,255,255,0.08)",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            flexWrap:"wrap",
            gap:"15px"
          }}
        >

          <Link
            to="/"
            style={{
              color:"#fff",
              textDecoration:"none"
            }}
          >
            <h2
              style={{
                fontSize:"32px",
                fontWeight:"900"
              }}
            >
              OmniSphere
            </h2>
          </Link>

          <div
            style={{
              display:"flex",
              gap:"18px",
              alignItems:"center",
              flexWrap:"wrap"
            }}
          >

            <button
              onClick={() => {

                window.scrollTo({
                  top:0,
                  behavior:"smooth"
                });

              }}
              style={{
                background:"transparent",
                border:"none",
                color:"#fff",
                cursor:"pointer",
                fontWeight:"700"
              }}
            >
              Home
            </button>

            <button
              onClick={() => {

                const section =
                  document.getElementById("products-section");

                section?.scrollIntoView({
                  behavior:"smooth"
                });

              }}
              style={{
                background:"transparent",
                border:"none",
                color:"#fff",
                cursor:"pointer",
                fontWeight:"700"
              }}
            >
              Products
            </button>

            <button
              onClick={() => {

                const section =
                  document.getElementById("category-section");

                section?.scrollIntoView({
                  behavior:"smooth"
                });

              }}
              style={{
                background:"transparent",
                border:"none",
                color:"#fff",
                cursor:"pointer",
                fontWeight:"700"
              }}
            >
              Categories
            </button>

          </div>

          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e)=>
              setSearch(e.target.value)
            }
            style={{
              padding:"14px",
              borderRadius:"14px",
              border:"none",
              width:"340px",
              maxWidth:"100%",
              outline:"none",
              background:"#111827",
              color:"#fff"
            }}
          />

          <button
            onClick={()=>
              setCartOpen(true)
            }
            style={{
              background:"#111827",
              border:"none",
              padding:"12px 18px",
              borderRadius:"12px",
              color:"#fff",
              fontWeight:"700",
              cursor:"pointer"
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
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
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
            position:"fixed",
            top:0,
            right:
            cartOpen
            ? 0
            : "-420px",
            width:"400px",
            maxWidth:"100%",
            height:"100%",
            background:"#0f172a",
            zIndex:99999,
            transition:"0.3s",
            padding:"25px",
            overflowY:"auto"
          }}
        >

          <div
            style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
          >

            <h2>
              🛒 Your Cart
            </h2>

            <button
              onClick={()=>
                setCartOpen(false)
              }
              style={{
                background:"transparent",
                border:"none",
                color:"#fff",
                fontSize:"22px",
                cursor:"pointer"
              }}
            >
              ✕
            </button>

          </div>

          <div
            style={{
              marginTop:"25px"
            }}
          >

            {cart.map((item,i)=>(

              <div
                key={i}
                style={{
                  display:"flex",
                  gap:"12px",
                  background:"#111827",
                  padding:"12px",
                  borderRadius:"16px",
                  marginBottom:"18px"
                }}
              >

                <img
                  src={item.images?.[0]}
                  alt=""
                  style={{
                    width:"90px",
                    height:"90px",
                    objectFit:"cover",
                    borderRadius:"12px"
                  }}
                />

                <div
                  style={{
                    flex:1
                  }}
                >

                  <h4>
                    {item.title}
                  </h4>

                  <p
                    style={{
                      color:"#22c55e",
                      marginTop:"10px"
                    }}
                  >
                    {item.sellingPrice}
                  </p>

                  <div
                    style={{
                      display:"flex",
                      gap:"10px",
                      alignItems:"center",
                      marginTop:"10px"
                    }}
                  >

                    <button
                      onClick={()=>
                        decreaseQty(item.id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.qty}
                    </span>

                    <button
                      onClick={()=>
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
              marginTop:"25px",
              borderTop:
              "1px solid rgba(255,255,255,0.08)",
              paddingTop:"20px"
            }}
          >

            <h2>
              Total: ₹{totalPrice}
            </h2>

            <button
              style={{
                width:"100%",
                marginTop:"18px",
                padding:"16px",
                border:"none",
                borderRadius:"14px",
                background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",
                color:"#fff",
                fontWeight:"700",
                cursor:"pointer"
              }}
            >
              Checkout
            </button>

          </div>

        </div>

        {/* FOOTER */}

        <footer
          id="footer-section"
          style={{
            padding:"60px 25px",
            borderTop:
            "1px solid rgba(255,255,255,0.08)",
            background:"#01040f"
          }}
        >

          <div
            style={{
              display:"grid",
              gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
              gap:"30px"
            }}
          >

            <div>

              <h2
                style={{
                  fontSize:"32px"
                }}
              >
                OmniSphere
              </h2>

              <p
                style={{
                  marginTop:"18px",
                  color:"#94a3b8",
                  lineHeight:"1.8"
                }}
              >
                Premium ecommerce
                shopping experience.
              </p>

            </div>

            <div>

              <h3>Quick Links</h3>

              <div
                style={{
                  marginTop:"18px",
                  color:"#94a3b8",
                  lineHeight:"2"
                }}
              >

                <p
                  style={{
                    cursor:"pointer"
                  }}
                  onClick={() => {

                    window.scrollTo({
                      top:0,
                      behavior:"smooth"
                    });

                  }}
                >
                  Home
                </p>

                <p
                  style={{
                    cursor:"pointer"
                  }}
                  onClick={() => {

                    document
                    .getElementById("products-section")
                    ?.scrollIntoView({
                      behavior:"smooth"
                    });

                  }}
                >
                  Products
                </p>

                <p
                  style={{
                    cursor:"pointer"
                  }}
                  onClick={() => {

                    document
                    .getElementById("category-section")
                    ?.scrollIntoView({
                      behavior:"smooth"
                    });

                  }}
                >
                  Categories
                </p>

              </div>

            </div>

          </div>

        </footer>

      </div>

    </BrowserRouter>

  );

}
