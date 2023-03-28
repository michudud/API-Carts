import React, { useEffect, useState } from "react";
import { allCarts } from "./allCarts";
import CartCard from "./CartCard";
import NavBar from "./NavBar";

const MainPage = () => {
  const [carts, setCarts] = useState(allCarts.carts);

  useEffect(() => {
    //requestCarts();
  }, []);

  async function requestCarts() {
    try {
      fetch("https://dummyjson.com/carts")
        .then((res) => res.json())
        .then(console.log);
    } catch (error) {}
  }

  return (
    <div className="MainPage">
      <NavBar />
      <div className="content">
        {carts.map((cart, index) => {
          return <CartCard cart={cart} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
