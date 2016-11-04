/**
 * Created by gongy on 4/11/16.
 */
import account from './account';
import search from './search';
import urlList from './url-list';

export function action (type, data = {}) {
  return { type, ...data };
}

export default {
  ...account,
  ...search,
  ...urlList,
}
