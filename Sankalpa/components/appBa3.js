import * as React from 'react';
import { Appbar, useTheme } from 'react-native-paper';


const AppBa3 = ({ title }) => {

    const theme = useTheme();


    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header style={{ backgroundColor: theme.colors.primary, colors: theme.colors.tertiary }} >
            <Appbar.BackAction color='#ffff' onPress={() => { }} />
            <Appbar.Content color='#ffff' title={title} />

            <Appbar.Action color='#ffff' icon="logout" onPress={_handleMore} />
            
        </Appbar.Header>
    );
};

export default AppBa3;