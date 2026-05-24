import React, { useEffect, useState } from "react";

export default function App() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {

        const formatted = data.map((item, index) => ({

          id: item.id || index,

          title:
            item.title || "Product",

          description:
            item.description ||
            "Premium Product",

          category:
            item.category
              ?.split(",")[0]
              .trim() || "General",

          image:
            item.images?.[0] ||
            item.imageUrl ||
            "https://picsum.photos/500",

          images:
            item.images ||
            [item.imageUrl],

          price:
            parseInt(
              item.sellingPrice
                ?.replace(/[₹,]/g, "")
            ) || 0,

          originalPrice:
            parseInt(
              item.price
                ?.replace(/[₹,]/g, "")
            ) || 0,

          productUrl:
            item.productUrl || "#",

          bestSeller:
            index < 8

        }));

        setProducts(formatted);

      })
      .catch((err)=>{
        console.log(err);
      });

  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total =
    cart.reduce(
      (sum, item) => sum + item.price,
      0
    );

  const filteredProducts =
    products.filter((p)=>
      p.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const groupedProducts =
    filteredProducts.reduce((acc, product)=>{

      if(!acc[product.category]){
        acc[product.category] = [];
      }

      acc[product.category].push(product);

      return acc;

    }, {});

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
          padding:"70px 25px",
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
              🔥 Trending Ecommerce Store
            </div>

            <h1
              style={{
                fontSize:"70px",
                lineHeight:"1.1",
                marginTop:"25px"
              }}
            >
              Discover Viral Products
            </h1>

            <p
              style={{
                marginTop:"25px",
                color:"#dbeafe",
                fontSize:"20px",
                lineHeight:"1.8"
              }}
            >
              Explore trending gadgets,
              home decor, gifts, lamps,
              toys and premium lifestyle
              products with modern shopping
              experience.
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

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width:"100%",
                height:"550px",
                objectFit:"cover",
                borderRadius:"35px",
                boxShadow:
                "0 20px 60px rgba(0,0,0,0.5)"
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

      {/* BEST SELLERS */}

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

          {products
            .filter((p)=>p.bestSeller)
            .map((product)=>(

            <div
              key={product.id}
              onClick={()=>{
                setSelectedProduct(product);
                setSelectedImage(product.image);
              }}
              style={{
                minWidth:"280px",
                background:"#111827",
                borderRadius:"25px",
                overflow:"hidden",
                cursor:"pointer"
              }}
            >

              <img
                src={product.image}
                alt=""
                style={{
                  width:"100%",
                  height:"260px",
                  objectFit:"cover"
                }}
              />

              <div style={{padding:"18px"}}>

                <h3
                  style={{
                    minHeight:"65px",
                    lineHeight:"1.5"
                  }}
                >
                  {product.title}
                </h3>

                <div
                  style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"10px",
                    marginTop:"12px"
                  }}
                >

                  <h2 style={{color:"#22c55e"}}>
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

      {/* CATEGORY PRODUCTS */}

      <div style={{padding:"25px"}}>

        {Object.entries(groupedProducts).map(
          ([category, items]) => (

          <div
            key={category}
            style={{marginBottom:"60px"}}
          >

            <h2
              style={{
                fontSize:"42px",
                marginBottom:"25px"
              }}
            >
              {category}
            </h2>

            <div
              style={{
                display:"grid",
                gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
                gap:"25px"
              }}
            >

              {items.map((product)=>(

                <div
                  key={product.id}
                  onClick={()=>{
                    setSelectedProduct(product);
                    setSelectedImage(product.image);
                  }}
                  style={{
                    background:"#111827",
                    borderRadius:"30px",
                    overflow:"hidden",
                    cursor:"pointer",
                    boxShadow:
                    "0 10px 30px rgba(0,0,0,0.5)"
                  }}
                >

                  <img
                    src={product.image}
                    alt=""
                    style={{
                      width:"100%",
                      height:"300px",
                      objectFit:"cover"
                    }}
                  />

                  <div style={{padding:"20px"}}>

                    <p
                      style={{
                        color:"#60a5fa",
                        fontWeight:"bold"
                      }}
                    >
                      {product.category}
                    </p>

                    <h3
                      style={{
                        marginTop:"10px",
                        lineHeight:"1.5",
                        minHeight:"75px"
                      }}
                    >
                      {product.title}
                    </h3>

                    <p
                      style={{
                        color:"#cbd5e1",
                        marginTop:"12px",
                        lineHeight:"1.7",
                        minHeight:"70px"
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
            background:"rgba(0,0,0,0.85)",
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
              maxWidth:"1100px",
              width:"100%",
              borderRadius:"30px",
              overflow:"hidden",
              display:"grid",
              gridTemplateColumns:
              "repeat(auto-fit,minmax(350px,1fr))"
            }}
          >

            <div style={{padding:"20px"}}>

              <img
                src={selectedImage}
                alt=""
                style={{
                  width:"100%",
                  height:"500px",
                  objectFit:"cover",
                  borderRadius:"20px"
                }}
              />

              <div
                style={{
                  display:"flex",
                  gap:"10px",
                  overflowX:"auto",
                  marginTop:"15px"
                }}
              >

                {selectedProduct.images?.map(
                  (img,index)=>(

                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={()=>
                      setSelectedImage(img)
                    }
                    style={{
                      width:"80px",
                      height:"80px",
                      objectFit:"cover",
                      borderRadius:"12px",
                      cursor:"pointer",
                      border:
                      selectedImage===img
                      ? "3px solid #2563eb"
                      : "2px solid #334155"
                    }}
                  />

                ))}

              </div>

            </div>

            <div style={{padding:"30px"}}>

              <p
                style={{
                  color:"#60a5fa",
                  fontWeight:"bold"
                }}
              >
                {selectedProduct.category}
              </p>

              <h1
                style={{
                  fontSize:"42px",
                  marginTop:"12px",
                  lineHeight:"1.3"
                }}
              >
                {selectedProduct.title}
              </h1>

              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"12px",
                  marginTop:"20px"
                }}
              >

                <h1 style={{color:"#22c55e"}}>
                  ₹{selectedProduct.price}
                </h1>

                <span
                  style={{
                    textDecoration:"line-through",
                    color:"#94a3b8",
                    fontSize:"24px"
                  }}
                >
                  ₹{selectedProduct.originalPrice}
                </span>

              </div>

              <p
                style={{
                  marginTop:"25px",
                  lineHeight:"1.9",
                  color:"#cbd5e1"
                }}
              >
                {selectedProduct.description}
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
                  onClick={()=>
                    addToCart(selectedProduct)
                  }
                  style={{
                    flex:1,
                    background:"#2563eb",
                    color:"#fff",
                    border:"none",
                    padding:"18px",
                    borderRadius:"18px",
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Add To Cart
                </button>

                <button
                  style={{
                    flex:1,
                    background:"#6739B7",
                    color:"#fff",
                    border:"none",
                    padding:"18px",
                    borderRadius:"18px",
                    fontWeight:"bold",
                    fontSize:"18px"
                  }}
                >
                  Pay With PhonePe
                </button>

              </div>

              <a
                href={`https://wa.me/919235727927?text=I want to order ${selectedProduct.title}`}
                target="_blank"
                style={{
                  display:"block",
                  marginTop:"18px",
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
          Checkout
        </button>

      </div>

    </div>

  );

}
