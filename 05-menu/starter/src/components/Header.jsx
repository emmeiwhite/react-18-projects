import React from "react";

export default function Header({ categories, handleFilter }) {
  return (
    <div className="title">
      <h1>Our Menu</h1>
      <div className="title-underline"></div>

      <div className="btn-container">
        {categories.map((category) => (
          <button
            className="btn"
            onClick={() => handleFilter(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
