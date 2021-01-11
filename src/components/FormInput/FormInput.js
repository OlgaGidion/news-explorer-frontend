import React from 'react';
import './FormInput.css';

const FormInput = ({ text, label, name, type, placeholder, required, minLength, maxLength, onTextChange }) => {
  const [error, setError] = React.useState(null);
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (!text || inputRef.current.validity.valid) {
      setError(null);
    } else {
      setError(inputRef.current.validationMessage);
    }
  }, [text]);

  const handleLabelClick = () => {
    inputRef.current.focus();
    inputRef.current.select();
  };

  const handleInput = (e) => {
    const { value } = e.target;
    onTextChange(value);
  };

  const handleInputClick = (e) => {
    const inputElement = e.target;
    inputElement.focus();
    inputElement.select();
  };

  return (
    <>
      <label className="form-input__label" onClick={handleLabelClick}>
        {label}
      </label>

      <input
        className="form-input__input-text"
        ref={inputRef}
        name={name}
        type={type}
        value={text}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onInput={handleInput}
        onClick={handleInputClick} />

      {error && <span className="form-input__input-error">
        {error}
      </span>
      }
    </>
  );
};

export default FormInput;
