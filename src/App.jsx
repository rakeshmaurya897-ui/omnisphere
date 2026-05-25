import React, { useEffect, useState } from "react";

export default function App() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

  }, []);

  return (

    <div
      style={{
        background:"#020617",
        minHeight:"100vh",
        color:"white",
        padding:"20px",
        fontFamily:"Arial"
      }}
    >

      {/* HERO */}

      <div
        style={{
          background:
          "linear-gradient(135deg,#1d4ed8,#7c3aed)",
          padding:"40px",
          borderRadius:"30px",
          marginBottom:"30px"
        }}
      >

        <h1
          style={{
            fontSize:"70px",
            lineHeight:"75px",
            fontStyle:"italic"
          }}
        >
          Discover Viral Products
        </h1>

        <p
          style={{
            marginTop:"20px",
            color:"#ddd",
            fontSize:"20px"
          }}
        >
          Trending gadgets, decor,
          toys and premium lifestyle products.
        </p>

      </div>

      {/* PRODUCTS */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",
          gap:"25px"
        }}
      >

        {products.map((item,index)=>(

          <div
            key={index}
            style={{
              background:"#0f172a",
              borderRadius:"24px",
              overflow:"hidden"
            }}
          >

            <img
              src={
                item.images?.[0]
              }
              alt=""
              style={{
                width:"100%",
                height:"300px",
                objectFit:"cover"
              }}
            />

            <div style={{padding:"18px"}}>

              <p
                style={{
                  color:"#60a5fa"
                }}
              >
                {item.category}
              </p>

              <h2
                style={{
                  marginTop:"10px",
                  lineHeight:"35px",
                  height:"70px",
                  overflow:"hidden"
                }}
              >
                {item.title}
              </h2>

              <div
                style={{
                  display:"flex",
                  gap:"10px",
                  alignItems:"center",
                  marginTop:"15px"
                }}
              >

                <h1
                  style={{
                    color:"#22c55e"
                  }}
                >
                  {item.sellingPrice}
                </h1>

                <span
                  style={{
                    textDecoration:"line-through",
                    color:"#94a3b8"
                  }}
                >
                  {item.price}
                </span>

              </div>

              <button
                onClick={()=>{
                  setSelectedProduct(item);
                  setSelectedImage(
                    item.images?.[0]
                  );
                }}
                style={{
                  width:"100%",
                  marginTop:"20px",
                  background:"#2563eb",
                  border:"none",
                  padding:"14px",
                  borderRadius:"12px",
                  color:"white",
                  fontWeight:"bold",
                  cursor:"pointer"
                }}
              >
                View Product
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* PRODUCT DETAIL MODAL */}

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
            zIndex:"999",
            padding:"20px"
          }}
        >

          <div
            onClick={(e)=>
              e.stopPropagation()
            }
            style={{
              background:"#111827",
              width:"100%",
              maxWidth:"1200px",
              borderRadius:"30px",
              overflow:"hidden",
              maxHeight:"95vh",
              overflowY:"auto"
            }}
          >

            <div
              style={{
                display:"grid",
                gridTemplateColumns:
                "repeat(auto-fit,minmax(400px,1fr))",
                gap:"30px",
                padding:"30px"
              }}
            >

              {/* LEFT */}

              <div>

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
                    marginTop:"15px",
                    overflowX:"auto"
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
                        width:"90px",
                        height:"90px",
                        objectFit:"cover",
                        borderRadius:"12px",
                        cursor:"pointer",
                        border:
                        selectedImage===img
                        ? "3px solid #2563eb"
                        : "none"
                      }}
                    />

                  ))}

                </div>

              </div>

              {/* RIGHT */}

              <div>

                <p
                  style={{
                    color:"#60a5fa",
                    fontSize:"18px"
                  }}
                >
                  {selectedProduct.category}
                </p>

                <h1
                  style={{
                    fontSize:"42px",
                    lineHeight:"55px",
                    marginTop:"10px"
                  }}
                >
                  {selectedProduct.title}
                </h1>

                <div
                  style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"15px",
                    marginTop:"20px"
                  }}
                >

                  <h1
                    style={{
                      color:"#22c55e",
                      fontSize:"45px"
                    }}
                  >
                    {selectedProduct.sellingPrice}
                  </h1>

                  <span
                    style={{
                      textDecoration:"line-through",
                      color:"#94a3b8",
                      fontSize:"25px"
                    }}
                  >
                    {selectedProduct.price}
                  </span>

                </div>

                <p
                  style={{
                    marginTop:"25px",
                    color:"#cbd5e1",
                    lineHeight:"32px",
                    fontSize:"18px"
                  }}
                >
                  {selectedProduct.description}
                </p>

                {/* FEATURES */}

                <div
                  style={{
                    marginTop:"30px",
                    background:"#0f172a",
                    padding:"20px",
                    borderRadius:"20px"
                  }}
                >

                  <h2>
                    Product Features
                  </h2>

                  <ul
                    style={{
                      marginTop:"15px",
                      lineHeight:"35px",
                      color:"#cbd5e1"
                    }}
                  >
                    <li>✅ Premium Quality</li>
                    <li>✅ Trending Product</li>
                    <li>✅ Fast Delivery</li>
                    <li>✅ Cash On Delivery</li>
                    <li>✅ Best Gift Item</li>
                  </ul>

                </div>

                {/* BUTTONS */}

                <div
                  style={{
                    display:"flex",
                    gap:"15px",
                    marginTop:"30px"
                  }}
                >

                  <button
                    style={{
                      flex:1,
                      background:"#2563eb",
                      border:"none",
                      padding:"18px",
                      borderRadius:"15px",
                      color:"white",
                      fontWeight:"bold",
                      fontSize:"18px",
                      cursor:"pointer"
                    }}
                  >
                    Add To Cart
                  </button>

                  <a
                    href={`https://wa.me/919235727927?text=I want to order ${selectedProduct.title}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex:1,
                      background:"#22c55e",
                      padding:"18px",
                      borderRadius:"15px",
                      color:"white",
                      textAlign:"center",
                      textDecoration:"none",
                      fontWeight:"bold",
                      fontSize:"18px"
                    }}
                  >
                    WhatsApp Order
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}
