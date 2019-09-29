import React, {Component} from 'react';
import { connect } from 'react-redux';
import Users from './users';
import { types } from 'ducks/users/usersActions';
import { types as albumsTypes } from 'ducks/albums/albumsActions';
import { getUsersList } from 'ducks/users/usersSelectors';
import { getAlbumsList, getPhotosList } from 'ducks/albums/albumsSelectors';


class Main extends Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.getAlbums();
    }
    render(){
        const { users, allAlbums, getPhotos, photos } = this.props;
        return (
            <div>
                <Users users={users} allAlbums={allAlbums} getPhotos={getPhotos} photos={photos} />
            </div>
        )
    }
};
const MSTP = state => {
    return {
        users: getUsersList(state),
        allAlbums: getAlbumsList(state),
        photos: getPhotosList(state)
    }
}
const MDTP = dispatch => {
    return {
        getUsers: () => dispatch({ type: types.FETCH }),
        getAlbums: () => dispatch({ type: albumsTypes.FETCH }),
        getPhotos: payload => dispatch({ type: albumsTypes.GET_PHOTOS, payload})
    }
} 
export default connect(MSTP,MDTP)(Main);

