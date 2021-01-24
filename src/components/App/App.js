import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainPage from '../MainPage/MainPage';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import PopupLogin from '../PopupLogin/PopupLogin';
import PopupRegister from '../PopupRegister/PopupRegister';
import PopupRegisterSuccess from '../PopupRegisterSuccess/PopupRegisterSuccess';
import MainApi from '../../utils/MainApi';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [isLoginPopupOpened, setIsLoginPopupOpened] = React.useState(false);
  const [isRegisterPopupOpened, setIsRegisterPopupOpened] = React.useState(false);
  const [isRegisterSuccessPopupOpened, setIsRegisterSuccessPopupOpened] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      MainApi.setToken(token);
      MainApi.getMyUser()
        .then(({ name }) => {
          setCurrentUser({ name });
        })
        .catch(() => {
          setCurrentUser(null);
          MainApi.setToken(null);
          localStorage.removeItem('token');
        });
    }
  }, []);

  React.useEffect(() => {
    if (!currentUser) {
      return;
    }

    MainApi.getMyArticles()
      .then((result) => {
        setSavedArticles(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser]);

  const handleLogin = () => {
    setIsLoginPopupOpened(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    MainApi.setToken(null);
    localStorage.removeItem('token');
  };

  const handleArticleSave = (article) => {
    setSavedArticles([...savedArticles, article]);
  };

  const handleArticleUnsave = (articleId) => {
    setSavedArticles(savedArticles.filter((article) => articleId !== article._id));
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

    setCurrentUser({ name });
    MainApi.setToken(token);
    localStorage.setItem('token', token);
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

  const areAllPopupsClosed = !isLoginPopupOpened && !isRegisterPopupOpened && !isRegisterSuccessPopupOpened;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <div className="app">
          <Switch>

            <Route exact path="/" >
              <MainPage
                savedArticles={savedArticles}
                isHeaderVisibleOnMobile={areAllPopupsClosed}
                onLogin={handleLogin}
                onLogout={handleLogout}
                onArticleSave={handleArticleSave}
                onArticleUnsave={handleArticleUnsave} />
            </Route>

            <ProtectedRoute
              path="/saved-news"
              isLoggedIn={currentUser !== null}
              component={<SavedNewsPage
                articles={savedArticles}
                onArticleUnsave={handleArticleUnsave}
                onLogout={handleLogout} />}
            />

            <Route path="/" >
              <Redirect to="/" />
            </Route>

          </Switch>

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
        </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
};
export default App;
