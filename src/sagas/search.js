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
    const list = urlList.concat(fulltextList);
    yield put(Actions.fetchSearchResult.succeeded([], list));
  } catch (error) {
    yield put(Actions.fetchSearchResult.failed(error));
  }
}


function* updateSearchKey ({ searchKey }) {
  try {
    yield put(Actions.fetchSearchResult.requested(searchKey));
    yield put(Actions.updateSearchKey.succeeded(searchKey));
  } catch (error) {
    yield put(Actions.updateSearchKey.failed(error));
  }
}


export default function* watchAccount () {
  yield fork(takeLatest, ActionTypes.FETCH_SEARCH_RESULT.REQUESTED, fetchSearchResult);
  yield fork(takeLatest, ActionTypes.UPDATE_SEARCH_KEY.REQUESTED, updateSearchKey);
}
