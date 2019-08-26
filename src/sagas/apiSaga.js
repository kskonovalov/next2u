import { takeLatest, call, put } from 'redux-saga/effects';

import fetchDataFromApi from '../services/api';
import { todosApiUrl, usersApiUrl } from '../config';

import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from '../constants';

function* apiWorkerSaga(apiUrl, apiType) {
  try {
    const response = yield call(fetchDataFromApi, apiUrl);
    const { data } = response;
    yield put({ type: API_CALL_SUCCESS, apiType, [apiType]: { data } });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, apiType, [apiType]: { error } });
  }
}

export function* todosWatcherSaga() {
  yield takeLatest(API_CALL_REQUEST, apiWorkerSaga, todosApiUrl, 'todos');
}
export function* usersWatcherSaga() {
  yield takeLatest(API_CALL_REQUEST, apiWorkerSaga, usersApiUrl, 'users');
}
