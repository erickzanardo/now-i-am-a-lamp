import React from 'react';
import { View, Image, Text } from 'react-native';

import BackgroundView from '../../components/BackgroundView';
import InputText from '../../components/InputText';
import { MailIcon } from '../../components/Icon';
import PrimaryButton from '../../components/PrimaryButton';

import styles from './styles';
import forgotPasswordLogo from '../../../assets/images/forgot-password-logo.png';

const ForgotPassword = () => {
  return (
    <BackgroundView customStyle={styles.bodyWrapper}>
      <View style={styles.body}>
        <View style={styles.topImage}>
          <Image source={forgotPasswordLogo} />
        </View>

        <View style={styles.spacer} />

        <Text style={styles.titleText}>Did someone forget their password?</Text>
        <Text style={styles.subTitleText}>
          That’s ok =]. Just ententer the email address you’ve used to register
        </Text>

        <InputText
          label="Email"
          onChangeText={() => {}}
          placeholder="example@email.com"
          icon={<MailIcon />}
        />
      </View>
      <View style={styles.submitButton}>
        <PrimaryButton onPress={() => {}} label="Submit" />
      </View>
    </BackgroundView>
  );
};

export default ForgotPassword;
