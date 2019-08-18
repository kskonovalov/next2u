import React from 'react';

const TodoItem = ({ item }) => {
  const { id, completed, title, userId } = item;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center" key={id}>
      <h5 className="mb-1">
        {completed ? <s>{title}</s> : title}
      </h5>
      <small>user.name of {userId}</small>
    </li>
  );
};

export default TodoItem;
