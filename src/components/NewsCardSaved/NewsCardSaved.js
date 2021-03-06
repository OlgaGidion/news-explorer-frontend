import NewsCard from '../NewsCard/NewsCard';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import deleteImage from '../../images/delete.svg';
import MainApi from '../../utils/MainApi';
import './NewsCardSaved.css';

const NewsCardSaved = ({ id, title, description, source, date, category, url, imageUrl, onUnsave }) => {
  const handleDeleteButtonClick = (e) => {
    e.stopPropagation();

    MainApi.unsaveArticle(id)
      .then(() => {
        onUnsave(id);
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
      url={url}
      imageUrl={imageUrl}
      isKeywordShown={true}>
      <ButtonIcon
        classMix="news-card__overlay-button"
        image={deleteImage}
        actionText="Удалить"
        hintText="Убрать из сохранённых"
        onClick={handleDeleteButtonClick} />
    </NewsCard>
  );
};

export default NewsCardSaved;
