import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ButtonWired from '../ButtonWired/ButtonWired';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import AboutAuthor from '../AboutAuthor/AboutAuthor';
import Footer from '../Footer/Footer';
import api from '../../utils/NewsApi';
import { getToday, getWeekAgo } from '../../utils/timeUtils';
import logoutImageLight from '../../images/logout-light.svg';
import './MainPage.css';

const MainPage = ({ savedArticles, isHeaderVisibleOnMobile, onArticleSave, onArticleUnsave, onLogin, onLogout }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();
  const history = useHistory();
  const [searchText, setSearchText] = React.useState(null);
  const [isSearching, setIsSearching] = React.useState(false);
  const [foundArticles, setFoundArticles] = React.useState(null);
  const [totalArticles, setTotalArticles] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    if (!location.state) {
      return;
    }

    if (location.state.needToOpenLoginPopup) {
      history.push({ state: { needToOpenLoginPopup: false } });
      onLogin();
    }
  }, [location, history, onLogin]);

  React.useEffect(() => {
    const savedSearchText = localStorage.getItem('searchText');
    if (savedSearchText) {
      setSearchText(savedSearchText);
      setFoundArticles(JSON.parse(localStorage.getItem('foundArticles')));
      setTotalArticles(localStorage.getItem('totalArticles'));
      setCurrentPage(localStorage.getItem('currentPage'));
    }
  }, []);

  React.useEffect(() => {
    if (searchText !== null) {
      localStorage.setItem('searchText', searchText);
    } else {
      localStorage.removeItem('searchText');
    }
  }, [searchText]);

  React.useEffect(() => {
    if (foundArticles !== null && foundArticles.length > 0) {
      localStorage.setItem('foundArticles', JSON.stringify(foundArticles));
    } else {
      localStorage.removeItem('foundArticles');
    }
  }, [foundArticles]);

  React.useEffect(() => {
    if (totalArticles > 0) {
      localStorage.setItem('totalArticles', totalArticles);
    } else {
      localStorage.removeItem('totalArticles');
    }
  }, [totalArticles]);

  React.useEffect(() => {
    if (currentPage > 0) {
      localStorage.setItem('currentPage', currentPage);
    } else {
      localStorage.removeItem('currentPage');
    }
  }, [currentPage]);

  const handleSavedNewsPageButtonClick = () => {
    history.push('/saved-news');
  };

  const handleMainPageButtonClick = () => {
    history.push('/');
  };

  const handleLogoutButtonClick = () => {
    onLogout();
  };

  const handleSearch = (text) => {
    if (text.length === 0) {
      setFoundArticles([]);
      setCurrentPage(0);
      setTotalArticles(0);
      setSearchText(null);
      return;
    }

    setFoundArticles([]);
    setIsSearching(true);
    setCurrentPage(1);
    setSearchText(text);

    const today = getToday();
    const weekAgo = getWeekAgo();

    api.search(text, 3, 1, weekAgo.toISOString(), today.toISOString())
      .then((result) => {
        setFoundArticles(result.articles);
        setTotalArticles(result.totalResults);
      })
      .catch((error) => {
        console.log(error);
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
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsSearching(false);
      });
  };

  return (
    <main className="main-page">
      <div className="main-page__image-container">
        <Header isDark={false} isVisibleOnMobile={isHeaderVisibleOnMobile}>
          <Navigation isDark={false}>
            <button className="navigation__page-button navigation__page-button_color_light navigation__page-button_selected_light" onClick={handleMainPageButtonClick}>Главная</button>
            {currentUser &&
              <>
                <button className="navigation__page-button navigation__page-button_color_light" onClick={handleSavedNewsPageButtonClick}>Сохранённые статьи</button>
                <ButtonWired type="light" text={currentUser.name} image={logoutImageLight} imageAlt="Выйти" classMix="navigation__wired-button" onClick={handleLogoutButtonClick} />
              </>
            }
            {!currentUser &&
              <ButtonWired type="light" text="Авторизоваться" classMix="navigation__wired-button" onClick={onLogin} />
            }
          </Navigation>
        </Header>
        <div className="main-page__content">
          <h1 className="main-page__headline">Что творится в мире?</h1>
          <p className="main-page__subline">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>

          <SearchForm
            placeholder="Введите тему новости"
            buttonText="Искать"
            onSearch={handleSearch} />
        </div>
      </div>

      {foundArticles !== null &&
        <SearchResults
          isSearching={isSearching}
          keyword={searchText}
          articles={foundArticles}
          totalArticles={totalArticles}
          savedArticles={savedArticles}
          onShowMore={handleShowMore}
          onArticleSave={onArticleSave}
          onArticleUnsave={onArticleUnsave}
          onLogin={onLogin} />
      }

      <AboutAuthor />
      <Footer />

    </main>
  );
};

export default MainPage;
