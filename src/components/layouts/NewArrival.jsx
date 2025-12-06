import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../Heading";
import new01 from "/src/assets/new-01.png";
import new02 from "/src/assets/new-02.png";
import new03 from "/src/assets/new-03.png";
import new04 from "/src/assets/new-04.png";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <section className="newArrival mt-5 pt-5">
      <Container className="">
        <div className="text-DB4444 fw-semibold d-flex align-items-center column-gap-3">
          <div
            style={{
              height: "40px",
              width: "20px",
              background: "#DB4444",
              borderRadius: "4px",
            }}
          ></div>
          Featured
        </div>

        <div className="mt-4">
          <Heading text="New Arrival" as="h3" className="sectionHeading" />
        </div>
        <div className="mt-5">
          <Row className="row-gap-5">
            <Col md={6}>
              <div className="position-relative" >
                <img src={new01} alt="" className="w-100 img-fluid" />
                <div className="text-FAFAFA position-absolute bottom-left-5">
                  <Heading
                    text="PlayStation 5"
                    as="h5"
                    className="fs-24 fw-semibold  custom-letter-spacing"
                  />
                  <p className="fs-14" style={{ width: "250px" }}>
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <Link className="border-bottom border-1 border-white">
                    Shop Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div id="right-content"
                className="d-flex flex-column justify-content-md-between row-gap-5 row-gap-md-0"
               
              >
                <div className="position-relative ">
                  <img src={new02} alt="" className="w-100 img-fluid" />
                  <div className="text-FAFAFA position-absolute bottom-left-5">
                    <Heading
                      text="Women’s Collections"
                      as="h5"
                      className="fs-24 fw-semibold  custom-letter-spacing"
                    />
                    <p className="fs-14" style={{ width: "250px" }}>
                      Featured woman collections that give you another vibe.
                    </p>
                    <Link className="border-bottom border-1 border-white">
                      Shop Now
                    </Link>
                  </div>
                </div>

                <div className="d-flex column-gap-4 ">
                  <div className="position-relative w-50 img-card">
                    <img src={new03} alt="" className="w-100 img-fluid" />
                    <div className="text-FAFAFA position-absolute bottom-left-5">
                      <Heading
                        text="Speakers"
                        as="h5"
                        className="fs-24 fw-semibold  custom-letter-spacing"
                      />
                      <p className="fs-14" >
                       Amazon wireless speakers
                      </p>
                      <Link className="border-bottom border-1 border-white">
                        Shop Now
                      </Link>
                    </div>
                  </div>

                  <div className="position-relative w-50 img-card">
                    <img src={new04} alt="" className="w-100 img-fluid" />
                    <div className="text-FAFAFA position-absolute bottom-left-5">
                      <Heading
                        text="Perfume"
                        as="h5"
                        className="fs-24 fw-semibold  custom-letter-spacing"
                      />
                      <p className="fs-14" >
                        GUCCI INTENSE OUD EDP
                      </p>
                      <Link className="border-bottom border-1 border-white">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;
