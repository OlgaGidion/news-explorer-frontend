import React from 'react';
import './SearchForm.css';

const SearchForm = ({ placeholder, buttonText }) => {
  const [text, setText] = React.useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form">
      <input className="form__input" placeholder={placeholder} value={text} onChange={handleInputChange} />
      <button className="button button-rounded button-rounded_type_solid-blue">{buttonText}</button>
    </form>
  );
};

export default SearchForm;
