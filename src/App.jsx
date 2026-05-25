import React, { useEffect, useState } from "react";

export default function App() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All");

  useEffect(() => {

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

  }, []);

  const categories = [
    "All",
    ...new Set(
      products.map((p)=>p.category)
    )
  ];

  const filteredProducts =
    products.filter((item)=>{

      const matchSearch =
        item.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        activeCategory==="All"
        ? true
        : item.category===activeCategory;

      return matchSearch && matchCategory;

    });

  const bestSelling =
    products.slice(0,8);

  return (

    <div
      style={{
        background:"#020617",
        minHeight:"100vh",
        fontFamily:"Arial",
        color:"#fff"
      }}
    >

      {/* HEADER */}

      <header
        style={{
          position:"sticky",
          top:"0",
          zIndex:"1000",
          background:"rgba(2,6,23,0.9)",
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

        <div
          style={{
            display:"flex",
            alignItems:"center",
            gap:"12px"
          }}
        >

          <div
            style={{
              width:"45px",
              height:"45px",
              borderRadius:"14px",
              background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              fontWeight:"800",
              fontSize:"20px"
            }}
          >
            O
          </div>

          <div>

            <h2
              style={{
                fontSize:"26px",
                fontWeight:"800"
              }}
            >
              OmniSphere
            </h2>

            <p
              style={{
                color:"#94a3b8",
                fontSize:"12px"
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

      </header>

      {/* HERO */}

      <section
        style={{
          padding:"60px 25px",
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(320px,1fr))",
          gap:"40px",
          alignItems:"center",
          background:
          "linear-gradient(135deg,#1d4ed8,#7c3aed)"
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
            🔥 Trending Products 2026
          </span>

          <h1
            style={{
              fontSize:"65px",
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
              color:"#e5e7eb",
              lineHeight:"1.8",
              fontSize:"18px",
              maxWidth:"600px"
            }}
          >
            Explore trending gadgets,
            home decor, gifts, accessories
            and premium lifestyle products
            with modern shopping experience.
          </p>

          <div
            style={{
              display:"flex",
              gap:"15px",
              marginTop:"30px",
              flexWrap:"wrap"
            }}
          >

            <button
              style={{
                padding:"15px 26px",
                borderRadius:"14px",
                border:"none",
                fontWeight:"700",
                cursor:"pointer"
              }}
            >
              Shop Now
            </button>

            <button
              style={{
                padding:"15px 26px",
                borderRadius:"14px",
                border:"2px solid #fff",
                background:"transparent",
                color:"#fff",
                fontWeight:"700",
                cursor:"pointer"
              }}
            >
              Explore Products
            </button>

          </div>

        </div>

        <div
          style={{
            textAlign:"center"
          }}
        >

          <img
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop"
            alt=""
            style={{
              width:"100%",
              maxWidth:"500px",
              height:"360px",
              objectFit:"cover",
              borderRadius:"30px",
              boxShadow:
              "0 20px 50px rgba(0,0,0,0.35)"
            }}
          />

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
          "💳 Secure Payment",
          "🔥 Trending Products",
          "⭐ Premium Quality"
        ].map((item,index)=>(

          <div
            key={index}
            style={{
              background:"#071028",
              padding:"22px",
              borderRadius:"20px",
              textAlign:"center",
              border:
              "1px solid rgba(255,255,255,0.05)"
            }}
          >
            <h3>{item}</h3>
          </div>

        ))}

      </section>

      {/* BEST SELLERS */}

      <section
        style={{
          padding:"20px 25px"
        }}
      >

        <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:"20px"
          }}
        >

          <h2
            style={{
              fontSize:"40px"
            }}
          >
            🔥 Best Sellers
          </h2>

          <p
            style={{
              color:"#94a3b8"
            }}
          >
            {products.length} Products
          </p>

        </div>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
            gap:"18px"
          }}
        >

          {bestSelling.map((product,index)=>(

            <div
              key={index}
              style={{
                background:"#071028",
                borderRadius:"22px",
                overflow:"hidden",
                border:
                "1px solid rgba(255,255,255,0.06)"
              }}
            >

              <img
                src={product.images?.[0]}
                alt=""
                style={{
                  width:"100%",
                  height:"220px",
                  objectFit:"cover"
                }}
              />

              <div style={{padding:"16px"}}>

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
                    minHeight:"54px"
                  }}
                >
                  {product.title?.slice(0,50)}
                </h3>

                <div
                  style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"10px",
                    marginTop:"15px"
                  }}
                >

                  <span
                    style={{
                      color:"#22c55e",
                      fontSize:"22px",
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

                <button
                  onClick={()=>
                    setSelectedProduct({
                      ...product,
                      previewImage:
                      product.images?.[0]
                    })
                  }
                  style={{
                    width:"100%",
                    marginTop:"18px",
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
                  View Product
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CATEGORY FILTER */}

      <section
        style={{
          padding:"25px"
        }}
      >

        <h2
          style={{
            fontSize:"38px",
            marginBottom:"20px"
          }}
        >
          Browse Categories
        </h2>

        <div
          style={{
            display:"flex",
            gap:"12px",
            flexWrap:"wrap",
            marginBottom:"25px"
          }}
        >

          {categories.map((cat,index)=>(

            <button
              key={index}
              onClick={()=>
                setActiveCategory(cat)
              }
              style={{
                padding:"12px 20px",
                borderRadius:"30px",
                border:"none",
                cursor:"pointer",
                fontWeight:"700",
                background:
                activeCategory===cat
                ? "#2563eb"
                : "#111827",
                color:"#fff"
              }}
            >
              {cat}
            </button>

          ))}

        </div>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
            gap:"18px"
          }}
        >

          {filteredProducts.map((product,index)=>(

            <div
              key={index}
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
                  height:"220px",
                  objectFit:"cover"
                }}
              />

              <div style={{padding:"16px"}}>

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
                    minHeight:"54px"
                  }}
                >
                  {product.title?.slice(0,50)}
                </h3>

                <div
                  style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"10px",
                    marginTop:"15px"
                  }}
                >

                  <span
                    style={{
                      color:"#22c55e",
                      fontSize:"22px",
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

                <button
                  onClick={()=>
                    setSelectedProduct({
                      ...product,
                      previewImage:
                      product.images?.[0]
                    })
                  }
                  style={{
                    width:"100%",
                    marginTop:"18px",
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
                  View Product
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PRODUCT MODAL */}

      {selectedProduct && (

        <div
          onClick={()=>
            setSelectedProduct(null)
          }
          style={{
            position:"fixed",
            inset:"0",
            background:"rgba(0,0,0,0.8)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            padding:"20px",
            zIndex:"999"
          }}
        >

          <div
            onClick={(e)=>
              e.stopPropagation()
            }
            style={{
              background:"#0f172a",
              width:"100%",
              maxWidth:"780px",
              borderRadius:"20px",
              overflow:"hidden",
              maxHeight:"90vh",
              overflowY:"auto"
            }}
          >

            <img
              src={
                selectedProduct.previewImage
              }
              alt=""
              style={{
                width:"100%",
                height:"420px",
                objectFit:"cover"
              }}
            />

            <div style={{padding:"25px"}}>

              <h2
                style={{
                  fontSize:"32px"
                }}
              >
                {selectedProduct.title}
              </h2>

              <p
                style={{
                  marginTop:"18px",
                  color:"#cbd5e1",
                  lineHeight:"1.8"
                }}
              >
                {selectedProduct.description}
              </p>

              <div
                style={{
                  display:"flex",
                  gap:"15px",
                  alignItems:"center",
                  marginTop:"20px"
                }}
              >

                <span
                  style={{
                    color:"#22c55e",
                    fontSize:"30px",
                    fontWeight:"800"
                  }}
                >
                  {selectedProduct.sellingPrice}
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
                      selectedProduct.sellingPrice?.replace(
                        /[^\d]/g,
                        ""
                      )
                    ) * 1.6
                  )}
                </span>

              </div>

              {/* THUMBNAILS */}

              <div
                style={{
                  display:"grid",
                  gridTemplateColumns:
                  "repeat(auto-fit,minmax(90px,1fr))",
                  gap:"10px",
                  marginTop:"25px"
                }}
              >

                {selectedProduct.images?.map(
                  (img,i)=>(

                  <img
                    key={i}
                    src={img}
                    alt=""
                    onClick={()=>
                      setSelectedProduct({
                        ...selectedProduct,
                        previewImage:img
                      })
                    }
                    style={{
                      width:"100%",
                      height:"90px",
                      objectFit:"cover",
                      borderRadius:"10px",
                      cursor:"pointer",
                      border:
                      selectedProduct.previewImage===img
                      ? "2px solid #2563eb"
                      : "2px solid transparent"
                    }}
                  />

                ))}

              </div>

              {/* BUTTONS */}

              <div
                style={{
                  display:"flex",
                  gap:"15px",
                  marginTop:"25px",
                  flexWrap:"wrap"
                }}
              >

                <button
                  style={{
                    flex:"1",
                    padding:"15px",
                    border:"none",
                    borderRadius:"14px",
                    background:
                    "linear-gradient(135deg,#22c55e,#16a34a)",
                    color:"#fff",
                    fontSize:"18px",
                    fontWeight:"700",
                    cursor:"pointer"
                  }}
                >
                  Buy Now
                </button>

                <a
                  href={`https://wa.me/919235727927?text=I want to order ${selectedProduct.title}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex:"1",
                    padding:"15px",
                    borderRadius:"14px",
                    background:"#111827",
                    color:"#fff",
                    textDecoration:"none",
                    textAlign:"center",
                    fontWeight:"700"
                  }}
                >
                  WhatsApp Order
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* FOOTER */}

      <footer
        style={{
          marginTop:"60px",
          padding:"50px 25px",
          borderTop:
          "1px solid rgba(255,255,255,0.08)"
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
              Premium ecommerce experience
              for trending gadgets,
              lifestyle products and gifts.
            </p>

          </div>

          <div>

            <h3>Quick Links</h3>

            <div
              style={{
                display:"flex",
                flexDirection:"column",
                gap:"12px",
                marginTop:"18px"
              }}
            >

              <a href="#" style={{color:"#94a3b8"}}>
                Home
              </a>

              <a href="#" style={{color:"#94a3b8"}}>
                Products
              </a>

              <a href="#" style={{color:"#94a3b8"}}>
                Categories
              </a>

            </div>

          </div>

          <div>

            <h3>Customer Support</h3>

            <div
              style={{
                display:"flex",
                flexDirection:"column",
                gap:"12px",
                marginTop:"18px",
                color:"#94a3b8"
              }}
            >

              <p>Shipping Policy</p>
              <p>Return Policy</p>
              <p>Privacy Policy</p>

            </div>

          </div>

          <div>

            <h3>Contact</h3>

            <div
              style={{
                marginTop:"18px",
                color:"#94a3b8",
                lineHeight:"2"
              }}
            >

              <p>📧 support@omnisphere.in</p>
              <p>📞 +91 9235727927</p>

            </div>

          </div>

        </div>

        <p
          style={{
            textAlign:"center",
            color:"#64748b",
            marginTop:"40px"
          }}
        >
          © 2026 OmniSphere. All Rights Reserved.
        </p>

      </footer>

    </div>

  );

}
