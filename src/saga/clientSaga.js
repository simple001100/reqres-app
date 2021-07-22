import {call, put, takeEvery} from '@redux-saga/core/effects';
import {REGISTER_USER} from '../store/clientReducer';
import {registerUserApi} from '../api/requests';
import {setUser} from '../store/clientReducer';

function* registerUserWorker(action) {
  const res = yield call(registerUserApi, action.payload);
  yield put(setUser(res.error));
}

export function* clientWatcher() {
  yield take(REGISTER_USER, registerUserWorker);
}
