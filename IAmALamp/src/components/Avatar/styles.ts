import { StyleSheet } from 'react-native';
import theme from '../theme';

export default (size: number, primary: boolean) => StyleSheet.create({
  image: {
    width: size,
    height: size,
    borderRadius: size/2,
    borderWidth: size/24,
    borderColor: primary ? theme.colors.primary : theme.colors.white,
  },
});
