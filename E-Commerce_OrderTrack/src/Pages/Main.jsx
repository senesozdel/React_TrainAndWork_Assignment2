import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProductList from "../Components/ProductList";
import Slider from "../Components/Slider";
function Main({ productList, GetProducts, addToCart, changeToWish }) {
  return (
    <>
      <Slider />
      <ProductList
        productList={productList}
        GetProducts={GetProducts}
        addToCart={addToCart}
        changeToWish={changeToWish}
      />
    </>
  );
}

export default Main;
