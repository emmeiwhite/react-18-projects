import { useState } from "react";
import ColorForm from "./components/ColorForm";
import Shades from "./components/Shades";
useState;

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const getColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <section>
      <ColorForm getColor={getColor} />
      <Shades selectedColor={selectedColor} />
    </section>
  );
};
export default App;
