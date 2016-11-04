import 'whatwg-fetch';

const URL_BASE = `/api/v1/`;
const URL_ACCOUNT = `${URL_BASE}me/`;
const URL_URL_LIST = `${URL_BASE}url/`;

const baseOptions = {
  credentials: 'include',
  method: 'get',
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

async function getJson (url) {
  const response = await fetch(url, baseOptions);

  if (response.status > 500) {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  } else if (response.status > 400) {
    let resJson = await response.json();
    throw new Error(resJson.error);
  }
  return await response.json();
}

const fetchAccount = () => {
  return getJson(`${URL_ACCOUNT}`);
};

const fetchUrlList = () => {
  return getJson(`${URL_URL_LIST}`);
};

const Api = {
  fetchAccount,
  fetchUrlList,
};

export default Api;
