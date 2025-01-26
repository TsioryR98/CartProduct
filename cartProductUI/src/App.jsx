import { ProductDataProvider } from "./context/ProductDataContext";
import ProductItem from "./components/Product/ProductItem";
import ProductCard from "./components/Product/ProductCard";
function App() {
  return (
    <ProductDataProvider>
      <ProductItem />
    </ProductDataProvider>
  );
}

export default App;
