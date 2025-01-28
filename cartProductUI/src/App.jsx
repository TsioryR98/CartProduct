import { ProductDataProvider } from "./context/ProductDataContext";
import ProductCard from "./components/Product/ProductCard";
import HomePage from "./components/Product/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <HomePage />
      <ProductDataProvider>
        <ProductCard />
      </ProductDataProvider>
    </>
  );
}

export default App;
