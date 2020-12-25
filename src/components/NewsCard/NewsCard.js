import './NewsCard.css';
import deleteImage from '../../images/delete.svg';

const NewsCard = ({ headline, text, source, date, imageUrl, category }) => (
  <div className="news-card">
    <div className="news-card__image-container">
      <img className="news-card__image" src={imageUrl} alt={headline} />
      <div className="news-card__overlay">
        <div className="news-card__category">
          <p className="news-card__category-text">{category}</p>
        </div>
        <button className="button button-icon news-card__button">
          <img className="button-icon__image" src={deleteImage} alt="Удалить" />
        </button>
      </div>
    </div>
    <div className="news-card__text-container">
      <p className="news-card__date">{date}</p>
      <h3 className="news-card__headline">{headline}</h3>
      <p className="news-card__text">{text}</p>
      <p className="news-card__source">{source}</p>
    </div>
  </div>
);

export default NewsCard;
