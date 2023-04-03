import "./MainPage.css";
import React, { useContext } from "react";
import CartCard from "../CartCard";
import CartIcon from "../../icons/CartIcon";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { addCart, deleteCart } from "./apiFunctions";
import { CartsContext } from "../../context/CartsContext";

const MainPage = () => {
  const { carts, setCarts } = useContext(CartsContext);

  const handleDelete = async (id: number) => {
    const newCarts = await deleteCart(id, carts);
    //local database update
    setCarts(newCarts);
  };

  const handleAdd = async () => {
    const newCarts = await addCart(carts);
    //local database update
    setCarts(newCarts);
  };

  return (
    <div className="MainPage">
      <NavBar />
      <div className="content">
        <div className="content-title">
          All available carts
          <button onClick={handleAdd}>
            <span className="add-plus">+</span>
            <span className="add-msg">Add cart</span>
          </button>
        </div>
        <div className="carts">
          {carts.map((cart, index) => {
            return (
              <CartCard
                cart={cart}
                deleteCart={handleDelete}
                key={"cart" + index + new Date().getTime()}
              />
            );
          })}
          <button onClick={handleAdd} className="AddCartCard">
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
