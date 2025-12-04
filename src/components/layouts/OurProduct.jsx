import React from "react";
import { Container } from "react-bootstrap";
import Flex from "../Flex";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import Product from "../Product";
import product01 from "/src/assets/product-01.png";
import product02 from "/src/assets/product-02.png";
import product03 from "/src/assets/product-03.png";
import product04 from "/src/assets/product-04.png";
import product05 from "/src/assets/product-05.png";
import product06 from "/src/assets/product-06.png";
import product07 from "/src/assets/product-07.png";
import product08 from "/src/assets/product-08.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Grid, Navigation } from "swiper/modules";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const OurProduct = () => {
  return (
    <>
      <section className="ourProduct mt-5 pt-5">
        <Container className="my-5">
          <div className="text-DB4444 fw-semibold d-flex align-items-center column-gap-3">
            <div
              style={{
                height: "40px",
                width: "20px",
                background: "#DB4444",
                borderRadius: "4px",
              }}
            ></div>
            Our Products
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <Heading
                text="Explore Our Products"
                as="h3"
                className="sectionHeading"
              />
            </div>
            <div className="d-flex align-items-center column-gap-3">
              <div className="prev-arrow">
                <FaLongArrowAltLeft />
              </div>
              <div className="next-arrow">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
          <div className="productPart mt-5">
            <Swiper
              modules={[Navigation, Grid]}
              spaceBetween={50}
              slidesPerView={4}
              slidesPerGroup={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                prevEl: ".prev-arrow",
                nextEl: ".next-arrow",
              }}
              grid={{
                rows: 2,
                fill: "row",
              }}
              breakpoints={{
                // mobile
                0: {
                  slidesPerView: 1,
                  grid: {
                    rows: 1,
                  },
                  slidesPerGroup: 1,
                },

                // tablets
                768: {
                  slidesPerView: 2,
                  grid: {
                    rows: 1,
                  },
                  slidesPerGroup: 2,
                },

                // laptops
                992: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                  },
                  slidesPerGroup: 3,
                },

                // desktops
                1200: {
                  slidesPerView: 4,
                  grid: {
                    rows: 2,
                  },
                  slidesPerGroup: 4,
                },
              }}
            >
              <SwiperSlide>
                <Product
                  imgSrc={product05}
                  title={"Breed Dry Dog Food"}
                  currentPrice={"$100"}
                  rating={"35"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={product06}
                  title={"CANON EOS DSLR Camera"}
                  currentPrice={"$360"}
                  rating={"95"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={product07}
                  title={"ASUS FHD Gaming Laptop"}
                  currentPrice={"$700"}
                  regularprice={"$800"}
                  rating={"325"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={product08}
                  title={"Curology Product Set "}
                  currentPrice={"$500"}
                  rating={"152"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={product08}
                  title={"Curology Product Set "}
                  currentPrice={"$500"}
                  rating={"152"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={product01}
                  title={"The north coat"}
                  currentPrice={"$260"}
                  regularprice={"$360"}
                  rating={"65"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={product02}
                  title={"Gucci duffle bag"}
                  currentPrice={"$960"}
                  regularprice={"$1160"}
                  rating={"79"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={product03}
                  title={"RGB liquid CPU Cooler"}
                  currentPrice={"$160"}
                  regularprice={"$170"}
                  rating={"160"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={product04}
                  title={"Small BookSelf"}
                  currentPrice={"$360"}
                  rating={"40"}
                />
              </SwiperSlide>
            </Swiper>

            <div className="d-flex justify-content-center mt-5">
              <Link className="bg-DB4444 text-white px-5 py-3 rounded-2">
                View All Products
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurProduct;
