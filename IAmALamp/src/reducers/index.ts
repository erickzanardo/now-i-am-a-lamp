import { UserReducer, UserState } from './user';
import { combineReducers } from 'redux';

export interface RootState {
  user: UserState;
}

export default combineReducers<RootState>({ user: UserReducer });
