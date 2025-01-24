import React, { useState, useEffect } from "react";
import { fecthTechData } from "../../api/productAPI";

const ProductByCombinedCategory = () => {
  const [combinedProduct, setcCombinedProduct] = useState([]);
  const getProductByCombinedCategory = async () => {
    try {
      const data = await fecthTechData();
      setcCombinedProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductByCombinedCategory();
  }, []);

  return (
    <>
      <div>ProductList</div>
    </>
  );
};

export default ProductByCombinedCategory;
