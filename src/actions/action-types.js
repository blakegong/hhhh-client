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
const FETCH_URL = createRequestTypes('FETCH_URL');
const UPDATE_URL = createRequestTypes('UPDATE_URL');
const DELETE_URL = createRequestTypes('DELETE_URL');

const ActionTypes = {
  FETCH_ACCOUNT,
  SIGN_OUT,

  FETCH_URL_LIST,
  CREATE_URL,
  FETCH_URL,
  UPDATE_URL,
  DELETE_URL,
};

export default ActionTypes;
