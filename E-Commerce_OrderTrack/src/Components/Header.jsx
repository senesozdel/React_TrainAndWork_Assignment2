import React from "react";
import { Link } from "react-router-dom";

function Header({ cartList, removeFromCart }) {
  const onHandleRemove = (cartItem) => {
    removeFromCart(cartItem);
  };

  return (
    <>
      <div

        className="header-area header-area--default header-area--default--transparent header-sticky"
      >
        <div className="header-navigation-area header-navigation-area--extra-space d-none d-lg-block">
          <div className="container wide">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-info-wrapper header-info-wrapper--alt-style">
                  <div className="header-logo">
                    <Link to="/">
                    <div class="header-logo"><a href="/"><img src="src/assets/img/logo.png" class="img-fluid" alt=""/><img src="src/assets/img/logo-alt.png" class="img-fluid" alt=""/></a></div>
                      <img
                        src="assets/img/logo.png"
                        className="img-fluid "
                        alt=""
                      />
                      <img
                        src="assets/img/logo-alt.png"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                    <a href="index.html"></a>
                  </div>
                  <div className="header-navigation-wrapper">
                    <nav>
                      <ul>
                        <li className="has">
                          <Link to="/">HOME</Link>
                        </li>
                        <li className="has">
                          <Link to="/about">About Us</Link>
                        </li>
                        <li className="has">
                          <Link to="/blog">BLOG</Link>
                        </li>
                        <li className="has">
                          <Link to="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-icon-area">
                    <div className="header-icon d-flex align-items-center">
                      <ul className="header-icon__list">
                        <Link className="text-dark" to="/orderTrack">
                          Order Tracking{" "}
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <li>
                          <Link to="/cart">
                            <i className="fa fa-shopping-basket" />
                            <span className="item-count">
                              {cartList.length}
                            </span>
                          </Link>
                          {cartList.length != 0 && (
                            <div className="minicart-wrapper">
                              <p className="minicart-wrapper__title">CART</p>
                              <div className="minicart-wrapper__items ps-scroll">
                                {cartList.map((item, index) => (
                                  <div key={index}>
                                    <div className="minicart-wrapper__items__single">
                                      <a
                                        onClick={() => onHandleRemove(item)}
                                        className="close-icon"
                                      >
                                        <i className="pe-7s-close" />
                                      </a>
                                      <div className="image">
                                        <Link
                                          to={`/productDetail/${item.product.slug}`}
                                        >
                                          <img
                                            src={item.product.thumbnail}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <p className="product-title">
                                          <a href="product-details-basic.html">
                                            {item.product.name}
                                          </a>
                                        </p>
                                        <p className="product-calculation">
                                          <span className="count">
                                            {item.quantity}
                                          </span>{" "}
                                          x
                                          <span className="price">
                                            ${item.product.price}
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <p className="minicart-wrapper__subtotal">
                                SUBTOTAL:{"$"}
                                {cartList.reduce(
                                  (sum, element) => sum + element.totalPrice,
                                  0
                                )}
                              </p>
                              <div className="minicart-wrapper__buttons">
                                <Link
                                  className="theme-button theme-button--minicart-button"
                                  to="/cart"
                                >
                                  VIEW CART
                                </Link>
                                <Link
                                  className="theme-button theme-button--alt theme-button--minicart-button theme-button--minicart-button--alt mb-0"
                                  to="/checkout"
                                >
                                  CHECKOUT
                                </Link>
                              </div>
                              <p className="minicart-wrapper__featuretext">
                                Free Shipping on All Orders Over $100!
                              </p>
                            </div>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Header;
