import {
  TASKS_API_CALL_REQUEST,
  TASKS_API_CALL_SUCCESS,
  TASKS_API_CALL_FAILURE,
  TASKS_UPDATE
} from '../constants';

const tasksReducer = (state = {}, action) => {
  switch (action.type) {
    case TASKS_API_CALL_REQUEST:
      return {
        fetching: true,
        error: null,
        data: null
      };
    case TASKS_API_CALL_SUCCESS:
      return {
        fetching: false,
        error: null,
        data: action[action.apiType].data
      };
    case TASKS_UPDATE:
      return {
        fetching: false,
        error: null,
        data: action.data
      };
    case TASKS_API_CALL_FAILURE:
      return {
        fetching: false,
        error: action[action.apiType].error,
        data: null
      };
    default:
      return state;
  }
};

export default tasksReducer;
