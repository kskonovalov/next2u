import { initialState } from '../../config';
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from '../constants';

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        fetching: true,
        error: null,
        data: null
      };
    case API_CALL_SUCCESS:
      return {
        fetching: false,
        error: null,
        data: action[action.apiType].data
      };
    case API_CALL_FAILURE:
      return {
        fetching: false,
        error: action[action.apiType].error,
        data: null
      };
    default:
      return state;
  }
};

export default apiReducer;
