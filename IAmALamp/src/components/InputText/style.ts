import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  input: {
    fontFamily: 'Roboto',
    fontSize: 16,
    width: '100%',
  },
  label: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: theme.colors.primary,
  },
  container: {
    height: 60,
    width: '100%',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
  },
  iconWrapper: {
    width: 40,
    height: 50,
    justifyContent: 'center',
  },
  wrapper: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
  },
});
