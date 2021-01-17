import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './App.css';

const App = () => {
  const [currentUser] = React.useState(null);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <div className="app">
          <Switch>

            <Route path="/saved-news" >
              <SavedNewsPage />
            </Route>

            <Route exact path="/" >
              <MainPage />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
};
export default App;
