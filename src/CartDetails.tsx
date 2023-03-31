import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th colSpan={3}>Price</th>
                {/* <th style={{ width: "200px" }}></th> */}
                <th colSpan={2}>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => {
                return (
                  <tr>
                    <td>{product.title}</td>
                    <td style={{ textDecoration: "line-through" }}>
                      {product.price}$
                    </td>
                    <td>{"=>"}</td>
                    <td style={{ color: "red", fontWeight: 600 }}>
                      {Math.round(
                        (product.discountedPrice / product.quantity) * 100
                      ) / 100}
                      $
                    </td>

                    <td colSpan={2}>{product.quantity}</td>
                  </tr>
                );
              })}
              <tr style={{ fontWeight: 600 }}>
                <td className="empty-noborder "></td>
                <td className="empty-noborder "></td>
                <td className="empty-noborder "></td>
                <td className="empty-noborder "></td>
                <td>Total Price</td>
                <td style={{ textDecoration: "line-through" }}>
                  {cart.total}$
                </td>
              </tr>
              <tr style={{ fontWeight: 600, color: "red" }}>
                <td className="empty-noborder "></td>
                <td className="empty-noborder "></td>
                <td className="empty-noborder "></td>
                <td className="empty-noborder "></td>
                <td>Discounted Price</td>
                <td>{cart.discountedTotal}$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

// {
//   id: 39,
//   title: "Women Sweaters Wool",
//   price: 600,
//   quantity: 2,
//   total: 1200,
//   discountPercentage: 17.2,
//   discountedPrice: 994,
// },
