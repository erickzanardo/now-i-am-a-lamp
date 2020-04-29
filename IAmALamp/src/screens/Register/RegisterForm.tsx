import React, { useState } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import BackgroundView from '../../components/BackgroundView';
import InputText from '../../components/InputText';
import { MailIcon, PasswordIcon } from '../../components/Icon';
import PrimaryButton from '../../components/PrimaryButton';
import ErrorView from '../../components/ErrorView';

import styles from './styles';
import registerLogo from '../../../assets/images/register-logo.png';

interface Props {
  onRegister: (email: string, password: string) => Promise<void>;
}

const RegisterForm = ({ onRegister }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const register = () => {
    setLoading(true);
    setError(null);
    onRegister(email, password)
      .catch((e) => {
        console.log(e);
        setError(e);
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <BackgroundView customStyle={styles.bodyWrapper}>
      <View style={styles.body}>
        <View style={styles.topImage}>
          <Image source={registerLogo} />
        </View>

        <View style={styles.spacer} />

        <InputText
          label="Email"
          onChangeText={(text) => setEmail(text)}
          placeholder="example@email.com"
          icon={<MailIcon />}
        />
        <View style={styles.spacer} />

        <InputText
          label="Password"
          onChangeText={(text) => setPassword(text)}
          placeholder="Your Password Here"
          isSecure
          icon={<PasswordIcon />}
        />

        {error && (
          <>
            <View style={styles.spacer} />
            <ErrorView label={error} />
          </>
        )}
      </View>
      <View style={styles.spacer} />
      <View style={styles.loginButton}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <PrimaryButton onPress={register} label="Sign Up" />
        )}
      </View>
    </BackgroundView>
  );
};

export default RegisterForm;
