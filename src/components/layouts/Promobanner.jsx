import React from "react";
import { Container } from "react-bootstrap";
import banner from "/src/assets/promobanner.png";

const PromoBanner = () => {
  return (
    <Container className="my-4">
      <div className="">
           

        <img src={banner} alt="speaker" className="w-100" />
      </div>
    </Container>
  );
};

export default PromoBanner;
