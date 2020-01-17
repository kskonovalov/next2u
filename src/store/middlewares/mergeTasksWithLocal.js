import { TASKS_API_CALL_SUCCESS } from '../constants';
import { tasksUpdate } from '../actions';
import mergeArraysOfObjsById from '../../helpers/mergeArraysOfObjsById';

const mergeTasksWithLocal = store => next => action => {
  const result = next(action);
  if (action.type === TASKS_API_CALL_SUCCESS) {
    if (
      typeof window.__DATA__ !== 'undefined' &&
      typeof window.__DATA__.tasks !== 'undefined' &&
      Array.isArray(window.__DATA__.tasks)
    ) {
      const { tasks } = store.getState();
      const { data } = tasks;
      if (Array.isArray(data)) {
        const mergedTasks = mergeArraysOfObjsById(data, window.__DATA__.tasks);
        store.dispatch(tasksUpdate(mergedTasks));
      }
    }
  }
  return result;
};

export default mergeTasksWithLocal;
