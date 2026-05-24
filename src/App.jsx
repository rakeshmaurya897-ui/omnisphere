import React, { useEffect, useState } from "react";

export default function App() {

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {

        const formatted = data.map((item, index) => {

          const wholesale =
            parseInt(
              item.price?.replace(/[₹,]/g, "")
            ) || 0;

          const sellingPrice =
            parseInt(
              item.sellingPrice?.replace(/[₹,]/g, "")
            ) || wholesale;

          return {

            id: item.id || index + 1,

            title:
              item.title || "Product",

            description:
              item.description ||
              "Premium Product",

            category:
              item.category ||
              "General",

            image:
              item.imageUrl ||
              `https://picsum.photos/seed/${index}/600/600`,

            price: sellingPrice,

            originalPrice: wholesale,

            productUrl:
              item.productUrl || "#",

            bestSeller:
              index < 8
          };

        });

        setProducts(formatted);

      });

  }, []);

  const categories = [
    "All",
    ...new Set(
      products.map((p) =>
        p.category.split(",")[0].trim()
      )
    )
  ];

  const filteredProducts =
    products.filter((product) => {

      const categoryMatch =
        selectedCategory === "All"
          ? true
          : product.category.includes(selectedCategory);

      const searchMatch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatch && searchMatch;

    });

  const bestSellers =
    products.filter((p) => p.bestSeller);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total =
    cart.reduce(
      (sum, item) => sum + item.price,
      0
    );

  return (

    <div
      style={{
        background:"#020617",
        minHeight:"100vh",
        color:"#fff",
        fontFamily:"Arial"
      }}
    >

      {/* HERO */}

      <div
        style={{
          background:
          "linear-gradient(135deg,#0f172a,#1d4ed8,#7c3aed)",
          padding:"60px 20px",
          borderBottomLeftRadius:"40px",
          borderBottomRightRadius:"40px"
        }}
      >

        <div
          style={{
            maxWidth:"1300px",
            margin:"auto",
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
            gap:"40px",
            alignItems:"center"
          }}
        >

          <div>

            <div
              style={{
                background:"rgba(255,255,255,0.15)",
                display:"inline-block",
                padding:"10px 20px",
                borderRadius:"999px",
                fontWeight:"bold"
              }}
            >
              🔥 Trending Store
            </div>

            <h1
              style={{
                fontSize:"68px",
                lineHeight:"1.1",
                marginTop:"25px",
                fontWeight:"bold"
              }}
            >
              Upgrade Your Lifestyle
            </h1>

            <p
              style={{
                marginTop:"25px",
                fontSize:"20px",
                lineHeight:"1.8",
                color:"#dbeafe"
              }}
            >
              Trending gadgets, premium decor,
              smart accessories and viral products
              with Free Shipping & Cash On Delivery.
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
                  background:"#fff",
                  color:"#000",
                  border:"none",
                  padding:"18px 30px",
                  borderRadius:"18px",
                  fontWeight:"bold",
                  fontSize:"18px"
                }}
              >
                Shop Now
              </button>

              <button
                style={{
                  background:"transparent",
                  color:"#fff",
                  border:"2px solid #fff",
                  padding:"18px 30px",
                  borderRadius:"18px",
                  fontWeight:"bold",
                  fontSize:"18px"
                }}
              >
                Best Sellers
              </button>

            </div>

            <div
              style={{
                display:"flex",
                gap:"12px",
                marginTop:"35px",
                flexWrap:"wrap"
              }}
            >

              <div
                style={{
                  background:"#16a34a",
                  padding:"12px 20px",
                  borderRadius:"999px",
                  fontWeight:"bold"
                }}
              >
                🚚 Free Shipping
              </div>

              <div
                style={{
                  background:"#2563eb",
                  padding:"12px 20px",
                  borderRadius:"999px",
                  fontWeight:"bold"
                }}
              >
                💳 PhonePe Available
              </div>

              <div
                style={{
                  background:"#dc2626",
                  padding:"12px 20px",
                  borderRadius:"999px",
                  fontWeight:"bold"
                }}
              >
                💵 Cash On Delivery
              </div>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
              alt="Hero"
              style={{
                width:"100%",
                height:"550px",
                objectFit:"cover",
                borderRadius:"35px",
                boxShadow:
                "0 20px 60px rgba(0,0,0,0.4)"
              }}
            />

          </div>

        </div>

      </div>

      {/* SEARCH */}

      <div style={{padding:"25px"}}>

        <input
          placeholder="Search Products..."
          value={search}
          onChange={(e)=>
            setSearch(e.target.value)
          }
          style={{
            width:"100%",
            padding:"18px",
            borderRadius:"18px",
            border:"none",
            fontSize:"16px"
          }}
        />

      </div>

      {/* CATEGORY */}

      <div
        style={{
          display:"flex",
          gap:"12px",
          overflowX:"auto",
          padding:"0 25px 25px"
        }}
      >

        {categories.map((cat)=>(

          <button
            key={cat}
            onClick={()=>
              setSelectedCategory(cat)
            }
            style={{
              background:
              selectedCategory===cat
              ? "#2563eb"
              : "#111827",

              color:"#fff",
              border:"none",
              padding:"12px 22px",
              borderRadius:"999px",
              cursor:"pointer",
              whiteSpace:"nowrap",
              fontWeight:"bold"
            }}
          >
            {cat}
          </button>

        ))}

      </div>

      {/* BEST SELLER */}

      <div style={{padding:"0 25px"}}>

        <h2
          style={{
            fontSize:"42px",
            marginBottom:"25px"
          }}
        >
          🔥 Best Sellers
        </h2>

        <div
          style={{
            display:"flex",
            gap:"20px",
            overflowX:"auto",
            paddingBottom:"20px"
          }}
        >

          {bestSellers.map((product)=>(

            <div
              key={product.id}
              onClick={()=>
                setSelectedProduct(product)
              }
              style={{
                minWidth:"280px",
                background:"#111827",
                borderRadius:"28px",
                overflow:"hidden",
                cursor:"pointer"
              }}
            >

              <img
                src={product.image}
                alt={product.title}
                style={{
                  width:"100%",
                  height:"260px",
                  objectFit:"cover"
                }}
              />

              <div style={{padding:"18px"}}>

                <h3
                  style={{
                    lineHeight:"1.5",
                    minHeight:"70px"
                  }}
                >
                  {product.title}
                </h3>

                <div
                  style={{
                    display:"flex",
                    gap:"10px",
                    alignItems:"center",
                    marginTop:"10px"
                  }}
                >

                  <h2
                    style={{
                      color:"#22c55e"
                    }}
                  >
                    ₹{product.price}
                  </h2>

                  <span
                    style={{
                      textDecoration:"line-through",
                      color:"#94a3b8"
                    }}
                  >
                    ₹{product.originalPrice}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* PRODUCTS */}

      <div
        style={{
          padding:"25px",
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",
          gap:"25px"
        }}
      >

        {filteredProducts.map((product)=>(

          <div
            key={product.id}
            onClick={()=>
              setSelectedProduct(product)
            }
            style={{
              background:"#111827",
              borderRadius:"30px",
              overflow:"hidden",
              cursor:"pointer",
              boxShadow:
              "0 10px 30px rgba(0,0,0,0.4)"
            }}
          >

            <img
              src={product.image}
              alt={product.title}
              style={{
                width:"100%",
                height:"280px",
                objectFit:"cover"
              }}
            />

            <div style={{padding:"20px"}}>

              <p
                style={{
                  color:"#60a5fa",
                  fontWeight:"bold",
                  fontSize:"14px"
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

              <p
                style={{
                  color:"#cbd5e1",
                  fontSize:"14px",
                  lineHeight:"1.7",
                  minHeight:"65px"
                }}
              >
                {product.description
                  ?.slice(0,100)}...
              </p>

              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"10px",
                  marginTop:"15px"
                }}
              >

                <h2
                  style={{
                    color:"#22c55e"
                  }}
                >
                  ₹{product.price}
                </h2>

                <span
                  style={{
                    textDecoration:"line-through",
                    color:"#94a3b8"
                  }}
                >
                  ₹{product.originalPrice}
                </span>

              </div>

              <div
                style={{
                  display:"flex",
                  gap:"10px",
                  marginTop:"18px"
                }}
              >

                <button
                  onClick={(e)=>{
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  style={{
                    flex:1,
                    background:"#2563eb",
                    color:"#fff",
                    border:"none",
                    padding:"14px",
                    borderRadius:"14px",
                    fontWeight:"bold"
                  }}
                >
                  Add To Cart
                </button>

                <a
                  href={`https://wa.me/919235727927?text=I want to order ${product.title}`}
                  target="_blank"
                  onClick={(e)=>
                    e.stopPropagation()
                  }
                  style={{
                    flex:1,
                    background:"#22c55e",
                    color:"#fff",
                    textAlign:"center",
                    padding:"14px",
                    borderRadius:"14px",
                    textDecoration:"none",
                    fontWeight:"bold"
                  }}
                >
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

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
              background:"#111827",
              maxWidth:"750px",
              width:"100%",
              borderRadius:"30px",
              overflow:"hidden"
            }}
          >

            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{
                width:"100%",
                height:"450px",
                objectFit:"cover"
              }}
            />

            <div style={{padding:"30px"}}>

              <p
                style={{
                  color:"#60a5fa",
                  fontWeight:"bold"
                }}
              >
                {selectedProduct.category}
              </p>

              <h2
                style={{
                  fontSize:"42px",
                  marginTop:"10px"
                }}
              >
                {selectedProduct.title}
              </h2>

              <p
                style={{
                  marginTop:"20px",
                  color:"#cbd5e1",
                  lineHeight:"1.8"
                }}
              >
                {selectedProduct.description}
              </p>

              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"12px",
                  marginTop:"20px"
                }}
              >

                <h1
                  style={{
                    color:"#22c55e"
                  }}
                >
                  ₹{selectedProduct.price}
                </h1>

                <span
                  style={{
                    textDecoration:"line-through",
                    color:"#94a3b8",
                    fontSize:"22px"
                  }}
                >
                  ₹{selectedProduct.originalPrice}
                </span>

              </div>

              <div
                style={{
                  display:"flex",
                  gap:"15px",
                  marginTop:"25px"
                }}
              >

                <button
                  onClick={()=>
                    addToCart(selectedProduct)
                  }
                  style={{
                    flex:1,
                    background:"#2563eb",
                    border:"none",
                    color:"#fff",
                    padding:"18px",
                    borderRadius:"18px",
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Add To Cart
                </button>

                <a
                  href={`https://wa.me/919235727927?text=I want to order ${selectedProduct.title}`}
                  target="_blank"
                  style={{
                    flex:1,
                    background:"#22c55e",
                    color:"#fff",
                    textAlign:"center",
                    padding:"18px",
                    borderRadius:"18px",
                    textDecoration:"none",
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Buy On WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* CART */}

      <div
        style={{
          position:"fixed",
          right:"20px",
          bottom:"20px",
          background:"#111827",
          padding:"25px",
          borderRadius:"25px",
          width:"320px",
          boxShadow:
          "0 10px 40px rgba(0,0,0,0.5)"
        }}
      >

        <h2>🛒 Cart</h2>

        <p style={{marginTop:"10px"}}>
          Items: {cart.length}
        </p>

        <h1 style={{marginTop:"15px"}}>
          ₹{total}
        </h1>

        <button
          style={{
            width:"100%",
            marginTop:"20px",
            background:"#6739B7",
            color:"#fff",
            padding:"18px",
            border:"none",
            borderRadius:"18px",
            fontWeight:"bold",
            fontSize:"18px"
          }}
        >
          Pay With PhonePe
        </button>

      </div>

    </div>

  );

            }
