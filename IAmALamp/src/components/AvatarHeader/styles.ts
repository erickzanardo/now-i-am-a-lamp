import { StyleSheet, Dimensions } from 'react-native';
import theme from '../theme';

const sw = () => Dimensions.get('window').width;
const w = () => sw() * 1.5;

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    aspectRatio: 1,
    marginTop: w() * 0.6 * -1,
    marginLeft: sw() / 2 - w() / 2,
    width: w(),
    backgroundColor: theme.colors.primary,
    borderBottomStartRadius: w() / 2,
    borderBottomEndRadius: w() / 2,

    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wrapper: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: theme.colors.white,
  },
});
