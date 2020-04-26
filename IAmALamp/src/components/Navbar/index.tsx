import React from 'react';
import { View } from 'react-native';

import Link from '../Link';
import { BackIcon } from '../Icon';

import styles from './styles';

interface Props {
  onPress: () => void;
}
const Navbar = ({ onPress }: Props) => {
  return (
    <View style={styles.navbar}>
      <Link onPress={onPress}>
        <BackIcon />
      </Link>
    </View>
  );
};

export default Navbar;
