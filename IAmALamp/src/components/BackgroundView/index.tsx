import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './styles';

interface Props {
  children?: Element;
  customStyle?: ViewStyle;
}
const BackgroundView = ({ children, customStyle }: Props) => {
  return <View style={[styles.view, customStyle]}>{children}</View>;
};

export default BackgroundView;
