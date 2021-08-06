import {call, put, takeEvery, select} from '@redux-saga/core/effects';

import {fetchUsersFromApi} from '../api/requests';
import {fetchUserDataApi} from '../api/requests';
import {changehUserDataApi} from '../api/requests';

import {FETCH_USERS} from '../store/usersReducer';
import {GET_PROFILE} from '../store/profileReducer';
import {CHANGE_PERSONAL_DATA} from '../store/profileReducer';

import {setLoading} from '../store/usersReducer';
import {setUsers} from '../store/usersReducer';
import {setProfileData} from '../store/profileReducer';

function* fetchUsersWorker({payload}) {
  try {
    const number = payload.number;
    const totalPages = yield select(state => state.usersReducer.totalPages);
    if (number <= totalPages) {
      yield put(setLoading());
      const res = yield call(fetchUsersFromApi, number);
      const {data} = res;
      yield put(setUsers({data: data.data, totalPages: data.total_pages}));
      
    }
  } catch (e) {
    console.log(e);
  }
}

function* fetchUserDataWorker() {
  try {
    let state = yield select(state => state.profileReducer);
    const {id} = state;
    const res = yield call(fetchUserDataApi, id);
    const {data} = res;
    yield put(
      setProfileData({
        email: data.data.email,
        firstName: data.data.first_name,
        lastName: data.data.last_name,
        avatar: data.data.avatar,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

function* changeUserDataWorker({payload}) {
  try {
    const {firstName, lastName} = payload;
    let state = yield select(state => state.profileReducer);
    const {id} = state;
    const res = yield call(changehUserDataApi, id, firstName, lastName);
    const {data} = res;
    yield put(
      setProfileData({
        firstName: data.first_name,
        lastName: data.last_name,
        updatedAt: data.updatedAt,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
  yield takeEvery(GET_PROFILE, fetchUserDataWorker);
  yield takeEvery(CHANGE_PERSONAL_DATA, changeUserDataWorker);
}
