import React, { useState } from 'react';
import { View, SegmentedControlIOSComponent } from 'react-native';
import AvatarHeader from '../../components/AvatarHeader';
import { TagIcon } from '../../components/Icon';
import BackgroundView from '../../components/BackgroundView';
import FeedItem from './FeedItem';
import List from '../../components/List';
import styles from './styles';
import InputText from '../../components/InputText';
import Link from '../../components/Link';
import { SendMessageIcon } from '../../components/Icon';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  object: string;
  days: number;
  avatarUrl: string;
  tags: Array<string>;
  messages: any[];
}

const Feed = ({ object, days, avatarUrl, messages, tags }: Props) => {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState(messages);

  const addMessage = () => {
    const daysValue = `${days} to say goodbye`;
    setMessageList([
      ...messageList,
      { avatarUrl, thing: object, expireDate: daysValue, message },
    ]);
    setMessage('');
  };

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
      <View style={styles.bodyFeed}>
        <ScrollView style={styles.feed}>
          {messageList.map((message) => (
            <FeedItem
              imageUrl={message.avatarUrl}
              object={message.thing}
              expireDate={message.expireDate}
              message={message.message}
            />
          ))}
        </ScrollView>
        <View style={styles.inputWrapper}>
          <View style={styles.inputViewWrapper}>
            <InputText
              onChangeText={(value: string) => setMessage(value)}
              placeholder="Type a message"
            />
          </View>
          <Link onPress={addMessage}>
            <SendMessageIcon />
          </Link>
        </View>
      </View>
    </BackgroundView>
  );
};

export default Feed;
