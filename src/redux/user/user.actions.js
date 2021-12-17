import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
//type, payload similar to key, value
