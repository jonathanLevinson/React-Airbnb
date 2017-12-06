import { combineReducers } from 'redux';
import cities from './cities';
import locations from './locations';
import currentLocation from './currentLocation';

const rootReducer = combineReducers({
  cities,
  locations,
  currentLocation
});

export default rootReducer;