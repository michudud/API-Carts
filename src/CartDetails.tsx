import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DetailsTable from "./DetailsTable";
import NavBar from "./NavBar";

const CartDetails = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state;

  return (
    <div className="CartDetails">
      <NavBar />
      <div className="content">
        <div className="content-title">
          Cart {cart.id} details
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Return
          </button>
        </div>
        <div className="details">
          <DetailsTable cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
