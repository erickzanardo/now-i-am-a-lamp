import React from 'react';
import { Image, ImageStyle } from 'react-native';
import * as iconAssets from '../../../../../assets/images/icons';

export interface IListIconProps {
	icon:
    | 'aboutIcon'
    | 'addIcon'
    | 'backIcon'
    | 'heartIcon'
    | 'mainIcon'
    | 'passwordIcon'
    | 'signOutIcon'
    | 'tagIcon'
    | 'userIcon';
	width?: number;
	height?: number;
	style?: ImageStyle;
}

export const ListIcon = ({
	icon,
	width,
	height,
	style,
}: IListIconProps): JSX.Element => (
	<Image
		{...{ source: iconAssets[icon], width, height, style }}
	/>
);
