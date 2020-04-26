import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
  iconContainer: {
    paddingRight: 15,
  },
});
