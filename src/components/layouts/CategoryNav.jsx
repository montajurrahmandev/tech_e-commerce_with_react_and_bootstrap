import React from "react";

const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

const CategoryNav = () => {
  return (
    <div
      className="h-100  pt-5 m-auto m-md-0 text-center text-md-start w-100"

    >
      <ul className=" list-unstyled m-0 d-flex flex-column justify-content-between  row-gap-4 row-gap-md-0 h-100">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="custom-bg"
            style={{
              fontSize: "16px",
              cursor: "pointer",
              color: "#000",
              fontWeight: "500"
            }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNav;
