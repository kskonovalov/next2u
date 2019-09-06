import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UserData from './UserData';
import UserEdit from './UserEdit';
import Tasks from '../Tasks';
import { todoApiCallRequest, userDataUpdate } from '../../actions';

const Profile = ({ user, updateState, getTodos, todosResult }) => {
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    getTodos(user.id);
  }, [user.id]);

  const updateGlobalUserData = userData => {
    setEditMode(false);
    updateState(userData);
  };

  const { name = '' } = user;
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
          <Tasks todosData={todosResult} usersData={{ user }} />
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
