import { formatKeyword } from '../../utils/keywordUtils';
import './NewsCard.css';

const NewsCard = ({ title, description, source, date, category, url, imageUrl, isKeywordShown, children }) => {
  const classList = category
    ? 'news-card__category'
    : 'news-card__category news-card__category_hidden';

  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleClick = () => {
    window.open(url);
  };

  return (
    <div className="news-card" onClick={handleClick}>
      <div className="news-card__image-container">
        <img className="news-card__image" src={imageUrl} alt={title} />
        <div className="news-card__overlay">
          <div className={classList}>
            {isKeywordShown &&
              <p className="news-card__category-text">{formatKeyword(category)}</p>
            }
          </div>
          {children}
        </div>
      </div>
      <div className="news-card__text-container">
        <p className="news-card__date">{formattedDate}</p>
        <h3 className="news-card__headline">{title}</h3>
        <div className="news-card__description-container">
          <p className="news-card__description">{description}</p>
        </div>
        <p className="news-card__source">{source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
