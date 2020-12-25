import ButtonIcon from '../ButtonIcon/ButtonIcon';
import deleteImage from '../../images/delete.svg';
import './NewsCard.css';

const NewsCard = ({ headline, text, source, date, imageUrl, category }) => (
  <div className="news-card">
    <div className="news-card__image-container">
      <img className="news-card__image" src={imageUrl} alt={headline} />
      <div className="news-card__overlay">
        <div className="news-card__category">
          <p className="news-card__category-text">{category}</p>
        </div>
        <ButtonIcon
          classMix="news-card__overlay-button"
          image={deleteImage}
          actionText="Удалить"
          hintText="Убрать из сохранённых" />
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
