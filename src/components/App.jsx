import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import { fetchImages } from 'services/image-api';
import { imageMapper } from 'utils/mapper';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Button from './Button';
import Loader from './Loader';
import { Box } from './Box';

export default class App extends Component {
  state = {
    items: [],
    page: 1,
    searchParams: '',
    isLoading: false,
    showModal: false,
    largeImage: null,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchParams, page } = this.state;
    const prevSearch = prevState.searchParams;

    if (prevSearch !== searchParams || prevState.page !== page) {
      this.loadImages(searchParams, page);
    }
  }

  loadImages = async (searchParams, page) => {
    this.setState({ isLoading: true });

    fetchImages(searchParams, page)
      .then(hits => {
        if (hits.length) {
          return this.setState({
            items: [...this.state.items, ...imageMapper(hits)],
          });
        }

        return Promise.reject(
          new Error(
            toast.error(
              `Sorry, there are no images with query "${searchParams}". Please try again.`
            )
          )
        );
      })

      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchSubmit = searchParams => {
    this.setState({ searchParams, page: 1, items: [] });
  };

  toggleModal = image => {
    this.setState(({ showModal, largeImage }) => ({
      showModal: !showModal,
      largeImage: image,
    }));
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { items, largeImage, showModal, isLoading } = this.state;

    return (
      <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridGap="16px"
        pb="24px"
        as="main"
      >
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImage} />
        )}

        <Searchbar onSubmit={this.handleSearchSubmit} />

        <ImageGallery images={items} onClick={this.toggleModal} />

        {isLoading && <Loader />}

        {items.length > 0 && (
          <Button children="Load more" handleClick={this.loadMore} />
        )}

        <ToastContainer autoClose={3000} />
      </Box>
    );
  }
}
