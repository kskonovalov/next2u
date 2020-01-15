import { takeEvery, call, put } from 'redux-saga/effects';

import fetchDataFromApi from '../../services/api';
import { apiUrls } from '../../config';
import { updateQueryStringParameter } from '../../helpers';

import {
  TASKS_API_CALL_REQUEST,
  TASKS_API_CALL_SUCCESS,
  TASKS_API_CALL_FAILURE,
  USERS_API_CALL_REQUEST,
  USERS_API_CALL_SUCCESS,
  USERS_API_CALL_FAILURE
} from '../constants';

function* apiWorkerSaga(action) {
  const { userId, apiType } = action;
  if (typeof apiUrls[apiType] !== 'undefined') {
    try {
      let updatedApiUrl = apiUrls[apiType];

      // add user id as param if need
      if (userId) {
        updatedApiUrl = updateQueryStringParameter(
          updatedApiUrl,
          'userId',
          userId
        );
      }

      const response = yield call(fetchDataFromApi, updatedApiUrl);
      const { data } = response;
      switch (apiType) {
        case 'tasks':
          yield put({ type: TASKS_API_CALL_SUCCESS, apiType, [apiType]: { data } });
          break;
        case 'users':
          yield put({ type: USERS_API_CALL_SUCCESS, apiType, [apiType]: { data } });
          break;
        default:
          break;
      }
    } catch (error) {
      switch (apiType) {
        case 'tasks':
          yield put({ type: USERS_API_CALL_FAILURE, apiType, [apiType]: { error } });
          break;
        case 'users':
          yield put({ type: USERS_API_CALL_FAILURE, apiType, [apiType]: { error } });
          break;
        default:
          break;
      }
    }
  }
}

export default function* apiWatcherSaga() {
  yield takeEvery(
    [TASKS_API_CALL_REQUEST, USERS_API_CALL_REQUEST],
    apiWorkerSaga
  );
}
