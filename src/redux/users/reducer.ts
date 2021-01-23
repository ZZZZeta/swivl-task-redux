import { combineReducers } from 'redux';
import * as types from './constants';
import { UsersActionTypes } from './actions';
import { Users, FullUser } from '../../types/users';

export default combineReducers({
  isLoading(state: boolean = false, action: UsersActionTypes): boolean {
    switch (action.type) {
      case types.GET_USER_LIST_REQUEST:
      case types.GET_USER_REQUEST:
        return true;
      case types.GET_USER_LIST_SUCCESS:
      case types.GET_USER_SUCCESS:
      case types.GET_USER_LIST_FAILURE:
      case types.GET_USER_FAILURE:
        return false;
      default:
        return state;
    }
  },
  userList(state: Users = [], action: UsersActionTypes): Users {
    switch (action.type) {
      case types.GET_USER_LIST_SUCCESS:
        return action.result;
      default:
        return state;
    }
  },
  user(state: FullUser | {} = {}, action: UsersActionTypes): FullUser | {} {
    switch (action.type) {
      case types.GET_USER_SUCCESS:
        return action.result;
      default:
        return state;
    }
  },
});
