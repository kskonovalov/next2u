import { USER_DATA_UPDATE, API_CALL_REQUEST } from '../constants';

export const userDataUpdate = user => ({
  type: USER_DATA_UPDATE,
  user
});

export const todoApiCallRequest = (userId = false) => ({
  type: API_CALL_REQUEST,
  apiType: 'tasks',
  userId
});

export const usersApiCallRequest = () => ({
  type: API_CALL_REQUEST,
  apiType: 'users'
});
