import React, { useState, useEffect } from "react";
import { fecthProductData } from "../../api/productAPI";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const getProductList = async () => {
    try {
      const data = await fecthProductData();
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <div>ProductList</div>
    </>
  );
};

export default ProductList;
