import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image  } from 'react-native';
import { Avatar, Divider, IconButton, Card, Text, Button } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';
import THomeScreen from './THome';
import AppBa2 from '../components/appBar2';
import AppBa3 from '../components/appBa3';
import { useNavigation } from '@react-navigation/core';
const Gamepage2 = ({ navigation, route }) => {
    const { G5 } = route.params;
    

    useEffect(() => {
        // Lock the screen orientation to landscape
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

        // Handle back button press
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            // Exit the app when the back button is pressed
            BackHandler.exitApp();
            return true; // Prevent default behavior (going back to the previous screen)
        });

        return () => {
            // Remove the back button event listener when the component unmounts
            backHandler.remove();
        };
    }, []); 

    const handlePress = (selectedOption) => {
        let g6Value = 'false';

        if (selectedOption === 2) {
            g6Value = 'true';
        }

        const G6 = { ...G5, g6: g6Value };
        console.log(G6);
        // Navigate to the next screen (Profile2) with the parameters
        navigation.navigate('GamePage8', { G6 });
    };


    return (
        <ImageBackground blurRadius={2}
            source={require('../assets/image/Other/question_mark1.jpg')} // Replace with the path to your background image
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View>
                <StatusBar style="inverted" />
                <AppBa3 title={'Quiz  '} />


                <View style={styles.container}>



                    <View style={styles.box2}>

                        <View style={styles.box3}>




                            <View style={styles.boxb}>
                                <View style={styles.Bgroup} >
                                    <Image
                                        resizeMode='contain'
                                        style={styles.Image}
                                        source={require('../assets/image/set/1.png')}
                                    />
                                    <Text style={styles.largeText} variant="displayLarge">  =    6</Text>
                                </View>

                                <View style={styles.Bgroup} >
                                    <TouchableOpacity onPress={() => handlePress(1)}>
                                        <ImageBackground
                                            source={require('../assets/image/CorrectButton.png')} // Replace this with the path to your image
                                            style={styles.imageBackground}
                                            resizeMode="cover">

                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handlePress(2)}>
                                        <ImageBackground
                                            source={require('../assets/image/WrongButton.png')} // Replace this with the path to your image
                                            style={styles.imageBackground}
                                            resizeMode="cover">

                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>

                            </View>


                        </View>
                    </View>
                    {/* <Button title="Go Back" onPress={handleGoBack} /> */}
                </View>
            </View>

        </ImageBackground>
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
    backgroundImage: {
        flex: 1,
        // width: '100%',
        // height: '100%',

    },

    Image: { height:120, width: 200,
        // backgroundColor:'#000'
     },

    Headding: {
        fontSize: 19,

    },
    box2: {
        height: 300,
        flexDirection: 'column',
        margin: 23,

        alignSelf: 'center'
    },
    box3: {
        width: 500,
        height: 200,
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
        width: 138,
        height: 124,
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
        marginTop: 28,
        marginLeft: 34
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
        fontSize: 80,
        lineHeight: 150
    },
    smallText2: {
        fontSize: 17,
        color: "#121212",
        marginTop: 3,

    },
    Bgroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',


        // backgroundColor: '#000'
    },
    boxb: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        // backgroundColor: '#000'

    },
    imageBackground: {

        justifyContent: 'center',
        width: 60,
        height: 60,
        resizeMode: 'contain'

    },

});

export default Gamepage2;
