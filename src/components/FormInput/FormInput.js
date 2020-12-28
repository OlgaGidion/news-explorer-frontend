import React from 'react';
import './FormInput.css';

const FormInput = ({ label, name, type, placeholder, required, minLength, maxLength, onChange }) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);
  const inputRef = React.useRef();

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
    onChange(text);

    if (inputRef.current.validity.valid) {
      setError(null);
    } else {
      setError(inputRef.current.validationMessage);
    }
  };

  return (
    <>
      <label className="form-input__label" htmlFor={name}>
        {label}
      </label>

      <input
        className="form-input__input-text"
        ref={inputRef}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleChange} />

      {error && <span className="form-input__input-error">
        {error}
      </span>
      }
    </>
  );
};

export default FormInput;
