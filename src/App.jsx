import React, { useEffect, useState } from "react";

export default function App() {

const [products, setProducts] = useState([]);
const [selectedProduct, setSelectedProduct] = useState(null);
const [search, setSearch] = useState("");
const [cart, setCart] = useState([]);

useEffect(() => {

fetch("/products.json")

.then((res) => res.json())

.then((data) => {

const formatted = data.map((item,index) => {

const wholesale =
Number(
item.price?.replace(/[^\d]/g, "")
);

const finalPrice =
Math.round((wholesale * 1.4) + 100);

return {
id: index + 1,
name: item.title,
description:
item.excerpt ||
"Premium product",
category:
item.categories ||
"General",
image:
item.image ||
item.imageUrl ||
item.featuredImage ||
"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
price: finalPrice,
url: item.productUrl
};

});

setProducts(formatted);

});

}, []);

const filteredProducts =
products.filter((product) =>
product.name
?.toLowerCase()
.includes(search.toLowerCase())
);

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
background:"#0f172a",
minHeight:"100vh",
fontFamily:"Arial",
color:"#fff"
}}
>

<header
style={{
padding:"30px",
background:
"linear-gradient(135deg,#111827,#1e3a8a)",
position:"sticky",
top:"0",
zIndex:"100"
}}
>

<h1
style={{
fontSize:"45px",
fontWeight:"bold"
}}
>
Omnishpere
</h1>

<p
style={{
color:"#cbd5e1",
marginTop:"10px"
}}
>
Premium Ecommerce Store
</p>

<input
placeholder="Search Products..."
value={search}
onChange={(e)=>
setSearch(e.target.value)
}
style={{
marginTop:"20px",
padding:"16px",
width:"100%",
borderRadius:"18px",
border:"none",
fontSize:"16px"
}}
/>

</header>

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
onClick={() =>
setSelectedProduct(product)
}
style={{
background:"#111827",
borderRadius:"25px",
overflow:"hidden",
cursor:"pointer",
boxShadow:
"0 10px 30px rgba(0,0,0,0.35)"
}}
>

<img
src={product.image}
alt={product.name}
style={{
width:"100%",
height:"260px",
objectFit:"cover",
background:"#fff"
}}
/>

<div style={{padding:"20px"}}>

<p
style={{
color:"#60a5fa",
fontSize:"14px"
}}
>
{product.category}
</p>

<h2
style={{
fontSize:"22px",
fontWeight:"bold",
marginTop:"10px",
lineHeight:"1.4"
}}
>
{product.name}
</h2>

<p
style={{
marginTop:"12px",
color:"#cbd5e1",
lineHeight:"1.6"
}}
>
{product.description
?.slice(0,80)}...
</p>

<h3
style={{
fontSize:"30px",
fontWeight:"bold",
marginTop:"18px"
}}
>
₹{product.price}
</h3>

<p
style={{
color:"#22c55e",
marginTop:"8px",
fontWeight:"bold"
}}
>
🚚 Free Shipping
</p>

<div
style={{
display:"flex",
gap:"10px",
marginTop:"20px"
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
padding:"14px",
border:"none",
borderRadius:"14px",
fontWeight:"bold"
}}
>
Add To Cart
</button>

<a
onClick={(e)=>
e.stopPropagation()
}
href={`https://wa.me/919235727927?text=I want to order ${product.name}`}
target="_blank"
style={{
flex:1,
background:"#22c55e",
color:"#fff",
padding:"14px",
borderRadius:"14px",
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

{selectedProduct && (

<div
onClick={() =>
setSelectedProduct(null)
}
style={{
position:"fixed",
top:"0",
left:"0",
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.75)",
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
borderRadius:"30px",
maxWidth:"700px",
width:"100%",
overflow:"hidden"
}}
>

<img
src={selectedProduct.image}
alt={selectedProduct.name}
style={{
width:"100%",
height:"400px",
objectFit:"cover"
}}
/>

<div style={{padding:"30px"}}>

<p
style={{
color:"#60a5fa"
}}
>
{selectedProduct.category}
</p>

<h2
style={{
fontSize:"38px",
fontWeight:"bold",
marginTop:"10px"
}}
>
{selectedProduct.name}
</h2>

<p
style={{
marginTop:"20px",
lineHeight:"1.8",
color:"#cbd5e1",
fontSize:"17px"
}}
>
{selectedProduct.description}
</p>

<h3
style={{
fontSize:"42px",
marginTop:"25px",
fontWeight:"bold"
}}
>
₹{selectedProduct.price}
</h3>

<p
style={{
marginTop:"10px",
color:"#22c55e",
fontWeight:"bold"
}}
>
🚚 Free Shipping Available
</p>

<div
style={{
display:"flex",
gap:"15px",
marginTop:"30px"
}}
>

<button
onClick={() =>
addToCart(selectedProduct)
}
style={{
flex:1,
background:"#2563eb",
color:"#fff",
padding:"18px",
border:"none",
borderRadius:"18px",
fontWeight:"bold",
fontSize:"18px"
}}
>
Add To Cart
</button>

<a
href={`https://wa.me/919235727927?text=I want to order ${selectedProduct.name}`}
target="_blank"
style={{
flex:1,
background:"#22c55e",
color:"#fff",
padding:"18px",
borderRadius:"18px",
textAlign:"center",
fontWeight:"bold",
textDecoration:"none",
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

<div
style={{
position:"fixed",
right:"20px",
bottom:"20px",
background:"#111827",
padding:"25px",
borderRadius:"20px",
width:"300px",
boxShadow:
"0 10px 30px rgba(0,0,0,0.4)"
}}
>

<h2>🛒 Cart</h2>

<p style={{marginTop:"10px"}}>
Items: {cart.length}
</p>

<h3 style={{marginTop:"15px"}}>
₹{total}
</h3>

<button
style={{
width:"100%",
marginTop:"20px",
background:"#fff",
color:"#000",
padding:"16px",
borderRadius:"14px",
border:"none",
fontWeight:"bold"
}}
>
Checkout
</button>

</div>

</div>

);

}
