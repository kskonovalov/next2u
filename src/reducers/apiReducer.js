import { initialState } from '../config';
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from '../constants';


const apiReducer = (state = initialState.apiData, action) => {
  if (typeof action === 'undefined' || typeof action.apiType === 'undefined') {
    // return state;
  }
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
        [action.apiType]: {
          fetching: true,
          error: null,
          data: null
        }
      };
    case API_CALL_SUCCESS:
      return {
        ...state,
        [action.apiType]: {
          fetching: false,
          error: null,
          data: action[action.apiType].data
        }
      };
    case API_CALL_FAILURE:
      return {
        ...state,
        [action.apiType]: {
          fetching: false,
          error: action[action.apiType].error,
          data: null
        }
      };
    default:
      return state;
  }
};

export default apiReducer;
