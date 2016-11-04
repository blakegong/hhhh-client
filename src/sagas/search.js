/**
 * Created by gongy on 5/11/16.
 */
import { takeLatest } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import Api from '../commons/api';
import Actions from '../actions';
import ActionTypes from '../actions/action-types';

function* fetchSearchResult ({ query }) {
  try {
    const list = yield call(Api.fetchSearchResult, query);
    const keywordList = list.map(c => c.title).filter(t => t !== null && t !== '');
    yield put(Actions.fetchSearchResult.succeeded(keywordList, list));
  } catch (error) {
    yield put(Actions.fetchSearchResult.failed(error));
  }
}

export default function* watchAccount () {
  yield fork(takeLatest, ActionTypes.FETCH_SEARCH_RESULT.REQUESTED, fetchSearchResult);
}
