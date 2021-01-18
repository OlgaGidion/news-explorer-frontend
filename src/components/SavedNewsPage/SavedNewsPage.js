import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ButtonWired from '../ButtonWired/ButtonWired';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import logoutImageDark from '../../images/logout-dark.svg';
import './SavedNewsPage.css';

const SavedNewsPage = () => {
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();

  const handleSavedNewsPageButtonClick = () => {
    history.push('/saved-news');
  };

  const handleMainPageButtonClick = () => {
    history.push('/');
  };

  const handleLogoutButtonClick = () => {
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
        articlesCount={5}
        keywords={['Природа', 'Автомобили', 'Дети', 'Психология']} />

      <NewsCardList />

      <Footer />
    </main>
  );
};

export default SavedNewsPage;
