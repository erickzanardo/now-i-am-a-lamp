import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import PrimaryButton from '../../src/components/PrimaryButton';
import SecondaryButton from '../../src/components/SecondaryButton';
import Avatar from '../../src/components/Avatar';
import Link from '../../src/components/Link';
import InputText from '../../src/components/InputText';
import { 
  MailIcon,
  HeartIcon,
  TagIcon,
  AddIcon,
} from '../../src/components/Icon';
import BackgroundView from '../../src/components/BackgroundView';
import Navbar from '../../src/components/Navbar';
import List from '../../src/components/List';
import theme from '../../src/components/theme';
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

const listItemVertical = {
  left: <TagIcon />,
  right: <AddIcon />,
  style: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  titleStyle:{ marginHorizontal: 10 },
  style: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
};

const listItemHorizontal = {
  left: <TagIcon />,
  titleStyle:{ marginHorizontal: 10 },
  style: {
    borderRightColor: theme.colors.gray,
    borderRightWidth: 1,
    paddingHorizontal: 8,
  },
};

storiesOf('List', module)
  .add('Vertical List', () => (
    <List title="Shoes Top Tags" style={{ marginHorizontal: 18 }}>
      <List.Item {...{ ...listItemVertical, title: 'Old Brown' }} />
      <List.Item {...{ ...listItemVertical, title: 'Kick Ass' }} />
      <List.Item {...{ ...listItemVertical, title: 'Stinky' }} />
    </List>
  ))
  .add('Horizontal List', () => (
    <List title="My Tags" horizontal={true} style={{ height: 30 }}>
        <List.Item {...{ ...listItemHorizontal, title: 'Blue Jay Way' }} />
        <List.Item {...{ ...listItemHorizontal, title: 'Only a Nothern Song' }} />
        <List.Item {...{ ...listItemHorizontal, title: 'Id have you anytime ' }} />
        <List.Item {...{ ...listItemHorizontal, title: 'My Sweet Lord' }} />
        <List.Item {...{ ...listItemHorizontal, title: 'Isnt it a Pity' }} />
        <List.Item {...{ ...listItemHorizontal, title: 'Beware of Darkness' }} />
    </List>
  ));

storiesOf('Loading', module)
  .add('Loading', () => <LampLoading />);

storiesOf('AvatarHeader', module).add('header', () => (
  <AvatarHeader
    label="Shoe | 7 days"
    avatarUrl="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  />
));

storiesOf('ErrorView', module).add('error', () => <ErrorView label="Ops" />);
