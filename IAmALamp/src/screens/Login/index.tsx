import React from 'react';
import { useDispatch } from 'react-redux';

import { NavigationProp } from '@react-navigation/native';

import { authenticate } from '../../actions/authenticate';

import LoginScreen from './LoginScreen';

interface Props {
  navigation: NavigationProp<any>;
}

const Login = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  const onLogin = (email: string, password: string) => {
    return (
      dispatch(authenticate(email, password))
        //@ts-ignore TODO fix TypeScript error here
        .then(() => {
          console.log('Logged');
        })
        .catch(() => {
          console.log('Nope');
        })
    );
  };

  return <LoginScreen navigation={navigation} onLogin={onLogin} />;
};

export default Login;
