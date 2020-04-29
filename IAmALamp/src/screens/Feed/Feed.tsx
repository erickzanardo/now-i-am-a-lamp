import React from 'react';
import { View } from 'react-native';
import AvatarHeader from '../../components/AvatarHeader';
import { TagIcon } from '../../components/Icon';
import BackgroundView from '../../components/BackgroundView';
import FeedItem from './FeedItem';
import List from '../../components/List';
import styles from './styles';

interface Props {
  object: string;
  days: number;
  avatarUrl: string;
  expireDate: string;
  message: string;
  tags: Array<string>;
}

const Feed = ({
  object,
  days,
  avatarUrl,
  expireDate,
  message,
  tags,
}: Props) => {
  return (
    <BackgroundView>
      <AvatarHeader
        label={`${object.toUpperCase()} | ${days} Days}`}
        avatarUrl={avatarUrl}></AvatarHeader>
      <View style={styles.tagList}>
        <List horizontal={true} style={{ height: 30 }}>
          {tags.map((tag) => (
            <List.Item titleStyle={styles.tagTitleStyle} left={<TagIcon />} title={tag} />
          ))}
        </List>
      </View>
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
