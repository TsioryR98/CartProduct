import { useContext, useEffect, useState, createContext } from "react";
import {
  fetchTechData,
  fetchMenData,
  fetchWomenData,
  fetchBodyData,
  fetchDecoData,
} from "../api/productAPI";

const ProductDataContext = createContext();

const ProductDataProvider = ({ children }) => {
  /*
  put combinedProduct as an array of object
  responseData is an array

  Another solution to put as an object in the global state
   */
  const [categoryProductData, setCategoryProductData] = useState([
    { category: "Technology", responseData: [] },
    { category: "Men Dress", responseData: [] },
    { category: "Women Dress", responseData: [] },
    { category: "Body Care", responseData: [] },
    { category: "Decoration", responseData: [] },
  ]);
  const getDataProduct = async () => {
    try {
      // get all dataproduct from fetch functions

      // promise async
      const [tecProduct, menProduct, womenProduct, bodyProduct, decoData] =
        await Promise.all([
          fetchTechData(),
          fetchMenData(),
          fetchWomenData(),
          fetchBodyData(),
          fetchDecoData(),
        ]);
      setCategoryProductData([
        {
          category: "Technology",
          responseData: tecProduct,
        },
        {
          category: "Men Dress",
          responseData: menProduct,
        },
        {
          category: "Women Dress",
          responseData: womenProduct,
        },
        {
          category: "Body Care",
          responseData: bodyProduct,
        },
        {
          category: "Decoration",
          responseData: decoData,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };
  //outside the async function
  useEffect(() => {
    getDataProduct();
  }, []);

  return (
    //golbal state for categoryProductData instead of each datas
    <ProductDataContext.Provider value={{ categoryProductData }}>
      {children}
    </ProductDataContext.Provider>
  );
};

//personalized hooks for dataContext provider

const useProductData = () => {
  return useContext(ProductDataContext);
};

export { useProductData, ProductDataProvider };
