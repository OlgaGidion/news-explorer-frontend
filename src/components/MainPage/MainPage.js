import React from 'react';
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
import './MainPage.css';

const MainPage = () => {
  const [searchText, setSearchText] = React.useState(null);
  const [isSearching, setIsSearching] = React.useState(false);
  const [foundArticles, setFoundArticles] = React.useState(null);
  const [totalArticles, setTotalArticles] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isLoginPopupOpened, setIsLoginPopupOpened] = React.useState(false);
  const [isRegisterPopupOpened, setIsRegisterPopupOpened] = React.useState(false);
  const [isRegisterSuccessPopupOpened, setIsRegisterSuccessPopupOpened] = React.useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginPopupOpened(true);
  };

  const handleLoginPopupClose = () => {
    setIsLoginPopupOpened(false);
  };

  const handleLoginPopupRegister = () => {
    setIsLoginPopupOpened(false);
    setIsRegisterPopupOpened(true);
  };

  const handleLoginPopupSuccess = () => {
    setIsLoginPopupOpened(false);
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

    api.search(text, 3, 1)
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

    api.search(searchText, 3, page)
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
            <a className="navigation__link navigation__link_color_light navigation__link_selected_light" href="/">Главная</a>
            <a className="navigation__link navigation__link_color_light" href="/saved-news">Сохранённые статьи</a>
            <ButtonWired type="light" text="Авторизоваться" classMix="navigation__wired-button" onClick={handleLoginButtonClick} />
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
