import { Reducer } from "redux";

export interface UserState {
  loggedUser?: string;
}

const initialState: UserState = {};

export const UserReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  return state;
};
