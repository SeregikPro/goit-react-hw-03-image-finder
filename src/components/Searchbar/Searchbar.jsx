import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { Header, Form, SearchButton, Input } from './Searchbar.styled';

class Searchbar extends Component {
  static propsTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchParams: '',
  };

  handleSearchChange = event => {
    this.setState({ searchParams: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchParams.trim() === '') {
      return toast.error('Input search query');
    }

    this.props.onSubmit(this.state.searchParams);
    this.setState({ searchParams: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <ImSearch size="20" />
          </SearchButton>

          <Input
            type="text"
            name="searchParams"
            value={this.state.searchParams}
            onChange={this.handleSearchChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
