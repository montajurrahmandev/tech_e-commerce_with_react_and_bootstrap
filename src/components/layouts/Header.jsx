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
      <header>
        <Navbar collapseOnSelect expand="lg" className="">
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
                <Nav.Link href="#pricing" className="">
                  Contact
                </Nav.Link>
                <Nav.Link href="#pricing" className="">
                  About
                </Nav.Link>
                <Nav.Link href="#pricing" className="">
                  Sign Up
                </Nav.Link>
              </Nav>
              <div className="d-flex flex-column flex-md-row align-items-center column-gap-3 ">
                <div className="d-flex align-items-center gap-3 position-relative w-100">
                  <input
                    type="search"
                    className="form-control me-2 pe-4 fs-12 "
                    placeholder="What are you looking for?"
                  />
                  <IoSearch className="fs-24 position-absolute top-50 end-0 translate-middle-y me-3" />
                </div>

                <div className="d-flex align-items-center justify-content-center justify-content-md-end column-gap-4 pt-3 pt-md-0 ">
                  <CiHeart className="fs-32 " />
                  <BsCart3 className="fs-24 " />
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
