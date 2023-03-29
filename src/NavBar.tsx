import React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "./icons/CartIcon";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <a>
            <CartIcon />
            <p>API Carts</p>
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/")}>Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
