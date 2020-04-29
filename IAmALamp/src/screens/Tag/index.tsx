import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import InputText from '../../components/InputText';
import List from '../../components/List';
import { AddIcon, AddIconColor, TagIcon } from '../../components/Icon';
import AvatarHeader from '../../components/AvatarHeader';
import sadTag from '../../../assets/images/sad-tag.png';
import { styles } from './style';
import PrimaryButton from '../../components/PrimaryButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/reducers';
import { NavigationProp } from '@react-navigation/native';

const listItemHorizontal = {
  left: <TagIcon />,
  titleStyle: { marginHorizontal: 10 },
  style: styles.myTagsStyle,
};

const listItemVertical = {
  left: <TagIcon />,
  right: <AddIcon />,
  style: styles.topTagStyle,
  titleStyle: { marginHorizontal: 10 },
};

interface Props {
  navigation: NavigationProp<any>;
}

const Tag = ({ navigation }: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>('');
  const [topTags] = useState<string[]>([]);

  const addNewTag = () => {
    setTags([...tags, newTag]);
    setNewTag('');
  };

  const dispatch = useDispatch();

  const thing = useSelector((state: RootState) => state.user.thing);
  const confirm = () => {
    dispatch({ type: 'ADD_TAGS', payload: { tags } });
    navigation.navigate('Feed');
  };

  return (
    <ScrollView style={styles.wrapper}>
      <AvatarHeader
        label={`${thing!.name} | 7 days`}
        avatarUrl={thing!.imageUrl}
      />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Add Tags About you:</Text>
        </View>
        <View style={styles.inputContainer}>
          <InputText
            onChangeText={setNewTag}
            value={newTag}
            placeholder="Example: Brown, Proud, Old, Strinky, etc"
            autoCorrect={false}
            onSubmitEditing={addNewTag}
          />
          <TouchableOpacity onPress={addNewTag} style={styles.buttonStyle}>
            <AddIconColor />
          </TouchableOpacity>
        </View>
        <View style={styles.myTagContainer}>
          <List title="My Tags" horizontal={true} style={{ height: 30 }}>
            {tags.length ? (
              tags.map((tag) => (
                <List.Item {...{ ...listItemHorizontal, title: tag }} />
              ))
            ) : (
              <Text style={styles.noTagStyle}>Add or create a Tag</Text>
            )}
          </List>
        </View>
        <View style={styles.myTagContainer}>
          <List title="Shoes Top Tags" style={{ marginHorizontal: 18 }}>
            {topTags.length ? (
              topTags.map((tag) => (
                <List.Item {...{ ...listItemVertical, title: tag }} />
              ))
            ) : (
              <View style={styles.noTopTagsStyle}>
                <Image source={sadTag} />
              </View>
            )}
          </List>
        </View>
        <View style={styles.buttonContinueContainer}>
          <PrimaryButton label="CONTINUE" onPress={confirm} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Tag;
