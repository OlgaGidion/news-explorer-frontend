import React from 'react';
import ButtonSolid from '../ButtonSolid/ButtonSolid';
import './SearchForm.css';

const SearchForm = ({ placeholder, buttonText }) => {
  const [text, setText] = React.useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form">
      <input className="form__input" placeholder={placeholder} value={text} onChange={handleInputChange} />
      <ButtonSolid type="blue" text={buttonText} />
    </form>
  );
};

export default SearchForm;
