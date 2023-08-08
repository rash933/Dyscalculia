import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput, RadioButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const StudentAttendence = ({ navigation, route }) => {
    const [value, setValue] = useState('good');
    const { Mlist3 } = route.params;

    const handleContinue = async () => {
        const Mlist4 = { ...Mlist3, attandencem: value };
         // <-- Print Mlist4 in the console

        try {
            console.log(Mlist4);

            // Get teacherid from AsyncStorage
            const teacherid = await AsyncStorage.getItem('CurrentTeacherID');

            // Check if teacherid is not null
            if (teacherid !== null) {
                // Add teacherid to the data to be posted
                const postData = {
                    performancem: Mlist4.performancem,
                    testm: Mlist4.testm,
                    assignmentm: Mlist4.assignmentm,
                    attandencem: Mlist4.attandencem,
                    prediction: 'low medium',
                    studentid: Mlist4.studentid,
                    feedback: '0',
                    teacherid: teacherid,
                };

                console.log(postData);
                // Make the POST request using Axios
                const response = await axios.post('http://192.168.1.2:8000/api/mark/add', postData);
                console.log('Response:', response.data); // <-- Print the response in the console
                const markId = response.data.id;
                console.log(markId);
                // Check the response status and handle accordingly
                if (response.status === 200) {
                    console.log('Data posted successfully!');
                    navigation.navigate('ConfirmStuDE', { markId });
                } else {
                    console.error('Failed to post data.');
                }
            } else {
                console.error('CurrentTeacherID not found in cache.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={' In-class activity details'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.5} color="#002060" />
                </View>

                <View style={styles.box3}>
                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">
                        Enter student’s class attendance details
                    </Text>
                    <View style={styles.input}>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                            <Card mode="outlined" style={{ width: 250, margin: 18 }}>
                                <RadioButton.Item label="  Good" labelStyle={styles.titleMedium} value="good" />
                            </Card>
                            <Card mode="outlined" style={{ width: 250, margin: 18 }}>
                                <RadioButton.Item label="  Poor" labelStyle={styles.titleMedium} value="poor" />
                            </Card>
                        </RadioButton.Group>
                    </View>

                    <View style={styles.note}>
                        <Text variant="titleMedium">** Please enter correct input for predict student
                            skill level </Text>
                    </View>
                </View>

                <View style={styles.box4}>
                    <Button textColor="#ffff" onPress={handleContinue} mode="contained">
                        CONTINUE
                    </Button>
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

export default StudentAttendence;