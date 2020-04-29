import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

import Icons from './icons';

type Props = {
  title: string;
  iconName: 'home' | 'tags' | 'options';
  isFocused?: boolean;
  onPress: () => void;
};

const BottomMenuItem = ({ title, iconName, isFocused, onPress }: Props) => {
  return (
    <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
      <Image
        style={isFocused ? styles.imageDark : styles.image}
        source={Icons[iconName]}
      />
      <Text style={isFocused ? styles.buttonTextBlack : styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BottomMenuItem;
