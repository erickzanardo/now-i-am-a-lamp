import React from 'react';
import { View, Image, Text } from 'react-native';

import BackgroundView from '../../components/BackgroundView';
import PrimaryButton from '../../components/PrimaryButton';

import styles from './styles';
import { HeartIcon } from '../../components/Icon';
import SecondaryButton from '../../components/SecondaryButton';

const Register = () => {
  return (
    <BackgroundView customStyle={styles.bodyWrapper}>
      <View style={styles.body}>
        <View style={styles.objectImage} />

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Yeah! You’re a<Text style={styles.titleObjectText}> Shoe </Text>now
          </Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitleTextNumber}>32</Text>
          <Text style={styles.subTitleText}>
            people are living as
            <Text style={styles.subTitleObjectText}> Shoes </Text>right now.
          </Text>
        </View>
        <View style={styles.lifeText}>
          <Text style={styles.subTitleText}>
            Are you ok to live
            <Text style={styles.subTitleObjectText}> 7 days </Text>as a
            <Text style={styles.subTitleObjectText}> Shoe</Text>?
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          width={165}
          onPress={() => {}}
          label="Yes!!!"
          icon={<HeartIcon />}
        />
        <SecondaryButton width={165} onPress={() => {}} label="Cancel" />
      </View>
    </BackgroundView>
  );
};

export default Register;
