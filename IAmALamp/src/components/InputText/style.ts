import {StyleSheet} from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  input: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  label: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: theme.colors.primary,
  },
});
