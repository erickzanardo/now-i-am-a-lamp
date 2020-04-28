import React, { useState, useEffect } from 'react';
import { View, Animated, Image } from 'react-native';
import brightLight from '../../../assets/images/bright-light.png';
import loadingLamp from '../../../assets/images/loading-lamp.png'

export const LampLoading = () => {
    const [loadingSpin] = useState(new Animated.Value(0));
    const loadingAnimation = () => {
        loadingSpin.setValue(0);
        Animated.sequence([
            Animated.timing(loadingSpin, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            })
        ]).start(loadingAnimation);
    };

    useEffect(() => () => loadingAnimation(), [loadingSpin]);

    const spin = loadingSpin.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg', '360deg'],
    });

    loadingAnimation();

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Animated.Image source={brightLight} style={{ transform: [{ rotate: spin }] }} />
            <Image source={loadingLamp} style={{ position: 'absolute', top: 50 }} />
        </View>
    );
};
