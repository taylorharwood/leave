let initialState = {
  originValue: '',
  destinationValue: '',
  desiredTravelTime: 20,
  requestTimeStart: null,
  requestTimeEnd: null
};

const preferences = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DESIRED_TRAVEL_TIME':
      return Object.assign({}, state, {
        desiredTravelTime: Number(action.time)
      });
    case 'SET_ORIGIN_VALUE':
      return Object.assign({}, state, {
        originValue: action.value
      });
    case 'SET_DESTINATION_VALUE':
      return Object.assign({}, state, {
        destinationValue: action.value
      });
    case 'CLEAR_ORIGIN_VALUE':
      return Object.assign({}, state, {
        originValue: ''
      });
    case 'CLEAR_DESTINATION_VALUE':
      return Object.assign({}, state, {
        destinationValue: ''
      });
    case 'SET_REQUEST_TIME_START':
      return Object.assign({}, state, {
        requestTimeStart: action.time
      });
    case 'SET_REQUEST_TIME_END':
      return Object.assign({}, state, {
        requestTimeEnd: action.time
      });
    case 'RESET_PREFERENCES_STATE':
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default preferences;
