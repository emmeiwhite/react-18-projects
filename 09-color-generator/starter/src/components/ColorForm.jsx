import React, { useState } from "react";

export default function ColorForm({ getColor }) {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getColor(color);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="#7865ab"
      />
      <button
        type="submit"
        className="btn"
        style={{
          backgroundColor: color,
        }}
      >
        Submit
      </button>
    </form>
  );
}
