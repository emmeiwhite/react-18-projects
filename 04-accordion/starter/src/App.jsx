import { useState } from "react";
import data from "./data";
import Accordion from "./Accordion";
const App = () => {
  const [questions, setQuestions] = useState(data);

  const handleToggle = (id) => {
    console.log(id);
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return { ...question, isOpen: !question.isOpen };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>

        {questions.map((question) => {
          return (
            <Accordion
              {...question}
              id={question.id}
              handleToggle={handleToggle}
            />
          );
        })}
      </div>
    </main>
  );
};
export default App;
