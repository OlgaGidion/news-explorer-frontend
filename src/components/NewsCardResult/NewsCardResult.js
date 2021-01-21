import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import NewsCard from '../NewsCard/NewsCard';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import MainApi from '../../utils/MainApi';
import bookmarkImage from '../../images/bookmark.svg';
import bookmarkFilledImage from '../../images/bookmark-filled.svg';

const NewsCardResult = ({ id, title, description, source, date, category, url, imageUrl, isSaved, onSave, onUnsave }) => {
  const currentUser = React.useContext(CurrentUserContext);

  const createButton = React.useCallback(() => {
    const handleLoginButtonClick = () => {
      console.log('SHOW LOGIN POPUP!!!');
    };

    const handleSaveButtonClick = () => {
      MainApi.saveArticle(category, title, description, date, source, url, imageUrl)
        .then((article) => {
          onSave(article);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleUnsaveButtonClick = () => {
      MainApi.unsaveArticle(id)
        .then(() => {
          onUnsave(id);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (!currentUser) {
      return (
        <ButtonIcon
          classMix="news-card__overlay-button"
          image={bookmarkImage}
          actionText="Сохранить"
          hintText="Войдите, чтобы сохранять статьи"
          onClick={handleLoginButtonClick} />
      );
    }

    if (isSaved) {
      return (
        <ButtonIcon
          classMix="news-card__overlay-button"
          image={bookmarkFilledImage}
          actionText="Удалить"
          hintText="Удалить"
          isOpaque={true}
          onClick={handleUnsaveButtonClick} />
      );
    }

    return <ButtonIcon
      classMix="news-card__overlay-button"
      image={bookmarkImage}
      actionText="Сохранить"
      hintText="Сохранить"
      onClick={handleSaveButtonClick} />;
  }, [currentUser, id, title, description, source, date, category, url, imageUrl, isSaved, onSave, onUnsave]);

  return (
    <NewsCard
      title={title}
      description={description}
      source={source}
      date={date}
      category={category}
      imageUrl={imageUrl}
      isKeywordShown={false}>
      {createButton()}
    </NewsCard>
  );
};

export default NewsCardResult;
