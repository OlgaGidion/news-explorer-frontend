import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ButtonWired from '../ButtonWired/ButtonWired';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import AboutAuthor from '../AboutAuthor/AboutAuthor';
import Footer from '../Footer/Footer';
import PopupLogin from '../PopupLogin/PopupLogin';
import PopupRegister from '../PopupRegister/PopupRegister';
import PopupRegisterSuccess from '../PopupRegisterSuccess/PopupRegisterSuccess';
import api from '../../utils/NewsApi';
import { getToday, getWeekAgo } from '../../utils/timeUtils';
import logoutImageLight from '../../images/logout-light.svg';
import './MainPage.css';

const MainPage = ({ onLogin }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();
  const [searchText, setSearchText] = React.useState(null);
  const [isSearching, setIsSearching] = React.useState(false);
  const [foundArticles, setFoundArticles] = React.useState(null);
  const [totalArticles, setTotalArticles] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isLoginPopupOpened, setIsLoginPopupOpened] = React.useState(false);
  const [isRegisterPopupOpened, setIsRegisterPopupOpened] = React.useState(false);
  const [isRegisterSuccessPopupOpened, setIsRegisterSuccessPopupOpened] = React.useState(false);

  const handleSavedNewsPageButtonClick = () => {
    history.push('/saved-news');
  };

  const handleMainPageButtonClick = () => {
    history.push('/');
  };

  const handleLoginButtonClick = () => {
    setIsLoginPopupOpened(true);
  };

  const handleLogoutButtonClick = () => {
  };

  const handleLoginPopupClose = () => {
    setIsLoginPopupOpened(false);
  };

  const handleLoginPopupRegister = () => {
    setIsLoginPopupOpened(false);
    setIsRegisterPopupOpened(true);
  };

  const handleLoginPopupSuccess = (token, name) => {
    setIsLoginPopupOpened(false);
    onLogin(token, name);
  };

  const handleRegisterPopupClose = () => {
    setIsRegisterPopupOpened(false);
  };

  const handleRegisterPopupLogin = () => {
    setIsRegisterPopupOpened(false);
    setIsLoginPopupOpened(true);
  };

  const handleRegisterPopupSuccess = () => {
    setIsRegisterPopupOpened(false);
    setIsRegisterSuccessPopupOpened(true);
  };

  const handleRegisterSuccessPopupClose = () => {
    setIsRegisterSuccessPopupOpened(false);
  };

  const handleRegisterSuccessPopupLogin = () => {
    setIsRegisterSuccessPopupOpened(false);
    setIsLoginPopupOpened(true);
  };

  const handleSearch = (text) => {
    if (text.length === 0) {
      setFoundArticles([]);
      setTotalArticles(0);
      setSearchText(null);
      return;
    }

    setFoundArticles([]);
    setIsSearching(true);
    setSearchText(text);
    setCurrentPage(1);

    const today = getToday();
    const weekAgo = getWeekAgo();

    api.search(text, 3, 1, weekAgo.toISOString(), today.toISOString())
      .then((result) => {
        setFoundArticles(result.articles);
        setTotalArticles(result.totalResults);
      })
      .finally(() => {
        setIsSearching(false);
      });
  };

  const handleShowMore = () => {
    const page = currentPage + 1;
    setCurrentPage(page);

    setIsSearching(true);

    const today = getToday();
    const weekAgo = getWeekAgo();

    api.search(searchText, 3, page, weekAgo.toISOString(), today.toISOString())
      .then((result) => {
        setFoundArticles([...foundArticles, ...result.articles]);
        setTotalArticles(result.totalResults);
      })
      .finally(() => {
        setIsSearching(false);
      });
  };

  return (
    <main className="main-page">
      <div className="main-page__image-container">
        <Header isDark={false} isVisibleOnMobile={!isLoginPopupOpened && !isRegisterPopupOpened && !isRegisterSuccessPopupOpened}>
          <Navigation isDark={false}>
            <button className="navigation__page-button navigation__page-button_color_light navigation__page-button_selected_light" onClick={handleMainPageButtonClick}>Главная</button>
            {currentUser &&
              <>
                <button className="navigation__page-button navigation__page-button_color_light" onClick={handleSavedNewsPageButtonClick}>Сохранённые статьи</button>
                <ButtonWired type="light" text={currentUser.name} image={logoutImageLight} imageAlt="Выйти" classMix="navigation__wired-button" onClick={handleLogoutButtonClick} />
              </>
            }
            {!currentUser &&
              <ButtonWired type="light" text="Авторизоваться" classMix="navigation__wired-button" onClick={handleLoginButtonClick} />
            }
          </Navigation>
        </Header>
        <div className="main-page__content">
          <h1 className="main-page__headline">Что творится в мире?</h1>
          <p className="main-page__subline">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
          <SearchForm placeholder="Введите тему новости" buttonText="Искать" onSearch={handleSearch} />
        </div>
      </div>
      {foundArticles !== null &&
        <SearchResults isSearching={isSearching} articles={foundArticles} totalArticles={totalArticles} onShowMore={handleShowMore} />
      }
      <AboutAuthor />
      <Footer />

      <PopupLogin
        isOpen={isLoginPopupOpened}
        onClose={handleLoginPopupClose}
        onRegister={handleLoginPopupRegister}
        onSuccess={handleLoginPopupSuccess} />

      <PopupRegister
        isOpen={isRegisterPopupOpened}
        onClose={handleRegisterPopupClose}
        onLogin={handleRegisterPopupLogin}
        onSuccess={handleRegisterPopupSuccess} />

      <PopupRegisterSuccess
        isOpen={isRegisterSuccessPopupOpened}
        onClose={handleRegisterSuccessPopupClose}
        onLogin={handleRegisterSuccessPopupLogin} />

    </main>
  );
};

export default MainPage;
