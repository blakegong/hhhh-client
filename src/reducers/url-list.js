/**
 * Created by gongy on 4/11/16.
 */
import ActionTypes from '../actions/action-types'

const urlList = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_URL_LIST.SUCCEEDED:
      return action.urlList;

    // case ActionTypes.CREATE_URL.SUCCEEDED:
    //   return [...state, action.url];

    default:
      return state;
  }
};

export default urlList;
