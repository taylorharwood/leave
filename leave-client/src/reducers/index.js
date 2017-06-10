import preferences from './preferences';
import estimations from './estimations';
import user        from './user';

import { combineReducers } from 'redux';

export default combineReducers({
  preferences,
  estimations,
  user
});
