import React from "react";

const categories = [
{
title:"Lamps",
items:[
{
id:1,
name:"Floating Moon Lamp",
price:2499,
image:"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
},
{
id:2,
name:"Silicone Panda Lamp",
price:1299,
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
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
image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop"
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
image:"https://images.unsplash.com/photo-1517999144081-1c4eec0a0d0e?q=80&w=1200&auto=format&fit=crop"
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
image:"https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=1200&auto=format&fit=crop"
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
image:"https://images.unsplash.com/photo-1520531158340-44015069e78e?q=80&w=1200&auto=format&fit=crop"
}
]
}
];

export default function App(){

return(
<div style={{
background:"#f8fafc",
minHeight:"100vh",
fontFamily:"Arial",
padding:"30px"
}}>

<div style={{
background:"#000",
color:"#fff",
padding:"50px",
borderRadius:"30px",
marginBottom:"40px"
}}>

<h1 style={{
fontSize:"60px",
marginBottom:"20px"
}}>
Omnishpere
</h1>

<p style={{
fontSize:"20px",
color:"#ccc"
}}>
Premium Ecommerce Store
</p>

<div style={{
marginTop:"30px",
background:"#16a34a",
display:"inline-block",
padding:"12px 20px",
borderRadius:"15px",
fontWeight:"bold"
}}>
🚚 Free Shipping All Over India
</div>

</div>

{categories.map((category)=>(
<div key={category.title} style={{marginBottom:"60px"}}>

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"25px"
}}>

<h2 style={{
fontSize:"38px",
fontWeight:"bold"
}}>
{category.title}
</h2>

<button style={{
background:"#000",
color:"#fff",
border:"none",
padding:"12px 20px",
borderRadius:"14px"
}}>
View All
</button>

</div>

<div style={{
display:"grid",
gridTemplateColumns":"repeat(auto-fit,minmax(250px,1fr))",
gap:"25px"
}}>

{category.items.map((product)=>(
<div
key={product.id}
style={{
background:"#fff",
borderRadius:"30px",
overflow:"hidden",
boxShadow:"0 10px 25px rgba(0,0,0,0.08)"
}}
>

<img
src={product.image}
alt={product.name}
style={{
width:"100%",
height:"280px",
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
fontSize:"30px",
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

<button style={{
width:"100%",
background:"#000",
color:"#fff",
border:"none",
padding:"15px",
borderRadius:"18px",
fontWeight:"bold",
fontSize:"16px"
}}>
Add To Cart
</button>

</div>

</div>
))}

</div>

</div>
))}

<div style={{
background:"#000",
color:"#fff",
padding:"40px",
borderRadius:"30px",
marginTop:"60px",
textAlign:"center"
}}>

<h2 style={{
fontSize:"40px",
marginBottom:"20px"
}}>
Secure Checkout
</h2>

<p style={{
color:"#ccc",
marginBottom:"25px"
}}>
PhonePe Payments + COD Available
</p>

<button style={{
background:"#fff",
color:"#000",
border:"none",
padding:"16px 30px",
borderRadius:"18px",
fontWeight:"bold",
fontSize:"18px"
}}>
Pay With PhonePe
</button>

<div style={{
marginTop:"20px"
}}>
<a
href="https://wa.me/919235727927"
target="_blank"
style={{
color:"#25D366",
fontWeight:"bold",
textDecoration:"none"
}}
>
WhatsApp Support
</a>
</div>

</div>

</div>
)
}
