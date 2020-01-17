import {
  USER_DATA_UPDATE,
  TASKS_API_CALL_REQUEST,
  TASKS_UPDATE,
  USERS_API_CALL_REQUEST
} from '../constants';

export const userDataUpdate = user => ({
  type: USER_DATA_UPDATE,
  user
});

export const tasksApiCallRequest = (userId = false) => ({
  type: TASKS_API_CALL_REQUEST,
  apiType: 'tasks',
  userId
});

export const tasksUpdate = (data = []) => ({
  type: TASKS_UPDATE,
  data
});

export const usersApiCallRequest = () => ({
  type: USERS_API_CALL_REQUEST,
  apiType: 'users'
});
