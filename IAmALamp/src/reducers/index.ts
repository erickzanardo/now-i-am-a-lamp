import { UserReducer, UserState } from "./user";
import { combineReducers } from "redux";

interface RootState {
  user: UserState;
}

export default combineReducers<RootState>({ user: UserReducer });
