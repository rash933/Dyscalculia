import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CheckIQ6 = ({ navigation, route }) => {

    const { IQCheck4 } = route.params;
    const { test2 } = route.params;
   

    // Function to handle the press events

    const handlePress = async (selectedOption) => {
        let IQpzl3 = 'false';

        if (selectedOption === 1) {
            IQpzl3 = 'true';
        }
        const test3 = { ...test2, IQpzl3 };
        console.log(test3);
        function calculatePercentage(obj) {
            const totalCount = Object.keys(obj).length;
            let trueCount = 0;

            // Count the number of true values in the object
            for (const key in obj) {
                if (obj[key] === 'true') {
                    trueCount++;
                }
            }

            // Calculate the percentage
            const percentage = (trueCount / totalCount) * 100;

            return percentage;
        }

        const iq = parseFloat(calculatePercentage(test3).toFixed(1));
        
        console.log(iq);
        const IQCheck5 = { iq };
        console.log(IQCheck5);

        
        AsyncStorage.setItem('iq_test', JSON.stringify(iq)).then(() => {

            console.log("iq_test saved successfully!");
            console.log(JSON.stringify(iq));
        }).catch((error) => {
            console.error('Error saving iq_test to AsyncStorage:', error);
        });


        try {
            // Get the cached current student ID from AsyncStorage
            const StudentID = await AsyncStorage.getItem('CurrentstudentID');

            // Check if the currentStudentID is available in AsyncStorage
            if (StudentID) {
                // Use the currentStudentID in the API URL for updating student IQ
                const updateApiUrl = `http://192.168.1.2:8000/api/student/update/${StudentID}`;
                const response = await axios.put(updateApiUrl, IQCheck5);
                console.log('Success updated student IQ:', response.data);
                navigation.navigate('BehaviorCheck1');
            } else {
                console.log('Current student ID not found in AsyncStorage.');
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
        
   

    };

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={' Check IQ level'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.9} color='#002060'  />
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Let your child to solve this</Text>
                    <Text style={{ textAlign: 'center' }} variant="titleMedium">choose the correct shape to fill the blank square</Text>
                    <Image
                        style={styles.Image}
                        source={require('../assets/image/Puzzles/Q3_primary/ques.png')}
                    />

                    <View style={styles.input} >

                        <View style={styles.group} >
                            <TouchableOpacity onPress={() => handlePress(1)}>
                                <ImageBackground
                                    source={require('../assets/image/Puzzles/Q3_primary/ans1.png')} // Replace this with the path to your image
                                    style={styles.imageBackground}
                                    resizeMode="cover">

                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handlePress(2)}>
                                <ImageBackground
                                    source={require('../assets/image/Puzzles/Q3_primary/ans2.png')} // Replace this with the path to your image
                                    style={styles.imageBackground}
                                    resizeMode="cover">

                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.group} >
                            <TouchableOpacity onPress={() => handlePress(3)}> 
                                <ImageBackground
                                    source={require('../assets/image/Puzzles/Q3_primary/ans3.png')} // Replace this with the path to your image
                                    style={styles.imageBackground}
                                    resizeMode="cover">

                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handlePress(4)}>
                                <ImageBackground
                                    source={require('../assets/image/Puzzles/Q3_primary/ans4.png')} // Replace this with the path to your image
                                    style={styles.imageBackground}
                                    resizeMode="cover">

                                </ImageBackground>
                            </TouchableOpacity>
                        </View>



                    </View>





                </View>

                <View style={styles.box4}>
                    <Button textColor='#ffff' mode='contained'>CONTINUE</Button>
                </View>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    margin: {
        margin: 18
    },
    card: { marginTop: 15 },
    container: {
        flex: 1,


    },
    group: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15,
        width: 200,
        justifyContent: 'space-between',
        alignContent: 'space-around'
    },
    box1: {
        marginTop: 28,
        marginLeft: 23,
        marginRight: 23,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    box2: {
        height: 30,

    },
    box8: {
        height: 35
        , marginBottom: 15,

    },
    box3: {
        marginTop: 5,
        display: 'flex',
        flexdirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        height: 500,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

    box4: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        position: 'relative'

    },

    Headding: {
        fontSize: 19,

    },

    note: {
        marginBottom: 20

    },
    input: {
        marginTop: 5,
        display: 'flex',
        flexdirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'left',
        height: 250,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },
    Image: {

        justifyContent: 'center',
        width: 250,
        height: 100,
        resizeMode: 'contain'

    },
    imageBackground: {
        marginBottom: 10,
        justifyContent: 'center',
        width: 60,
        height: 60,
        resizeMode: 'contain'

    },

});

export default CheckIQ6;