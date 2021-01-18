import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import MainApi from '../../utils/MainApi';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = React.useState(null);

  const handleLogin = (token, name) => {
    setCurrentUser({ name });
    MainApi.setToken(token);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    MainApi.setToken(null);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <div className="app">
          <Switch>

            <Route path="/saved-news" >
              <SavedNewsPage onLogout={handleLogout} />
            </Route>

            <Route exact path="/" >
              <MainPage onLogin={handleLogin} onLogout={handleLogout} />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
};
export default App;
