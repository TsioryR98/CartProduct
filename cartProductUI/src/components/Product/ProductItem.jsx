import React from "react";
import { useProductData } from "../../context/ProductDataContext";

const ProductItem = () => {
  const { categoryProductData } = useProductData(); // Extraire la bonne donnée

  return (
    <div>
      {categoryProductData.map((categoryItem) => (
        <div key={categoryItem.category}>
          <h2>{categoryItem.category}</h2>
          <ul>
            {categoryItem.responseData.slice(0, 4).map((product, index) => (
              <li key={index}>{product.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
