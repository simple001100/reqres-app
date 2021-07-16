import { userWatcher } from "./usersSaga";
import { all } from '@redux-saga/core/effects';

export function* rootWatcher() {
    yield all([userWatcher()])
}