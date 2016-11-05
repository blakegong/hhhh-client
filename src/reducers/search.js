/**
 * Created by gongy on 5/11/16.
 */

import { combineReducers } from 'redux';
import ActionTypes from '../actions/action-types'

const keywordList = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SEARCH_RESULT.SUCCEEDED:
      return action.keywordList;

    default:
      return state;
  }
};

const resultList = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SEARCH_RESULT.SUCCEEDED:
      return action.resultList;

    // case ActionTypes.CREATE_URL.SUCCEEDED:
    //   return [...state, action.url];

    default:
      return state;
  }
};

const searchKey = (state = "", action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SEARCH_KEY.SUCCEEDED:
      return action.searchKey;
    default:
      return state;
  }
};

export default combineReducers({
  keywordList,
  resultList,
  searchKey,
});
