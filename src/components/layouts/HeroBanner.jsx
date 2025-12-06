import React from "react";
import { Container } from "react-bootstrap";
import banner from "/src/assets/banner.jpg";
import CategoryNav from "./CategoryNav";

const HeroBanner = () => {
  return (
    <section className="heroBanner">
      <Container className="">
        <div className="row">
          <div className="col-lg-3 d-flex justify-content-between">
            <CategoryNav />
             <div className="border-end border-2 border-black border-opacity-25 h-100 me-5 d-none d-md-block "></div>
            
          </div>

          <div className="col-lg-9 pt-5">
            <img src={banner} alt="banner" className="w-100" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
