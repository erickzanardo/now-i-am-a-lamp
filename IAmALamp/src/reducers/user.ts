import { Reducer } from 'redux';

export interface UserState {
  loggedUser?: string;
}

const initialState: UserState = {};

export const UserReducer: Reducer<UserState> = (
  state = initialState,
  action,
) => {
  if (action.type === 'USER_LOGGED_IN') {
    const { userEmail } = action.payload;

    return {
      ...state,
      loggedUser: userEmail,
    };
  }
  return state;
};
