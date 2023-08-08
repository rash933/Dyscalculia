import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation, useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar, Button, Dialog, Portal, Provider as PaperProvider } from 'react-native-paper';
import StdHomeScreen from '../screens/SHome';
import StdTermsScreen from '../screens/STerms';
import StdLogOutScreen from '../screens/SProfile';
import AppBa from './appBar';
import StdProfileScreen from '../screens/SProfile';
import TTermsScreen from '../screens/TTerms';
import StuProfile from '../screens/StudentProfile';
import { BackHandler } from 'react-native';

// const homeName = 'Home';
// const termsName = 'Terms';
// const logOutName = 'LogOut';

// const homeName = 'Home';
// const termsName = 'Terms';
// const logOutName = 'LogOut';

const Tab = createBottomTabNavigator();

const SNavBar = () => {
    
    const theme = useTheme();
    const [visible, setVisible] = React.useState(false);

    const _handleMore = () => {
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
    };
    const handleLogout = () => {
        // Perform any logout actions or API calls here if needed
        BackHandler.exitApp();
        setVisible(false);
    };


    return (

        <PaperProvider >
            <Appbar.Header style={{ backgroundColor: theme.colors.primary, colors: theme.colors.tertiary }}>
                <Appbar.Content color='#ffff' title="SANKALPA   MATH   MASTER" />
                <Appbar.Action color='#ffff' icon="logout" onPress={_handleMore} />
            </Appbar.Header>
            <Portal >
                <Dialog visible={visible} onDismiss={hideDialog} >

                    <Dialog.Content style={styles.container}>
                        <Image
                            style={styles.image}
                            source={require('../assets/icon.png')}
                        />
                        <Dialog.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>LOG OUT !</Dialog.Title>
                        <Text style={{ textAlign: 'center', }} variant="bodyMedium">Are you sure you want to logout</Text>
                        <View style={styles.row}>
                            <Button mode='contained' style={{ width: 100 }} buttonColor='#002060' onPress={handleLogout}>Yes</Button>
                            <Button mode='contained' style={{ width: 100 }} buttonColor='#002060' onPress={hideDialog}>No</Button>

                        </View>
                    </Dialog.Content>

                </Dialog>
            </Portal>

            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}

                tabBar={({ navigation, state, descriptors, insets }) => (
                    <BottomNavigation.Bar
                        activeColor='#a5a1a1'
                        inactiveColor='#ffff'

                        style={{ backgroundColor: theme.colors.primary }}
                        navigationState={state}
                        safeAreaInsets={insets}
                        onTabPress={({ route, preventDefault }) => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (event.defaultPrevented) {
                                preventDefault();
                            } else {
                                navigation.dispatch({
                                    ...navigation.navigate(route.name, route.params),
                                    target: state.key,
                                });
                            }
                        }}
                        renderIcon={({ route, focused, color }) => {

                            const { options } = descriptors[route.key];
                            if (options.tabBarIcon) {
                                return options.tabBarIcon({ focused, color, size: 24 });
                            }

                            return null;
                        }}
                        getLabelText={({ route }) => {
                            const { options } = descriptors[route.key];
                            const label =
                                options.tabBarLabel !== undefined
                                    ? options.tabBarLabel
                                    : options.title !== undefined
                                        ? options.title
                                        : route.title;

                            return label;
                        }}
                    />
                )}
            >

                <Tab.Screen
                    name="homeName"
                    component={StdHomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ size }) => {
                            return <Ionicons name='md-book-sharp' size={28} color='white' />;
                        },
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={StuProfile}
                    options={{


                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ size }) => {
                            return <Ionicons name='md-person-sharp' size={30} color='white' />;
                        },
                    }}
                />
                <Tab.Screen
                    name="termsName"
                    component={TTermsScreen}
                    options={{
                        tabBarLabel: 'Terms',
                        tabBarIcon: ({ size }) => {
                            return <Ionicons name='shield-checkmark' size={28} color='white' />;
                        },
                    }}
                />
            </Tab.Navigator>
        </PaperProvider>

    );
};



const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: 50,
        height: 50,

    },
    row: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 350,
        marginTop: 20


    },
});

export default SNavBar;