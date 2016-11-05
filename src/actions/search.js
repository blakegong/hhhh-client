/**
 * Created by gongy on 5/11/16.
 */

import { action } from './';
import ActionTypes from './action-types';

export default {
  fetchSearchResult: {
    requested: (query) => action(ActionTypes.FETCH_SEARCH_RESULT.REQUESTED, { query }),
    succeeded: (keywordList, resultList) => action(ActionTypes.FETCH_SEARCH_RESULT.SUCCEEDED, {
      keywordList,
      resultList
    }),
    failed: (error) => action(ActionTypes.FETCH_SEARCH_RESULT.FAILED, { error })
  },

  updateSearchKey: {
    requested: (searchKey) => action(ActionTypes.UPDATE_SEARCH_KEY.REQUESTED, {searchKey}),
    succeeded: (searchKey) => action(ActionTypes.UPDATE_SEARCH_KEY.SUCCEEDED, {searchKey}),
    failed: (error) => action(ActionTypes.UPDATE_SEARCH_KEY.FAILED, { error })
  },
}
