import NewsCard from '../NewsCard/NewsCard';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import deleteImage from '../../images/delete.svg';
import './NewsCardSaved.css';

const NewsCardSaved = ({ title, description, source, date, category, imageUrl }) => (
  <NewsCard
    title={title}
    description={description}
    source={source}
    date={date}
    category={category}
    imageUrl={imageUrl}>
    <ButtonIcon
      classMix="news-card__overlay-button"
      image={deleteImage}
      actionText="Удалить"
      hintText="Убрать из сохранённых" />
  </NewsCard>
);

export default NewsCardSaved;
