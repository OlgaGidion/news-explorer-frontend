import './NewsCard.css';

const NewsCard = ({ imageUrl }) => (
  <div className="news-card">
    <div className="news-card__image-container">
      <img className="news-card__image" src={imageUrl} alt="Национальное достояние – парки" />
    </div>
    <div className="news-card__text-container">
      <p className="news-card__date">2 августа, 2019</p>
      <h3 className="news-card__headline">Национальное достояние – парки</h3>
      <p className="news-card__text">
        В 2016 году Америка отмечала важный
        юбилей: сто лет назад здесь начала
        складываться система национальных
        парков – охраняемых территорий, где
        и сегодня каждый может приобщиться к природе.</p>
      <p className="news-card__source">Дзен</p>
    </div>
  </div>
);

export default NewsCard;
