import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  openLargeImage,
}) => {
  return (
    <GalleryItem onClick={() => openLargeImage(largeImageURL)}>
      <GalleryImage src={webformatURL} alt="image" />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propsTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openLargeImage: PropTypes.func.isRequired,
};
