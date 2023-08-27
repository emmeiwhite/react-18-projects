import React from "react";

function FoodItem({ id, category, price, img, desc, title }) {
  return (
    <div className="menu-item">
      <img
        src={img}
        alt={category}
        className="img"
      />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
      </div>
      <p className="item-text">{desc}</p>
    </div>
  );
}

export default FoodItem;
