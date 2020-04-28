import React, { useState } from 'react';
import { Text, View } from 'react-native';
import InputText from '../../components/InputText';
import List from '../../components/List';
import { styles } from './style';

interface ITagProps {
    myTags: string[];
    topTags: string[];
}

const Tag = ({ myTags, topTags }: ITagProps) => {
    const [tags, setTags] = useState([...myTags]);
    const [newTag, setNewTag] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Add Tags About you:
            </Text>
            <InputText
                onChangeText={setNewTag}
                value={newTag}
                placeholder="Example: Brown, Proud, Old, Strinky, etc"
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
};

export default Tag;
