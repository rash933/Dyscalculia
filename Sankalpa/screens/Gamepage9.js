import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Avatar, Divider, IconButton, Card, Text, Button } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';
import THomeScreen from './THome';
import AppBa2 from '../components/appBar2';
import AppBa3 from '../components/appBa3';

const GamePage9 = () => {
    useEffect(() => {
        // Lock the orientation to landscape mode when the component is mounted
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

        // Clean up the orientation lock when the component is unmounted
        return () => {
            ScreenOrientation.lockAsync();
        };
    }, []);

    const handleGoBack = () => {
        // Unlock the orientation before leaving the page
        ScreenOrientation.lockAsync();

        // You can implement your custom logic to go back or exit the current screen here
    };

    return (
        <ImageBackground blurRadius={2}
            source={require('../assets/image/Other/question_mark1.jpg')} // Replace with the path to your background image
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View>
                <StatusBar style="inverted" />
                <AppBa3 title={'Quiz 1 '} />


                <View style={styles.container}>



                    <View style={styles.box2}>

                        <View style={styles.box3}>




                            <View style={styles.boxb}>
                                <Text style={styles.largeText} variant="displayLarge">1  x 6 = 9</Text>

                                <View style={styles.Bgroup} >
                                    <TouchableOpacity>
                                        <ImageBackground
                                            source={require('../assets/image/CorrectButton.png')} // Replace this with the path to your image
                                            style={styles.imageBackground}
                                            resizeMode="cover">

                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
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
        fontSize: 90,
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

export default GamePage9;
