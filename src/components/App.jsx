import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar';
import { fetchImages } from 'services/image-api';
import { imageMapper } from 'utils/mapper';
import Modal from './Modal';
import Button from './Button';

export default class App extends Component {
  state = {
    items: [],
    page: 1,
    searchParams: '',
    isLoading: false,
    showModal: false,
    largeImage: null,
  };

  componentDidUpdate(_, prevState) {
    const { searchParams, page, items } = this.state;

    if (prevState.searchParams !== searchParams || prevState.page !== page) {
      this.loadImages(searchParams, page);
    }

    if (prevState.items !== items && page !== 1) {
      window.scrollBy({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSearchSubmit = searchParams => {
    this.setState({ searchParams });
  };

  loadImages = async (searchParams, page) => {
    this.setState({ isLoading: true });

    try {
      const hits = await fetchImages(searchParams, page);

      if (!hits.length) {
        throw new Error();
      }

      this.setState({
        items: [...this.state.items, ...imageMapper(hits)],
      });
    } catch (error) {
      this.setState({});
    }
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
    const { items, largeImage, showModal } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImage} />
        )}
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={items} onClick={this.toggleModal} />
        {items.length > 0 && (
          <Button children="Load more" handleClick={this.loadMore} />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
