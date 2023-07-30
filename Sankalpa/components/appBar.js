import * as React from 'react';
import { Appbar, useTheme, Button, Dialog, Portal, Text, Provider as PaperProvider } from 'react-native-paper';
import { View,StyleSheet } from 'react-native';

const AppBa = () => {
    const theme = useTheme();
    const [visible, setVisible] = React.useState(false);

    const _handleMore = () => {
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
    };

    return (
       
            <Appbar.Header style={{ backgroundColor: theme.colors.primary, colors: theme.colors.tertiary }}>
                <Appbar.Content color='#ffff' title="SANKALPA MATH MASTER" />
                <Appbar.Action color='#ffff' icon="logout" onPress={_handleMore} />
            </Appbar.Header>
           
    );
};

export default AppBa;
