/**
 * Created by gongy on 4/11/16.
 */

import { fork } from 'redux-saga/effects';
import accountWatcher from './account'

export default function* () {
  yield* [
    fork(accountWatcher),
  ]
}
