import { action } from './';
import ActionTypes from './action-types';

export default {
    fetchUrlList: {
        requested: () => action(ActionTypes.FETCH_URL_LIST.REQUESTED),
        succeeded: (urlList) => action(ActionTypes.FETCH_URL_LIST.SUCCEEDED, { urlList }),
        failed: (error) => action(ActionTypes.FETCH_URL_LIST.FAILED, { error })
    }
}
