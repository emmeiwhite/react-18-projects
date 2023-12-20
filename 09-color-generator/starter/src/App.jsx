import { useState } from "react";
import ColorForm from "./components/ColorForm";
import Shades from "./components/Shades";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#24ab23").all(10));

  const getColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  /*
  toast.success("success!");
  toast.error("error!");
  */

  return (
    <section>
      <ColorForm getColor={getColor} />
      <Shades colors={colors} />
      <ToastContainer position="top-center" />
    </section>
  );
};
export default App;
