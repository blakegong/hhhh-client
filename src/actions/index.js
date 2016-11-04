/**
 * Created by gongy on 4/11/16.
 */

import account from './account'

export function action (type, data = {}) {
  return { type, ...data };
}

export default {
  ...account,
}
