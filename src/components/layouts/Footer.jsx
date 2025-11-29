import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-3">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Exclusive</h5>
            <p className="mt-3">Get 10% off your first order</p>
            <input className="form-control" placeholder="Enter your email" />
          </Col>

          <Col md={3}>
            <h6>Support</h6>
            <p className="small mt-3">111 Bijoy Sarani, Dhaka...</p>
          </Col>

          <Col md={3}>
            <h6>Quick Links</h6>
            <p className="small mt-3">Privacy Policy</p>
            <p className="small">Terms Of Use</p>
          </Col>

          <Col md={3}>
            <h6>Download App</h6>
            <div className="d-flex mt-3">
              <img src="/qr.png" width="80" alt="" />
            </div>
          </Col>
        </Row>

        <div className="text-center small mt-4">
          © Copyright Rimel 2024. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
