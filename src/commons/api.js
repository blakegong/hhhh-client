import 'whatwg-fetch';

const URL_BASE = `/api/v1/`;
const URL_ACCOUNT = `${URL_BASE}me/`;
const URL_URL_LIST = `${URL_BASE}url/`;
const URL_SEARCH = `${URL_BASE}search/urls/`

const baseOptions = {
  credentials: 'include',
  method: 'get',
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

async function process (response) {
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

async function getJson (url) {
  const response = await fetch(url, baseOptions);
  return await process(response);
}

async function postJson (url, data) {
  const options = {
    ...baseOptions,
    method: 'post',
    body: JSON.stringify(data)
  };
  const response = await fetch(url, options);
  return await process(response);
}

async function deleteReq (url) {
  const options = {
    ...baseOptions,
    method: 'delete'
  };
  const response = await fetch(url, options);
  return await process(response);
}

const fetchAccount = () => {
  return getJson(`${URL_ACCOUNT}`);
};

const fetchUrlList = () => {
  return getJson(`${URL_URL_LIST}`);
};

const createUrl = (url) => {
  return postJson(`${URL_URL_LIST}`, url);
};

const updateUrl = (url) => {
  return postJson(`${URL_URL_LIST}${url.old_slug}/`, url);
};

const deleteUrl = (url) => {
  return deleteReq(`${URL_URL_LIST}${url.slug}/`);
};

const fetchSearchResult = (query) => {
  return getJson(`${URL_SEARCH}?q=${query}`);
};

const Api = {
  fetchAccount,

  fetchUrlList,
  createUrl,
  updateUrl,
  deleteUrl,

  fetchSearchResult,
};

export default Api;
