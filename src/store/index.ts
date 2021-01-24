import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/rootReducer';

// middlewares
import { apiMiddleware } from './middlewares/apiMiddleware';

const middleware = applyMiddleware(
  apiMiddleware,
  createLogger({
    collapsed: true,
  })
);

const initialState = {};

const store = createStore(rootReducer, initialState, compose(middleware));

export default store;
