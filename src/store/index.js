import { applyMiddleware, createStore, compose } from 'redux';
import reduxLogger from "redux-logger";
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
    locations: [],
    cities: [],
    currentLocation: {}   
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(reduxLogger, reduxThunk);

export default createStore(rootReducer, initialState, composeEnhancers(middleware));
