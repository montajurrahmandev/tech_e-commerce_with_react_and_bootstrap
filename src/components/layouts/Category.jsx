import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const categories = [
  { title: "Phones", icon: "📱" },
  { title: "Computers", icon: "💻" },
  { title: "SmartWatch", icon: "⌚" },
  { title: "Camera", icon: "📷" },
  { title: "Headphones", icon: "🎧" },
  { title: "Gaming", icon: "🎮" }
];

const Category = () => {
  return (
    <Container className="my-5">
      <h4 className="fw-bold mb-4">Browse By Category</h4>

      <Row className="g-3">
        {categories.map((cat, index) => (
          <Col xs={6} md={2} key={index}>
            <div className="border rounded text-center py-4 category-box">
              <div className="fs-1">{cat.icon}</div>
              <p className="mt-2 fw-semibold">{cat.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
