import React, { Component } from 'react';
import styled from 'styled-components';

class Albums extends Component {
  state =  {
    currentPage: 1,
    cardsPerPage: 6,
    isPrevBtnActive: false,
    isNextBtnActive: true,
  }
  
  componentDidMount() {
    this.props.getPhotos({id: this.props.id})
  }

  changePage = i => {
    this.setState({ currentPage: i});
  }
  firstPage = () => {
    this.setState({ currentPage: 1});
  }

  prevPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1});
  }

  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  lastPage = (e, totalPages) => {
    e.preventDefault();
    this.setState({currentPage: totalPages});
  }

  render() {
    let { 
      currentPage, 
      cardsPerPage, 
      isPrevBtnActive, 
      isNextBtnActive, 
    } = this.state;
  
    const { photos } = this.props;

    //Pagination logic
    const totalPages = photos && Math.ceil(photos.length / cardsPerPage);
    const lowerPageNumber = Math.min(Math.max(currentPage - 2, 1), totalPages);
    const upperPageNumber = Math.min(Math.max(currentPage + 2, 3),totalPages);
  
    const range = [];
    for(let i = lowerPageNumber; i<= upperPageNumber; i++) {
      range.push(i);
    }

    isPrevBtnActive = currentPage > 1;
    isNextBtnActive = currentPage < totalPages;

    const indexofLastPhoto = currentPage * cardsPerPage;
    const indexOfFirstPhoto = indexofLastPhoto - cardsPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexofLastPhoto);
    
    const renderPhotos = currentPhotos.map(photo => (
      <PhotoBox key={photo.id}>
        <img src={photo.thumbnailUrl} alt="gallery"/>
      </PhotoBox>
    ))
    return(
      <Box>
        <Photos>
          {renderPhotos}
        </Photos>
        <PaginationBox>
          <Button
            onClick = {this.firstPage}
            disabled={!isPrevBtnActive}
          >
            First
          </Button>
          <Button
            onClick = {this.prevPage}
            disabled={!isPrevBtnActive}
          >
            Prev
          </Button>
          {range.map(i => ( 
            <Button
              currentPage={currentPage}
              index={i}
              isActive={currentPage===i}
              key={i+'1erj'}
              onClick={() => this.changePage(i)}
            >
              {i}
            </Button>
          ))}
          <Button
            onClick={this.nextPage}
            disabled={!isNextBtnActive}
          >
            Next
          </Button>
          <Button
            onClick = {e => this.lastPage(e,totalPages)}
            disabled = {!isNextBtnActive}
          >
            Last
          </Button>
        </PaginationBox>
      </Box>
    )
  }
};

export default Albums;

const Box = styled.div`
  font-family: 'Roboto';
  font-weight: 300;
  margin: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 400px) {
    height: 800px;
  }
`;
const Photos= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const PhotoBox = styled.div`
  margin: 10px 10px 10px 0;
  width: 150px;
  height: 150px;
  color: white;
`;
const PaginationBox = styled.div`
  display: flex; 
  justify-content: center;
  flex: 0 0 auto;
  margin: 20px auto;
    @media (max-width: 700px) {
        max-width: 600px;
        display: grid;
        
      };
    @media (max-width: 400px) {
      max-width: 300px;
    }
`;
const Button = styled.button`
  border: ${prop => prop.isActive ? 'none' : '1px solid #cccccc'};
  cursor: pointer;
  color: ${prop => prop.isActive ? 'white' : '#1675bc'};
  background: ${prop=>prop.isActive ? '#1675bc' : 'white'};
  
  outline: none;
  &media (max-width: 700px): {
    width: 400px;
  };
  &media (max-width: 400px): {
    width: 300px;
    }
  },  
`;