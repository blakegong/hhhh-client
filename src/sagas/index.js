/**
 * Created by gongy on 4/11/16.
 */
import { fork } from 'redux-saga/effects';
import accountWatcher from './account';
import watchAccount from './account';
import watchSearch from './search';
import watchUrlList from './url-list';

export default function* () {
  yield* [
    fork(accountWatcher),
    fork(watchAccount),
    fork(watchSearch),
    fork(watchUrlList),
  ]
}
