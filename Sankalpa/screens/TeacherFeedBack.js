import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Keyboard } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput, RadioButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import axios from 'axios';

const TFeeddback = ({ navigation, route }) => {
    const { markId } = route.params;
    const [studentData, setStudentData] = useState(null);
    const [studentName, setStudentName] = useState('');
    const [stageId, setStageId] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        fetchStudentDetails(markId);
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [markId]);

    const fetchStudentDetails = async (markId) => {
        try {
            // Fetch student details using markId
            const markResponse = await axios.post('http://192.168.1.2:8000/api/markby', { _id: markId });
            const studentId = markResponse.data[0].StudentID;

            // Fetch student name and stage ID using studentId
            const studentResponse = await axios.post('http://192.168.1.2:8000/api/studentby', { _id: studentId });
            const studentDetails = studentResponse.data[0];

            setStudentData(markResponse.data[0]);
            setStudentName(studentDetails.Name);
            setStageId(studentDetails.StageId);
        } catch (error) {
            console.error('Error fetching student details:', error);
        }
        
    };

    const handleUpdateFeedback = async () => {
        try {
            // Validate feedback (you can add your own validation logic here)
            if (feedback.trim() === '') {
                alert('Please provide feedback before updating.');
                return;
            }

            // Update feedback for the markId
            const updateData = {
                feedback: feedback,
            };
            const response = await axios.put(`http://192.168.1.2:8000/api/mark/update/${markId}`, updateData);
            console.log('Response:', response.data);

            // Show success message or navigate to another screen
            alert('Feedback updated successfully!');
            navigation.navigate('FinalResults', { markId })
        } catch (error) {
            console.error('Error updating feedback:', error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={' Skill Level Results '} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.95} color='#002060'  />
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Student Details</Text>
                    <View style={styles.input} >

                        <Text style={{ marginBottom: 1 }} variant="titleLarge">Student Name : {studentName}</Text>
                        <Text style={{ marginBottom: 25 }} variant="titleMedium"> Stage : {stageId ? 'Middle School' : 'Primary School'} {stageId} </Text>

                     
                        {studentData && !isKeyboardVisible && (
                            <>
                                <View style={styles.group}>
                                    <Text style={{ marginBottom: 12 }} variant="titleMedium">
                                        Class Test exam Marks:
                                    </Text>
                                    <Text style={{ marginBottom: 12 }} variant="titleMedium">
                                        {studentData.TestM}
                                    </Text>
                                </View>
                                <View style={styles.group}>
                                    <Text style={{ marginBottom: 12 }} variant="titleMedium">
                                        Class performance Marks:
                                    </Text>
                                    <Text style={{ marginBottom: 12 }} variant="titleMedium">
                                        {studentData.PerformanceM}
                                    </Text>
                                </View>
                                <View style={styles.group}>
                                    <Text style={{ marginBottom: 12 }} variant="titleMedium">
                                        Class Assignment Marks:
                                    </Text>
                                    <Text style={{ marginBottom: 12 }} variant="titleMedium">
                                        {studentData.AssignmentM}
                                    </Text>
                                </View>
                                <View style={styles.group}>
                                    <Text style={{ marginBottom: 12 }} variant="titleMedium">
                                        Class Attendance details:
                                    </Text>
                                    <Text style={{ marginBottom: 12 }} variant="titleMedium">
                                        {studentData.AttandenceM}
                                    </Text>
                                </View>
                                <View style={styles.group} >
                                    <Text style={{ marginBottom: 10, fontWeight: 'bold' }} variant="titleMedium">Skill Level Result  :</Text>
                                    <Text style={{ marginBottom: 10, color: '#ec0b43' }} variant="titleMedium">  {studentData.Prediction}</Text>
                                </View>
                            </>
                        )}
                        <View style={styles.Feedinput} >
                            <Text style={{ textAlign: 'left' }} variant="titleMedium">Teacher Comment </Text>
                            <TextInput style={{ width: 250 }}
                                mode="outlined"
                                outlineColor='#000'
                                label=""
                                value={feedback}
                                onChangeText={(text) => setFeedback(text)}
                            
                                // placeholder="Type something"
                              
                            />
                            <Text style={{ textAlign: 'left', }} numberOfLines={10} variant="titleMedium">Provide feedback to student </Text>
                        </View>

                    </View>


                <View style={styles.note}>
                    
                    </View>


                </View>

                <View style={styles.box4}>
                    <Button textColor='#ffff' onPress={handleUpdateFeedback}  mode='contained'>Send </Button>

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
        marginLeft: 5,
        marginRight: 5,
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
        height: 390,
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
        height: 150,
      
        // backgroundColor:'#000'  

    },

});

export default TFeeddback;