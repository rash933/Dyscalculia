import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground ,BackHandler } from 'react-native';
import { Avatar, Divider, IconButton, Card, Text, Button } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';
import THomeScreen from './THome';
import AppBa2 from '../components/appBar2';
import AppBa3 from '../components/appBa3';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const GamePage11 = ({ navigation, route }) => {
    const { G9 } = route.params;
    const handlePress = async (selectedOption) => {
        let g10Value = 'false';

        if (selectedOption === 2) {
            g10Value = 'true';
        }

        const G10 = { ...G9, g10: g10Value };
        console.log(G10);
        const trueValuesCount = Object.values(G10).filter((value) => value === 'true').length;
        const totalPropertiesCount = Object.keys(G10).length;
        const percentageOfTrueValues = (trueValuesCount / totalPropertiesCount) * 100;

        console.log('Percentage of true values:', percentageOfTrueValues);

        const Quiz = { quiz: Number(percentageOfTrueValues) };
        console.log(Quiz);

        try {
            // Get the cached current student ID from AsyncStorage
            const currentStudentID = await AsyncStorage.getItem('CurrentstudentID');

            // Check if the currentStudentID is available in AsyncStorage
            if (currentStudentID) {
                // Use the currentStudentID in the API URL for updating Quiz
                const updateApiUrl = `http://192.168.1.2:8000/api/student/update/${currentStudentID}`;
                const response = await axios.put(updateApiUrl, Quiz);
                console.log('Success updated Quiz to student:', response.data);
                navigation.navigate('QuizResult');
            } else {
                console.log('Current student ID not found in AsyncStorage.');
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
        // Navigate to the next screen (Profile2) with the parameters
       
    };


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
                                <Text style={styles.largeText} variant="displayLarge">9 / 1 = 6</Text>

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

export default GamePage11;
