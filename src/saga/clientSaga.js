import {call, put, takeEvery} from '@redux-saga/core/effects';

import {registerUserApi} from '../api/requests';
import {signinUserApi} from '../api/requests';

import {SIGNIN_USER} from '../store/client/signinReducer';
import {SIGNUP_USER} from '../store/client/signupReducer';

import {setToken} from '../store/client/signupReducer';
import {setTokenId} from '../store/client/signinReducer';
import {getId} from '../store/profileReducer';
import {signInError} from '../store/client/signinReducer';
import {signUpError} from '../store/client/signupReducer';

function* signinUserWorker({payload}) {
  try {
    const res = yield call(signinUserApi, payload);
    const {data} = res;
    yield put(setTokenId({token: data.token, id: data.id}));
    yield put(getId({id: data.id}));
    yield put(setToken({signup: false, token: null}));
  } catch (e) {
    yield put(signInError({error: 'Please, check your email or password'}));
  }
}

function* registerUserWorker({payload}) {
  try {
    const res = yield call(registerUserApi, payload);
    const {data} = res;
    yield put(setToken({signup: true, token: data.token}));
  } catch (e) {
    yield put(signUpError({error: 'Please, check your email'}));
  }
}

export function* clientWatcher() {
  yield takeEvery(SIGNIN_USER, signinUserWorker);
  yield takeEvery(SIGNUP_USER, registerUserWorker);
}
