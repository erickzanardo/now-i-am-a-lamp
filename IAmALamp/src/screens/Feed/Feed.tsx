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
  tags: Array<string>;
  messages: any[];
}

const Feed = ({ object, days, avatarUrl, messages, tags }: Props) => {
  return (
    <BackgroundView>
      <AvatarHeader
        label={`${object.toUpperCase()} | ${days} Days`}
        avatarUrl={avatarUrl}></AvatarHeader>
      <View style={styles.tagList}>
        <List horizontal={true} style={{ height: 30 }}>
          {tags.map((tag) => (
            <List.Item
              titleStyle={styles.tagTitleStyle}
              left={<TagIcon />}
              title={tag}
            />
          ))}
        </List>
      </View>
      <View style={styles.feed}>
        {messages.map((message) => (
          <FeedItem
            imageUrl={message.avatarUrl}
            object={message.thing}
            expireDate={message.expireDate}
            message={message.message}
          />
        ))}
      </View>
    </BackgroundView>
  );
};

export default Feed;
