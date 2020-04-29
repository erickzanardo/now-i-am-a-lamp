import React from 'react';
import Avatar from '../../components/Avatar';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  imageUrl: string;
  object: string;
  expireDate: string;
  message: string;
}

const FeedItem = ({ imageUrl, object, expireDate, message }: Props) => {
  return (
    <View style={styles.card}>
      <Avatar size={50} image={imageUrl} primary />
      <View style={styles.info}>
        <Text style={styles.object}>{object}</Text>
        <Text style={styles.expireDate}>{expireDate}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default FeedItem;
