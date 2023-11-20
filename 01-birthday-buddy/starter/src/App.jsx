import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [users, setUsers] = useState(data);

  const deleteAll = () => {
    setUsers([]);
  };

  return (
    <main>
      <section className="container">
        <h3> {users.length} Birthdays's today</h3>

        {users.map((user) => {
          return (
            <List
              user={user}
              key={user.id}
            />
          );
        })}

        <button
          className="btn"
          onClick={() => setUsers([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
