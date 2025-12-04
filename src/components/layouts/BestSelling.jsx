import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import Heading from "../Heading";
import Flex from "../Flex";
import Product from "../Product";
import product01 from "/src/assets/product-01.png";
import product02 from "/src/assets/product-02.png";
import product03 from "/src/assets/product-03.png";
import product04 from "/src/assets/product-04.png";

// Import Swiper React components
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const BestSelling = () => {
  return (
<section className=" my-5">
      <Container>
      <div className="text-DB4444 fw-semibold d-flex align-items-center column-gap-3">
        <div
          style={{
            height: "40px",
            width: "20px",
            background: "#DB4444",
            borderRadius: "4px",
          }}
        ></div>
        This Month
      </div>

      <div className="mt-4">
        <Flex className="align-items-end justify-content-between">
          <Heading
            text="Best Selling Products"
            as="h3"
            className="sectionHeading"
          />
          <Link className="bg-DB4444 text-white px-5 py-3 rounded-2">
            View All
          </Link>
        </Flex>
      </div>
      <div className="productPart mt-5 pb-5">
        <Swiper
        
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          slidesPerGroup={4}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // mobile
            0: {
              slidesPerView: 1,
            },

            // tablets
            768: {
              slidesPerView: 2,
            },

            // laptops
            992: {
              slidesPerView: 3,
            },

            // desktops
            1200: {
              slidesPerView: 4,
            },
          }}
        >
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
      </div>
    </Container>
</section>
  );
};

export default BestSelling;
