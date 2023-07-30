import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

const AppBa2 = ({ title }) => {

    const navigation = useNavigation();
    const theme = useTheme();
    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header style={{ backgroundColor: theme.colors.primary, colors: theme.colors.tertiary }} >
            <Appbar.BackAction color='#ffff' onPress={() => { navigation.goBack() }} />
            <Appbar.Content color='#ffff' title={title} />
            <Appbar.Action color='#ffff' icon="window-close" onPress={_handleMore} />
        </Appbar.Header>
    );
};


export default AppBa2;
