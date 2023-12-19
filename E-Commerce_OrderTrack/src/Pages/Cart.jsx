import { Link } from "react-router-dom";
function Cart({ cartList, removeFromCart }) {
  const onHandleOrder = (item) => {
    console.log(item);
  };
  return (
    <>
      <>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Shopping Cart</h2>
                  <ul className="breadcrumb-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">Shopping Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-wrapper">
          <div className="shopping-cart-area">
            <div className="container">
              {cartList.length !== 0 ? (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-table-container">
                      <table className="cart-table">
                        <thead>
                          <tr>
                            <th className="product-name" colSpan={2}>
                              Product
                            </th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Total</th>
                            <th className="product-remove">&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartList.map((item, index) => (
                            <tr key={index}>
                              <td className="product-thumbnail">
                                <Link
                                  to={`/productDetail/${item.product.slug}`}
                                >
                                  <img
                                    src={item.product.thumbnail}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </Link>
                              </td>
                              <td className="product-name">
                                <Link
                                  to={`/productDetail/${item.product.slug}`}
                                >
                                  {item.product.name}
                                </Link>
                              </td>
                              <td className="product-price">
                                <span className="price">
                                  ${item.product.price}
                                </span>
                              </td>
                              <td className="product-quantity">
                                <div className="pro-qty d-inline-block mx-0">
                                  <input
                                    type="text"
                                    disabled
                                    value={item.quantity}
                                  />
                                </div>
                              </td>
                              <td className="total-price">
                                <span className="price">
                                  ${item.totalPrice}
                                </span>
                              </td>
                              <td className="product-remove">
                                <a onClick={() => removeFromCart(item)}>
                                  <i className="pe-7s-close" />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-6 offset-lg-6">
                    <div className="cart-calculation-area">
                      <h2 className="cart-calculation-area__title">
                        Cart totals
                      </h2>
                      <table className="cart-calculation-table">
                        <tbody>
                          <tr>
                            <th>TOTAL</th>
                            <td className="subtotal">
                              $
                              {cartList.reduce(
                                (sum, element) => sum + element.totalPrice,
                                0
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="cart-calculation-button">
                        <Link
                          to="/checkout"
                          onClick={() => onHandleOrder(cartList)}
                          className="theme-button theme-button--alt theme-button--checkout"
                        >
                          PROCEED TO CHECKOUT
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <h1 className="text-center">
                    Sepetinizde Ürün Bulunmamaktadır
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Cart;
