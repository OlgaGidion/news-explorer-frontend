import NewsCardSaved from '../NewsCardSaved/NewsCardSaved';
import SearchNotFound from '../SearchNotFound/SearchNotFound';
import './NewsCardList.css';

const NewsCardList = ({ articles, onArticleUnsave }) => (
  <section className="news-cards">
    {articles.length === 0 &&
      <SearchNotFound
        title="У Вас нет сохраненных статей"
        text="Перейдите на главную страницу, чтобы сохнить статьи." />
    }
    {articles.length !== 0 &&
      <ul className="news-cards__list">
        {articles.map(({ _id, title, description, link, image, date, source, keyword }) => (
          <li key={_id} className="news-cards__item">
            <NewsCardSaved
                id={_id}
                title={title}
                description={description}
                category={keyword}
                source={source}
                date={date}
                url={link}
                imageUrl={image}
                onUnsave={onArticleUnsave}
              />
          </li>
        ))}
      </ul>
    }
  </section>
);

export default NewsCardList;
