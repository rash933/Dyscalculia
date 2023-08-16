import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Avatar, Divider, IconButton, Card, Text, Button } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';
import THomeScreen from './THome';
import AppBa2 from '../components/appBar2';
import AppBa3 from '../components/appBa3';

const Instruction = ({navigation}) => {
    useEffect(() => {
        // Lock the orientation to landscape mode when the component is mounted
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

        // Set a timeout to unlock the orientation and navigate to another screen after 2 seconds
        const timeout = setTimeout(() => {
            // Unlock the orientation before leaving the page
            ScreenOrientation.unlockAsync();

            // Navigate to another screen (replace with your screen name)
            navigation.navigate('GamePage1');
        }, 2000); // 2 seconds

        // Clean up the timeout when the component is unmounted
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <View>
            <StatusBar style="inverted" />
            <AppBa3 title={'Instructions '} />
            <View style={styles.container}>



                <View style={styles.box2}>


                    <View style={styles.box3}>


                        <ImageBackground source={require('../assets/image/Frame7.png')} resizeMode="cover" >


                            <View style={styles.boxb}>

                                <Text style={styles.largeText} variant="titleLarge">INSTRUCTIONS</Text>
                                <Text style={styles.smallText2} >True or false?</Text>
                                <Text style={styles.smallText2} >A mistake will deduct marks.</Text>
                                <Text style={styles.smallText2} >30 seconds for one question.</Text>
                                <Text style={styles.smallText2} >How many correct answers can you get?</Text>

                                <View style={styles.box4}>
                                    <Button textColor='#ffff' mode='contained'>CONTINUE</Button>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                </View>
                {/* <Button title="Go Back" onPress={handleGoBack} /> */}
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    margin: {
        margin: 18
    },
    card: {
        marginTop: 15, marginLeft: 15, justifyContent: 'center',
        alignItems: 'center',
        width: 210
    },
    container: {
        flex: 1,


    },
    box1: {
        marginTop: 18,
        marginBottom: 18,
        marginLeft: 18,
        marginRight: 18,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    box2: {
        height: 50
    },
    // box3: {
    //     marginTop: 30,
    //     height: 250,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     marginBottom: 15,
    //     width: 700,
    //     justifyContent: 'space-between',
    //     alignContent: 'space-around'

    // },
    Headding: {
        fontSize: 19,

    },
    box2: {
        height: 300,
        flexDirection: "row",
        margin: 23,
        width: 500,
        alignSelf: 'center'
    },
    box3: {
        width: 500,
        height: 210,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 6,
            height: 6
        },
        elevation: 48,
        shadowOpacity: 0.5,
        shadowRadius: 16,
        borderRadius: 9,
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    studentSkillLevel: {
        fontSize: 18,
        color: "#121212",


    },
    box4: {
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        marginBottom:10,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        position: 'relative'
    },

    box5: {
        width: 96,
        height: 263,
        marginLeft: 7,
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'stretch',
        justifyContent: 'space-around'
    },

    group: {
        width: 96,
        height: 54,
        textAlign: 'center',
        alignSelf: 'center'
    },
    box6: {
        width: 96,
        height: 54,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 6,
            height: 6
        },
        elevation: 48,
        shadowOpacity: 0.5,
        shadowRadius: 16,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    largeText: {
        textAlign: 'center',
        color: "#121212",
        fontSize: 30,
        lineHeight: 50
    },
    smallText2: {
        fontSize: 20,
        color: "#121212",
        textAlign: 'center',
        lineHeight: 25
    },
    Bgroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    boxb: {

        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        width: 520,
        height: 200

    },
    imageBackground: {

        justifyContent: 'center',
        width: 60,
        height: 60,
        resizeMode: 'contain'

    },

});

export default Instruction;
