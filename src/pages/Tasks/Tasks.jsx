import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { todoApiCallRequest, usersApiCallRequest } from '../../store/actions';
import { getIdToUserObject } from '../../helpers';
import TodoList from './TodoList';
import Loader from '../../components/Loader';

const Tasks = ({
  tasksResult,
  usersResult,
  getTasks,
  getUsers
}) => {
  useEffect(() => {
    getTasks(false);
    getUsers();
  }, [getTasks, getUsers]);
  const {
    data: tasksData,
    fetching: tasksFetching,
    error: tasksError
  } = tasksResult;
  const {
    data: usersData,
    fetching: usersFetching,
    error: usersError
  } = usersResult;
  if (tasksFetching || usersFetching) {
    return <Loader />;
  }
  if (tasksError || usersError) {
    return (
      <div className="alert alert-info">
        Что-то пошло не так. Обновите страницу, или попробуйте вернуться позже!
      </div>
    );
  }
  const idToUserObject = getIdToUserObject(usersData);
  return (
    <>
      <h2>Все задачи</h2>
      <TodoList usersData={idToUserObject} tasksData={tasksData} />
    </>
  );
};

const mapStateToProps = appStore => {
  const { tasks, users } = appStore;
  return {
    tasksResult: tasks,
    usersResult: users,
    user: appStore.user
  };
};

const mapDispatchToProps = dispatch => ({
  getTasks: userId => dispatch(todoApiCallRequest(userId)),
  getUsers: () => dispatch(usersApiCallRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
