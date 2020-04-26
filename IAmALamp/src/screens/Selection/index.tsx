import React from 'react';

import { View, Text, Image } from 'react-native';

import BackgroundView from '../../components/BackgroundView';
import PrimaryButton from '../../components/PrimaryButton';
import InputText from '../../components/InputText';

import styles from './styles';
import lamp from '../../../assets/images/lamp.png';

export default () => {
  return (
    <BackgroundView>
      <View style={styles.container}>
        <Image style={styles.image} source={lamp} />
        <Text style={styles.text}>Now, I'am a(n):</Text>
        <InputText
          placeholder="Example: Teapot, Shoe, Car, Dog, etc..."
          onChangeText={(text) => {}}
        />
        <View style={styles.spacer} />
        <PrimaryButton onPress={() => {}} label="CONTINUE" width={300} />
      </View>
    </BackgroundView>
  );
};
