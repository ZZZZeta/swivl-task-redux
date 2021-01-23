import { makeApiCall } from '../utils/makeApiCall';

export const apiGetUserList = (per_page: number = 100, since: number = 0) =>
  makeApiCall({
    url: `https://api.github.com/users?per_page=${per_page}&since=${since}`,
    method: 'GET',
  });

export const apiGetUser = (username: string) =>
  makeApiCall({
    url: `https://api.github.com/users/${username}`,
    method: 'GET',
  });
