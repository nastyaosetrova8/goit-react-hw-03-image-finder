import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledModal, StyledOverlay } from './Modal.styled';


export default class Modal extends Component {
  
handleKeyDown = e => {
    if (e.code === 'Escape') {
this.props.onCloseModal();
    }
}

handleClickOverlay = e => {
    if(e.target === e.currentTarget) {
        this.props.onCloseModal();
    }
}

 componentDidMount(){
window.addEventListener('keydown', this.handleKeyDown);
 } 

 componentWillUnmount(){
window.removeEventListener('keydown', this.handleKeyDown);
 }
  
    render() {
    return (
      <StyledOverlay onClick={this.handleClickOverlay}>
        <StyledModal>
            <img src={this.props.modalData.largeImageURL} alt={this.props.modalData.tags}/>
        </StyledModal>
      </StyledOverlay>
    )
  }
}


Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  modalData: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
}
