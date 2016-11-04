/**
 * Created by gongy on 4/11/16.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import urlList from './url-list'

const reducer = combineReducers({
  urlList,
  routing: routerReducer
});

export default reducer;
