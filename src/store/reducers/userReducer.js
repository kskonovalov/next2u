import { initialState } from '../../config';
import { USER_DATA_UPDATE } from '../constants';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_UPDATE:
      return {
        ...state,
        ...action.user
      };
    default:
      return state;
  }
};

export default userReducer;
