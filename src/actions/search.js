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
  }
}
