import React from 'react';
import { View } from 'react-native';
import AvatarHeader from '../../components/AvatarHeader';
import BackgroundView from '../../components/BackgroundView';
import FeedItem from './FeedItem';
import styles from './styles';

interface Props {
  object: string;
  days: number;
  avatarUrl: string;
  expireDate: string;
  message: string;
}

const Feed = ({ object, days, avatarUrl, expireDate, message }: Props) => {
  return (
    <BackgroundView>
      <AvatarHeader
        label={`${object.toUpperCase()} | ${days} Days}`}
        avatarUrl={avatarUrl}></AvatarHeader>
      <View style={styles.feed}>
        <FeedItem
          imageUrl={avatarUrl}
          object={object}
          expireDate={expireDate}
          message={message}
        />
      </View>
    </BackgroundView>
  );
};

export default Feed;
