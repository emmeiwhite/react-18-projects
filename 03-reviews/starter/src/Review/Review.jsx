import React from "react";

export default function Review({
  id,
  name,
  job,
  image,
  text,
  handlePrev,
  handleNext,
}) {
  return (
    <article className="review">
      <h1>{id}</h1>
      <div className="img-container">
        <img
          src={image}
          alt="name"
          className="person-img"
        />
      </div>

      <h2 className="author">{name}</h2>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="btn-container">
        <button
          className="prev-btn"
          onClick={() => {
            handlePrev(id);
          }}
        >
          prev
        </button>
        <button
          className="next-btn"
          onClick={() => {
            handleNext(id);
          }}
        >
          next
        </button>
      </div>

      <button className="btn surprise">Surprise</button>
    </article>
  );
}
