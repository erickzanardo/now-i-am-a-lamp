import React from 'react';
import { View, Text, FlatList, TextStyle, ViewStyle } from 'react-native';
import { styles } from './style';
import { ListItem } from './ListItem';

interface IListProps {
    children: JSX.Element | JSX.Element[];
    horizontal?: boolean;
    style?: ViewStyle;
    title?: string;
    titleStyle?: TextStyle;
}

export default class List extends React.Component<IListProps, {}> {
    public static Item = ListItem;

    render() {
        const {
            children,
            horizontal = false,
            style,
            title,
            titleStyle,
        } = this.props;

        const items = children instanceof Array ? children : [children];

        return (
            <>
                {title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}
                <View style={style}>
                    <FlatList
                        horizontal={horizontal}
                        data={items}
                        renderItem={({ item }) => <>{item}</>}
                        keyExtractor={(_, index) => index.toString()}
                    />
                </View>
            </>
        );
    }
}
