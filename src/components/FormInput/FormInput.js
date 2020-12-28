import React from 'react';
import './FormInput.css';

const FormInput = ({ label, name, type, placeholder, required, minLength, maxLength }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
  };

  return (
    <>
      <label className="form-input__label" htmlFor={name}>
        {label}
      </label>

      <input
        className="form-input__input-text"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleChange} />

      <span className="form-input__input-error form-input__input-error_hidden">
        Error
      </span>
    </>
  );
};

export default FormInput;
