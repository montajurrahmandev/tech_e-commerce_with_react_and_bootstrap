import React from "react";
import Container from "../Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="fs-24 fw-bold" href="#home">
            Exclusive
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto col-lg-5 row-gap-3 py-3">
              <Nav.Link href="#features" className="shadow-lg">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="shadow-lg">
                Contact
              </Nav.Link>
              <Nav.Link href="#pricing" className="shadow-lg">
                About
              </Nav.Link>
              <Nav.Link href="#pricing" className="shadow-lg">
                Sign Up
              </Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center column-gap-3 ">
              <div className="d-flex align-items-center gap-3 position-relative">
                <input
                  type="search"
                  className="form-control me-2 pe-4 fs-12 w-100"
                  placeholder="What are you looking for?"
                />
                <IoSearch className="fs-24 position-absolute top-50 end-0 translate-middle-y me-3" />
              </div>
              <div className="">
                <i className="bi bi-heart"></i>
                <i className="bi bi-cart"></i>
              </div>
            </Nav>
            <div className="d-flex align-items-center justify-content-between justify-content-md-end column-gap-md-3 pt-3 pt-md-0 ">
              <CiHeart className="fs-32 " />
              <BsCart3 className="fs-24 " />
            </div>
          </Navbar.Collapse>
        </Container>
       
      </Navbar>
    </>
  );
};

export default Header;
