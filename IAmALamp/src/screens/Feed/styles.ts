import { StyleSheet } from 'react-native';
import theme from '../../components/theme';

export default StyleSheet.create({
  card: {
    height: 92,
    alignItems: 'center',
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  feed: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
  },
  object: {
    color: theme.colors.primary,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
  expireDate: {
    fontFamily: 'Roboto-Light',
    fontSize: 10,
  },
  body: {
    marginLeft: 15,
    flex: 1,
  },
  message: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    marginTop: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
