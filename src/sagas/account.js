/**
 * Created by gongy on 4/11/16.
 */
import { takeLatest } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import Api from '../commons/api';
import Actions from '../actions';
import ActionTypes from '../actions/action-types';

function* fetchAccount () {
  try {
    const account = yield call(Api.fetchAccount);
    yield put(Actions.fetchAccount.succeeded(account));
  } catch (error) {
    yield put(Actions.fetchAccount.failed(error));
  }
}

export default function* watchAccount () {
  yield fork(takeLatest, ActionTypes.FETCH_ACCOUNT.REQUESTED, fetchAccount);
}
