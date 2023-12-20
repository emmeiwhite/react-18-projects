import React from "react";
// import { transparentize, parseToRgb } from "polished";
import Values from "values.js";
import SingleColor from "./SingleColor";

// Utility function to convert hex to rgba
// const hexToRgba = (hex, alpha) => {
//   const { red, green, blue } = parseToRgb(hex);
//   return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
// };

export default function Shades({ selectedColor }) {
  if (!selectedColor) return;
  // Convert the selected color to rgba format
  // const rgbaColor = hexToRgba(selectedColor, 1);

  // Generate an array of 10 shades using polished's transparentize function
  // const shades = Array.from({ length: 10 }, (_, index) => ({
  //   id: index + 1,
  //   color: transparentize(index / 10, rgbaColor), // Adjust transparency for shades
  // }));

  const shades = new Values(selectedColor).all(10);
  console.log(shades);
  return (
    <section
      style={{
        height: "500px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {/* Render the shades */}
      {shades.map((shade, index) => (
        <SingleColor
          shade={shade}
          index={index}
          key={index}
        />
      ))}
    </section>
  );
}
