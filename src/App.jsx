import React, { useEffect, useState } from "react";export default function App() {

const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
const [cart, setCart] = useState([]);

useEffect(() => {

fetch("/products.json")

.then((res) => res.text())

.then((jsonText) => {

const formatted = JSON.parse(jsonText);

setProducts(

formatted.map((item) => {

const wholesale =
Number(
item.price?.replace(/[^\d]/g, "")
);

return {
id: item.id,
name: item.title,
description: item.excerpt,
category: item.categories,
image:
item.imageUrl ||
"https://via.placeholder.com/500",
price: (wholesale * 2) + 100,
url: item.productUrl
};

})

);

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
background: "#f8fafc",
minHeight: "100vh",
fontFamily: "Arial",
padding: "20px"
}}
>

<header
style={{
background: "#000",
color: "#fff",
padding: "40px",
borderRadius: "25px",
marginBottom: "40px"
}}
>

<h1
style={{
fontSize: "50px",
fontWeight: "bold"
}}
>
Omnishpere
</h1>

<p
style={{
marginTop: "10px",
color: "#ccc",
fontSize: "18px"
}}
>
Premium Ecommerce Store
</p>

<input
placeholder="Search Products..."
value={search}
onChange={(e) =>
setSearch(e.target.value)
}
style={{
marginTop: "25px",
padding: "16px",
width: "100%",
borderRadius: "15px",
border: "none",
fontSize: "18px"
}}
/>

<div
style={{
display: "flex",
gap: "15px",
marginTop: "25px",
flexWrap: "wrap"
}}
>

<div
style={{
background: "#16a34a",
padding: "10px 20px",
borderRadius: "12px",
fontWeight: "bold"
}}
>
🚚 Free Shipping
</div>

<div
style={{
background: "#2563eb",
padding: "10px 20px",
borderRadius: "12px",
fontWeight: "bold"
}}
>
💳 PhonePe Available
</div>

<div
style={{
background: "#dc2626",
padding: "10px 20px",
borderRadius: "12px",
fontWeight: "bold"
}}
>
💵 COD Available
</div>

</div>

</header>

<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(260px,1fr))",
gap: "25px"
}}
>

{filteredProducts.map((product) => (

<div
key={product.id}
style={{
background: "#fff",
borderRadius: "25px",
overflow: "hidden",
boxShadow:
"0 10px 30px rgba(0,0,0,0.08)"
}}
>

<img
src={product.image}
alt={product.name}
style={{
width: "100%",
height: "280px",
objectFit: "cover"
}}
/>

<div style={{ padding: "20px" }}>

<p
style={{
fontSize: "14px",
color: "#666"
}}
>
{product.category}
</p>

<h2
style={{
fontSize: "22px",
fontWeight: "bold",
marginTop: "10px"
}}
>
{product.name}
</h2>

<p
style={{
marginTop: "10px",
color: "#555",
lineHeight: "1.5"
}}
>
{product.description
?.slice(0, 120)}...
</p>

<h3
style={{
fontSize: "28px",
fontWeight: "bold",
marginTop: "15px"
}}
>
₹{product.price}
</h3>

<p
style={{
marginTop: "8px",
color: "#16a34a",
fontWeight: "bold"
}}
>
Free Shipping
</p>

<div
style={{
display: "flex",
gap: "10px",
marginTop: "20px"
}}
>

<button
onClick={() =>
addToCart(product)
}
style={{
flex: 1,
background: "#000",
color: "#fff",
padding: "14px",
borderRadius: "14px",
border: "none",
fontWeight: "bold"
}}
>
Add To Cart
</button>

<a
href={`https://wa.me/919235727927?text=I want to order ${product.name}`}
target="_blank"
style={{
flex: 1,
background: "#25D366",
color: "#fff",
padding: "14px",
borderRadius: "14px",
textAlign: "center",
fontWeight: "bold",
textDecoration: "none"
}}
>
WhatsApp
</a>

</div>

</div>

</div>

))}

</div>

<div
style={{
position: "fixed",
right: "20px",
bottom: "20px",
background: "#000",
color: "#fff",
padding: "25px",
borderRadius: "20px",
width: "300px"
}}
>

<h2>Cart</h2>

<p>
Items: {cart.length}
</p>

<h3>
Total: ₹{total}
</h3>

<button
style={{
width: "100%",
marginTop: "20px",
background: "#fff",
color: "#000",
padding: "15px",
borderRadius: "14px",
border: "none",
fontWeight: "bold"
}}
>
Checkout
</button>

</div>

</div>

);

}
