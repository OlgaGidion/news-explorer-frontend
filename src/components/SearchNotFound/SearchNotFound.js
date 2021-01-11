import searchNotFoundImage from '../../images/not-found.svg';
import './SearchNotFound.css';

const SearchNotFound = () => (
  <div className="search-not-found">
    <img src={searchNotFoundImage} alt="Ничего не найдено" />
    <h3 className="search-not-found__headline">Ничего не найдено</h3>
    <p className="search-not-found__subline">К сожалению по вашему запросу ничего не найдено.</p>
  </div>
);

export default SearchNotFound;
