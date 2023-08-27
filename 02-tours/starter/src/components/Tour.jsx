import React from "react";
import { useState } from "react";

const Tour = ({ image, id, name, price, info, handleDelete }) => {
  const [isFull, setisFull] = useState(false);

  const showFull = () => {};
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
        <p>
          {isFull ? (
            <div>
              {info} <span>Show Less</span>{" "}
            </div>
          ) : (
            <div>
              {" "}
              {info.substring(0, 200)}{" "}
              <span onClick={showFull}> Show Full</span>
            </div>
          )}{" "}
        </p>
        <button
          className="delete-btn btn btn-block"
          onClick={() => handleDelete(id)}
        >
          delete
        </button>
      </div>
    </article>
  );
};

export default Tour;
