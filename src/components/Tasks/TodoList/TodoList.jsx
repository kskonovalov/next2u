import React from 'react';
import TodoItem from '../TodoItem';
import { getIdToUserObject } from '../../../helpers';

const TodoList = ({ todosData, usersData }) => {
  // const { id, completed, title } = item;
  // console.log(isset(() => users[userId].name));
  if (typeof todosData === 'undefined' || todosData == null) {
    return <div>не найдено..</div>;
  }
  if (todosData.length === 0) {
    return <div>Задач не найдено</div>;
  }
  const idToUserObject = getIdToUserObject(usersData);
  return (
    <ul className="list-group">
      {typeof todosData === 'object' &&
        todosData !== null &&
        Object.keys(todosData).map(key => {
          const taskUser =
            typeof idToUserObject[todosData[key].userId] !== 'undefined'
              ? idToUserObject[todosData[key].userId]
              : {};
          return (
            <TodoItem
              key={todosData[key].id}
              item={todosData[key]}
              user={taskUser}
            />
          );
        })}
    </ul>
  );
};
// {typeof users !== 'undefined' && typeof users[userId] !== 'undefined' && users[userId].name}

export default TodoList;
