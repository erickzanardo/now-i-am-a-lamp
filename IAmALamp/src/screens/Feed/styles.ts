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
    marginTop: 10,
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
  tagList: {
    marginTop: 18,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  tagTitleStyle: {
    marginHorizontal: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  inputViewWrapper: {
    flex: 0.9,
  },
  bodyFeed: {
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 100,
  },
});
