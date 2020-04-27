import React from 'react';

import styles from './styles';
import Button from '../Button';

interface Props {
  onPress: () => void;
  label: string;
  icon?: Element;
  width?: number;
}

export default (props: Props) => (
  <Button
    {...props}
    customStyleButton={styles.button}
    customStyleLabel={styles.label}
  />
);
