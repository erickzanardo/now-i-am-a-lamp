import React from 'react';

import { storiesOf } from '@storybook/react-native';

import PrimaryButton from '../../src/components/PrimaryButton';
import SecondaryButton from '../../src/components/SecondaryButton';

import InputText from '../../src/components/InputText';
import { MailIcon, HeartIcon } from '../../src/components/Icon';

storiesOf('Button', module)
  .add('primary button', () => <PrimaryButton label="Label" />)
  .add('secondary button', () => <SecondaryButton label="Label" />)
  .add('heart icon button', () => (
    <PrimaryButton label="Label" icon={<HeartIcon />} />
  ));

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
