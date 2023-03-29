import React, { useEffect, useState } from "react";
import { allCarts } from "./allCarts";
import CartCard from "./CartCard";
import NavBar from "./NavBar";

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
    try {
      const res = await fetch("https://dummyjson.com/carts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          products: [
            {
              id: 1,
              quantity: 1,
            },
            {
              id: 50,
              quantity: 2,
            },
          ],
        }),
      });

      const json = await res.json();
      console.log(json);
    } catch (error) {}
  }

  async function deleteCart() {
    try {
      const res = await fetch("https://dummyjson.com/carts/1", {
        method: "DELETE",
      });

      const json = await res.json();
      console.log(json);
    } catch (error) {}
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
            return <CartCard cart={cart} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
