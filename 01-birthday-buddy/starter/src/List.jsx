import React from "react";

function List({ user }) {
  return (
    <article
      className="person"
      key={user.id}
    >
      <img
        src={user.image}
        alt={user.name}
      />

      <div className="person-detail">
        <h3>{user.name}</h3>
        <p>{user.age}</p>
      </div>
    </article>
  );
}

export default List;
