import { takeEvery, call, put } from 'redux-saga/effects';

import fetchDataFromApi from '../services/api';
import { apiUrls } from '../config';
import { updateQueryStringParameter } from '../helpers';

import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from '../constants';

function* apiWorkerSaga(action) {
  const { userId, apiType } = action;
  if(typeof(apiUrls[apiType]) !== 'undefined') {
    try {
      let updatedApiUrl = apiUrls[apiType];
      if (userId) {
        updatedApiUrl = updateQueryStringParameter(
          updatedApiUrl,
          'userId',
          userId
        );
      }
      const response = yield call(fetchDataFromApi, updatedApiUrl);
      const {data} = response;
      yield put({type: API_CALL_SUCCESS, apiType, [apiType]: {data}});
    } catch (error) {
      yield put({type: API_CALL_FAILURE, apiType, [apiType]: {error}});
    }
  }
}

export default function* apiWatcherSaga() {
  yield takeEvery(API_CALL_REQUEST, apiWorkerSaga);
}