import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import index from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore),
      preloadedState = JSON.parse(window.localStorage.getItem('reduxState'));

var store;

// if we have preloaded state, hydrate the redux store upon creation
if (preloadedState) {
  store = createStoreWithMiddleware(index, preloadedState);
} else {
  store = createStoreWithMiddleware(index);
}

// any time the store changes, set it in local storage
store.subscribe(() => {
  window.localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
