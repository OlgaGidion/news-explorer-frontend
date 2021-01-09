import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import './App.css';

const App = () => (
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
);

export default App;
