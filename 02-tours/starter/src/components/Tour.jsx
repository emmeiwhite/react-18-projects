import React from "react";

const Tour = ({ image, id, name, price, info, handleDelete }) => {
  return (
    <article className="single-tour">
      <img
        src={image}
        alt={id}
        className="img"
      />
      <span className="tour-price">{price}</span>

      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>

      <button
        className="delete-btn btn"
        onClick={() => handleDelete(id)}
      >
        delete
      </button>
    </article>
  );
};

export default Tour;
