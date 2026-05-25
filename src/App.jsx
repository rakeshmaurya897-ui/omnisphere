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

/* =========================
   APP
========================= */

export default function App() {

  const [products, setProducts] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [cart, setCart] =
    useState([]);

  const [cartOpen, setCartOpen] =
    useState(false);

  useEffect(() => {

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {

        const updated =
          data.map((item, index) => ({

            ...item,

            id:
              item.id ||
              index + 1,

            specs: [

              "Premium Quality",

              "Fast Shipping",

              "Cash On Delivery",

              "Easy Returns"

            ]

          }));

        setProducts(updated);

      });

  }, []);

  const addToCart = (product) => {

    const exists =
      cart.find(
        (item) =>
        item.id === product.id
      );

    if (exists) {

      setCart(

        cart.map((item) =>

          item.id === product.id

            ? {
                ...item,
                qty:
                  item.qty + 1
              }

            : item

        )

      );

    } else {

      setCart([

        ...cart,

        {
          ...product,
          qty: 1
        }

      ]);

    }

    setCartOpen(true);

  };

  const categories = [

    "All",

    ...new Set(
      products.map(
        (p) => p.category
      )
    )

  ];

  const filteredProducts =
    products.filter((item) => {

      const matchSearch =
        item.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchCategory =
        category === "All"
          ? true
          :
