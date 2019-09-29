import { all } from 'redux-saga/effects';
import users from './users/usersSaga';
import albums from './albums/albumsSaga';

const rootSaga = function*() {
    yield all([
        users(),
        albums()
    ]);
  };
  export default rootSaga;
  