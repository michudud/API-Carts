import "./MainPage.css";
import React, { useEffect, useState } from "react";
import { allCarts } from "../../allCarts";
import CartCard from "../CartCard";
import CartIcon from "../../icons/CartIcon";
import NavBar from "../NavBar";
import Footer from "../Footer";

const MainPage = () => {
  const [carts, setCarts] = useState(allCarts.carts);

  useEffect(() => {
    // requestCarts();
  }, []);

  async function requestCarts() {
    try {
      const res = await fetch("https://dummyjson.com/carts");
      const json = await res.json();
      setCarts(json);
    } catch (error) {}
  }

  async function addCart() {
    let randProducts = [];
    const numOfProducts = Math.floor(Math.random() * 10 + 1);
    for (let i = 0; i < numOfProducts; i++) {
      randProducts.push({
        //hardcoded number of products = 100 https://dummyjson.com/products
        id: Math.floor(Math.random() * 100 + 1),
        quantity: Math.floor(Math.random() * 3 + 1),
      });
    }

    try {
      const res = await fetch("https://dummyjson.com/carts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          products: randProducts,
        }),
      });
      const json = await res.json();
      //requestCarts() - normal database

      //local database update
      const newCarts = [...carts];
      json.id = carts[carts.length - 1].id + 1;
      newCarts.push(json);
      setCarts(newCarts);
      //
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCart(id) {
    //because not possible to update dummy database
    const dummyId = 1;
    //
    try {
      const res = await fetch(`https://dummyjson.com/carts/${dummyId}`, {
        method: "DELETE",
      });
      const json = await res.json();
      //requestCarts() - normal database

      //local database update
      const newCarts = [...carts];
      const cartToDelete = newCarts.findIndex((obj) => obj.id === id);
      newCarts.splice(cartToDelete, 1);
      setCarts(newCarts);
      //
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="MainPage">
      <NavBar />
      <div className="content">
        <div className="content-title">
          All available carts
          <button onClick={addCart}>
            <span className="add-plus">+</span>
            <span className="add-msg">Add cart</span>
          </button>
        </div>
        <div className="carts">
          {carts.map((cart, index) => {
            return (
              <CartCard
                cart={cart}
                deleteCart={deleteCart}
                key={"cart" + index + new Date().getTime()}
              />
            );
          })}
          <button onClick={addCart} className="AddCartCard">
            <CartIcon />
            <h1>+</h1>
            <h3>Add cart</h3>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
