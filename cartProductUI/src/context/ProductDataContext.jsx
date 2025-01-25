import { useContext, useEffect, useState, createContext } from "react";
import {
  fecthTechData,
  fecthMenData,
  fecthWomenData,
  fecthBodyData,
  fecthDecoData,
} from "../api/productAPI";

const ProductDataContext = createContext();

const ProductDataProvider = ({ children }) => {
  /* const [allDataProduct, setAllDataProduct] = useState([
    { techData: [] },
    { menData: [] },
    { womenData: [] },
    { bodyData: [] },
    { decoData: [] },
  ]);
  */
  const [techData, setTechData] = useState([]);
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [bodyData, setBodyData] = useState([]);
  const [decoData, setDecoData] = useState([]);

  const getDataProuct = async () => {
    try {
      // get all dataproduct from fetch functions

      // promise async
      const [tecProduct, menProduct, womenProduct, bodyProduct, decoData] =
        await Promise.all([
          fecthTechData(),
          fecthMenData(),
          fecthWomenData(),
          fecthBodyData(),
          fecthDecoData(),
        ]);
      setTechData(tecProduct);
      setMenData(menProduct);
      setWomenData(womenProduct);
      setBodyData(bodyProduct);
      setDecoData(decoData);
    } catch (error) {
      console.error(error);
    }
  };
  //outside the async function
  useEffect(() => {
    getDataProuct();
  }, []);

  return (
    <ProductDataContext.Provider
      value={{ techData, menData, womenData, bodyData, decoData }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

//personalized hooks for dataContext provider

const useProductData = () => {
  return useContext(ProductDataContext);
};

export { useProductData, ProductDataProvider };
