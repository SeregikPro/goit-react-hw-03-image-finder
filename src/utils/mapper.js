export const imageMapper = imageList => {
  return imageList.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
};
