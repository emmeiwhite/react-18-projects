import { useState } from "react";
import Review from "./Review/Review";
import persons from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, id, image, job, text } = persons[index];
  // Our State will live here and we'll update state here at the top (kind of source of )

  const handlePrev = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return persons.length - 1;
      }

      return newIndex;
    });
  };

  const handleNext = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > persons.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };

  return (
    <main>
      <section className="container">
        <Review
          name={name}
          id={id}
          image={image}
          text={text}
          job={job}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </section>
    </main>
  );
};
export default App;
