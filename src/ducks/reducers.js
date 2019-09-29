import { combineReducers } from 'redux';
import usersList from './users/usersReducers';
import albums from './albums/albumsReducers';

const appReducer = () =>
  combineReducers({
    usersList,
    albums
  });
export default appReducer;
