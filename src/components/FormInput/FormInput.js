import './FormInput.css';

const FormInput = ({ label, name, type, placeholder, required, minLength, maxLength }) => (
  <>
    <label className="form-input__label" for={name}>
      {label}
    </label>

    <input
      className="form-input__input-text"
      name={name}
      type={type}
      // value={email}
      placeholder={placeholder}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      // onChange={handleEmailChange}
    />

    <span className="form-input__input-error form-input__input-error_hidden">
      Error
    </span>
  </>
);

export default FormInput;
