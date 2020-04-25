import React from 'react';

import { storiesOf } from '@storybook/react-native';

import PrimaryButton from '../../src/components/PrimaryButton';
import SecondaryButton from '../../src/components/SecondaryButton';

import InputText from '../../src/components/InputText';
import {MailIcon} from '../../src/components/Icon';

storiesOf('PrimaryButton', module)
  .add('primaryButton', () => <PrimaryButton label="Label" />)
  .add('secondaryButton', () => <SecondaryButton label="Label" />);

storiesOf('InputText', module)
  .add('default', () => (
    <InputText
      placeholder="Type something cool here"
      onChangeText={(text) => console.log(text)}
    />
  ))
  .add('with label', () => (
    <InputText
      label="Password"
      placeholder="Type something cool here"
      onChangeText={(text) => console.log(text)}
    />
  ))
  .add('with icon', () => (
    <InputText
      label="Password"
      icon={<MailIcon />}
      placeholder="Type something cool here"
      onChangeText={(text) => console.log(text)}
    />
  ));
