import { Link } from "react-router-dom";
function ProductCard({ product, addToCart, changeToWish }) {
  const onHandleAddToCart = (item) => {
    addToCart(item);
  };
  const onHandleAddWish = (product) => {
    changeToWish(product);
  };
  return (
    <>
      <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
        <div className="single-grid-product">
          <div className="single-grid-product__image">
            <div className="product-badge-wrapper"></div>
            <Link className="image-wrap" to={`/productDetail/${product.slug}`}>
              {product.images.length === 1 ? (
                <img src={product.images[0]} className="img-fluid" alt="" />
              ) : (
                <>
                  <img src={product.images[0]} className="img-fluid" alt="" />
                  <img src={product.images[1]} className="img-fluid" alt="" />
                </>
              )}
            </Link>
            <div className="product-hover-icon-wrapper">
              <span className="single-icon single-icon--add-to-cart">
                <a
                  data-tippy="Add to cart"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay={50}
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                  onClick={() => onHandleAddToCart(product)}
                >
                  <i className="fa fa-shopping-basket" />
                  <span>ADD TO CART</span>
                </a>
              </span>
            </div>
          </div>
          <div className="single-grid-product__content">
            <h3 className="title">
              <Link to={`/productDetail/${product.slug}`}>{product.name}</Link>
            </h3>
            <div className="price">
              <span className="main-price discounted">
                ${product.oldPrice}{" "}
              </span>
              <span className="discounted-price">${product.price}</span>
            </div>
            <div className="rating">
              {Array.from({ length: product.rate }, (_, index) => (
                <i key={index} className="fa fa-star active" />
              ))}
              {Array.from({ length: 5 - product.rate }, (_, index) => (
                <i key={index + product.rate} className="fa fa-star" />
              ))}
            </div>

            <a
              onClick={() => onHandleAddWish(product)}
              className="favorite-icon"
              data-tippy="Add to Wishlist"
              data-tippy-inertia="true"
              data-tippy-animation="shift-away"
              data-tippy-delay={50}
              data-tippy-arrow="true"
              data-tippy-theme="sharpborder"
              data-tippy-placement="left"
            >
              {product.iswish ? (
                <i className="fa fa-heart" />
              ) : (
                <i className="fa fa-heart-o" />
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
