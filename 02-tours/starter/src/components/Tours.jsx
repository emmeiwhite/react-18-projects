import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, handleDelete }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            handleDelete={handleDelete}
            {...tour}
          />
        ))}
      </div>
    </section>
  );
};

export default Tours;
