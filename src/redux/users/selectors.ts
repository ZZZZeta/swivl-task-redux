import REDUCER from './constants';
import { RootState } from '../rootReducer';

export const selectUserList = (state: RootState) => state[REDUCER].userList;
export const selectUser = (state: RootState) => state[REDUCER].user;
