import React from "react";
import { toast } from "react-toastify";

export default function SingleColor({ index, shade }) {
  const { hex, weight } = shade;

  const handleClipBoardText = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`Color #${hex} copied to the clip board!`);
      } catch (error) {
        toast.error("Failed to copy to the clipboard!");
      }
    } else {
      toast.error("Clipboard access not available!");
    }
  };
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
        cursor: "pointer",
      }}
      onClick={handleClipBoardText}
    >
      {/* rgb(${shade.rgb.join(",")}), */}
      <p>{weight / 10}%</p>
      <h5>{hex}</h5>
    </div>
  );
}
