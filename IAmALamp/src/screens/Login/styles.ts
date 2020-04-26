import { StyleSheet } from 'react-native';
import theme from '../../components/theme';

export default StyleSheet.create({
  bodyWrapper: {
    marginHorizontal: 38,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
    marginTop: 74,
  },

  loginButton: {
    marginTop: 68,
    alignItems: 'center',
  },
  forgotPasswordLink: {
    color: theme.colors.primary,
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    marginTop: 20,
  },
  inputs: {
    marginTop: 25,
  },
  spacer: {
    height: 20,
  },
  signUpContainer: {
    flexDirection: 'row',
  },
  signUpText: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    marginBottom: 34,
  },
  signUpLink: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    marginBottom: 34,
    color: theme.colors.primary,
    marginLeft: 5,
  },
});
