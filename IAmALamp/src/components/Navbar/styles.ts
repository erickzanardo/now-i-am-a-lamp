import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
  },
  navbar: {
    backgroundColor: theme.colors.primary,
    height: 64,
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
