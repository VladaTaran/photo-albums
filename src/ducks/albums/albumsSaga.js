import { call, all, put, takeLatest } from 'redux-saga/effects';

import api from 'services/api';
import {types} from './albumsActions';

const getAlbums = function*() {
    try {
        const response = yield call(api.albums.getAlbums);
        yield put({
            type: types.FETCH_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        console.error(error);
    }
};

const getPhotots = function*({payload}) {
    try {
        const response = yield call (api.albums.getPhotos, payload);
        yield put ({
            type: types.GET_PHOTOS_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        console.error(error)
    }
}
const masterSaga = function*() {
    yield takeLatest(types.FETCH, getAlbums);
    yield takeLatest(types.GET_PHOTOS, getPhotots);
};

const rootSaga = function*() {
    yield all([masterSaga()]);
};

export default rootSaga;