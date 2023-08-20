import { useState } from "react";
import data from './data'

const App = () => {
  const [users, setUsers] = useState([]);

  return <section>
    <main>
    {users.map(user => {
      return (
        <article className="user">
          <img src={user.image} alt={user.name} />
          <div className="user-detail">
            <h2>{user.name}</h2>
            <p>{user.age}</p>
          </div>
        </article>
      )
    })}
      </main>
  </section>
};
export default App;
