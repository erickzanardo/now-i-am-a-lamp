import { StyleSheet } from 'react-native';
import theme from '../../components/theme';

export default StyleSheet.create({
  bodyWrapper: {
    marginHorizontal: 38,
    justifyContent: 'space-between',
  },
  objectImage: {
    alignItems: 'flex-end',
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#ff0000',
    height: 196,
    width: 244,
    justifyContent: 'flex-end',
  },
  body: {
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    marginBottom: 20,
  },
  titleObjectText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    marginBottom: 20,
    color: theme.colors.primary,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  subTitleContainer: {
    flexDirection: 'row',
    width: 280,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
  subTitleObjectText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: theme.colors.primary,
  },
  subTitleTextNumber: {
    fontFamily: 'Roboto-Bold',
    color: theme.colors.primary,
    fontSize: 52,
    marginRight: 10,
  },
  buttonsContainer: {
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lifeText: {
    marginTop: 38,
  },
  refreshImage: {
    right: -25,
    bottom: -20,
  },
});
