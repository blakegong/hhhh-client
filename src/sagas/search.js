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
    const urlList = yield call(Api.fetchSearchResult, query);
    const fulltextList = yield call(Api.fetchFulltextResult, query);
    const keywordList = urlList.map(c => c.slug).filter(t => t !== null && t !== '' && t.indexOf(query) >= 0);
    const list = urlList.concat(fulltextList);
    yield put(Actions.fetchSearchResult.succeeded(keywordList, list));
  } catch (error) {
    yield put(Actions.fetchSearchResult.failed(error));
  }
}

export default function* watchAccount () {
  yield fork(takeLatest, ActionTypes.FETCH_SEARCH_RESULT.REQUESTED, fetchSearchResult);
}
