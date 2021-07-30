import { userWatcher } from "./usersSaga";
import { clientWatcher } from "./clientSaga";
import { all } from '@redux-saga/core/effects';

export function* rootWatcher() {
    yield all([userWatcher(), clientWatcher()])
}