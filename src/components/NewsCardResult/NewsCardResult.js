import NewsCard from '../NewsCard/NewsCard';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import bookmarkImage from '../../images/bookmark.svg';

const NewsCardResult = ({ headline, text, source, date, category, imageUrl }) => (
  <NewsCard
    headline={headline}
    text={text}
    source={source}
    date={date}
    category={category}
    imageUrl={imageUrl}>
    <ButtonIcon
      classMix="news-card__overlay-button"
      image={bookmarkImage}
      actionText="Сохранить"
      hintText="Войдите, чтобы сохранять статьи" />
  </NewsCard>
);

export default NewsCardResult;
