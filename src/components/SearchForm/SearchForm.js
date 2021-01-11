import React from 'react';
import ButtonSolid from '../ButtonSolid/ButtonSolid';
import './SearchForm.css';

const SearchForm = ({ placeholder, buttonText }) => {
  const [text, setText] = React.useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleInputClick = (e) => {
    const inputElement = e.target;
    inputElement.focus();
    inputElement.select();
  };

  return (
    <div className="search-form">
      <form className="search-form__form">
        <input
          className="search-form__input"
          placeholder={placeholder}
          value={text}
          onInput={handleInput}
          onClick={handleInputClick}
          required />
      </form>
      <ButtonSolid type="blue" text={buttonText} disabled={text.length === 0} />
    </div>
  );
};

export default SearchForm;
