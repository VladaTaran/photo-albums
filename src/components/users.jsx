import React, {Component} from 'react';
import styled from 'styled-components';
import Modal from 'react-responsive-modal';
import Albums from './albums';

const modalStyles = {
    overlay: {
        background: 'none'
    },
    modal: {
        boxShadow: "none", 
        border: '1px solid #cccccc',
        borderRadius: '6px',
        maxWidth: '500px',
        width: '100%',
        height: '100%',
        maxHeight: '600px',
    },
    closeButton: {
        outline: 'none',
        cursor: 'pointer'
    }
}

class Users extends Component {
    state = {
        modalIsOpen: false,
        id: null,
    }
    openModal = (id) => { 
        this.setState({modalIsOpen: true, id})
    }
    closeModal = () => {
        this.setState({modalIsOpen: false})
    }

    render() {
        const { users, allAlbums, getPhotos,photos } = this.props;
        const { id } = this.state;
        const renderCard = users.map(user => {
            const album = allAlbums.find(album=>user.id === album.userId);
            const albumTitle = album && album.title.charAt(0).toUpperCase() + album.title.slice(1);
            return (
                <UserBox key={user.id}>
                    <Album>
                        {album && <Title>{albumTitle}</Title>}
                    </Album>
                    <ButtonBox>
                        <Button 
                            type="button" 
                            value={user.id} 
                            onClick={() => this.openModal(album.id)}
                        >
                            View
                        </Button>
                            <Modal
                                open={this.state.modalIsOpen}
                                onClose={this.closeModal}
                                center
                                styles={modalStyles}
                            >
                                <Albums albums={allAlbums} id={id} getPhotos={getPhotos} photos={photos}/>
                            </Modal>
                        <UserName>{user.name}</UserName>
                    </ButtonBox>
                </UserBox>
            )
        })

        return(
            <div>
                <MainTitle>Albums</MainTitle>
                <Box>
                    {renderCard}
                </Box>
            </div>
        )
    }
};

export default Users;

const Box = styled.div`
    font-family: 'Roboto';
    font-weight: 300;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const MainTitle = styled.h1`
    font-family: Roboto;
    font-weight: 300;
`;
const UserBox = styled.div`
    box-sizing: border-box;
    width: 300px;
    height: 270px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    margin: 20px 20px 0 0;
`;
const Title=styled.span`
    overflow: hidden
    color: white;
`;
const Album = styled.div`
    display: flex;
    justify-content: center;
    background-color: #323232bd;
    width: 100%;
    border-radius: 4px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    align-items: center;
    height: 200px;
`;
const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
`;
const Button = styled.button`
    width: 70px;
    height: 30px;
    border: 1px solid grey;
    background: none;
    border-radius: 4px;
    color: black;
    outline: none;
    cursor: pointer;
    &:hover {
        border: 1px solid #1675bc;
        color: #1675bc;
    }
`;
const UserName = styled.span`
    text-align: center;
`;