import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  onPress: () => void;
  children: Element;
}

const Link = ({ onPress, children }: Props) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export default Link;
