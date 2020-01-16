import React from 'react';

import TodoItem from '../TodoItem';
import Loader from '../../../components/Loader';

const TodoList = ({ tasksData, usersData, error = false, loading = false }) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="alert alert-info">
        Что-то пошло не так. Обновите страницу, или попробуйте вернуться позже!
      </div>
    );
  }

  if (typeof tasksData === 'undefined' || tasksData == null) {
    return <div>не найдено..</div>;
  }

  if (tasksData.length === 0) {
    return <div>Задач не найдено</div>;
  }

  return (
    <ul className="list-group">
      {typeof tasksData === 'object' &&
        tasksData !== null &&
        Object.keys(tasksData).map(key => {
          const taskUser =
            typeof usersData[tasksData[key].userId] !== 'undefined'
              ? usersData[tasksData[key].userId]
              : {};
          return (
            <TodoItem
              key={tasksData[key].id}
              item={tasksData[key]}
              user={taskUser}
            />
          );
        })}
    </ul>
  );
};
// {typeof users !== 'undefined' && typeof users[userId] !== 'undefined' && users[userId].name}

export default TodoList;
