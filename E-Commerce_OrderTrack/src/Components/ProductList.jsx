import ProductCard from "./ProductCard";
function ProductList({ productList, GetProducts, addToCart, changeToWish }) {
  const onHandleCategory = (id = null) => {
    GetProducts(id);
  };
  return (
    <>
      <div className="product-double-row-tab-area section-space">
        <div className="container wide">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-double-row-tab-wrapper">
                <div className="tab-product-navigation">
                  <ul
                    className="nav nav-tabs justify-content-center"
                    id="nav-tab2"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        id="product-tab-1"
                        type="button"
                        data-bs-toggle="tab"
                        data-bs-target="#product-series-1"
                        role="tab"
                        aria-controls="product-series-1"
                        aria-selected="true"
                        onClick={() => onHandleCategory()}
                      >
                        All
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="product-tab-2"
                        type="button"
                        data-bs-toggle="tab"
                        data-bs-target="#product-series-2"
                        role="tab"
                        aria-controls="product-series-2"
                        aria-selected="false"
                        onClick={() => onHandleCategory(1)}
                      >
                        New Arrivals
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="product-tab-3"
                        type="button"
                        data-bs-toggle="tab"
                        data-bs-target="#product-series-3"
                        role="tab"
                        aria-controls="product-series-3"
                        aria-selected="false"
                        onClick={() => onHandleCategory(2)}
                      >
                        Featured
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        id="product-tab-4"
                        type="button"
                        data-bs-toggle="tab"
                        data-bs-target="#product-series-4"
                        role="tab"
                        aria-controls="product-series-4"
                        aria-selected="false"
                        onClick={() => onHandleCategory(3)}
                      >
                        On Sale
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="product-series-1"
                    role="tabpanel"
                    aria-labelledby="product-tab-1"
                  >
                    <div className="product-row-wrapper">
                      <div className="row">
                        {productList.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            changeToWish={changeToWish}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
