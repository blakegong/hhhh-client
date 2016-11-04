/**
 * Created by gongy on 4/11/16.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import account from './account';
import search from './search';
import urlList from './url-list';

const reducer = combineReducers({
  account,
  search,
  urlList,
  routing: routerReducer
});

export default reducer;
