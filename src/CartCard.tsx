import React from "react";
import CartIcon from "./icons/CartIcon";

const CartCard = ({ cart }) => {
  let discoutColor;
  const discountPercentage = Math.floor(
    ((cart.total - cart.discountedTotal) / cart.total) * 100
  );
  if (discountPercentage < 5) {
    discoutColor = "#6495ED";
  } else if (discountPercentage < 10) {
    discoutColor = "#228B22";
  } else if (discountPercentage < 15) {
    discoutColor = "#FFA500";
  } else {
    discoutColor = "#FF4500";
  }

  console.log(discountPercentage, discoutColor);
  return (
    <div className="CartCard">
      <div className="card-content">
        <div className="card-img">
          <a className="delete-cart">
            <p className="delete-X">X</p>
            <p className="delete-msg">Delete</p>
          </a>
          <div className="svg-container">
            <CartIcon />
          </div>
        </div>
        <div className="card-body">
          <h3>Cart {cart.id}</h3>
          <hr />
          <p>
            Price: {cart.total}$ <br />
            Discount:{" "}
            <span style={{ color: discoutColor, fontWeight: 600 }}>
              {discountPercentage}%
            </span>
            <br />
            Discounted Price:{" "}
            <span style={{ color: discoutColor, fontWeight: 600 }}>
              {cart.discountedTotal}$
            </span>
          </p>
          <a>Details</a>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
