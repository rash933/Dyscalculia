import React, { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground,BackHandler } from 'react-native';
import { Avatar, Divider, IconButton, Card, Text, Button } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';
import THomeScreen from './THome';
import AppBa2 from '../components/appBar2';
import AppBa3 from '../components/appBa3';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const QuizResult = ({ navigation }) => {

    const [iq, setIq] = useState(null);
    const [quiz, setQuiz] = useState(null);
    const [dob, setDob] = useState(null);
    const [name, setName] = useState(null);
    const [levelStatus, setLevelStatus] = useState(null);
    const [parentQ, setParentQ] = useState(null);

    useEffect(() => {
        fetchData();
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


    const handleGoToLoader = () => {
        navigation.navigate('Loader'); // Navigate to 'Loader' when the icon is pressed
    };


   

    const fetchData = async () => {
        try {

            const apiUrl = 'http://192.168.1.3:8000/api/studentby';
            // Get the cached current student ID from AsyncStorage
            const currentStudentID = await AsyncStorage.getItem('CurrentstudentID');

            // Check if the currentStudentID is available in AsyncStorage
            if (currentStudentID) {
                // Use the currentStudentID in the requestData for the API request
                const requestData = {
                    _id: currentStudentID,
                };

                const response = await axios.post(apiUrl, requestData);
                const studentData = response.data[0];

                // Extract the values you are interested in
                const iq = studentData.Iq;
                const quiz = studentData.Quiz;
                const levelStatus = studentData.LevelStatus;
                const parentQ = studentData.ParentQ;
                const name = studentData.Name;
                const dob = studentData.Dob;

                // Set the extracted values to the state
                setIq(iq);
                setQuiz(quiz);
                setLevelStatus(levelStatus);
                setParentQ(parentQ);
             
            } else {
                console.log('Current student ID not found in AsyncStorage.');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <View>
            <StatusBar style="inverted" />
            <AppBa3 title={'RESULT AND SUMMERY '} />
            <View style={styles.container}>
            <View style={styles.box2}>
                <View style={styles.row}>
                    <View style={styles.box7}>
                        <Text variant="headlineSmall"> Probability{'\n'} Level</Text>
                        <Text variant="headlineMedium" style={{ color: '#ec0b43', fontWeight: 'bold' }}>{levelStatus}</Text>
                    </View>
                    <View style={styles.box4}>
                        {/* Assuming handleGoToLoader is a valid function */}
                        <IconButton icon="home" size={40} iconColor='#000' onPress={handleGoToLoader} />
                    </View>
                </View>
                <View style={styles.box3}>
                    <View style={styles.boxb}>
                        <View style={styles.Bgroup}>
                            <Image
                                style={styles.Image}
                                source={require('../assets/image/Other/image_2-removebg-preview.png')}
                            />
                            <View style={styles.group}>
                                <View style={styles.box6}>
                                    <Text style={styles.smallText}>
                                        IQ Quiz{"\n"}marks
                                    </Text>
                                    <Text style={styles.smallText2}>{iq}</Text>
                                </View>
                            </View>
                            <View style={styles.group}>
                                <View style={styles.box6}>
                                    <Text style={styles.smallText}>
                                            Math Quiz{"\n"} marks
                                    </Text>
                                    <Text style={styles.smallText2}> {quiz}</Text>
                                </View>
                            </View>
                            <View style={styles.group}>
                                <View style={styles.box6}>
                                    <Text style={styles.smallText}>
                                            Child behavior{"\n"}marks
                                    </Text>
                                    <Text style={styles.smallText2}> {parentQ}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
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

        margin: 18,
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    box3: {
      
        width: 600,
        height: 150,
        backgroundColor: "#7A8BAC",
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
        
        width: 60,
        height: 60,
        backgroundColor: "#7A8BAC",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 6,
            height: 6
        },
        elevation: 48,
        shadowOpacity: 0.5,
        shadowRadius: 16,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center'


    },
    box7: {
        
        width: 200,
        height: 60,
        backgroundColor: "#7A8BAC",
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
        flexDirection: 'row',
       alignItems:'center',
        justifyContent: 'space-around'


    },
    row: {


        width: 300,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,



    }
    ,
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
    smallText: {
        textAlign: 'center',
        color: "#121212",
        fontSize: 12,
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
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 600
    },
    boxb: {

        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',


    },
    imageBackground: {

        justifyContent: 'center',
        width: 60,
        height: 60,
        resizeMode: 'contain'

    },
    Image: {

        justifyContent: 'center',
        width: 200,
        height: 100,
        resizeMode: 'contain'

    },
    outerbox: {

        opacity: 0.52,

    },
});

export default QuizResult;
