import React from "react";

export default function SingleColor({ index, shade }) {
  const { hex, weight } = shade;
  return (
    <div
      key={index}
      style={{
        height: "120px",
        minWidth: "20%",
        // backgroundColor: `rgb(${shade.rgb.join(",")})`,
        backgroundColor: `#${hex}`,
        color: index > 10 ? "white" : "black",
        padding: "1rem",
      }}
    >
      {/* rgb(${shade.rgb.join(",")}), */}
      <p>{weight / 10}%</p>
      <h5>{hex}</h5>
    </div>
  );
}
