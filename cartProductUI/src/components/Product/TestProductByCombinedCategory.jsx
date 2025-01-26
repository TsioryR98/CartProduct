import React, { useState, useEffect } from "react";
import { fetchTechData } from "../../api/productAPI";
//a test for using array of object in the context
const TestProductByCombinedCategory = () => {
  /*
  put combinedProduct as an array of object
  responseData is an array
   */
  const [combinedProduct, setcCombinedProduct] = useState([
    {
      category: "Technologie",
      responseData: [],
    },
  ]);
  const getTestProductByCombinedCategory = async () => {
    try {
      const responseData = await fetchTechData();
      /*
      The format of responseData with axios to convert in JSON => array of oject
      console.log(JSON.stringify(responseData, null, 2));
      */
      setcCombinedProduct([
        {
          category: "Technologie",
          responseData: responseData,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTestProductByCombinedCategory();
  }, []);

  return (
    <>
      <div>
        {combinedProduct.map((combinedProductItem) => (
          <div key={combinedProductItem.category}>
            <h2>{combinedProductItem.category}</h2>
            <ul>
              {/* responseData from await 
              combinedProductItem : cataegory & responseData 
              */}
              {combinedProductItem.responseData.map((product, index) => (
                <li key={index}>{product.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestProductByCombinedCategory;
