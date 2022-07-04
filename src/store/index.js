import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todos from './reducer/todo';
import auth from './reducer/auth';
const rootReducer = combineReducers({
  todos,
  auth,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
