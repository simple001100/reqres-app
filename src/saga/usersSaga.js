import { call, put, takeEvery } from '@redux-saga/core/effects';
import axios from 'axios';
import { FETCH_USERS } from '../store/usersReducer';
import { setUsers } from '../store/usersReducer';

const fetchUsersFromApi = () => axios.get('https://reqres.in/api/users/');

function* fetchUsersWorker() {
    const data = yield call(fetchUsersFromApi);
    const json = yield data.json();
    yield put(setUsers(json.data));
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsersWorker);
}