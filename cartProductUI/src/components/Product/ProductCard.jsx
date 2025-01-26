import React from "react";
import "../Product/productCard.css";
import Button from "react-bootstrap/Button";

const ProductCard = () => {
  return (
    <>
      <div className="main">
        <div className="card_title">
          <h5>High-Tech</h5>
        </div>
        <div className="card_container">
          <div className="card_component">
            <div className="card_img">
              <img src="/3.png" alt="Oppo F19 Pro Plus" />
            </div>
            <div className="card_text">
              <p>Oppo F19 Pro Plus</p>
              <span>- oppo</span>
              <div className="card_rating">
                <p>8 reviews</p>
                <h4>149.99 €</h4>
              </div>
              <div className="card_button">
                <Button size="sm" variant="outline-info">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
          <div className="card_component">
            <div className="card_img">
              <img src="/3.png" alt="Oppo F19 Pro Plus" />
            </div>
            <div className="card_text">
              <p>Oppo F19 Pro Plus</p>
              <span>- oppo</span>
              <div className="card_rating">
                <p>8 reviews</p>
                <h4>149.99 €</h4>
              </div>
              <div className="card_button">
                <Button size="sm" variant="outline-info">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
          <div className="card_component">
            <div className="card_img">
              <img src="/3.png" alt="Oppo F19 Pro Plus" />
            </div>
            <div className="card_text">
              <p>Oppo F19 Pro Plus</p>
              <span>- oppo</span>
              <div className="card_rating">
                <p>8 reviews</p>
                <h4>149.99 €</h4>
              </div>
              <div className="card_button">
                <Button size="sm" variant="outline-info">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
          <div className="card_component">
            <div className="card_img">
              <img src="/3.png" alt="Oppo F19 Pro Plus" />
            </div>
            <div className="card_text">
              <p>Oppo F19 Pro Plus</p>
              <span>- oppo</span>
              <div className="card_rating">
                <p>8 reviews</p>
                <h4>149.99 €</h4>
              </div>
              <div className="card_button">
                <Button size="sm" variant="outline-info">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="card_link">
          <Button size="sm" variant="outline-secondary" className="text-dark">
            See more
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
