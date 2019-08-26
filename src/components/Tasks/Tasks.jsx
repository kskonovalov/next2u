import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { getIdToUserObject } from '../../helpers';
import store from '../../store';

const Tasks = ({ todosResult, usersResult }) => {
  useEffect(() => {
    store.dispatch({ type: 'API_CALL_REQUEST', apiType: 'todos' });
    store.dispatch({ type: 'API_CALL_REQUEST', apiType: 'users' });
  }, []);
  const {
    data: todosData,
    fetching: todosFetching,
    error: todosError
  } = todosResult;
  const {
    data: usersData,
    fetching: usersFetching,
    error: usersError
  } = usersResult;
  if (todosFetching || usersFetching) {
    return <div className="alert alert-info">Загрузка..</div>;
  }
  if (todosError || usersError) {
    return (
      <div className="alert alert-info">
        Что-то пошло не так. Обновите страницу, или попробуйте вернуться позже!
      </div>
    );
  }
  const usersObject = getIdToUserObject(usersData);
  return (
    <>
      <h2>Все задачи</h2>
      <ul className="list-group">
        {typeof todosData === 'object' &&
          todosData !== null &&
          Object.keys(todosData).map(key => (
            <TodoItem
              key={todosData[key].id}
              item={todosData[key]}
              user={
                typeof usersObject[todosData[key].userId] !== 'undefined'
                  ? usersObject[todosData[key].userId]
                  : {}
              }
            />
          ))}
      </ul>
    </>
  );
};

const mapStateToProps = appStore => {
  const { todos, users } = appStore.apiData;
  return {
    todosResult: todos,
    usersResult: users
  };
};

export default connect(mapStateToProps)(Tasks);
