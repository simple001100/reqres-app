import {call, put, takeEvery, select} from '@redux-saga/core/effects';
import {FETCH_USERS} from '../store/usersReducer';
import {setUsers} from '../store/usersReducer';
import {fetchUsersFromApi} from '../api/requests';
import {fetchUserDataApi} from '../api/requests';
import {GET_PROFILE} from '../store/profileReducer';
import {setProfileData} from '../store/profileReducer';

function* fetchUsersWorker({payload}) {
  const res = yield call(fetchUsersFromApi, payload.number);
  const {data, total_pages} = res;
  yield put(setUsers({data, total_pages}));
}

function* fetchUserDataWorker() {
  try {
  let state = yield select(state => state.signinReducer);
  const {id} = state;
  const res = yield call(fetchUserDataApi, id);
  const {data} = res;
  yield put(
    setProfileData({
      email: data.data.email,
      firstName: data.data.first_name,
      lastName: data.data.last_name,
      avatar: data.data.avatar,
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
