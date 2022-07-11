import PropTypes from 'prop-types';
import {
  Header,
  Form,
  SearchButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form>
        <SearchButton type="submit" onSubmit={onSubmit}>
          <ButtonLabel>Search</ButtonLabel>
        </SearchButton>

        <Input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
