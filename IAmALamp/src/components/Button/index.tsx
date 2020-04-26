import React from 'react';
import styles from './styles';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheetProperties,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface Props {
  onPress: () => void;
  label: string;
  icon?: React.Component;
  width?: number;
  customStyleLabel: TextStyle;
  customStyleButton: ViewStyle;
}

export default ({
  onPress,
  label,
  icon,
  width,
  customStyleButton,
  customStyleLabel,
}: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, customStyleButton, { width: width }]}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}

      <Text style={[styles.label, customStyleLabel]}>
        {label?.toUpperCase()}
      </Text>
    </View>
  </TouchableOpacity>
);
