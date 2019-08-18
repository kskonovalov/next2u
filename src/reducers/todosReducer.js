import { initialState } from '../config';
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from '../constants';

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        todos: action.todos
      };
    case API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        todos: null,
        error: action.error
      };
    default:
      return state;
  }
};

export default todosReducer;