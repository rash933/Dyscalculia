import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Loader = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Wait for 1 minute and then navigate to another page
        const timer = setTimeout(() => {
            navigation.navigate('StuResults'); // Replace 'AnotherPage' with the name of the target page in your navigator.
        }, 300); // 60000 milliseconds = 1 minute

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator animating={true} size={150} color='#21005D' />
        </View>
    );
};

export default Loader;
