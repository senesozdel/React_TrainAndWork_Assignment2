import { useState } from "react";
import { Link } from "react-router-dom";
function Checkout({ cartList, generateRandomId, setCartList }) {
  const [order, setOrder] = useState({
    id: generateRandomId(),
    Address: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      address1: "",
      address2: "",
      country: "",
      city: "",
      zipCode: "",
    },
    products: cartList,
    paymentMethod: "",
  });

  const handleInputChange = (field, value) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      Address: {
        ...prevOrder.Address,
        [field]: value,
      },
    }));
  };

  const handlePaymentMethodChange = (method) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      paymentMethod: method,
    }));
  };

  const createOrder = async () => {
    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        console.log("Order created successfully!");
        setCartList([]);
      } else {
        console.error("Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  return (
    <>
      <>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Checkout</h2>
                  <ul className="breadcrumb-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">Checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-wrapper">
          <div className="checkout-page-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="checkout-form">
                    <form action="#">
                      <div className="row row-40">
                        <div className="col-lg-7">
                          <div id="billing-form" className="billing-form">
                            <h4 className="checkout-title">Address</h4>
                            <div className="row">
                              <div className="col-md-6 col-12">
                                <label>First Name*</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="First Name"
                                  value={order.Address.firstName}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "firstName",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Last Name*</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Last Name"
                                  value={order.Address.lastName}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "lastName",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Email Address*</label>
                                <input
                                  type="email"
                                  required
                                  placeholder="Email Address"
                                  value={order.Address.email}
                                  onChange={(e) =>
                                    handleInputChange("email", e.target.value)
                                  }
                                />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Phone no*</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Phone number"
                                  value={order.Address.phone}
                                  onChange={(e) =>
                                    handleInputChange("phone", e.target.value)
                                  }
                                />
                              </div>
                              <div className="col-12">
                                <label>Company Name</label>
                                <input
                                  type="text"
                                  placeholder="Company Name"
                                  value={order.Address.company}
                                  onChange={(e) =>
                                    handleInputChange("company", e.target.value)
                                  }
                                />
                              </div>
                              <div className="col-12">
                                <label>Address*</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Address line 1"
                                  value={order.Address.address1}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "address1",
                                      e.target.value
                                    )
                                  }
                                />
                                <input
                                  type="text"
                                  placeholder="Address line 2"
                                  value={order.Address.address2}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "address2",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Country*</label>
                                <select
                                  className="nice-select"
                                  value={order.Address.country}
                                  onChange={(e) =>
                                    handleInputChange("country", e.target.value)
                                  }
                                >
                                  <option value="USA">USA</option>
                                  <option value="Italy">Italy</option>
                                  <option value="France">France</option>
                                  <option value="Turkey">Turkey</option>
                                  <option value="Germany">Germany</option>
                                </select>
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Town/City*</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Town/City"
                                  value={order.Address.city}
                                  onChange={(e) =>
                                    handleInputChange("city", e.target.value)
                                  }
                                />
                              </div>

                              <div className="col-md-6 col-12">
                                <label>Zip Code*</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Zip Code"
                                  value={order.Address.zipCode}
                                  onChange={(e) =>
                                    handleInputChange("zipCode", e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="row">
                            <div className="col-12">
                              <h4 className="checkout-title">Cart Total</h4>
                              <div className="checkout-cart-total">
                                <h4>
                                  Product <span>Total</span>
                                </h4>
                                <ul>
                                  {cartList.map((item, index) => (
                                    <li key={index}>
                                      {item.product.name} X {item.quantity}{" "}
                                      <span>
                                        $
                                        {(
                                          item.quantity * item.product.price
                                        ).toFixed(2)}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                                <h4>
                                  Grand Total{" "}
                                  <span>
                                    $
                                    {cartList
                                      .reduce(
                                        (total, item) =>
                                          total +
                                          item.quantity * item.product.price,
                                        0
                                      )
                                      .toFixed(2)}
                                  </span>
                                </h4>
                              </div>
                            </div>
                            <div className="col-12">
                              <h4 className="checkout-title">Payment Method</h4>
                              <div className="checkout-payment-method">
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_check"
                                    name="payment-method"
                                    value="check"
                                    onChange={() =>
                                      handlePaymentMethodChange("check")
                                    }
                                  />
                                  <label htmlFor="payment_check">
                                    Check Payment
                                  </label>
                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_bank"
                                    name="payment-method"
                                    value="bank"
                                    onChange={() =>
                                      handlePaymentMethodChange("bank")
                                    }
                                  />
                                  <label htmlFor="payment_bank">
                                    Direct Bank Transfer
                                  </label>
                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_cash"
                                    name="payment-method"
                                    value="cash"
                                    onChange={() =>
                                      handlePaymentMethodChange("cash")
                                    }
                                  />
                                  <label htmlFor="payment_cash">
                                    Cash on Delivery
                                  </label>
                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_paypal"
                                    name="payment-method"
                                    value="paypal"
                                    onChange={() =>
                                      handlePaymentMethodChange("paypal")
                                    }
                                  />
                                  <label htmlFor="payment_paypal">Paypal</label>
                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_payoneer"
                                    name="payment-method"
                                    value="payoneer"
                                    onChange={() =>
                                      handlePaymentMethodChange("payoneer")
                                    }
                                  />
                                  <label htmlFor="payment_payoneer">
                                    Payoneer
                                  </label>
                                </div>
                                <hr />
                                <div className="single-method">
                                  <input type="checkbox" id="accept_terms" />
                                  <label htmlFor="accept_terms">
                                    I’ve read and accept the terms &amp;
                                    conditions
                                  </label>
                                </div>
                              </div>
                              <Link
                                to="/"
                                className="theme-button place-order-btn"
                                onClick={() => {
                                  if (
                                    document.getElementById("accept_terms")
                                      .checked
                                  ) {
                                    createOrder();
                                  } else {
                                    console.error(
                                      "Please accept the terms and conditions"
                                    );
                                  }
                                }}
                              >
                                PLACE ORDER
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Checkout;
