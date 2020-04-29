import React from 'react';

import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

interface Props {
  image: string;
  size: number;
  primary: boolean;
}

export default ({ image, size, primary = true }: Props) => (
  <Image style={styles(size, primary).image} source={{ uri: image }} />
);
