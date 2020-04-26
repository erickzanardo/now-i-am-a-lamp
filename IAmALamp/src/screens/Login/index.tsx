import React from 'react';
import { View, Image, Text } from 'react-native';

import Button from '../../components/PrimaryButton';
import BackgroundView from '../../components/BackgroundView';
import InputText from '../../components/InputText';
import { MailIcon, PasswordIcon } from '../../components/Icon';

import styles from './styles';
import lampLogo from '../../../assets/images/lamp-logo.png';

interface Props {
  onLogin: () => void;
}
const Login = ({ onLogin }: Props) => {
  return (
    <BackgroundView customStyle={styles.bodyWrapper}>
      <View style={styles.body}>
        <Image source={lampLogo} />
        <View style={styles.inputs}>
          <InputText
            label="Email"
            onChangeText={() => {}}
            placeholder="example@email.com"
            icon={<MailIcon />}
          />
          <View style={styles.spacer} />
          <InputText
            label="Password"
            onChangeText={() => {}}
            placeholder="Your Password Here"
            icon={<PasswordIcon />}
          />
        </View>
        <View style={styles.loginButton}>
          <Button onPress={onLogin} label="Login" width={300} />
        </View>
      </View>
      <Text style={styles.signUpText}>Don’t have an account? Sign up</Text>
    </BackgroundView>
  );
};

export default Login;
