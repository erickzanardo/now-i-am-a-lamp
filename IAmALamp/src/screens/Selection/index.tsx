import React, { useState } from 'react';

import { View, Text, Image } from 'react-native';

import BackgroundView from '../../components/BackgroundView';
import PrimaryButton from '../../components/PrimaryButton';
import InputText from '../../components/InputText';

import styles from './styles';
import lamp from '../../../assets/images/lamp.png';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

export default ({ navigation }: Props) => {
  const [objectText, setObjectText] = useState('');

  return (
    <BackgroundView>
      <View style={styles.container}>
        <Image style={styles.image} source={lamp} />
        <Text style={styles.text}>Now, I'am a(n):</Text>
        <InputText
          placeholder="Example: Teapot, Shoe, Car, Dog, etc..."
          onChangeText={(text) => setObjectText(text)}
        />
        <View style={styles.spacer} />
        <PrimaryButton
          onPress={() =>
            navigation.navigate('Confirmation', {
              objectText,
            })
          }
          label="Continue"
          width={300}
        />
      </View>
    </BackgroundView>
  );
};
