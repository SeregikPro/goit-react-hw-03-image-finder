import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar';
import { fetchImages } from 'services/image-api';
import { imageMapper } from 'utils/mapper';

export default class App extends Component {
  state = {
    items: [],
    page: 1,
    searchParams: '',
    isLoading: false,
    showModal: false,
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={items} onClick={this.toggleModal} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
