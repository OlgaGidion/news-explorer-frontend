import React from 'react';
import NewsCardResult from '../NewsCardResult/NewsCardResult';
import ButtonSolid from '../ButtonSolid/ButtonSolid';
import SearchNotFound from '../SearchNotFound/SearchNotFound';
import SearchPreloader from '../SearchPreloader/SearchPreloader';
import './SearchResults.css';

const SearchResults = ({ isSearching, keyword, articles, totalArticles, savedArticles, onShowMore, onArticleSave, onArticleUnsave }) => (
  <section className="search-results">
    {articles.length === 0 && !isSearching &&
      <SearchNotFound
        title="Ничего не найдено"
        text="К сожалению по вашему запросу ничего не найдено." />
    }

    {articles.length > 0 &&
      <>
        <h2 className="search-results__headline">Результаты поиска</h2>
        <ul className="search-results__list">
          {articles.map(({ title, description, url, urlToImage, publishedAt, source }) => {
            const savedArticle = savedArticles.find((article) => article.link === url);

            return (
              <li key={url} className="search-results__item">
                <NewsCardResult
                    id={savedArticle ? savedArticle._id : null}
                    title={title}
                    description={description}
                    category={keyword}
                    source={source.name}
                    date={publishedAt}
                    url={url}
                    imageUrl={urlToImage}
                    isSaved={savedArticle !== undefined}
                    onSave={onArticleSave}
                    onUnsave={onArticleUnsave}
                  />
              </li>
            );
          })}
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
