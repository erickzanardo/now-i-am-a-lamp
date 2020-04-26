import React from 'react';
import { View } from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
}
const Navbar = ({ onPress }: Props) => {
  return <View style={styles.navbar}></View>;
};

export default Navbar;
