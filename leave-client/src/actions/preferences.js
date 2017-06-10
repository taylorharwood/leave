export function setDesiredTravelTime(time) {
  return {
    type: 'SET_DESIRED_TRAVEL_TIME',
    time: time
  }
}

export function setOriginValue(value) {
  return {
    type: 'SET_ORIGIN_VALUE',
    value: value
  }
}

export function setDestinationValue(value) {
  return {
    type: 'SET_DESTINATION_VALUE',
    value: value
  }
}

export function clearOriginValue(value) {
  return {
    type: 'CLEAR_ORIGIN_VALUE'
  }
}

export function clearDestinationValue(value) {
  return {
    type: 'CLEAR_DESTINATION_VALUE'
  }
}

export function resetPreferencesState() {
  return {
    type: 'RESET_PREFERENCES_STATE'
  }
}