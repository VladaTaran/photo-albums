import { combineReducers } from 'redux';
import { types } from './albumsActions'; 


function albumsList (state = [], action) {
    switch (action.type) {
        case types.FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

function photosList (state = [], action) {
    switch (action.type) {
        case types.GET_PHOTOS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

    export default combineReducers({
        albumsList,
        photosList
    });