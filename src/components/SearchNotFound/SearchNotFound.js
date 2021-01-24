import searchNotFoundImage from '../../images/not-found.svg';
import './SearchNotFound.css';

const SearchNotFound = ({ title, text }) => (
  <div className="search-not-found">
    <img src={searchNotFoundImage} alt={title} />
    <h3 className="search-not-found__headline">{title}</h3>
    <p className="search-not-found__subline">{text}</p>
  </div>
);

export default SearchNotFound;
