import React, { useState } from "react";

export default function Accordion({ id, title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? "-" : "+"}
        </button>
      </header>

      {showInfo && <p>{info}</p>}
    </article>
  );
}
