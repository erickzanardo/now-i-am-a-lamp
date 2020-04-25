import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  button: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 12,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: theme.colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
});
