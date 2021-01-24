import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/rootReducer';

// middlewares
import { apiMiddleware } from './middlewares/apiMiddleware';

const middlewares = [
  apiMiddleware,
  process.env.NODE_ENV === 'development' && createLogger({ collapsed: true }),
];

// @ts-ignore
const middleware = applyMiddleware(...middlewares);

const initialState = {};

const store = createStore(rootReducer, initialState, compose(middleware));

export default store;
