import React from 'react';
import { View } from 'react-native';

import Link from '../Link';
import { BackIcon } from '../Icon';

import styles from './styles';

interface Props {
  onBackPress: () => void;
}
const Navbar = ({ onBackPress }: Props) => {
  return (
    <View style={styles.navbar}>
      <Link onPress={onBackPress}>
        <BackIcon />
      </Link>
    </View>
  );
};

export default Navbar;
