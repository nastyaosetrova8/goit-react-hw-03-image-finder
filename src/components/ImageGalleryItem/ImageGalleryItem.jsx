import PropTypes from 'prop-types';
import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, tags, url, largeImageURL, onOpenModal }) => {
  return (
    <ImageGalleryItemStyled>
      <img
        src={url}
        alt={tags}
        onClick={() => {
          onOpenModal({ id, tags, largeImageURL });
        }}
      />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string,
  url: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
