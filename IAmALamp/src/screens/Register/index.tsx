import React from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../../actions/register';

import RegisterForm from './RegisterForm';

export default () => {
  const dispatch = useDispatch();

  const onRegister = (email: string, password: string) => {
    return dispatch(register(email, password));
  };

  return <RegisterForm onRegister={onRegister} />;
};
