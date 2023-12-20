import React from "react";
// import { transparentize, parseToRgb } from "polished";

import SingleColor from "./SingleColor";

// Utility function to convert hex to rgba
// const hexToRgba = (hex, alpha) => {
//   const { red, green, blue } = parseToRgb(hex);
//   return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
// };

export default function Shades({ colors }) {
  if (!colors.length > 0) return;
  // Convert the selected color to rgba format
  // const rgbaColor = hexToRgba(selectedColor, 1);

  // Generate an array of 10 shades using polished's transparentize function
  // const shades = Array.from({ length: 10 }, (_, index) => ({
  //   id: index + 1,
  //   color: transparentize(index / 10, rgbaColor), // Adjust transparency for shades
  // }));

  return (
    <section
      style={{
        height: "500px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
      {/* Render the shades */}
      {colors.map((shade, index) => (
        <SingleColor
          shade={shade}
          index={index}
          key={index}
        />
      ))}
    </section>
  );
}
