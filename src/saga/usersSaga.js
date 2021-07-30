import {call, put, takeEvery} from '@redux-saga/core/effects';
import {FETCH_USERS} from '../store/usersReducer';
import {setUsers} from '../store/usersReducer';
import {fetchUsersFromApi} from '../api/requests';
import {fetchUserDataApi} from '../api/requests';
import {GET_PROFILE} from '../store/profileReducer';
import {setProfileData} from '../store/profileReducer';

function* fetchUsersWorker({payload}) {
  const res = yield call(fetchUsersFromApi, payload.number);
  const {data} = res;
  yield put(setUsers(data));
}

function* fetchUserDataWorker({payload}) {
  try {
    const res = yield call(fetchUserDataApi, payload.number);
    const {data} = res;
    yield put(
      setProfileData({
        email: data.email,
        firstName: data.first_name,
        lastName: data.last_name,
        avatar: data.avatar,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
  yield takeEvery(GET_PROFILE, fetchUserDataWorker);
}
