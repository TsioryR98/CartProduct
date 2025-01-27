import React from "react";
import "../Product/productCard.css";
import Button from "react-bootstrap/Button";
import { useProductData } from "../../context/ProductDataContext";

const ProductCard = () => {
  const { categoryProductData } = useProductData(); //extract context data

  return (
    <>
      {categoryProductData.map((categoryItem) => (
        <div className="main" key={categoryItem.category}>
          <div className="card_title">
            <h5>{categoryItem.category}</h5>
          </div>
          <div className="card_container">
            {categoryItem.responseData.slice(0, 4).map((product, index) => (
              <div className="card_component" key={index}>
                <div className="card_img">
                  <img
                    src={product.images[product.images.length - 1]}
                    alt={`${product.title} image`}
                  />
                </div>
                <div className="card_text">
                  <p>{product.title}</p>
                  <span className="brand_card">{`- ${product.brand}`}</span>
                  <div className="card_rating">
                    <span className="small">{`${product.reviews.length} reviews`}</span>
                    <h4>{`${product.price} €`}</h4>
                  </div>
                  <div className="card_button">
                    <Button size="sm" variant="outline-info">
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card_link">
            <Button size="sm" variant="outline-secondary" className="text-dark">
              See more
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
