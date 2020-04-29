import React from 'react';
import { Image } from 'react-native';

import aboutIcon from '../../../assets/images/about-icon.png';
import addIcon from '../../../assets/images/add-icon.png';
import addIconColor from '../../../assets/images/add-icon-color.png';
import backIcon from '../../../assets/images/back-icon.png';
import heartIcon from '../../../assets/images/white-heart.png';
import mainIcon from '../../../assets/images/mail-icon.png';
import passwordIcon from '../../../assets/images/password-icon.png';
import signOutIcon from '../../../assets/images/signout-icon.png';
import tagIcon from '../../../assets/images/tag-icon.png';
import userIcon from '../../../assets/images/user-icon.png';
import refreshImageIcon from '../../../assets/images/refresh-image-icon.png';
import heartEmptyIcon from '../../../assets/images/heart-empty-icon.png';

export const AboutIcon = () => <Image source={aboutIcon} />;

export const AddIcon = () => <Image source={addIcon} />;

export const AddIconColor = () => <Image source={addIconColor} />;

export const BackIcon = () => <Image source={backIcon} />;

export const HeartIcon = () => <Image source={heartIcon} />;

export const MailIcon = () => <Image source={mainIcon} />;

export const PasswordIcon = () => <Image source={passwordIcon} />;

export const SignOutIcon = () => <Image source={signOutIcon} />;

export const TagIcon = () => <Image source={tagIcon} />;

export const UserIcon = () => <Image source={userIcon} />;

export const RefreshImageIcon = () => <Image source={refreshImageIcon} />;

export const HeartEmptyIcon = () => <Image source={heartEmptyIcon} />;
