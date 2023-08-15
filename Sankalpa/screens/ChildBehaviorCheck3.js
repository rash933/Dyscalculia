import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput, RadioButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import * as ScreenOrientation from 'expo-screen-orientation';
import AsyncStorage from '@react-native-async-storage/async-storage';


const BehaviorCheck3 = ({ navigation, route }) => {


    const { parentq2 } = route.params;
    const [value, setValue] = React.useState(''); // Stores the user's choice (Yes, No, or Maybe)
    const [score3, setScore] = React.useState(0); // Stores the calculated score based on the user's choice
    const [parentq3, setParentq3] = React.useState({});

    // const calculatePercentage = (parentq3) => {
    //     const totalScores = Object.values(parentq3).reduce((sum, score) => sum + parseInt(score), 0);
    //     const maxScore = Object.keys(parentq3).length * 3; // Assuming maximum score for each score is 3
    //     const percentage = (totalScores / maxScore) * 100;
    //     return percentage.toFixed(2); // Round the percentage to 2 decimal places
    // };
    const calculateSum = (parentq3) => {
        const totalScores = Object.values(parentq3).reduce((sum, score) => sum + parseInt(score), 0);
        return totalScores;
    };

    const calculateScore = () => {
        // Implement the logic to calculate the score based on the user's choice (Yes, No, or Maybe)
        // For example, if value is 'Yes', set the score to 3, if 'No', set to 0, and if 'Maybe', set to 1
        switch (value) {
            case 'Yes':
                return 10;
            case 'No':
                return 10;
            case 'Maybe':
                return 10;
            default:
                return 10;
        }
    };
    const getStageStatus = async (id) => {
        try {
            // Prepare the request data with the student ID
            const requestData = {
                _id: id,
            };

            // Send the POST request to get student data
            const response = await axios.post('http://192.168.1.3:8000/api/studentby', requestData);

            // Extract the StageStatus property from the response data
            const studentData = response.data[0];
            const stageStatus = studentData.StageStatus;

            // Return the StageStatus
            return stageStatus;
        } catch (error) {
            console.error('Error fetching student data:', error);
            return null; // or handle the error in an appropriate way
        }
    };

    const Next = async () => {
        // Calculate the score
        const score3 = calculateScore();

        // Update the parentq1 object with the score
        const parentq3 = { ...parentq2, score3 };
        console.log(parentq3);

        const parentq = calculateSum(parentq3);
        console.log(parentq);

        // Convert parentq to a number
        const parentqp = { parentq: Number(parentq) };
        console.log(parentqp);

        AsyncStorage.setItem('questionaire_parent', JSON.stringify(parentq)).then(() => {

            console.log("questionaire_parent saved successfully!");
            console.log(JSON.stringify(parentq));
        }).catch((error) => {
            console.error('Error saving questionaire_parent to AsyncStorage:', error);
        });


        try {
            // Get the cached current student ID from AsyncStorage
            const StudentID = await AsyncStorage.getItem('CurrentstudentID');

            // Check if the currentStudentID is available in AsyncStorage
            if (StudentID) {
                // Use the currentStudentID in the API URL for updating parentq
                const updateApiUrl = `http://192.168.1.3:8000/api/student/update/${StudentID}`;
                const response = await axios.put(updateApiUrl, parentqp);
                console.log('Success updated parentq to student:', response.data);

                // Get stage status for navigation
                const stageStatus = await getStageStatus(StudentID);

                if (stageStatus !== null) {
                    console.log('StageStatus:', stageStatus);

                    if (stageStatus === false) {
                        navigation.navigate('GamePage4');
                    } else {
                        navigation.navigate('GamePage12');
                    }
                }
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
            <AppBa2 title={'Child behavior'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.9} color='#002060'  />
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Any of your family members have/had dyscalculia?</Text>
                    <View style={styles.input} >
                        <RadioButton.Group onValueChange={(newValue) => {
                            setValue(newValue);
                            const newScore = calculateScore();
                            setScore(newScore);
                        }}
                            value={value}
                        >
                            <Card mode='outlined' style={{ width: 250, margin: 18 }}>
                                <RadioButton.Item label="Yes" labelStyle='titleMedium' value="Yes" />
                            </Card>
                            <Card mode='outlined' style={{ width: 250, margin: 18 }}>
                                <RadioButton.Item label="No" labelStyle='titleMedium' value="No" />
                            </Card>
                            <Card mode='outlined' style={{ width: 250, margin: 18 }}>
                                <RadioButton.Item label="Maybe" labelStyle='titleMedium' value="Maybe" />
                            </Card>
                        </RadioButton.Group>

                    </View>


                    <View style={styles.note}>

                    </View>


                </View>

                <View style={styles.box4}>
                    <Button textColor='#ffff' onPress={Next} mode='contained'>CONTINUE</Button>
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
        alignItems: 'flex-start',
        textAlign: 'left',
        height: 100,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

});

export default BehaviorCheck3;