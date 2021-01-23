import { BaseAction } from '../../types/redux';
import * as types from './constants';
import { apiGetUser, apiGetUserList } from '../../api/users';

interface GetUserListAction extends BaseAction {}
interface GetUserAction extends BaseAction {}

export type UsersActionTypes = GetUserListAction | GetUserAction;

export const getUserList = (
  per_page: number,
  since: number
): GetUserListAction => ({
  types: [
    types.GET_USER_LIST_REQUEST,
    types.GET_USER_LIST_SUCCESS,
    types.GET_USER_LIST_FAILURE,
  ],
  promise: () => apiGetUserList(per_page, since),
});

export const getUser = (username: string): GetUserAction => ({
  types: [
    types.GET_USER_REQUEST,
    types.GET_USER_SUCCESS,
    types.GET_USER_FAILURE,
  ],
  promise: () => apiGetUser(username),
});
