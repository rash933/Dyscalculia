import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput, RadioButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile4 = ({ navigation, route }) => {

    const { IQCheck2 } = route.params;
    const [gender, setValue] = React.useState('girl');

    const getStageStatus = async (id) => {
        try {
            // Prepare the request data with the student ID
            const requestData = {
                _id: id,
            };

            // Send the POST request
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
        const IQCheck4 = { ...IQCheck2, gender };

        console.log(IQCheck4);

        try {
            // Get the current student ID from AsyncStorage
            const StudentID = await AsyncStorage.getItem('CurrentstudentID');

            // Check if the currentStudentID is available in AsyncStorage
            if (StudentID) {
                // Use the currentStudentID in the API URL for updating student data
                const updateApiUrl = `http://192.168.1.3:8000/api/student/update/${StudentID}`;
                const response = await axios.put(updateApiUrl, IQCheck4);
                console.log('Success updated student data:', response.data);
            } else {
                console.log('Current student ID not found in AsyncStorage.');
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }

        // Get stage status for navigation
        try {
            const StudentID = await AsyncStorage.getItem('CurrentstudentID');
            const stageStatus = await getStageStatus(StudentID);
            if (stageStatus !== null) {
                console.log('StageStatus:', stageStatus);
                if (stageStatus == true) {
                    navigation.navigate('CheckIQ1', { IQCheck4 });
                } else {
                    navigation.navigate('CheckIQ4', { IQCheck4 });
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Complete Profile'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={1} color='#002060' />
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Say us the gender of your child..</Text>
                    <View style={styles.input} >
                        <RadioButton.Group onValueChange={value => setValue(value)} value={gender}>
                            <Card mode='outlined' style={{ width: 250, margin: 18 }}>
                                <RadioButton.Item label="Girl" labelStyle='titleMedium' position='leading' value="girl" />
                            </Card>
                            <Card mode='outlined' style={{ width: 250, margin: 18, }}>
                                <RadioButton.Item label="  Boy" labelStyle='titleMedium' position='leading' value="boy" />
                            </Card>
                            <Card mode='outlined' style={{ width: 250, margin: 18, }}>
                                <RadioButton.Item label="  Other" labelStyle='titleMedium' position='leading' value="Other" />
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

export default Profile4;