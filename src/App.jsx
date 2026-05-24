
import React from "react";

export default function App() {
  const products = [
    {name:"Floating Moon Lamp",price:"₹2499"},
    {name:"Astronaut Night Lamp",price:"₹1499"},
    {name:"T800 Ultra Smartwatch",price:"₹1999"},
  ];

  return (
    <div style={{fontFamily:"Arial",padding:"30px"}}>
      <h1>Omnishpere.in</h1>
      <p>Premium Ecommerce Store</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
        {products.map((p,index)=>(
          <div key={index} style={{border:"1px solid #ddd",padding:"20px",borderRadius:"12px"}}>
            <img
              src="https://via.placeholder.com/300"
              alt={p.name}
              style={{width:"100%",borderRadius:"10px"}}
            />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button style={{
              background:"#000",
              color:"#fff",
              padding:"10px 16px",
              border:"none",
              borderRadius:"10px"
            }}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
