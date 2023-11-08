import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import quotesReducer from './reducers/quotesReducer';

const rootReducer = combineReducers({
  quotes: quotesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
