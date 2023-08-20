import { useState } from "react";
import data from './data'

const App = () => {
  const [users, setUsers] = useState(data);

  const deleteAll = () => {
    setUsers([])
  }
  return <main>
    <section className="container">
      <h3>{ users.length >0 ?data.length :"0"} birthday's today</h3>
    {users.map(user => {
      return (
        <article className="person" key={user.id}>
          <img src={user.image} alt={user.name} />
          <div className="user-detail">
            <h4>{user.name}</h4>
            <p>{user.age}</p>
          </div>
        </article>
      )
    })}
      
       <button className="btn" onClick={deleteAll}>remove all</button>
      </section>
  </main>
};
export default App;
