const initialState = {
  currentUser: {
    name: null,
    email: null
  },
  token: null,
  loginError: null,
  registerError: null,
  registerSuccess: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return Object.assign({}, state, {
        currentUser: {
          name: action.name,
          email: action.email
        }
      });
    case 'SET_TOKEN':
      return Object.assign({}, state, {
        token: action.token
      });
    case 'SET_LOGIN_ERROR':
      return Object.assign({}, state, {
        loginError: action.error
      });
    case 'SET_REGISTER_ERROR':
      return Object.assign({}, state, {
        registerError: action.error
      });
    case 'SET_REGISTER_SUCCESS':
      return Object.assign({}, state, {
        registerSuccess: action.success
      });
    case 'RESET_USER_STATE':
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default user;
