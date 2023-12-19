import React from "react";

function OrderDetails({ selectedOrder }) {
  return (
    <div className="selected-order container text-center">
      <h2>
        {selectedOrder.Address.firstName +
          " " +
          selectedOrder.Address.lastName +
          "- (" +
          selectedOrder.id +
          ")"}
      </h2>

      {}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {}
          {selectedOrder.products.map((product) => (
            <tr key={product.Id}>
              <td>{product.product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.totalPrice}</td>
            </tr>
          ))}

          {}
          <tr>
            <td colSpan="2">
              <strong>Total Price:</strong> {}
            </td>
          </tr>
        </tbody>
      </table>

      {}
      <table className="table customer-address-info">
        <tbody>
          <tr>
            <td>
              <strong>Customer Information:</strong>
              <ul>
                <li>
                  <strong>Name:</strong> {selectedOrder.Address.firstName}{" "}
                  {selectedOrder.Address.lastName}
                </li>
                <li>
                  <strong>Email:</strong> {selectedOrder.Address.email}
                </li>
                <li>
                  <strong>Phone:</strong> {selectedOrder.Address.phone}
                </li>
              </ul>
            </td>
            <td>
              <strong>Address Information:</strong>
              <ul>
                <li>
                  <strong>Address:</strong> {selectedOrder.Address.address1}{" "}
                  {selectedOrder.Address.address2}
                </li>
                <li>
                  <strong>Country:</strong> {selectedOrder.Address.country}
                </li>
                <li>
                  <strong>City:</strong> {selectedOrder.Address.city}
                </li>
                <li>
                  <strong>ZIP Code:</strong> {selectedOrder.Address.zipCode}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {}
      <div>
        <strong>Payment Method:</strong> {selectedOrder.paymentMethod}
      </div>
    </div>
  );
}

export default OrderDetails;
