import React from 'react';

const TodoItem = ({ item, user }) => {
  const { id, completed, title } = item;
  // console.log(isset(() => users[userId].name));
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={id}
    >
      <h5 className="mb-1">{completed ? <s>{title}</s> : title}</h5>
      <small>
        {typeof user.name !== 'undefined' && user.name}
      </small>
    </li>
  );
};
// {typeof users !== 'undefined' && typeof users[userId] !== 'undefined' && users[userId].name}

export default TodoItem;
