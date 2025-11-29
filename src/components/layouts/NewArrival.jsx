import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NewArrival = () => {
  return (
    <Container className="my-5">
      <h4 className="fw-bold mb-4">New Arrival</h4>

      <Row className="g-4">
        <Col md={6}>
          <div className="arrival-box big p-4 rounded text-white"
               style={{ background: "#000" }}>
            <h4>PlayStation 5</h4>
            <p>Available now with the best gaming experience</p>
            <button className="btn btn-light mt-2">Shop Now</button>
          </div>
        </Col>

        <Col md={3}>
          <div className="arrival-box p-4 rounded bg-dark text-white">
            <h5>Speakers</h5>
            <button className="btn btn-light mt-2">Shop Now</button>
          </div>
        </Col>

        <Col md={3}>
          <div className="arrival-box p-4 rounded bg-dark text-white">
            <h5>Perfume</h5>
            <button className="btn btn-light mt-2">Shop Now</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewArrival;
