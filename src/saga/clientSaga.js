import { call, put, takeEvery } from '@redux-saga/core/effects';
import { REGISTER_USER} from '../store/clientReducer';
import { registerUsersApi } from '../api/requests';

function* registerUsersWorker() {
    const res = yield call(registerUsersApi);
    const {data} = res;
}

export function* clientWatcher() {
    yield takeEvery(REGISTER_USER, registerUsersWorker);
}