import { StyleSheet } from 'react-native';

import theme from '../theme';

const outerSize = 55;
const lineSize = 34;

export default StyleSheet.create({
  wrapper: {
    height: outerSize,
    justifyContent: 'center',
  },
  view: {
    backgroundColor: theme.colors.red,
  },
  circle: {
    height: outerSize,
    width: outerSize,
    borderRadius: outerSize / 2,
    marginTop: ((outerSize - lineSize) / 2) * -1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  container: {
    height: lineSize,
    flexDirection: 'row',
    paddingHorizontal: 17,
  },
  labelContainer: {
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Roboto-Bold',
    color: theme.colors.white,
    fontSize: 14,
  },
});
