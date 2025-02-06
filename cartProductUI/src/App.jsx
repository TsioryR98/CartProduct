
import { ProductDataProvider } from "./context/ProductDataContext";
import ProductCard from "./components/Product/ProductCard";
import HomePage from "./components/Header/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalContext } from "./context/ModalContext";
import ModalProduct from "./components/Product/ModalProduct";
function App() {
  return (
    <>
      <HomePage />
      <ProductDataProvider>
        <ModalContext>
          <ProductCard />
          <ModalProduct />
        </ModalContext>
      </ProductDataProvider>
    </>
  );
}

export default App;
