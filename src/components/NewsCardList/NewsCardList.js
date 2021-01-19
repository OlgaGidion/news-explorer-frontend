import NewsCardSaved from '../NewsCardSaved/NewsCardSaved';
import './NewsCardList.css';

const NewsCardList = ({ articles }) => (
  <section className="news-cards">
    <ul className="news-cards__list">
      {articles.map(({ title, description, link, image, date, source, keyword }) => (
        <li key={link} className="news-cards__item">
          <NewsCardSaved
              title={title}
              description={description}
              category={keyword}
              source={source}
              date={date}
              link={link}
              imageUrl={image}
            />
        </li>
      ))}
    </ul>
  </section>
);

export default NewsCardList;
