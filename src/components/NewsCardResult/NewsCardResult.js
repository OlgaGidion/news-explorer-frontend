import NewsCard from '../NewsCard/NewsCard';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import MainApi from '../../utils/MainApi';
import bookmarkImage from '../../images/bookmark.svg';

const NewsCardResult = ({ title, description, source, date, category, url, imageUrl }) => {
  const handleSaveButtonClick = () => {
    MainApi.saveArticle(category, title, description, date, source, url, imageUrl)
      .then(() => {
        // TODO
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <NewsCard
      title={title}
      description={description}
      source={source}
      date={date}
      category={category}
      imageUrl={imageUrl}>
      <ButtonIcon
        classMix="news-card__overlay-button"
        image={bookmarkImage}
        actionText="Сохранить"
        hintText="Войдите, чтобы сохранять статьи"
        onClick={handleSaveButtonClick} />
    </NewsCard>
  );
};

export default NewsCardResult;
