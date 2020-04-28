import { StyleSheet } from 'react-native';
import theme from '../../components/theme';

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: theme.colors.background,
        height: '100%',
    },
    container: {
        marginHorizontal: 22,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 23,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginHorizontal: 10,
    },
    buttonStyle: {
        paddingLeft: 8,
    },
    myTagContainer: {
        marginVertical: 20,
        width: '100%',
    },
    myTagsStyle: {
        paddingHorizontal: 8,
    },
    topTagStyle: {
        borderBottomColor: theme.colors.gray,
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 8,
    },
    noTopTagsStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    noTagStyle: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: theme.colors.gray,
    },
    buttonContinueContainer: {
        width: '100%',
        marginVertical: 22,
    },
});
