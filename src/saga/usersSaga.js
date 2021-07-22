import { call, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_USERS } from '../store/usersReducer';
import { setUsers } from '../store/usersReducer';
import { fetchUsersFromApi } from '../api/requests';

function* fetchUsersWorker(action) {
    const res = yield call(fetchUsersFromApi, action.payload.number);
    const {data} = res;
    yield put(setUsers(data));
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsersWorker);
}