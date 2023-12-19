import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderTrack({ getOrder }) {
  const [orderId, setOrderId] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const orderData = await getOrder(orderId);

      if (orderData && orderData.Address.email === orderEmail) {
        navigate("/orderDetails");
      } else {
        console.error("Order data not found or email does not match");
      }
    } catch (error) {
      console.error("Error fetching or processing order data:", error.message);
    }
  };

  return (
    <div className="order-tracking-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="order-tracking-wrapper">
              <div className="order-track-form">
                <p>
                  To track your order, please enter your Order ID in the box
                  below and press the "Track" button. This was given to you on
                  your receipt and in the confirmation email you should have
                  received.
                </p>
                <div>
                  <div className="row">
                    <div className="col-lg-12">
                      <label htmlFor="orderId">Order ID</label>
                      <input
                        type="text"
                        id="orderId"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        placeholder="Found in your order confirmation email"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="orderEmail">Billing email</label>
                      <input
                        type="text"
                        id="orderEmail"
                        value={orderEmail}
                        onChange={(e) => setOrderEmail(e.target.value)}
                        placeholder="Email you used during checkout"
                      />
                    </div>
                    <div className="col-lg-12 text-center">
                      <a
                        className="theme-button theme-button--order-track"
                        onClick={() => handleSubmit()}
                      >
                        TRACK
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderTrack;
