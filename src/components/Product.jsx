import React from "react";
import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa6";
import Heading from "./Heading";
import Flex from "./Flex";

const Product = ({
  className,
  imgSrc,
  title,
  currentPrice,
  regularprice,
  rating,
}) => {
  return (
    <>
      <div className={`product ${className}`}>
        <div className="bg-F5F5F5 position-relative">
          <div className="product-img position-relative">
            <img src={imgSrc} alt="This is an image." className="w-100" />
            <button className="add-to-cart position-absolute bottom-0 start-0 end-0">
              Add To Cart
            </button>
          </div>
          <div className="d-flex flex-column row-gap-4 fs-20 position-absolute top-right-5">
            <FaRegHeart />
            <FaRegEye />
          </div>
        </div>
        <div className="py-4">
          <Heading text={title} as="h3" className="fs-16 fw-medium" />
          <Flex className="column-gap-3 py-2">
            <span className="text-DB4444 fw-medium">{currentPrice}</span>
            <del className="fw-medium opacity-50">{regularprice}</del>
          </Flex>
          <div className="d-flex align-items-center column-gap-3">
            <div className="text-FFAD33 d-flex align-items-center column-gap-1 m-0 p-0">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div>
              <span className="fs-14 fw-semibold opacity-50 m-0 p-0">
                (<span>{rating}</span>)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
