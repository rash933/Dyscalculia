import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import axios from 'axios';


import { SegmentedButtons } from 'react-native-paper';
const ResultList = () => {
    const TID = '64ca1a7b3362ce71d6fdc5f1';
    const [value, setValue] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            // Fetch students' marks data using TeacherId
            const response = await axios.post('http://192.168.1.2:8000/api/markby', { TeacherId: TID });
            const studentsData = response.data;

            // Fetch student details for each student using StudentID
            const studentDetailsPromises = studentsData.map(async (student) => {
                const studentResponse = await axios.post('http://192.168.1.2:8000/api/studentby', {
                    _id: student.StudentID,
                });
                return studentResponse.data[0];
            });

            const studentsWithDetails = await Promise.all(studentDetailsPromises);

            // Merge student marks data with student details
            const studentsWithMarksAndDetails = studentsData.map((student, index) => ({
                ...student,
                ...studentsWithDetails[index],
            }));

            setStudents(studentsWithMarksAndDetails);

            // Set the value of SegmentedButtons based on the first prediction category found in students data
            if (studentsWithMarksAndDetails.length > 0) {
                const firstPrediction = studentsWithMarksAndDetails[0].Prediction;
                setValue(firstPrediction);
            }
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Student Results List '} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                 
                        <SegmentedButtons
                            style={styles.segmentedButtonsContainer}
                            value={value}
                            onValueChange={setValue}
                            buttons={[
                                {
                                    icon: '',
                                    value: 'low level',
                                    label: 'Low Level',
                                    labelStyle: {
                                        width: 100,
                                    },
                                },
                                {
                                    icon: '',
                                    value: 'low medium',
                                    label: 'Low Medium',
                                    labelStyle: {
                                        width: 100,
                                    },
                                },
                                {
                                    icon: '',
                                    value: 'high medium',
                                    label: 'High Medium',
                                    labelStyle: {
                                        width: 100,
                                    },
                                },
                                {
                                    icon: '',
                                    value: 'high level',
                                    label: 'High Level',
                                    labelStyle: {
                                        width: 100,
                                    },
                                },
                            ]}
                        />

                        <ScrollView>
                            {students
                                .filter((student) => student.Prediction === value)
                                .map((student) => (
                                    <List.Item
                                        key={student._id}
                                        title={student.Name}
                                        description={student.Email}
                                        left={() => <Avatar.Text size={36} label={student.Name[0]} />}
                                    />
                                ))}
                        </ScrollView>
                   
            </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    margin: {
        margin: 18
    },
    container: {
        flex: 1,


    },
    box1: {
        marginTop: 18,
        marginLeft:23,
        marginRight: 23,
        justifyContent: 'center',
        alignContent: 'center',
    },
    box2: {

    },
    box3: {
        marginTop:30,
      
        height:550

    },
    Headding:{
        fontSize: 19,
       
    },
    segmentedButtonsContainer: {
     marginTop:23
    },
    segmentedButton: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginRight: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    segmentedButtonSelected: {
        backgroundColor: '#f0f0f0',
        borderColor: '#000',
    },
    segmentedButtonText: {
        fontSize: 14,
        textAlign: 'center',
    },
  
    
    
});

export default ResultList;