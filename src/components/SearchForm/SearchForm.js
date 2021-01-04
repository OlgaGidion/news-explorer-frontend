import React from 'react';
import ButtonSolid from '../ButtonSolid/ButtonSolid';
import './SearchForm.css';

const SearchForm = ({ placeholder, buttonText }) => {
  const [text, setText] = React.useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="search-form">
      <form className="search-form__form">
        <input className="search-form__input" placeholder={placeholder} value={text} onChange={handleInputChange} />
      </form>
      <ButtonSolid type="blue" text={buttonText} />
    </div>
  );
};

export default SearchForm;
