import React, { useState } from 'react';

import UserData from './UserData';
import UserEdit from './UserEdit';

const Profile = () => {
  const { user = {} } =
    typeof window.__DATA__ !== 'undefined' && window.__DATA__;

  const [userData, updateUserData] = useState(user);
  const [editMode, setEditMode] = useState(false);
  
  const updateGlobalUserData = userDataNew => {
    updateUserData(userDataNew);
    window.__DATA__.user = userDataNew;
    setEditMode(false);
  };

  const { name = '' } = userData;
  return (
    <>
      <h2>Задачи {name}</h2>
      <div className="row">
        <div className="col-md-4">
          {!editMode && (
            <UserData user={user} setEditMode={setEditMode} />
          )}
          {editMode && (
            <UserEdit user={user} updateGlobalUserData={updateGlobalUserData} />
          )}
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <h5 className="mb-1">todos.title </h5>
              <small>user.name</small>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <h5 className="mb-1">
                <s>todos.title</s>
              </h5>
              <small>user.name</small>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
