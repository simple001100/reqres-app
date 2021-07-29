import {call, put, takeEvery, spawn} from '@redux-saga/core/effects';
import {registerUserApi} from '../api/requests';
import {SIGNIN_USER} from '../store/clientReducer';
import {setToken} from '../store/clientReducer';
import {signinUserApi} from '../api/requests';

function* registerUserWorker(action) {
  const res = yield call(registerUserApi, action.payload);
  yield put(setTogleRegistration(true));
}

function* signinUserWorker({payload}) {
  try {
    const res = yield call(signinUserApi, payload);
    const {data} = res;
    yield put(setToken(data.token));
  } catch (e) {
    console.log(e);
  }
}

export function* clientWatcher() {
  yield takeEvery(SIGNIN_USER, signinUserWorker);
}
