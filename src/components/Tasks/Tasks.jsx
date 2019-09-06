import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { todoApiCallRequest, usersApiCallRequest } from '../../actions';
import TodoList from './TodoList';

const Tasks = ({
  todosResult,
  usersResult,
  getTodos,
  getUsers
}) => {
  useEffect(() => {
    getTodos(false);
    getUsers();
  }, [getTodos, getUsers]);
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
  return (
    <>
      <h2>Все задачи</h2>
      <TodoList usersData={usersData} todosData={todosData} />
    </>
  );
};

const mapStateToProps = appStore => {
  const { todos, users } = appStore.apiData;
  return {
    todosResult: todos,
    usersResult: users,
    user: appStore.user
  };
};

const mapDispatchToProps = dispatch => ({
  getTodos: userId => dispatch(todoApiCallRequest(userId)),
  getUsers: () => dispatch(usersApiCallRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
