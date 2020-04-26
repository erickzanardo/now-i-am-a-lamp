import React from 'react';
import { Image } from 'react-native';

import mainIcon from '../../../assets/images/mail-icon.png';
import heartIcon from '../../../assets/images/white-heart.png';
import passwordIcon from '../../../assets/images/password-icon.png';

export const MailIcon = () => <Image source={mainIcon} />;

export const HeartIcon = () => <Image source={heartIcon} />;

export const PasswordIcon = () => <Image source={passwordIcon} />;
