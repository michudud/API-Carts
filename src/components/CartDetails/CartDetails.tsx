import "./CartDetails.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DetailsTable from "./DetailsTable";
import NavBar from "../NavBar";
import DetailsChart from "./DetailsChart";
import Footer from "../Footer";

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
          <DetailsChart products={cart.products} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartDetails;
