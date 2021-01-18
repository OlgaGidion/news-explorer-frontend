import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import MainPage from '../MainPage/MainPage';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import MainApi from '../../utils/MainApi';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = React.useState(null);

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <div className="app">
          <Switch>

            <Route exact path="/" >
              <MainPage onLogin={handleLogin} onLogout={handleLogout} />
            </Route>

            <Route exact path="/saved-news" >
              {currentUser &&
                <SavedNewsPage onLogout={handleLogout} />
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
