import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <a>Logo</a>
        </li>
        <li>
          <a onClick={() => navigate("/")}>Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
