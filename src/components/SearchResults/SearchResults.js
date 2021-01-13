import React from 'react';
import NewsCardResult from '../NewsCardResult/NewsCardResult';
import ButtonSolid from '../ButtonSolid/ButtonSolid';
import SearchNotFound from '../SearchNotFound/SearchNotFound';
import SearchPreloader from '../SearchPreloader/SearchPreloader';
import './SearchResults.css';

const SearchResults = ({ isSearching, articles, onShowMore }) => {
  if (isSearching) {
    return (
      <section className="search-results">
        <SearchPreloader />
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="search-results">
        <SearchNotFound />
      </section>
    );
  }

  return (
    <section className="search-results">
      <h2 className="search-results__headline">Результаты поиска</h2>
      <ul className="search-results__list">
        {articles.map(({ title, description, url, urlToImage, publishedAt, source }) => (
          <li key={url} className="search-results__item">
            <NewsCardResult
                headline={title}
                text={description}
                source={source.name}
                date={publishedAt}
                imageUrl={urlToImage}
              />
          </li>
        ))}
      </ul>
      <div className="search-results__button-container">
        <ButtonSolid type="white" text="Показать еще" onClick={onShowMore} />
      </div>
    </section>
  );
};

export default SearchResults;
