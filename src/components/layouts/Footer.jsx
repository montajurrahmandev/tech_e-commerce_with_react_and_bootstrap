import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
// import "./Footer.css";

import googlePlay from "/src/assets/GooglePlay.png";
import appStore from "/src/assets/AppStore.png";
import qrCode from "/src/assets/Qr Code.png";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import { GiPlayButton } from "react-icons/gi";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-5 pt-5">
      <div className="pt-5 pb-4 bg-black  text-FAFAFA">
        <Container className="pt-4">
          <Row className="text-white d-flex justify-content-between row-gap-4">
            {/* Exclusive */}
            <Col md={3} className="mb-4">
              <Heading text="Exclusive" as="h5" className="fs-24 fw-bold" />

              <Link className="my-3 fs-20 fw-medium">Subscribe</Link>
              <p className="footer-text ">Get 10% off your first order</p>

              {/* Email Input */}
              <div className="position-relative" style={{ width: "70%" }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black py-2 px-2 pe-5 text-white w-100"
                />
                <button
                  className="bg-transparent border-0 position-absolute top-50 translate-middle-y fs-24"
                  style={{ right: "0" }}
                >
                  <GiPlayButton className="text-white" />
                </button>
              </div>
            </Col>

            {/* Support */}
            <Col md={3} className="mb-4">
              <Heading
                text="Support"
                as="h5"
                className="fs-20 fw-medium mb-2"
              />

              <p className="footer-text mt-4">house, street, city, country</p>
              <p className="footer-text my-3">company@domain.com</p>
              <p className="footer-text">01.........</p>
            </Col>

            {/* Account */}
            <Col md={2} className="account mb-4">
              <Heading
                text="Account"
                as="h5"
                className="fs-20 fw-medium mb-2"
              />

              <ul className="mt-4 d-flex flex-row flex-md-column flex-wrap justify-content-between row-gap-3">
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </Col>

            {/* Quick Link */}
            <Col md={2} className="quick-link mb-4">
              <Heading
                text="Quick Link"
                as="h5"
                className="fs-20 fw-medium mb-2"
              />

              <ul className="mt-4 d-flex flex-row flex-md-column flex-wrap justify-content-between row-gap-3">
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </Col>

            {/* Download App */}
            <Col md={2} className="mb-4">
              <Heading
                text="Download App"
                as="h5"
                className="fs-20 fw-medium mb-2"
              />

              <p className="fs-12 fw-medium mt-4">
                Save $3 with App New User Only
              </p>

              <div className="d-flex align-items-start gap-2 mt-2">
                <div className="w-50">
                  <img
                    src={""}
                    alt="QR"
                    className="w-100 img-fluid d-flex justify-content-center align-items-center h-100"
                  />
                </div>
                <div className="d-flex flex-column justify-content-between  w-50 gap-4">
                  <img
                    src={googlePlay}
                    alt="Google Play"
                    className="w-100 img-fluid"
                  />
                  <img
                    src={appStore}
                    alt="App Store"
                    className="w-100 img-fluid"
                  />
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-4 fs-20 d-flex justify-content-between">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <div className="text-white mt-4 opacity-50 d-flex align-items-center justify-content-center gap-2">
          <FaRegCopyright className="fs-20" /> Copyright Rimel 2024. All rights
          reserved
        </div>
      </div>

      {/* Copyright */}
    </footer>
  );
};

export default Footer;
