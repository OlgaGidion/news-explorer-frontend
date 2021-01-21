import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ButtonWired from '../ButtonWired/ButtonWired';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import { getKeywords } from '../../utils/keywordUtils';
import logoutImageDark from '../../images/logout-dark.svg';
import './SavedNewsPage.css';

const SavedNewsPage = ({ articles, onArticleUnsave, onLogout }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();

  const handleSavedNewsPageButtonClick = () => {
    history.push('/saved-news');
  };

  const handleMainPageButtonClick = () => {
    history.push('/');
  };

  const handleLogoutButtonClick = () => {
    history.replace('/');
    onLogout();
  };

  return (
    <main>
      <Header isDark={true} isVisibleOnMobile={true}>
        <Navigation isDark={true}>
          <button className="navigation__page-button navigation__page-button_color_dark" onClick={handleMainPageButtonClick}>Главная</button>
          <button className="navigation__page-button navigation__page-button_color_dark navigation__page-button_selected_dark" onClick={handleSavedNewsPageButtonClick}>Сохранённые статьи</button>
          <ButtonWired type="dark" text={currentUser.name} image={logoutImageDark} imageAlt="Выйти" classMix="navigation__wired-button" onClick={handleLogoutButtonClick} />
        </Navigation>
      </Header>

      <SavedNewsHeader
        userName={currentUser.name}
        articlesCount={articles.length}
        keywords={getKeywords(articles)} />

      {articles.length > 0 &&
        <NewsCardList articles={articles} onArticleUnsave={onArticleUnsave} />
      }

      <Footer />
    </main>
  );
};

export default SavedNewsPage;
