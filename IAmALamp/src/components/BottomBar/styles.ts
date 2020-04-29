import { StyleSheet } from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    backgroundColor: theme.colors.primary,
    fontSize: 12,
    tintColor: theme.colors.white,
    paddingTop: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  image: {
    tintColor: theme.colors.white,
    marginBottom: 10,
  },
  imageDark: {
    tintColor: theme.colors.black,
    marginBottom: 10,
  },
  buttonTextBlack: {
    color: theme.colors.black,
  },
  buttonText: {
    color: theme.colors.white,
  },
});
