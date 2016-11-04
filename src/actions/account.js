/**
 * Created by gongy on 4/11/16.
 */

import { action } from './';
import ActionTypes from './action-types';

export default {
  fetchAccount: {
    requested: () => action(ActionTypes.FETCH_ACCOUNT.REQUESTED),
    succeeded: (account) => action(ActionTypes.FETCH_ACCOUNT.SUCCEEDED, { account }),
    failed: (error) => action(ActionTypes.FETCH_ACCOUNT.FAILED, { error })
  }
}
