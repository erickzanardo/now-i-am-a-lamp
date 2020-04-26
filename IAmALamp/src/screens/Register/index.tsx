import React from 'react';
import { View, Image, Text } from 'react-native';

import BackgroundView from '../../components/BackgroundView';
import InputText from '../../components/InputText';
import { MailIcon, PasswordIcon, UserIcon } from '../../components/Icon';
import PrimaryButton from '../../components/PrimaryButton';

import styles from './styles';
import registerLogo from '../../../assets/images/register-logo.png';

const Register = () => {
  return (
    <BackgroundView customStyle={styles.bodyWrapper}>
      <View style={styles.body}>
        <View style={styles.topImage}>
          <Image source={registerLogo} />
        </View>

        <View style={styles.spacer} />

        <Text style={styles.signUpText}>Sign Up</Text>
        <InputText
          label="Username"
          onChangeText={() => {}}
          placeholder="You Username Here"
          icon={<UserIcon />}
        />
        <View style={styles.spacer} />

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
        <PrimaryButton onPress={() => {}} label="Sign Up" />
      </View>
    </BackgroundView>
  );
};

export default Register;
