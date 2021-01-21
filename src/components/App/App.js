import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import MainPage from '../MainPage/MainPage';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import MainApi from '../../utils/MainApi';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [savedArticles, setSavedArticles] = React.useState([]);

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

  const handleLogin = (token, name) => {
    setCurrentUser({ name });
    MainApi.setToken(token);
    localStorage.setItem('token', token);
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <div className="app">
          <Switch>

            <Route exact path="/" >
              <MainPage
                savedArticles={savedArticles}
                onLogin={handleLogin}
                onLogout={handleLogout}
                onArticleSave={handleArticleSave}
                onArticleUnsave={handleArticleUnsave} />
            </Route>

            <Route exact path="/saved-news" >
              {currentUser &&
                <SavedNewsPage
                  articles={savedArticles}
                  onArticleUnsave={handleArticleUnsave}
                  onLogout={handleLogout} />
              }
            </Route>

            <Route path="/" >
              <Redirect to="/" />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
};
export default App;
