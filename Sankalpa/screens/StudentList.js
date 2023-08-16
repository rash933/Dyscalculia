import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Avatar, Button, Divider, IconButton, TextInput } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentList = ({ navigation }) => {
    
    const [students, setStudents] = useState([]); // This will hold the list of students
    const [searchQuery, setSearchQuery] = useState(''); // This will hold the search query
    const [selectedStudentId, setSelectedStudentId] = useState(null); // State to hold the selected student ID

    // Function to fetch data from the API based on the default query
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get the CurrentTeacherID from cache
                const currentTeacherID = await AsyncStorage.getItem('CurrentTeacherID');

                if (currentTeacherID) {
                    const response = await axios.post('http://192.168.1.2:8000/api/studentby', {
                        TeacherID: currentTeacherID,
                        LevelStatus: 'High',
                    });

                    setStudents(response.data);
                } else {
                    console.error('CurrentTeacherID not found in cache.');
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchData();
    }, []);
  
    const handlePredictSkillLevel = (studentId) => {
        console.log('Selected Student ID:', studentId);

        navigation.navigate('GetStartedPage', { studentId });
   
    };
    
    // Function to filter the students based on the search query
    const filteredStudents = students.filter((student) =>
        student.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Student List '} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <TextInput
                        placeholder="Search student name here"
                        value={searchQuery}
                        onChangeText={(query) => setSearchQuery(query)}
                        right={<TextInput.Icon name="close" onPress={() => setSearchQuery('')} />}
                        left={<TextInput.Icon name="account-search" onPress={() => { }} />}
                    />
                </View>
                <View style={styles.box3}>
                    <ScrollView>
                        {/* Use FlatList to render the filtered student cards */}
                        {filteredStudents.map((student) => (
                            <Card key={student._id} mode="outlined" style={styles.card}>
                                <Card.Title
                                    title={student.Name}
                                    subtitle={student.StageStatus ? 'Middle School' : 'Primary School'}
                                    left={(props) => <Avatar.Text {...props} label={student.Name[0]} />}
                                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                                />
                                <Divider />
                                <Card.Content>
                                    <Text variant="headlineMedium">Dob: {student.Dob}</Text>
                                    <Text variant="titleMedium">Email: {student.Email}</Text>
                                    {/* Display any other student details here */}
                                </Card.Content>
                                <Card.Actions>
                                    <Button textColor="#ffff" mode="contained" onPress={() => handlePredictSkillLevel(student._id)}>
                                        Predict Skill Level
                                    </Button>
                                </Card.Actions>
                            </Card>
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
    card:{ marginTop:15},
    container: {
        flex: 1,


    },
    box1: {
        marginTop: 18,
        marginLeft: 23,
        marginRight: 23,
        justifyContent: 'center',
        alignContent: 'center',
    },
    box2: {
        marginTop:20,
        height: 50,
        backgroundColor:'#ECE6F0'
        ,borderRadius:20
    },
    box3: {
        marginTop: 30,

        height: 550

    },
    Headding: {
        fontSize: 19,

    },



});

export default StudentList;