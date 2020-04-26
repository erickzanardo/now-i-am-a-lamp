import React from 'react';
import { View, Image } from 'react-native';

import BackgroundView from '../../components/BackgroundView';

import styles from './styles';
import registerLogo from '../../../assets/images/register-logo.png';

const Register = () => {
  return (
    <BackgroundView customStyle={styles.bodyWrapper}>
      <View style={styles.body}>
        <Image source={registerLogo} />
      </View>
    </BackgroundView>
  );
};

export default Register;
