import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todos from './reducer/todo';
const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
