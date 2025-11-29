import React from "react";
import { Card } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";

const ProductCard = ({ img, title, price, oldPrice, rating }) => {
  return (
    <Card className="product-card border-0">
      <div className="position-relative">
        <img src={img} className="card-img-top p-3" alt={title} />
        <FiHeart className="position-absolute top-0 end-0 m-3" size={20} />
      </div>

      <Card.Body>
        <h6 className="fw-bold">{title}</h6>
        <p className="text-danger fw-bold">
          ${price}{" "}
          {oldPrice && <span className="text-muted text-decoration-line-through">${oldPrice}</span>}
        </p>
        <div className="text-warning">{"★".repeat(rating)}</div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
