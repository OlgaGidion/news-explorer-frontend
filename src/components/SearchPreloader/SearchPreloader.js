import preloader from '../../images/preloader.png';
import './SearchPreloader.css';

const SearchPreloader = () => (
  <div className="search-preloader">
    <img className="search-preloader__image" src={preloader} alt="Подождите" />
    <p className="search-preloader__subline">Идет поиск новостей...</p>
  </div>
);

export default SearchPreloader;
