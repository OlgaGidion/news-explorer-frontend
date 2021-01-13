import React from 'react';
import ButtonSolid from '../ButtonSolid/ButtonSolid';
import './SearchForm.css';

const SearchForm = ({ placeholder, buttonText, onSearch }) => {
  const [text, setText] = React.useState('');

  const search = () => {
    onSearch(text);
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleInputKeydown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const handleInputClick = (e) => {
    const inputElement = e.target;
    inputElement.focus();
    inputElement.select();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchButtonClick = () => {
    search();
  };

  return (
    <div className="search-form" onSubmit={handleFormSubmit}>
      <form className="search-form__form" noValidate>
        <input
          className="search-form__input"
          placeholder={placeholder}
          value={text}
          onInput={handleInput}
          onKeyDown={handleInputKeydown}
          onClick={handleInputClick}
          required />
      </form>
      <ButtonSolid type="blue" text={buttonText} onClick={handleSearchButtonClick} />
    </div>
  );
};

export default SearchForm;
