import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import PrimaryButton from '../../src/components/PrimaryButton';
import SecondaryButton from '../../src/components/SecondaryButton';
import Avatar from '../../src/components/Avatar';
import Link from '../../src/components/Link';

import InputText from '../../src/components/InputText';
import { MailIcon, HeartIcon } from '../../src/components/Icon';

import BackgroundView from '../../src/components/BackgroundView';
import Navbar from '../../src/components/Navbar';
import { LampLoading } from '../../src/components/LampLoading';
import ErrorView from '../../src/components/ErrorView';
import AvatarHeader from '../../src/components/AvatarHeader';

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

storiesOf('Avatar', module)
  .add('primary avatar', () => (
    <Avatar
      image="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      size={120}
      primary={true}
    />
  ))
  .add('secondary avatar', () => (
    <Avatar
      image="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      size={120}
    />
  ));

storiesOf('BackgroundView', module).add('background view layout', () => (
  <BackgroundView />
));

storiesOf('Navbar', module).add('navbar', () => (
  <Navbar onBackPress={() => {}} />
));

storiesOf('Link', module).add('link', () => (
  <Link onPress={() => {}}>
    <Text>My link</Text>
  </Link>
));

storiesOf('Loading', module).add('Loading', () => <LampLoading />);

storiesOf('AvatarHeader', module).add('header', () => (
  <AvatarHeader
    label="Shoe | 7 days"
    avatarUrl="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  />
));

storiesOf('ErrorView', module).add('error', () => <ErrorView label="Ops" />);
