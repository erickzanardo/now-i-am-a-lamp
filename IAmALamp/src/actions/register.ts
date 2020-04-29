import { registerUser as service } from '../services/user';

export const register = (email: string, password: string) => (
  dispatch: any,
) => {
  return service(email, password).then((id) => {
    dispatch({
      type: 'USER_LOGGED_IN',
      payload: { id },
    });
  });
};
