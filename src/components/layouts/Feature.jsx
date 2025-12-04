import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiTruckLine } from "react-icons/ri";

const Feature = () => {
  return (
    <section className=" pt-5">
      <Container className="mt-5">
        <Row className="text-center justify-content-center align-items-start">
          <Col md={3}>
            <div className="feature-item">
              <div className="feature-icon bg-959496 p-2 d-inline-block rounded-circle">
                <div className="bg-black text-white rounded-circle p-2">
                  <RiTruckLine size={28} className="" />
                </div>
              </div>
              <h5 className="feature-title mt-3 fs-20 fw-semibold">
                FREE AND FAST DELIVERY
              </h5>
              <p className="feature-desc fs-14">
                Free delivery for all orders over $140
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-item">
              <div className="feature-icon bg-959496 p-2 d-inline-block rounded-circle">
                <div className="bg-black text-white rounded-circle p-2">
                  <RiTruckLine size={28} className="" />
                </div>
              </div>
              <h5 className="feature-title mt-3 fs-20 fw-semibold">
                24/7 CUSTOMER SERVICE
              </h5>
              <p className="feature-desc fs-14">
                Friendly 24/7 customer support
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="feature-item">
              <div className="feature-icon bg-959496 p-2 d-inline-block rounded-circle">
                <div className="bg-black text-white rounded-circle p-2">
                  <RiTruckLine size={28} className="" />
                </div>
              </div>
              <h5 className="feature-title mt-3 fs-20 fw-semibold">
                MONEY BACK GUARANTEE
              </h5>
              <p className="feature-desc fs-14">
                We return money within 30 days
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feature;
