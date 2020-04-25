import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  onPress: () => void;
  label: string;
}

export default ({ onPress, label }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.label}>{label?.toUpperCase()}</Text>
    </View>
  </TouchableOpacity>
);
