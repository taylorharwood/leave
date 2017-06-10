import { API_ROOT } from '../config';
import { browserHistory } from 'react-router';
import 'whatwg-fetch';

export function setLoginError(error) {
  return {
    type: 'SET_LOGIN_ERROR',
    error: error
  }
}

export function setRegisterError(error) {
  return {
    type: 'SET_REGISTER_ERROR',
    error: error
  }
}

export function doRegister(name, email, password) {
  return function(dispatch, getState) {
    fetch(API_ROOT + '/users/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        if (json.success) {
          dispatch(setRegisterSuccess(json.message));
        } else {
          dispatch(setRegisterError(json.message));
        }
      })
      .catch(function(err) {
        dispatch(setRegisterError(err.message));
      });
  }
}

export function setRegisterSuccess(data) {
  return {
    type: 'SET_REGISTER_SUCCESS',
    success: data.message
  }
}

export function setCurrentUser(name, email) {
  return {
    type: 'SET_CURRENT_USER',
    name: name,
    email: email
  }
}

function setToken(token) {
  return {
    type: 'SET_TOKEN',
    token: token
  };
}

export function doLogin(email, password) {
  return function(dispatch, getState) {
    fetch(API_ROOT + '/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        const { name, email } = json.user;
        const token = json.token;

        // Store current user info in Local Storage.
        window.localStorage.setItem('token', json.token);
        window.localStorage.setItem('currentUser', JSON.stringify({ name, email }));
        
        // set currentUser and token in redux state
        dispatch(setCurrentUser(name, email));
        dispatch(setToken(token));

        browserHistory.push('leave');
      })
      .catch(function(err) {
        dispatch(setLoginError(err.response));
      });
  }
}

export function resetUserState() {
  return {
    type: 'RESET_USER_STATE'
  }
}

// Flushes local storage user, then does a state reset on user.
export function flushUserState() {
  return (dispatch, getState) => {
    delete window.localStorage.currentUser;
    delete window.localStorage.token;

    dispatch(resetUserState());

    browserHistory.push('login');
  }
}