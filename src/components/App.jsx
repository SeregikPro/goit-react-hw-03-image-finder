import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar';

export default class App extends Component {
  state = {
    searchParams: '',
  };

  handleSearchSubmit = searchParams => {
    this.setState({ searchParams });
  };

  render() {
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
        <ImageGallery searchParams={this.state.searchParams} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
