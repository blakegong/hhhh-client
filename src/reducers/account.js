/**
 * Created by gongy on 4/11/16.
 */
import ActionTypes from '../actions/action-types'

const account = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ACCOUNT.SUCCEEDED:
      return action.account;

    default:
      return state;
  }
};

export default account;
