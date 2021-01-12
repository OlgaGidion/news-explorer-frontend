import React from 'react';
import NewsCardResult from '../NewsCardResult/NewsCardResult';
import ButtonSolid from '../ButtonSolid/ButtonSolid';
import SearchNotFound from '../SearchNotFound/SearchNotFound';
import './SearchResults.css';

const SearchResults = ({ articles }) => (
  <section className="search-results">
    {articles.length > 0 &&
      <>
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
          <ButtonSolid type="white" text="Показать еще" />
        </div>
      </>
    }

    {articles.length === 0 &&
      <SearchNotFound />
    }
  </section>
);

export default SearchResults;
