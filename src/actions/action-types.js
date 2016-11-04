/**
 * Created by gongy on 4/11/16.
 */

function createRequestTypes (name) {
  return {
    REQUESTED: `${name}_REQUESTED`,
    SUCCEEDED: `${name}_SUCCEEDED`,
    FAILED: `${name}_FAILED`
  }
}

const FETCH_ACCOUNT = createRequestTypes('FETCH_ACCOUNT');
const SIGN_OUT = createRequestTypes('SIGN_OUT');

// Service related
const FETCH_URL_LIST = createRequestTypes('FETCH_URL_LIST');
const CREATE_URL = createRequestTypes('CREATE_URL');
const FETCH_URL_BY_ID = createRequestTypes('FETCH_URL_BY_ID');
const UPDATE_URL_BY_ID = createRequestTypes('UPDATE_URL_BY_ID');
const DELETE_URL_BY_ID = createRequestTypes('DELETE_URL_BY_ID');

const ActionTypes = {
  FETCH_ACCOUNT,
  SIGN_OUT,

  FETCH_URL_LIST,
  CREATE_URL,
  FETCH_URL_BY_ID,
  UPDATE_URL_BY_ID,
  DELETE_URL_BY_ID,
};

export default ActionTypes;
