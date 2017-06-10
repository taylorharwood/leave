// React Core
import React from 'react';
import ReactDOM from 'react-dom';
// Redux Store
import store from './store';
// React-Redux
import { Provider } from 'react-redux';
// Routes
import routes from './routes';

console.log(store.getState());

// Main App Render
ReactDOM.render((
  <Provider store={store}>
    {routes}
  </Provider>
), document.getElementById('mount'));
