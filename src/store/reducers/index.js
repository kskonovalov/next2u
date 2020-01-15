import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import tasksReducer from './tasksReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  user: userReducer
});

export default rootReducer;
