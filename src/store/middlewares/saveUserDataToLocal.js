import { USER_DATA_UPDATE } from '../constants';

const saveUserDataToLocal = store => next => action => {
  const result = next(action);
  if (action.type === USER_DATA_UPDATE) {
    window.__DATA__.user = result.user;
  }
  return result;
};

export default saveUserDataToLocal;
