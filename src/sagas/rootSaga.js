import { takeLatest, call, put } from 'redux-saga/effects';

import fetchDataFromApi from '../services/api';
import { tasksApiUrl } from '../config';

import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from '../constants';

function* workerSaga() {
  try {
    const response = yield call(fetchDataFromApi, tasksApiUrl);
    const todos = response.data;
    yield put({ type: API_CALL_SUCCESS, todos });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, error });
  }
}

export default function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}
