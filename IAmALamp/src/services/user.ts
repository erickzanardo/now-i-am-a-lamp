import auth from '@react-native-firebase/auth';
//@ts-ignore
import md5 from 'md5';

export const authenticate = (
  email: string,
  password: string,
): Promise<string> => {
  const hashPassword: string = md5(password);

  return auth()
    .signInWithEmailAndPassword(email, hashPassword)
    .then((user) => user.user.uid);
};

export const registerUser = (
  email: string,
  password: string,
): Promise<string> => {
  const hashPassword: string = md5(password);

  return auth()
    .createUserWithEmailAndPassword(email, hashPassword)
    .then((user) => {
      const id = user.user.uid;
      return id;
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        throw 'That email address is already in use!';
      }

      if (error.code === 'auth/invalid-email') {
        throw 'That email address is invalid!';
      }

      throw error;
    });
};
