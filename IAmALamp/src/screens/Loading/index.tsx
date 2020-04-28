import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LampLoading } from '../../components/LampLoading';
import loadingText from '../../../assets/images/loading-text.png';
import theme from '../../components/theme';

const Loading = () => (
    <View style={styles.container}>
        <LampLoading />
        <Image source={loadingText} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    }
});

export default Loading;
