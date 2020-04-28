import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';

import Button from '../../components/PrimaryButton';
import BackgroundView from '../../components/BackgroundView';
import InputText from '../../components/InputText';
import { MailIcon, PasswordIcon } from '../../components/Icon';
import Link from '../../components/Link';

import styles from './styles';
import lampLogo from '../../../assets/images/lamp-logo.png';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
  onLogin: (email: string, password: string) => Promise<void>;
}
const LoginScreen = ({ navigation, onLogin }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BackgroundView customStyle={styles.bodyWrapper}>
      <View style={styles.body}>
        <Image source={lampLogo} />
        <View style={styles.inputs}>
          <InputText
            label="Email"
            onChangeText={(text) => {
              setEmail(text);
            }}
            placeholder="example@email.com"
            icon={<MailIcon />}
          />
          <View style={styles.spacer} />
          <InputText
            label="Password"
            onChangeText={(text) => {
              setPassword(text);
            }}
            isSecure
            placeholder="Your Password Here"
            icon={<PasswordIcon />}
          />
        </View>
        <View style={styles.loginButton}>
          <Button
            onPress={() => {
              onLogin(email, password)
                .then(() => {
                  console.log('Logged');
                })
                .catch(() => {
                  console.log('Nope');
                });
            }}
            label="Login"
            width={300}
          />
          <Link onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
          </Link>
        </View>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t have an account?</Text>
        <Link onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.signUpText, styles.signUpLink]}>Sign up</Text>
        </Link>
      </View>
    </BackgroundView>
  );
};

export default LoginScreen;
