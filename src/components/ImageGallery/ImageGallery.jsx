import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyled } from './ImageGallery.styled';



const ImageGallery = ({images, onOpenModal}) => {

  return (
    <ImageGalleryStyled>
      {images.map(({id, webformatURL, largeImageURL, tags}) => {
        return (
            <ImageGalleryItem
            key={id}
            url={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
            onOpenModal={onOpenModal}
            />
        )
      })}
    </ImageGalleryStyled>
)}


ImageGallery.propTypes = {
  onOpenModal: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};


export default ImageGallery;


