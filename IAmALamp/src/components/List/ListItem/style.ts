import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	leftStyle: {
		alignItems: 'flex-start',
	},
	titleStyle: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		color: theme.colors.darkGray,
	},
	rightStyle: {
		flex: 1,
		alignItems: 'flex-end',
	}
});
