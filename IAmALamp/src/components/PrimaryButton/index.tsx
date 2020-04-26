import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  onPress: () => void;
  label: string;
  icon?: React.Component;
}

export default ({ onPress, label, icon }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}

      <Text style={styles.label}>{label?.toUpperCase()}</Text>
    </View>
  </TouchableOpacity>
);
