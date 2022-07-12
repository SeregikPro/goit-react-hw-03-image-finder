import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <GalleryItem onClick={() => onClick(largeImageURL)}>
      <GalleryImage src={webformatURL} alt="image" />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propsTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
