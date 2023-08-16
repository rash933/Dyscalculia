import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import * as ScreenOrientation from 'expo-screen-orientation';

const Loader = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Wait for 1 minute and then navigate to another page
        const timer = setTimeout(() => {
            // Set orientation to portrait before navigating to the next page
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

            // Navigate to the 'StuResults' page
            navigation.navigate('SNavBar');
        }, 300); // 300 milliseconds for demonstration purposes; replace with 60000 for 1 minute

        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator animating={true} size={150} color='#002060' />
        </View>
    );
};

export default Loader;
