import React from 'react';
// React Router
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// Containers
import Authenticate from './containers/Authenticate';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';

// Components
import App from './components/App';
import Splash from './components/Splash';
import Leave from './components/Leave';

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash} />
      <Route path="login" component={LoginContainer} />
      <Route path="register" component={RegisterContainer} />
      <Route path="leave" component={Authenticate(Leave)} />
    </Route>
  </Router>
);

export default routes;
