import { Middleware } from 'redux';
import { RootState } from '../../redux/rootReducer';

export const apiMiddleware: Middleware<{}, RootState> = (store) => (next) => (
  action
) => {
  const { dispatch, getState } = store;

  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  const { types, promise, ...rest } = action;

  if (!promise) {
    return next(action);
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every((type) => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const [REQUEST, SUCCESS, FAILURE] = types;
  next({ ...action, type: REQUEST });

  return promise()
    .then(
      (response: Response) =>
        next({
          ...rest,
          result: response,
          type: SUCCESS,
        }),
      (error: Error) => {
        next({
          ...rest,
          error,
          type: FAILURE,
        });
      }
    )
    .catch((err: Error) => {
      console.error('apiMiddleware', err);
      next({ type: FAILURE });
    });
};
