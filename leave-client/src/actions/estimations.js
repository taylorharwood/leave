import 'whatwg-fetch';
import { API_ROOT } from '../config';

export function requestEstimatedTravelTime() {
  return {
    type: 'REQUEST_ESTIMATED_TRAVEL_TIME'
  }
}

export function receiveEstimatedTravelTime(time) {
  return {
    type: 'RECEIVE_ESTIMATED_TRAVEL_TIME',
    time: time
  }
}

export function setEstimatedDistance(distance) {
  return {
    type: 'SET_ESTIMATED_DISTANCE',
    distance: distance
  }
}

export function setEstimationError(error) {
  return {
    type: 'SET_ESTIMATION_ERROR',
    error: error
  }
}

export function setRequestTimeStart(time) {
  return {
    type: 'SET_REQUEST_TIME_START',
    time: time
  }
}

export function setRequestTimeEnd(time) {
  return {
    type: 'SET_REQUEST_TIME_END',
    time: time
  }
}

export function toggleEstimationsActive() {
  return {
    type: 'TOGGLE_ESTIMATIONS_ACTIVE'
  }
}

export function addEstimationTimeToHistory(time) {
  return {
    type: 'ADD_ESTIMATION_TIME_TO_HISTORY',
    time: time
  }
}

export function isEstimationSatisfactory(responseTime, o, d) {
  return function(dispatch, getState) {
    dispatch(receiveEstimatedTravelTime(responseTime / 60));
    dispatch(addEstimationTimeToHistory(responseTime / 60));

    if (responseTime / 60 <= getState().desiredTravelTime) {
      dispatch(setRequestTimeEnd(new Date()));
      dispatch(toggleEstimationsActive());
    } else {
      window.estimationTimeout = setTimeout(function() {
        if (getState().estimations.estimationsActive) {
          dispatch(fetchEstimatedTravelTime(o, d));
        }
      }, 10000)
    }
  }
}

export function fetchEstimatedTravelTime(origin, destination) {
  return function(dispatch, getState) {
    if (getState().estimations.estimationError) {
      // Clear any prior errors.
      dispatch(setEstimationError());
    }

    dispatch(requestEstimatedTravelTime());

    if (!getState().requestTimeStart)
      dispatch(setRequestTimeStart(new Date()));

    var requestUrl = (API_ROOT + '/map/origin/' + origin + '/destination/' + destination)
      .replace(/[,\s]/g, '+')
      .replace(/[+]{2,}/g, '+');

    fetch(requestUrl, {
      method: 'post',
      headers: {
        'x-access-token': window.localStorage.getItem('token')
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        try {
          const firstRoute = json.routes[0].legs[0];
          const responseTime = firstRoute.duration_in_traffic.value;

          dispatch(setEstimatedDistance(firstRoute.distance.text));
          dispatch(isEstimationSatisfactory(responseTime, origin, destination));
        } catch(e) {
          console.error(e);
        }
      })
      .catch(function(err) {
        try {
          dispatch(setEstimationError(err.responseJSON.message));
        } catch(e) {
          console.error(e);
        }
      });
  }
}