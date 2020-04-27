import React from 'react';
import { Image } from 'react-native';

import aboutIcon from './about-icon.png';
import addIcon from './add-icon.png';
import backIcon from '../../../assets/images/back-icon.png';
import heartIcon from '../../../assets/images/white-heart.png';
import mainIcon from '../../../assets/images/mail-icon.png';
import passwordIcon from '../../../assets/images/password-icon.png';
import signOutIcon from './signOutIcon.png';
import tagIcon from './tag-icon.png';
import userIcon from '../../../assets/images/user-icon.png';

export const AboutIcon = () => <Image source={aboutIcon} />;

export const AddIcon = () => <Image source={addIcon} />;

export const BackIcon = () => <Image source={backIcon} />;

export const HeartIcon = () => <Image source={heartIcon} />;

export const MailIcon = () => <Image source={mainIcon} />;

export const PasswordIcon = () => <Image source={passwordIcon} />;

export const SignOutIcon = () => <Image source={signOutIcon} />;

export const TagIcon = () => <Image source={tagIcon} />;

export const UserIcon = () => <Image source={userIcon} />;
