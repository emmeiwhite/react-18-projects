import { useState } from "react";
import data from "./data";
import Accordion from "./Accordion";
const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>

        {questions.map((question) => {
          return (
            <Accordion
              {...question}
              id={question.id}
            />
          );
        })}
      </div>
    </main>
  );
};
export default App;
