import { call, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_USERS } from '../store/usersReducer';
import { setUsers } from '../store/usersReducer';
import { fetchUsersFromApi } from '../api/requests';

function* fetchUsersWorker() {
    const res = yield call(fetchUsersFromApi);
    const {data} = res;
    yield put(setUsers(data));
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsersWorker);
}