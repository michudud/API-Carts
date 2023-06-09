import "./CartCard.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "../../icons/CartIcon";

interface CartCardProps {
  cart: Cart;
  deleteCart: Function;
}

interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

const CartCard = ({ cart, deleteCart }: CartCardProps) => {
  const navigate = useNavigate();
  let discoutColor: string;
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

  return (
    <div className="CartCard">
      <div className="card-content">
        <div className="card-img">
          <button className="delete-cart" onClick={() => deleteCart(cart.id)}>
            <span className="delete-X">X</span>
            <span className="delete-msg">Delete</span>
          </button>
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
          <a onClick={() => navigate(`/details/${cart.id}`, { state: cart })}>
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
