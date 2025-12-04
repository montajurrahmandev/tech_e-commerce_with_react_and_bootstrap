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
      className="h-100  pt-5 "
      style={{
        width: "220px",
        borderRight: "1px solid #fafafa",
    
        
      }}
    >
      <ul className="list-unstyled m-0 d-flex flex-column justify-content-between h-100">
        {categories.map((cat, index) => (
          <li
            key={index}
            className=""
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
