import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UserData from './UserData';
import UserEdit from './UserEdit';
import TodoList from '../Tasks/TodoList';
import Loader from '../helpers/Loader';
import { todoApiCallRequest, userDataUpdate } from '../../actions';
import { getIdToUserObject } from '../../helpers';

const Profile = ({ user, updateState, getTodos, todosResult }) => {
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    getTodos(user.id);
  }, [user.id, getTodos]);

  const updateGlobalUserData = userData => {
    setEditMode(false);
    updateState(userData);
  };

  const { name = '' } = user;

  const {
    data: todosData,
    fetching: todosFetching,
    error: todosError
  } = todosResult;

  if (todosFetching) {
    return <Loader />;
  }

  if (todosError) {
    return <div className="alert alert-warning">Что-то пошло не так..</div>;
  }

  const idToUserObject = getIdToUserObject([user]);
  return (
    <>
      <h2>Задачи {name}</h2>
      <div className="row">
        <div className="col-md-4">
          {editMode ? (
            <UserEdit user={user} updateGlobalUserData={updateGlobalUserData} />
          ) : (
            <UserData user={user} setEditMode={setEditMode} />
          )}
        </div>
        <div className="col-md-8">
          <TodoList usersData={idToUserObject} todosData={todosData} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = appStore => {
  const { user } = appStore;
  const { todos } = appStore.apiData;
  return {
    user,
    todosResult: todos
  };
};

const mapDispatchToProps = dispatch => ({
  updateState: userData => dispatch(userDataUpdate(userData)),
  getTodos: userId => dispatch(todoApiCallRequest(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
