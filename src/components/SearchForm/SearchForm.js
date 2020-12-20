import './SearchForm.css';

const SearchForm = ({ placeholder, buttonText }) => (
  <form className="form">
    <input className="form__input" placeholder={placeholder} />
    <button className="button button-rounded button-rounded_type_solid-blue">{buttonText}</button>
  </form>
);

export default SearchForm;
