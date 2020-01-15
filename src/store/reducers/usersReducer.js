import {
  USERS_API_CALL_REQUEST,
  USERS_API_CALL_SUCCESS,
  USERS_API_CALL_FAILURE
} from '../constants';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case USERS_API_CALL_REQUEST:
      return {
        fetching: true,
        error: null,
        data: null
      };
    case USERS_API_CALL_SUCCESS:
      return {
        fetching: false,
        error: null,
        data: action[action.apiType].data
      };
    case USERS_API_CALL_FAILURE:
      return {
        fetching: false,
        error: action[action.apiType].error,
        data: null
      };
    default:
      return state;
  }
};

export default usersReducer;
