import './NewsCard.css';

const NewsCard = ({ headline, text, source, date, category, imageUrl, children }) => {
  const classList = category
    ? 'news-card__category'
    : 'news-card__category news-card__category_hidden';

  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <img className="news-card__image" src={imageUrl} alt={headline} />
        <div className="news-card__overlay">
          <div className={classList}>
            <p className="news-card__category-text">{category}</p>
          </div>
          {children}
        </div>
      </div>
      <div className="news-card__text-container">
        <p className="news-card__date">{formattedDate}</p>
        <h3 className="news-card__headline">{headline}</h3>
        <div className="news-card__description-container">
          <p className="news-card__description">{text}</p>
        </div>
        <p className="news-card__source">{source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
