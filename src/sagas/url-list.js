import { takeEvery, takeLatest } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
// import { push } from 'react-router-redux';
import Api from '../commons/api';
import Actions from '../actions'
import ActionTypes from '../actions/action-types';

function* fetchUrlList () {
  try {
    const urlList = yield call(Api.fetchUrlList);
    yield put(Actions.fetchUrlList.succeeded(urlList));
  } catch (error) {
    yield put(Actions.fetchUrlList.failed(error));
  }
}

function* createUrl ({ url }) {
  try {
    const resJson = yield call(Api.createUrl, url);
    yield put(Actions.createUrl.succeeded(resJson));
    yield put(Actions.fetchUrlList.requested());
  } catch (error) {
    yield put(Actions.createUrl.failed(error));
  }
}

function* updateUrl ({ url }) {
  try {
    const resJson = yield call(Api.updateUrl, url);
    yield put(Actions.updateUrl.succeeded(resJson));
    yield put(Actions.fetchUrlList.requested());
  } catch (error) {
    yield put(Actions.updateUrl.failed(error));
  }
}

function* deleteUrl ({ url }) {
  try {
    const resJson = yield call(Api.deleteUrl, url);
    yield put(Actions.deleteUrl.succeeded(resJson));
    yield put(Actions.fetchUrlList.requested());
  } catch (error) {
    yield put(Actions.deleteUrl.failed(error));
  }
}

export default function* watchUrlList () {
  yield fork(takeLatest, ActionTypes.FETCH_URL_LIST.REQUESTED, fetchUrlList);
  yield fork(takeEvery, ActionTypes.CREATE_URL.REQUESTED, createUrl);
  yield fork(takeEvery, ActionTypes.UPDATE_URL.REQUESTED, updateUrl);
  yield fork(takeEvery, ActionTypes.DELETE_URL.REQUESTED, deleteUrl);
}
