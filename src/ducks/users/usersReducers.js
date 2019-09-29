import { types } from './usersActions'; 

function usersList (state = [], action) {
    switch (action.type) {
        case types.FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
export default usersList;