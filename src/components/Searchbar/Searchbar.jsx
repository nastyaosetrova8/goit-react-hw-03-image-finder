import { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  SearchForm,
  SearchFormBtnlabel,
  SearchFormButton,
  SearchFormInput,
  SearchbarStyled,
} from './Searchbar.styled';


class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value.toLowerCase().trim() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return;
    }

    this.props.onFormSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            {' '}
            <AiOutlineSearch size={24} />
            <SearchFormBtnlabel>Search</SearchFormBtnlabel>
          </SearchFormButton>

          <SearchFormInput
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}


Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
