import { USER_DATA_UPDATE } from '../constants';

const userReducer = (state = {}, action) => {
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
