import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput, RadioButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import axios from 'axios';

const NotifiView = ({ navigation, route }) => {
    const { _id } = route.params;
    const [studentData, setStudentData] = useState(null);
    const [studentName, setStudentName] = useState('');
    const [stageId, setStageId] = useState('');

    useEffect(() => {
        fetchStudentDetails(_id);
    }, []);

    const fetchStudentDetails = async (_id) => {
        try {
            // Fetch student details using markId
            const markResponse = await axios.post('http://192.168.1.3:8000/api/markby', { _id: _id });
            const studentId = markResponse.data[0].StudentID;

            // Fetch student name and stage ID using studentId
            const studentResponse = await axios.post('http://192.168.1.3:8000/api/studentby', { _id: studentId });
            const studentDetails = studentResponse.data[0];

            setStudentData(markResponse.data[0]);
            setStudentName(studentDetails.Name);
            setStageId(studentDetails.StageId);
        } catch (error) {
            console.error('Error fetching student details:', error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Notification 1'} />
            <View style={styles.box1}>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Student
                        Skill Level predication Report </Text>
                    <View style={styles.input} >

                        <Text style={{ marginBottom: 1, fontWeight: 'bold' }} variant="headlineSmall"> Student Name: {studentName} </Text>
                        <Text style={{ marginBottom: 15 }} variant="titleMedium"> Stage : {stageId ? 'Middle School' : 'Primary School'} {stageId}</Text>

                        {studentData && (
                            <>
                                <View style={styles.group} >
                                    <Text style={{ marginBottom: 10 }} variant="titleMedium">Class Test exam Marks :</Text>
                                    <Text style={{ marginBottom: 10 }} variant="titleMedium"> {studentData.TestM}</Text>
                                </View>
                                <View style={styles.group} >
                                    <Text style={{ marginBottom: 10 }} variant="titleMedium">Class performance Marks : </Text>
                                    <Text style={{ marginBottom: 10 }} variant="titleMedium">{studentData.PerformanceM}</Text>
                                </View>
                                <View style={styles.group} >
                                    <Text style={{ marginBottom: 10 }} variant="titleMedium">Class Assignment Marks  :</Text>
                                    <Text style={{ marginBottom: 10 }} variant="titleMedium">   {studentData.AssignmentM}</Text>
                                </View>
                                <View style={styles.group} >
                                    <Text style={{ marginBottom: 10 }} variant="titleMedium">Class Attendance details :</Text>
                                    <Text style={{ marginBottom: 10 }} variant="titleMedium">{studentData.AttandenceM}</Text>
                                </View>
                                <View style={styles.group} >
                                    <Text style={{ marginBottom: 10, fontWeight: 'bold' }} variant="titleLarge">Skill Level Result  :</Text>
                                    <Text style={{ marginBottom: 10, color: '#ec0b43' }} variant="titleLarge">{studentData.Prediction}</Text>
                                </View>
                                {studentData.FeedBack !== "0" && (
                                    <>
                                        <Text style={{ marginBottom: 10 }} variant="titleMedium">
                                            Teacher Feedback:
                                        </Text>
                                        <View style={{ height: 60, width: 150 }}>
                                            <Text style={{ marginBottom: 10 }} variant="titleMedium">
                                                {studentData.FeedBack}
                                            </Text>
                                        </View>
                                    </>
                                )}

                                {/* <View style={styles.group} >
                                    <Text style={{ marginBottom: 10 }} variant="titleMedium">Date and Time  :</Text>
                                    <Text style={{ marginBottom: 10 }} variant="titleMedium">323232323232</Text>
                        </View> */}

                            </>
                        )}
                    </View>





                </View>

                <View style={styles.box4}>

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
        height: 350,
        width: 250,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },
    group: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'space-between',
        alignContent: 'space-around'
    },
    Bgroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignContent: 'space-around'
    },
    Feedinput: {

        display: 'flex',
        flexdirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        textAlign: 'left',
        height: 80,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

});

export default NotifiView;