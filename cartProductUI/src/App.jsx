import { ProductDataProvider } from "./context/ProductDataContext";
import ProductCard from "./components/Product/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ProductDataProvider>
      <ProductCard />
    </ProductDataProvider>
  );
}

export default App;
