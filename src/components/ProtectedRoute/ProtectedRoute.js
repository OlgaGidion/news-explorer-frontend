import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ path, isLoggedIn, component }) => (
  <Route exact path={path}>
    {isLoggedIn
      ? component
      : <Redirect to={{
        pathname: '/',
        state: { needToOpenLoginPopup: true },
      }} />
    }
  </Route>
);

export default ProtectedRoute;
