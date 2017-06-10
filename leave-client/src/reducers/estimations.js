let initialState = {
  estimatedTravelTime: null,
  estimatedDistance: null,
  estimationsActive: false,
  estimationError: null,
  estimationHistory: []
};

const estimations = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ESTIMATIONS_ACTIVE':
      return Object.assign({}, state, {
        estimationsActive: !state.estimationsActive
      });
    case 'CANCEL_ESTIMATIONS':
      return Object.assign({}, state, {
        estimationsActive: false
      });
    case 'REQUEST_ESTIMATED_TRAVEL_TIME':
      return Object.assign({}, state, {
        estimationsActive: true
      });
    case 'RECEIVE_ESTIMATED_TRAVEL_TIME':
      return Object.assign({}, state, {
        estimatedTravelTime: action.time
      });
    case 'SET_ESTIMATED_DISTANCE':
      return Object.assign({}, state, {
        estimatedDistance: action.distance
      });
    case 'ADD_ESTIMATION_TIME_TO_HISTORY':
      return Object.assign({}, state, {
        estimationHistory: state.estimationHistory.concat(action.time)
      });
    case 'SET_ESTIMATION_ERROR':
      return Object.assign({}, state, {
        estimationError: action.error
      });
    default:
      return state;
  }
};

export default estimations;
