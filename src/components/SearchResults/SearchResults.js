import React from 'react';
import NewsCardResult from '../NewsCardResult/NewsCardResult';
import ButtonSolid from '../ButtonSolid/ButtonSolid';
import SearchNotFound from '../SearchNotFound/SearchNotFound';
import SearchPreloader from '../SearchPreloader/SearchPreloader';
import './SearchResults.css';

const SearchResults = ({ isSearching, articles, totalArticles, onShowMore }) => (
  <section className="search-results">
    {articles.length === 0 && !isSearching &&
      <SearchNotFound />
    }

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
        {articles.length < totalArticles && !isSearching &&
          <>
            <div className="search-results__spacer" />
            <div className="search-results__button-container">
              <ButtonSolid type="white" text="Показать еще" onClick={onShowMore} />
            </div>
          </>
        }
      </>
    }

    {articles.length > 0 && isSearching &&
      <div className="search-results__spacer" />
    }

    {isSearching &&
      <SearchPreloader />
    }
  </section>
);

export default SearchResults;
