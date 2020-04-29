import { Reducer } from 'redux';

export interface Thing {
  name: string;
  imageUrl: string;
  tags: string[];
}

export interface UserState {
  loggedUser?: string;
  thing?: Thing;
}

const initialState: UserState = {};

export const UserReducer: Reducer<UserState> = (
  state = initialState,
  action,
) => {
  if (action.type === 'USER_LOGGED_IN') {
    const { id } = action.payload;

    return {
      ...state,
      loggedUser: id,
    };
  } else if (action.type === 'CHOOSE_THING') {
    const { thing, imageUrl } = action.payload;

    return {
      ...state,
      thing: {
        name: thing,
        imageUrl,
        tags: [],
      },
    };
  } else if (action.type === 'ADD_TAGS') {
    const tags: string[] = action.payload.tags;

    return {
      ...state,
      thing: {
        name: state.thing?.name || '',
        imageUrl: state.thing?.imageUrl || '',
        tags,
      },
    };
  }
  return state;
};
