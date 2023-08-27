import React, { useState } from "react";

export default function Accordion({ id, title, info, handleToggle, isOpen }) {
  //   const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          //   onClick={() => setShowInfo(!showInfo)}
          onClick={() => handleToggle(id)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </header>

      {isOpen && <p>{info}</p>}
    </article>
  );
}
