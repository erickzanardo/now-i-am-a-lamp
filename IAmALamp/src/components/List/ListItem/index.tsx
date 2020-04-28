import React, { ReactNode } from 'react';
import {
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { styles } from './style';

export interface IListItemProps {
	left?: ReactNode;
	leftStyle?: ViewStyle;
	onPress?: () => void;
	right?: ReactNode;
	rightStyle?: ViewStyle;
	style?: ViewStyle;
	title: string;
	titleStyle?: TextStyle;
}

export const ListItem = ({
	left,
	leftStyle,
	onPress,
	right,
	rightStyle,
	style,
	title,
	titleStyle,
}: IListItemProps): JSX.Element => (
	<TouchableOpacity
		{...{ onPress, activeOpacity: onPress ? 0.2 : 1 }}>
		<View style={[styles.container, style]}>
			<View style={[styles.leftStyle, leftStyle]}>{left}</View>
			<Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
			<View style={[styles.rightStyle, rightStyle]}>{right}</View>
		</View>
	</TouchableOpacity>
);
