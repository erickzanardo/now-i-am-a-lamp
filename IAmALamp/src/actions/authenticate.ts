import { authenticate as service } from '../services/user';

// TODO fix thunk types
export const authenticate = (email: string, password: string) => (
  dispatch: any,
) => {
  return service(email, password).then((id) => {
    dispatch({
      type: 'USER_LOGGED_IN',
      payload: { id },
    });
  });
};
