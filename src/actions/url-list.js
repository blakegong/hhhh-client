import { action } from './';
import ActionTypes from './action-types';

export default {
  fetchUrlList: {
    requested: () => action(ActionTypes.FETCH_URL_LIST.REQUESTED),
    succeeded: (urlList) => action(ActionTypes.FETCH_URL_LIST.SUCCEEDED, { urlList }),
    failed: (error) => action(ActionTypes.FETCH_URL_LIST.FAILED, { error })
  },

  createUrl: {
    requested: (url) => action(ActionTypes.CREATE_URL.REQUESTED, { url }),
    succeeded: (url) => action(ActionTypes.CREATE_URL.SUCCEEDED, { url }),
    failed: (error) => action(ActionTypes.CREATE_URL.FAILED, { error })
  },

  deleteUrl: {
    requested: (url) => action(ActionTypes.DELETE_URL.REQUESTED, { url }),
    succeeded: (url) => action(ActionTypes.DELETE_URL.SUCCEEDED, { url }),
    failed: (error) => action(ActionTypes.DELETE_URL.FAILED, { error })
  },

  updateUrl: {
    requested: (url) => action(ActionTypes.UPDATE_URL.REQUESTED, { url }),
    succeeded: (url) => action(ActionTypes.UPDATE_URL.SUCCEEDED, { url }),
    failed: (error) => action(ActionTypes.UPDATE_URL.FAILED, { error })
  }

  // fetchUrl: {
  //   requested: () => action(ActionTypes.FETCH_URL.REQUESTED),
  //   succeeded: (url) => action(ActionTypes.FETCH_URL.SUCCEEDED, { url }),
  //   failed: (error) => action(ActionTypes.FETCH_URL.FAILED, { error })
  // },
}
