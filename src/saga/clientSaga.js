import {call, put, take, spawn} from '@redux-saga/core/effects';
import {SET_TOGLE_REGISTRATION} from '../store/clientReducer';
import {registerUserApi} from '../api/requests';
import {setTogleRegistration, setTogleSignIn} from '../store/clientReducer';

function* registerUserWorker(action) {
  const res = yield call(registerUserApi, action.payload);
  yield put(setTogleRegistration(true));
}

function* signinUserWorker(action) {
  const res = yield call(signinUserApi, action.payload);
  yield put(setTogleSignIn(true));
}

export function* clientWatcher() {
  yield take(SET_TOGLE_SIGNIN, signinUserWorker);
  yield take(SET_TOGLE_REGISTRATION, registerUserWorker);
}
