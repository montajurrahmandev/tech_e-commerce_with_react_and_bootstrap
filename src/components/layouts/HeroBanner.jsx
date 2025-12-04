import React from "react";
import { Container } from "react-bootstrap";
import banner from "/src/assets/banner.jpg";
import CategoryNav from "./CategoryNav";

const HeroBanner = () => {
  return (
    <Container className="">
      <div className="row">
        <div className="col-lg-3 ">
          <CategoryNav/>
        </div>
           
        <div className="col-lg-9 pt-5">
          <img src={banner} alt="banner" className="w-100" />
        </div>
      </div>
    </Container>
  );
};

export default HeroBanner;
