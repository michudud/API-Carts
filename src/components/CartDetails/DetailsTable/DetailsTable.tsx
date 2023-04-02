import "./DetailsTable.css";
import React from "react";

const DetailsTable = ({ cart }) => {
  return (
    <table className="DetailsTable">
      <thead>
        <tr>
          <th>Product</th>
          <th></th>
          <th>Price</th>
          <th></th>
          <th colSpan={2}>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {cart.products.map((product, index) => {
          return (
            <tr key={"product" + index + new Date().getTime()}>
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
          <td className="empty-noborder"></td>
          <td className="empty-noborder"></td>
          <td className="empty-noborder"></td>
          <td className="empty-noborder"></td>
          <td>Total Price</td>
          <td style={{ textDecoration: "line-through" }}>{cart.total}$</td>
        </tr>
        <tr style={{ fontWeight: 600, color: "red" }}>
          <td className="empty-noborder"></td>
          <td className="empty-noborder"></td>
          <td className="empty-noborder"></td>
          <td className="empty-noborder"></td>
          <td>Discounted Price</td>
          <td>{cart.discountedTotal}$</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailsTable;
