import React, { useState } from "react";

const categories = [
{
title:"Lamps",
items:[
{
id:1,
name:"Floating Moon Lamp",
price:2499,
image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
description:"Premium floating moon decor lamp with aesthetic lighting."
},
{
id:2,
name:"Silicone Panda Lamp",
price:1299,
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
description:"Cute panda silicone night lamp."
}
]
},

{
title:"Smart Watches",
items:[
{
id:3,
name:"T800 Ultra Smartwatch",
price:1999,
image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
description:"Bluetooth smartwatch with fitness tracking."
}
]
},

{
title:"Decor",
items:[
{
id:4,
name:"3D Deep Sea Sandscape",
price:1899,
image:"https://images.unsplash.com/photo-1517999144081-1c4eec0a0d0e?q=80&w=1200&auto=format&fit=crop",
description:"Moving sand art premium decor."
}
]
},

{
title:"Electronics",
items:[
{
id:5,
name:"Mini Portable Projector",
price:3999,
image:"https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=1200&auto=format&fit=crop",
description:"Portable HD projector for movies and gaming."
}
]
},

{
title:"Kids",
items:[
{
id:6,
name:"Astronaut Night Lamp",
price:1499,
image:"https://images.unsplash.com/photo-1520531158340-44015069e78e?q=80&w=1200&auto=format&fit=crop",
description:"Astronaut night lamp for kids room."
}
]
}
];

export default function App(){

const [cart,setCart] = useState([]);
const [search,setSearch] = useState("");

const addToCart = (product)=>{
setCart([...cart,product])
}

const total =
cart.reduce((sum,item)=>sum+item.price,0)

return(
<div style={{
background:"#f8fafc",
minHeight:"100vh",
fontFamily:"Arial",
padding:"20px"
}}>

<header style={{
background:"#000",
color:"#fff",
padding:"50px",
borderRadius:"30px",
marginBottom:"40px"
}}>

<h1 style={{
fontSize:"60px",
fontWeight:"bold",
marginBottom:"10px"
}}>
Omnishpere
</h1>

<p style={{
fontSize:"20px",
color:"#ccc"
}}>
Premium Ecommerce Store
</p>

<input
placeholder="Search Products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
marginTop:"30px",
padding:"18px",
width:"100%",
borderRadius:"20px",
border:"none",
fontSize:"18px"
}}
/>

<div style={{
display:"flex",
gap:"15px",
marginTop:"30px",
flexWrap:"wrap"
}}>

<div style={{
background:"#16a34a",
padding:"12px 20px",
borderRadius:"15px",
fontWeight:"bold"
}}>
🚚 Free Shipping
</div>

<div style={{
background:"#1d4ed8",
padding:"12px 20px",
borderRadius:"15px",
fontWeight:"bold"
}}>
💳 PhonePe Payments
</div>

<div style={{
background:"#dc2626",
padding:"12px 20px",
borderRadius:"15px",
fontWeight:"bold"
}}>
💵 COD Available
</div>

</div>

</header>

{categories.map((category)=>{

const filteredItems =
category.items.filter((product)=>
product.name.toLowerCase().includes(search.toLowerCase())
)

if(filteredItems.length===0) return null

return(
<div key={category.title} style={{marginBottom:"70px"}}>

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"25px"
}}>

<h2 style={{
fontSize:"40px",
fontWeight:"bold"
}}>
{category.title}
</h2>

</div>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"25px"
}}>

{filteredItems.map((product)=>(
<div
key={product.id}
style={{
background:"#fff",
borderRadius:"30px",
overflow:"hidden",
boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
}}
>

<img
src={product.image}
alt={product.name}
style={{
width:"100%",
height:"300px",
objectFit:"cover"
}}
/>

<div style={{padding:"25px"}}>

<h3 style={{
fontSize:"24px",
fontWeight:"bold",
marginBottom:"10px"
}}>
{product.name}
</h3>

<p style={{
color:"#555",
marginBottom:"15px",
lineHeight:"1.6"
}}>
{product.description}
</p>

<p style={{
fontSize:"32px",
fontWeight:"bold",
marginBottom:"10px"
}}>
₹{product.price}
</p>

<p style={{
color:"#16a34a",
fontWeight:"bold",
marginBottom:"20px"
}}>
Free Shipping
</p>

<div style={{
display:"flex",
gap:"10px"
}}>

<button
onClick={()=>addToCart(product)}
style={{
flex:1,
background:"#000",
color:"#fff",
padding:"15px",
borderRadius:"18px",
border:"none",
fontWeight:"bold",
fontSize:"16px"
}}
>
Add To Cart
</button>

<a
href={`https://wa.me/919235727927?text=I want to order ${product.name}`}
target="_blank"
style={{
flex:1,
background:"#25D366",
color:"#fff",
padding:"15px",
borderRadius:"18px",
textAlign:"center",
fontWeight:"bold",
textDecoration:"none"
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
)
})}

<div style={{
position:"fixed",
right:"20px",
bottom:"20px",
background:"#000",
color:"#fff",
padding:"25px",
borderRadius:"25px",
width:"320px",
boxShadow:"0 10px 40px rgba(0,0,0,0.2)"
}}>

<h3 style={{
fontSize:"28px",
fontWeight:"bold",
marginBottom:"20px"
}}>
Cart
</h3>

{cart.length===0 ? (
<p style={{color:"#aaa"}}>
No products added
</p>
):(
<>
<div style={{
maxHeight:"300px",
overflow:"auto"
}}>

{cart.map((item,index)=>(
<div
key={index}
style={{
display:"flex",
justifyContent:"space-between",
marginBottom:"15px",
borderBottom:"1px solid #333",
paddingBottom:"10px"
}}
>

<div>
<p style={{
fontWeight:"bold"
}}>
{item.name}
</p>

<p style={{
fontSize:"14px",
color:"#aaa"
}}>
₹{item.price}
</p>
</div>

</div>
))}

</div>

<div style={{
marginTop:"20px",
fontSize:"24px",
fontWeight:"bold"
}}>
Total: ₹{total}
</div>

<div style={{
marginTop:"10px",
color:"#22c55e",
fontWeight:"bold"
}}>
FREE SHIPPING
</div>

<button
onClick={()=>{
window.location.href="https://wa.me/919235727927?text=I want to place my order from Omnishpere"
}}
style={{
width:"100%",
marginTop:"20px",
background:"#fff",
color:"#000",
padding:"15px",
borderRadius:"18px",
border:"none",
fontWeight:"bold",
fontSize:"18px"
}}
>
Checkout
</button>

</>
)}

</div>

<footer style={{
marginTop:"100px",
background:"#000",
color:"#fff",
padding:"50px",
borderRadius:"30px",
textAlign:"center"
}}>

<h2 style={{
fontSize:"40px",
marginBottom:"20px"
}}>
Omnishpere
</h2>

<p style={{
color:"#aaa",
marginBottom:"20px"
}}>
Premium Ecommerce Experience
</p>

<p>
support@omnishpere.in
</p>

<p style={{
marginTop:"10px"
}}>
+91 9235727927
</p>

</footer>

</div>
)
}
