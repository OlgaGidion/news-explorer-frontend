import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ButtonWired from '../ButtonWired/ButtonWired';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import AboutAuthor from '../AboutAuthor/AboutAuthor';
import Footer from '../Footer/Footer';
import PopupRegister from '../PopupRegister/PopupRegister';
import logoutImageLight from '../../images/logout-light.svg';
import './MainPage.css';

const MainPage = () => {
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);

  const handlePopupClose = () => {
    setIsPopupOpened(false);
  };

  return (
    <main className="main-page">
      <div className="main-page__image-container">
        <Header isDark={false}>
          <Navigation isDark={false}>
            <a className="navigation__link navigation__link_color_light navigation__link_selected" href="/">Главная</a>
            <a className="navigation__link navigation__link_color_light" href="/saved-news">Сохранённые статьи</a>
            <ButtonWired type="light" text="Грета" image={logoutImageLight} imageAlt="Выйти" classMix="navigation__wired-button" />
          </Navigation>
        </Header>
        <div className="main-page__content">
          <h1 className="main-page__headline">Что творится в мире?</h1>
          <p className="main-page__subline">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
          <SearchForm placeholder="Введите тему новости" buttonText="Искать" />
        </div>
      </div>
      <SearchResults />
      <AboutAuthor />
      <Footer />

      <PopupRegister isOpen={isPopupOpened} onClose={handlePopupClose} />

    </main>
  );
};

export default MainPage;
