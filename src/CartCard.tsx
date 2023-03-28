import React from "react";

const CartCard = ({ cart }) => {
  return (
    <div className="CartCard">
      <div className="card-content">
        <div className="card-img">
          <svg></svg>
        </div>
        <div className="card-body">
          <h3>Cart {cart.id}</h3>
          <hr />
          <p>
            Price: {cart.total}$
            <br />
            Discounted Price: {cart.discountedTotal}$
          </p>
          <a>Details</a>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
