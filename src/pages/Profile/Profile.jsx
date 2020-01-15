import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UserData from './UserData';
import UserEdit from './UserEdit';
import TodoList from '../Tasks/TodoList';
import Loader from '../../components/Loader';
import { tasksApiCallRequest, userDataUpdate } from '../../store/actions';
import { getIdToUserObject } from '../../helpers';

const Profile = ({ user, updateState, getTasks, tasksResult }) => {
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    getTasks(user.id);
  }, [user.id, getTasks]);

  const updateGlobalUserData = userData => {
    setEditMode(false);
    updateState(userData);
  };

  const { name = '' } = user;

  const {
    data: tasksData,
    fetching: tasksFetching,
    error: tasksError
  } = tasksResult;

  if (tasksFetching) {
    return <Loader />;
  }

  if (tasksError) {
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
          <TodoList usersData={idToUserObject} tasksData={tasksData} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = appStore => {
  const { tasks, user } = appStore;
  return {
    user,
    tasksResult: tasks
  };
};

const mapDispatchToProps = dispatch => ({
  updateState: userData => dispatch(userDataUpdate(userData)),
  getTasks: userId => dispatch(tasksApiCallRequest(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
