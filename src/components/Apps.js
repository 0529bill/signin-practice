import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './Apps/App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';

import { ContextApiProvider } from '../contextApi/contextApi';

function Apps() {
  return (
    <ContextApiProvider>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/signin-practice/dashboard"
            component={Dashboard}
          />
          <Route exact path="/signin-practice">
            <App />
          </Route>
          <Route exact path="/signin-practice/signin">
            <SignIn />
          </Route>
          <Route exact path="/signin-practice/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin-practice/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ContextApiProvider>
  );
}

export default Apps;
