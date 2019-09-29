import { call, all, put, takeLatest } from 'redux-saga/effects';

import api from 'services/api';
import {types} from './usersActions';

const getUsers = function*() {
    try {
        const response = yield call(api.users.getUsers);
        yield put({
            type: types.FETCH_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        console.error(error);
    }
};

const masterSaga = function*() {
    yield takeLatest(types.FETCH, getUsers);
};

const rootSaga = function*() {
    yield all([masterSaga()]);
};

export default rootSaga;