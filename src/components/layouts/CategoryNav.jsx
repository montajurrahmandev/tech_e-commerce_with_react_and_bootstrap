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
      className="p-3"
      style={{
        width: "220px",
        borderRight: "1px solid #e5e5e5"
      }}
    >
      <ul className="list-unstyled m-0">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="mb-3"
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
