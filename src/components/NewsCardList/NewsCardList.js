import NewsCardSaved from '../NewsCardSaved/NewsCardSaved';
import './NewsCardList.css';

const NewsCardList = ({ articles, onArticleUnsave }) => (
  <section className="news-cards">
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
              link={link}
              imageUrl={image}
              onUnsave={onArticleUnsave}
            />
        </li>
      ))}
    </ul>
  </section>
);

export default NewsCardList;
