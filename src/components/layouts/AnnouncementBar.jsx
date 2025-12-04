import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  return (
<section className="bg-black">
  <Container>
        <div className=" text-white d-flex flex-column flex-md-row align-items-center justify-content-center fs-14 py-3 text-FAFAFA">
      Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
      <Link
        className="text-FAFAFA fw-semibold "
        style={{
          marginLeft: "10px",
          textDecoration: "underline",
          textUnderlineOffset: "2px",
        }}
      >
        ShopNow
      </Link>
    </div>
  </Container>
</section>
  );
};

export default AnnouncementBar;
