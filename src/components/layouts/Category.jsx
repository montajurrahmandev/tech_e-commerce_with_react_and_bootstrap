import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../Heading";
import { CiHeadphones, CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Category = () => {
  return (
    <section id="browseCategory" className="browseCategory pt-md-5 mt-5">
      <Container className="pt-5">
        <div className="text-DB4444 fw-semibold d-flex align-items-center column-gap-3">
          <div
            style={{
              height: "40px",
              width: "20px",
              background: "#DB4444",
              borderRadius: "4px",
            }}
          ></div>
          Categories
        </div>

        <div className="d-flex justify-content-between align-items-end  mt-2 mt-md-4">
          <div>
            <Heading
              text="Browse By Category"
              as="h3"
              className="sectionHeading"
            />
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center column-gap-3 row-gap-2">
            <div className="prev-arrow">
              <FaLongArrowAltLeft />
            </div>
            <div className="next-arrow">
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>

        <div className="pt-5">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={6}
            navigation={{
              prevEl: ".prev-arrow",
              nextEl: ".next-arrow",
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              // mobile
              0: {
                slidesPerView: 2

              },
              576:{
slidesPerView:3
              },

              // tablets
              768: {
                slidesPerView: 4

              },

              // laptops
              992: {
                slidesPerView: 6,
              }
            }}
          >
            <SwiperSlide>
              <div className="box position-relative">
                <div className="position-absolute start-50 top-50 translate-middle text-center">
                  <CiMobile3 className="deviceIcon" />
                  <p className="pt-2 mb-0 ">Phones</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box position-relative ">
                <div className="position-absolute start-50 top-50 translate-middle text-center">
                  <RiComputerLine className="deviceIcon" />
                  <p className="pt-2 mb-0 ">Computers</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box position-relative">
                <div className="position-absolute start-50 top-50 translate-middle text-center">
                  <BsSmartwatch className="deviceIcon" />
                  <p className="pt-2 mb-0 ">SmartWatch</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box position-relative">
                <div className="position-absolute start-50 top-50 translate-middle text-center">
                  <IoCameraOutline className="deviceIcon" />
                  <p className="pt-2 mb-0 ">Camera</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box position-relative">
                <div className="position-absolute start-50 top-50 translate-middle text-center">
                  <CiHeadphones className="deviceIcon" />
                  <p className="pt-2 mb-0 ">HeadPhones</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box position-relative">
                <div className="position-absolute start-50 top-50 translate-middle text-center">
                  <LuGamepad className="deviceIcon" />
                  <p className="pt-2 mb-0 ">Gaming</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box position-relative">
                <div className="position-absolute start-50 top-50 translate-middle text-center">
                  <CiMobile3 className="deviceIcon" />
                  <p className="pt-2 mb-0 ">Phones</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="border-bottom border-2 border-black border-opacity-25 mt-5 pt-5"></div>
        </div>
      </Container>
    </section>
  );
};

export default Category;
