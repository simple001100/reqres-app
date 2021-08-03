import {call, put, takeEvery, spawn} from '@redux-saga/core/effects';
import {registerUserApi} from '../api/requests';
import {signinUserApi} from '../api/requests';
import {SIGNIN_USER} from '../store/client/signinReducer';
import {setToken} from '../store/client/signupReducer';
import {SIGNUP_USER} from '../store/client/signupReducer';
import {setTokenId} from '../store/client/signinReducer';
import {getProfile} from '../store/profileReducer';
import {signInError} from '../store/client/signinReducer';
import { signUpError } from '../store/client/signupReducer';

function* signinUserWorker({payload}) {
  try {
    const res = yield call(signinUserApi, payload);
    const {data} = res;
    yield put(setTokenId({token: data.token}));
    yield put(getProfile({id: data.id}));
  } catch (e) {
    yield put(signInError({error: 'Please, check your email or password'}));
  }
}

function* registerUserWorker({payload}) {
  try {
    const res = yield call(registerUserApi, payload);
    const {data} = res;
    yield put(setToken({token: data.token}));
  } catch (e) {
    yield put(signUpError({error: 'Please, check your email'}));
  }
}

export function* clientWatcher() {
  yield takeEvery(SIGNIN_USER, signinUserWorker);
  yield takeEvery(SIGNUP_USER, registerUserWorker);
}
