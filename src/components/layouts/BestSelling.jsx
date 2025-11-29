import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "/src/components/ProductCard.jsx";
import products from "../data/bestSelling.json";

const BestSelling = () => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Best Selling Products</h4>
        <button className="btn btn-danger px-4">View All</button>
      </div>

      <Row className="g-4">
        {products.map((p, i) => (
          <Col md={3} key={i}>
            <ProductCard {...p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestSelling;
