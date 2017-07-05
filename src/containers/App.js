import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Landing from './Landing';
import SignIn from './SignIn';
import SignUp from './SignUp';

import {
  BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';

const Main = () => (
  <div>
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  </div>
)

const App = () => (
  <div>
    <Navigation />
    <Main />
  </div>
)

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <div>
      <Router>
        <App />
      </Router>
    </div>,
    document.getElementById('root')
  );
});
