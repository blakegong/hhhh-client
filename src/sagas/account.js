/**
 * Created by gongy on 4/11/16.
 */

import { takeEvery, takeLatest } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import Api from '../commons/api';
import Actions from '../actions'
import ActionTypes from '../actions/action-types';

function* fetchAccount () {
  try {
    const account = yield call(Api.fetchAccount);
    console.log('account')
    console.log(account)
    yield put(Actions.fetchAccount.succeeded(account));
  } catch (error) {
    console.log('error')
    console.log(error)
    yield put(Actions.fetchAccount.failed(error));
  }
}

export default function* watchAccount () {
  yield fork(takeEvery, ActionTypes.FETCH_ACCOUNT.REQUESTED, fetchAccount);
}
