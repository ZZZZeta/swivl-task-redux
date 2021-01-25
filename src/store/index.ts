import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux/rootReducer';

// middlewares
import { apiMiddleware } from './middlewares/apiMiddleware';

const middleware = applyMiddleware(
  apiMiddleware,
);

const initialState = {};

const store = createStore(rootReducer, initialState, compose(middleware));

export default store;
