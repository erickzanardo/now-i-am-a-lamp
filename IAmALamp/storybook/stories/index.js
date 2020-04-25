import React from 'react';

import { storiesOf } from '@storybook/react-native';

import PrimaryButton from '../../src/components/PrimaryButton';
import SecondaryButton from '../../src/components/SecondaryButton';

storiesOf('PrimaryButton', module)
  .add('primaryButton', () => <PrimaryButton label="Label" />)
  .add('secondaryButton', () => <SecondaryButton label="Label" />);
